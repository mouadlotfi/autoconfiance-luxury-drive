import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, Tag, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    slug: 'conseils-achat-voiture-occasion',
    title: '10 Conseils pour Bien Acheter une Voiture d\'Occasion',
    excerpt: 'Découvrez les points essentiels à vérifier avant d\'acheter un véhicule d\'occasion pour éviter les mauvaises surprises.',
    category: 'Conseils',
    author: 'Ahmed Bennani',
    date: '2024-01-15',
    readTime: '8 min',
    featured: true
  },
  {
    id: 2,
    slug: 'entretien-voiture-hiver',
    title: 'Préparer Sa Voiture pour l\'Hiver : Guide Complet',
    excerpt: 'Les étapes indispensables pour préparer votre véhicule aux conditions hivernales et rouler en toute sécurité.',
    category: 'Entretien',
    author: 'Youssef Tahiri',
    date: '2024-01-10',
    readTime: '6 min',
    featured: false
  },
  {
    id: 3,
    slug: 'nouveautes-2024',
    title: 'Les Nouvelles Arrivées du Mois de Janvier',
    excerpt: 'Découvrez les derniers véhicules ajoutés à notre catalogue ce mois-ci. Des opportunités à ne pas manquer !',
    category: 'Nouveautés',
    author: 'Khadija El Amrani',
    date: '2024-01-05',
    readTime: '4 min',
    featured: false
  },
  {
    id: 4,
    slug: 'financement-auto-guide',
    title: 'Comment Financer Son Véhicule : Guide Complet',
    excerpt: 'Crédit, leasing, LOA... Comprenez les différentes options de financement et choisissez celle qui vous convient.',
    category: 'Finance',
    author: 'Salma Idrissi',
    date: '2024-01-01',
    readTime: '10 min',
    featured: true
  },
  {
    id: 5,
    slug: 'economie-carburant',
    title: '15 Astuces pour Réduire sa Consommation de Carburant',
    excerpt: 'Des techniques simples et efficaces pour économiser du carburant et réduire vos dépenses au quotidien.',
    category: 'Conseils',
    author: 'Ahmed Bennani',
    date: '2023-12-28',
    readTime: '7 min',
    featured: false
  },
  {
    id: 6,
    slug: 'promotion-fin-annee',
    title: 'Offres Spéciales Fin d\'Année - Jusqu\'à -15%',
    excerpt: 'Profitez de nos promotions exceptionnelles sur une sélection de véhicules. Offre limitée !',
    category: 'Promotions',
    author: 'Khadija El Amrani',
    date: '2023-12-20',
    readTime: '3 min',
    featured: true
  }
];

const categories = ['Tous', 'Conseils', 'Entretien', 'Nouveautés', 'Finance', 'Promotions'];

const BlogPage = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const featuredPost = blogPosts.find(p => p.featured);
  const regularPosts = blogPosts.filter(p => !p.featured || p.id !== featuredPost?.id);

  return (
    <Layout>
      <PageHeader
        badge="Blog"
        title="Actualités & Conseils"
        subtitle="Restez informé"
        description="Conseils d'experts, actualités du marché automobile, nouvelles arrivées et promotions exclusives."
      />

      {/* Categories */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category === 'Tous'
                    ? 'bg-gold-gradient text-primary-foreground shadow-gold'
                    : 'bg-secondary text-foreground hover:bg-secondary/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-12 bg-background">
          <div className="container mx-auto px-6">
            <div className="bg-card rounded-2xl overflow-hidden shadow-card border border-border/50">
              <div className="grid md:grid-cols-2">
                <div className="bg-gradient-to-br from-gold/20 to-gold/5 aspect-video md:aspect-auto flex items-center justify-center">
                  <div className="text-center p-8">
                    <Tag className="w-12 h-12 text-gold mx-auto mb-4" />
                    <span className="bg-gold/20 text-gold px-3 py-1 rounded-full text-sm font-medium">
                      Article Vedette
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <span className="bg-gold/10 text-gold px-3 py-1 rounded-full font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(featuredPost.date)}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">{featuredPost.author}</p>
                        <p className="text-xs text-muted-foreground">{featuredPost.readTime} de lecture</p>
                      </div>
                    </div>
                    <Button variant="gold">
                      Lire l'article
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group"
              >
                <div className="aspect-video bg-gradient-to-br from-cream to-cream-dark flex items-center justify-center">
                  <Tag className="w-8 h-8 text-gold/50 group-hover:text-gold transition-colors" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4 text-sm">
                    <span className="bg-gold/10 text-gold px-2 py-0.5 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground mb-3 group-hover:text-gold transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground">
                      {formatDate(post.date)}
                    </span>
                    <Button variant="ghost" size="sm" className="text-gold hover:text-gold hover:bg-gold/10">
                      Lire
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="gold-outline" size="lg">
              Voir Plus d'Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Restez Informé
            </h2>
            <p className="text-muted-foreground mb-8">
              Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités, 
              conseils et offres exclusives directement dans votre boîte mail.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
              />
              <Button variant="gold">
                S'inscrire
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
