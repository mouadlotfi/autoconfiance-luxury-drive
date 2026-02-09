import { useState, useEffect } from 'react';
import { useCars, useCategories, useAddCar, useDeleteCar, useAddCategory } from '@/antigravity/hooks';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, Trash2, Plus, Car, Grid, Calendar, Gauge, Fuel, Settings, LogOut, Upload, X, Image as ImageIcon } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from '@/antigravity/client';
import AdminLogin from '@/components/AdminLogin';

const Admin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Check authentication on mount
    useEffect(() => {
        const authenticated = sessionStorage.getItem('admin_authenticated');
        setIsAuthenticated(authenticated === 'true');
    }, []);

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    const handleLogout = () => {
        sessionStorage.removeItem('admin_authenticated');
        setIsAuthenticated(false);
    };

    // ALL HOOKS MUST BE CALLED BEFORE ANY CONDITIONAL RETURNS
    // This is required by React's Rules of Hooks
    const { data: cars, isLoading: carsLoading, error: carsError } = useCars();
    const { data: categories, isLoading: catsLoading } = useCategories();

    const addCarMutation = useAddCar();
    const deleteCarMutation = useDeleteCar();
    const addCategoryMutation = useAddCategory();

    // Form States
    const [newCategory, setNewCategory] = useState('');
    const [carName, setCarName] = useState('');
    const [carImage, setCarImage] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | ''>('');
    const [kilometrage, setKilometrage] = useState('');
    const [transmission, setTransmission] = useState('');
    const [annee, setAnnee] = useState('');
    const [carburant, setCarburant] = useState('');

    // Image upload states
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string>('');
    const [isUploading, setIsUploading] = useState(false);
    const [uploadError, setUploadError] = useState<string>('');

    // Show login if not authenticated (after all hooks are called)
    if (!isAuthenticated) {
        return <AdminLogin onLogin={handleLogin} />;
    }

    const handleAddCategory = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newCategory) return;
        addCategoryMutation.mutate(newCategory, {
            onSuccess: () => setNewCategory('')
        });
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Validate file type
        if (!file.type.startsWith('image/')) {
            setUploadError('Veuillez sélectionner un fichier image');
            return;
        }

        // Validate file size (5MB max)
        const maxSize = 5 * 1024 * 1024; // 5MB in bytes
        if (file.size > maxSize) {
            setUploadError('La taille de l\'image ne doit pas dépasser 5MB');
            return;
        }

        setUploadError('');
        setSelectedFile(file);

        // Generate preview
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result as string);
        };
        reader.readAsDataURL(file);
    };

    const clearImageSelection = () => {
        setSelectedFile(null);
        setImagePreview('');
        setCarImage('');
        setUploadError('');
    };

    const uploadImageToSupabase = async (): Promise<string | null> => {
        if (!selectedFile) return null;

        try {
            setIsUploading(true);

            // Generate unique filename
            const fileExt = selectedFile.name.split('.').pop();
            const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

            // Upload to Supabase Storage
            const { data, error } = await supabase.storage
                .from('uploads')
                .upload(fileName, selectedFile, {
                    cacheControl: '3600',
                    upsert: false
                });

            if (error) {
                console.error('Upload error:', error);
                setUploadError('Erreur lors du téléchargement de l\'image');
                return null;
            }

            // Get public URL
            const { data: { publicUrl } } = supabase.storage
                .from('uploads')
                .getPublicUrl(data.path);

            return publicUrl;
        } catch (error) {
            console.error('Upload error:', error);
            setUploadError('Erreur lors du téléchargement de l\'image');
            return null;
        } finally {
            setIsUploading(false);
        }
    };

    const handleAddCar = async (e: React.FormEvent) => {
        e.preventDefault();

        // Prevent duplicate submissions
        if (addCarMutation.isPending || isUploading) {
            return;
        }

        if (!carName || !selectedCategory) return;

        let finalImageUrl = carImage;

        // If user selected a file, upload it first
        if (selectedFile) {
            const uploadedUrl = await uploadImageToSupabase();
            if (!uploadedUrl) {
                // Upload failed, don't proceed
                return;
            }
            finalImageUrl = uploadedUrl;
        }

        // Validate that we have an image URL (either uploaded or pasted)
        if (!finalImageUrl) {
            setUploadError('Veuillez fournir une image (télécharger ou coller une URL)');
            return;
        }

        addCarMutation.mutate({
            name: carName,
            category_id: String(selectedCategory),
            image_url: finalImageUrl,
            kilometrage: kilometrage ? Number(kilometrage) : undefined,
            transmission: transmission || undefined,
            annee: annee ? Number(annee) : undefined,
            carburant: carburant || undefined
        }, {
            onSuccess: () => {
                setCarName('');
                setCarImage('');
                setSelectedCategory('');
                setKilometrage('');
                setTransmission('');
                setAnnee('');
                setCarburant('');
                clearImageSelection();
            }
        });
    };

    const handleDeleteCategory = async (id: string) => {
        if (!confirm('Êtes-vous sûr de vouloir supprimer cette catégorie?')) return;

        try {
            const { error } = await supabase
                .from('categories')
                .delete()
                .eq('id', id);

            if (error) throw error;
            window.location.reload();
        } catch (err) {
            console.error('Error deleting category:', err);
            alert('Échec de la suppression de la catégorie');
        }
    };

    if (carsLoading || catsLoading) return (
        <div className="flex justify-center items-center min-h-screen bg-background">
            <Loader2 className="w-12 h-12 animate-spin text-gold" />
        </div>
    );

    if (carsError) return (
        <div className="min-h-screen bg-background flex items-center justify-center p-6">
            <div className="text-center max-w-md">
                <div className="text-red-500 text-xl font-semibold mb-4">
                    Erreur de chargement des données
                </div>
                <p className="text-muted-foreground">
                    Vérifiez la connexion à la base de données (.env key présente?)
                </p>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-background py-24">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12 relative">
                    {/* Logout Button */}
                    <div className="absolute top-0 right-0">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleLogout}
                            className="gap-2 border-gold/20 hover:bg-gold/10"
                        >
                            <LogOut className="w-4 h-4" />
                            Déconnexion
                        </Button>
                    </div>

                    <span className="text-gold font-medium uppercase tracking-widest text-sm mb-4 block">
                        Administration
                    </span>
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Tableau de Bord
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Gérez votre catalogue de véhicules et vos catégories
                    </p>
                </div>

                <Tabs defaultValue="cars" className="w-full">
                    <TabsList className="mb-8 grid w-full grid-cols-2 max-w-md mx-auto bg-secondary/50">
                        <TabsTrigger value="cars" className="gap-2 data-[state=active]:bg-gold-gradient data-[state=active]:text-primary-foreground">
                            <Car className="w-4 h-4" /> Véhicules
                        </TabsTrigger>
                        <TabsTrigger value="categories" className="gap-2 data-[state=active]:bg-gold-gradient data-[state=active]:text-primary-foreground">
                            <Grid className="w-4 h-4" /> Catégories
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="cars" className="space-y-8">
                        {/* ADD CAR FORM */}
                        <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-gold/10 shadow-xl max-w-4xl mx-auto">
                            <h2 className="font-serif text-2xl font-bold mb-6 text-foreground">Ajouter un Véhicule</h2>
                            <form onSubmit={handleAddCar} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-foreground">Nom du Véhicule *</label>
                                        <Input
                                            placeholder="ex: BMW X5"
                                            value={carName}
                                            onChange={(e) => setCarName(e.target.value)}
                                            className="bg-background/50"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-foreground">Catégorie *</label>
                                        <select
                                            className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            value={selectedCategory}
                                            onChange={(e) => setSelectedCategory(e.target.value)}
                                            required
                                        >
                                            <option value="">Sélectionner une catégorie</option>
                                            {categories?.map((cat) => (
                                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Image Upload Section */}
                                <div className="space-y-4">
                                    <label className="block text-sm font-medium text-foreground">
                                        <ImageIcon className="w-4 h-4 inline mr-1" />
                                        Image du Véhicule *
                                    </label>

                                    {/* Upload/URL Tabs */}
                                    <div className="grid grid-cols-2 gap-4">
                                        {/* File Upload Option */}
                                        <div>
                                            <label className="block text-xs text-muted-foreground mb-2">Télécharger une image</label>
                                            <div className="relative">
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={handleFileSelect}
                                                    className="hidden"
                                                    id="file-upload"
                                                />
                                                <label
                                                    htmlFor="file-upload"
                                                    className="flex items-center justify-center gap-2 h-10 px-4 rounded-md border border-input bg-background/50 hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors"
                                                >
                                                    <Upload className="w-4 h-4" />
                                                    <span className="text-sm">
                                                        {selectedFile ? selectedFile.name.substring(0, 20) + '...' : 'Choisir un fichier'}
                                                    </span>
                                                </label>
                                            </div>
                                        </div>

                                        {/* URL Paste Option */}
                                        <div>
                                            <label className="block text-xs text-muted-foreground mb-2">Ou coller une URL</label>
                                            <Input
                                                placeholder="https://example.com/image.jpg"
                                                value={carImage}
                                                onChange={(e) => {
                                                    setCarImage(e.target.value);
                                                    if (e.target.value) {
                                                        clearImageSelection();
                                                    }
                                                }}
                                                className="bg-background/50"
                                                disabled={!!selectedFile}
                                            />
                                        </div>
                                    </div>

                                    {/* Error Message */}
                                    {uploadError && (
                                        <div className="text-sm text-red-500 flex items-center gap-2">
                                            <X className="w-4 h-4" />
                                            {uploadError}
                                        </div>
                                    )}

                                    {/* Image Preview */}
                                    {(imagePreview || carImage) && (
                                        <div className="relative">
                                            <div className="aspect-video w-full max-w-sm rounded-lg overflow-hidden border border-border bg-muted">
                                                <img
                                                    src={imagePreview || carImage}
                                                    alt="Aperçu"
                                                    className="w-full h-full object-contain"
                                                    onError={() => setUploadError('URL d\'image invalide')}
                                                />
                                            </div>
                                            <button
                                                type="button"
                                                onClick={clearImageSelection}
                                                className="absolute top-2 right-2 p-1 bg-destructive text-destructive-foreground rounded-full hover:bg-destructive/90 transition-colors"
                                            >
                                                <X className="w-4 h-4" />
                                            </button>
                                        </div>
                                    )}

                                    {/* File Info */}
                                    {selectedFile && (
                                        <div className="text-xs text-muted-foreground">
                                            Taille: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                                        </div>
                                    )}
                                </div>

                                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-foreground">
                                            <Gauge className="w-4 h-4 inline mr-1" />
                                            Kilométrage (km)
                                        </label>
                                        <Input
                                            type="number"
                                            placeholder="ex: 45000"
                                            value={kilometrage}
                                            onChange={(e) => setKilometrage(e.target.value)}
                                            className="bg-background/50"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-foreground">
                                            <Settings className="w-4 h-4 inline mr-1" />
                                            Transmission
                                        </label>
                                        <select
                                            className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
                                            value={transmission}
                                            onChange={(e) => setTransmission(e.target.value)}
                                        >
                                            <option value="">Sélectionner</option>
                                            <option value="Manuelle">Manuelle</option>
                                            <option value="Automatique">Automatique</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-foreground">
                                            <Calendar className="w-4 h-4 inline mr-1" />
                                            Année
                                        </label>
                                        <Input
                                            type="number"
                                            placeholder="ex: 2023"
                                            value={annee}
                                            onChange={(e) => setAnnee(e.target.value)}
                                            className="bg-background/50"
                                            min="1900"
                                            max={new Date().getFullYear()}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-foreground">
                                            <Fuel className="w-4 h-4 inline mr-1" />
                                            Carburant
                                        </label>
                                        <select
                                            className="flex h-10 w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
                                            value={carburant}
                                            onChange={(e) => setCarburant(e.target.value)}
                                        >
                                            <option value="">Sélectionner</option>
                                            <option value="Essence">Essence</option>
                                            <option value="Diesel">Diesel</option>
                                            <option value="Hybride">Hybride</option>
                                            <option value="Électrique">Électrique</option>
                                        </select>
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-gold-gradient hover:opacity-90 transition-opacity"
                                    disabled={addCarMutation.isPending}
                                    size="lg"
                                >
                                    {addCarMutation.isPending ? (
                                        <><Loader2 className="w-4 h-4 animate-spin mr-2" /> Ajout en cours...</>
                                    ) : (
                                        <><Plus className="w-4 h-4 mr-2" /> Ajouter le Véhicule</>
                                    )}
                                </Button>
                            </form>
                        </div>

                        {/* CAR GRID */}
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h2 className="font-serif text-2xl font-bold text-foreground">
                                    Catalogue ({cars?.length || 0})
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {cars?.map((car) => (
                                    <div
                                        key={car.id}
                                        className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 border border-border/50"
                                    >
                                        <div className="relative h-48 bg-gradient-to-br from-cream to-cream-dark overflow-hidden">
                                            <img
                                                src={car.image_url}
                                                alt={car.name}
                                                className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                                                onError={(e) => (e.currentTarget.src = 'https://placehold.co/600x400?text=No+Image')}
                                            />
                                            <div className="absolute top-2 right-2">
                                                <span className="px-3 py-1 bg-gold/90 text-primary-foreground text-xs font-semibold rounded-full uppercase tracking-wide shadow-lg">
                                                    {/* @ts-ignore */}
                                                    {car.categories?.name || 'Aucune'}
                                                </span>
                                            </div>
                                            {car.annee && (
                                                <div className="absolute top-2 left-2">
                                                    <span className="px-3 py-1 bg-charcoal/90 text-cream text-xs font-semibold rounded-full">
                                                        {car.annee}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-4">
                                            <h3 className="font-serif text-lg font-bold text-foreground mb-3 group-hover:text-gold transition-colors">
                                                {car.name}
                                            </h3>

                                            <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-muted-foreground">
                                                {car.kilometrage !== undefined && (
                                                    <div className="flex items-center gap-1">
                                                        <Gauge className="w-3 h-3 text-gold" />
                                                        <span>{new Intl.NumberFormat('fr-MA').format(car.kilometrage)} km</span>
                                                    </div>
                                                )}
                                                {car.carburant && (
                                                    <div className="flex items-center gap-1">
                                                        <Fuel className="w-3 h-3 text-gold" />
                                                        <span>{car.carburant}</span>
                                                    </div>
                                                )}
                                                {car.transmission && (
                                                    <div className="flex items-center gap-1">
                                                        <Settings className="w-3 h-3 text-gold" />
                                                        <span>{car.transmission}</span>
                                                    </div>
                                                )}
                                            </div>

                                            <Button
                                                variant="destructive"
                                                size="sm"
                                                className="w-full"
                                                onClick={() => deleteCarMutation.mutate(car.id)}
                                                disabled={deleteCarMutation.isPending}
                                            >
                                                <Trash2 className="w-3 h-3 mr-2" />
                                                Supprimer
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {cars?.length === 0 && (
                                <div className="text-center py-16 bg-secondary/20 rounded-2xl border border-dashed border-border">
                                    <Car className="w-16 h-16 mx-auto text-muted-foreground mb-4 opacity-50" />
                                    <p className="text-lg font-medium text-muted-foreground">Aucun véhicule dans le catalogue</p>
                                    <p className="text-sm text-muted-foreground/70 mt-2">Utilisez le formulaire ci-dessus pour ajouter votre premier véhicule</p>
                                </div>
                            )}
                        </div>
                    </TabsContent>

                    <TabsContent value="categories" className="space-y-8">
                        {/* ADD CATEGORY FORM */}
                        <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-gold/10 shadow-xl max-w-2xl mx-auto">
                            <h2 className="font-serif text-2xl font-bold mb-6 text-foreground">Ajouter une Catégorie</h2>
                            <form onSubmit={handleAddCategory} className="flex gap-3">
                                <Input
                                    placeholder="Nom de la catégorie (ex: SUV Luxe)"
                                    value={newCategory}
                                    onChange={(e) => setNewCategory(e.target.value)}
                                    className="bg-background/50 flex-1"
                                />
                                <Button
                                    type="submit"
                                    disabled={addCategoryMutation.isPending}
                                    className="bg-gold-gradient hover:opacity-90"
                                >
                                    {addCategoryMutation.isPending ? (
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                    ) : (
                                        <><Plus className="w-4 h-4 mr-2" /> Ajouter</>
                                    )}
                                </Button>
                            </form>
                        </div>

                        {/* CATEGORIES GRID */}
                        <div className="max-w-4xl mx-auto">
                            <h3 className="font-serif text-2xl font-bold mb-6 text-foreground">
                                Catégories Existantes ({categories?.length || 0})
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {categories?.map(cat => (
                                    <div
                                        key={cat.id}
                                        className="bg-card p-6 rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-shadow group"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h4 className="font-semibold text-lg text-foreground mb-1">{cat.name}</h4>
                                                <p className="text-xs text-muted-foreground font-mono">
                                                    ID: {String(cat.id).slice(0, 8)}...
                                                </p>
                                            </div>
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                onClick={() => handleDeleteCategory(cat.id)}
                                                className="opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive hover:text-destructive-foreground"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default Admin;
