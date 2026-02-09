import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Lock, Eye, EyeOff } from 'lucide-react';

interface AdminLoginProps {
    onLogin: () => void;
}

const AdminLogin = ({ onLogin }: AdminLoginProps) => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        // Check password against environment variable
        const correctPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123';

        setTimeout(() => {
            if (password === correctPassword) {
                // Store authentication in sessionStorage
                sessionStorage.setItem('admin_authenticated', 'true');
                onLogin();
            } else {
                setError('Mot de passe incorrect');
                setPassword('');
            }
            setIsLoading(false);
        }, 500); // Small delay for better UX
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-6">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold-gradient mb-4">
                        <Lock className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h1 className="font-serif text-3xl font-bold text-foreground mb-2">
                        Accès Administrateur
                    </h1>
                    <p className="text-muted-foreground">
                        Veuillez entrer votre mot de passe
                    </p>
                </div>

                {/* Login Form */}
                <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-gold/10 shadow-xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium mb-2 text-foreground">
                                Mot de passe
                            </label>
                            <div className="relative">
                                <Input
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Entrez votre mot de passe"
                                    className="bg-background/50 pr-10"
                                    required
                                    autoFocus
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-4 h-4" />
                                    ) : (
                                        <Eye className="w-4 h-4" />
                                    )}
                                </button>
                            </div>
                            {error && (
                                <p className="text-sm text-red-500 mt-2 animate-fade-in">
                                    {error}
                                </p>
                            )}
                        </div>

                        <Button
                            type="submit"
                            className="w-full bg-gold-gradient hover:opacity-90 transition-opacity"
                            size="lg"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Vérification...' : 'Se connecter'}
                        </Button>
                    </form>
                </div>

                {/* Footer hint */}
                <p className="text-center text-xs text-muted-foreground mt-6">
                    Tableau de bord sécurisé - AUTOCONFIANCE
                </p>
            </div>
        </div>
    );
};

export default AdminLogin;
