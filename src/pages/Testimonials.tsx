import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Star, Quote, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Mohammed Alaoui',
    role: 'Chef d\'entreprise',
    car: 'Peugeot 508',
    rating: 5,
    text: 'Service exceptionnel ! L\'équipe m\'a accompagné du début à la fin. Ma Peugeot 508 est exactement ce que je cherchais. Je recommande vivement AUTOCONFIANCE.',
    image: null
  },
  {
    id: 2,
    name: 'Fatima Benani',
    role: 'Médecin',
    car: 'Toyota Yaris',
    rating: 5,
    text: 'Première expérience d\'achat de voiture et je suis ravie. L\'équipe a été patiente et m\'a aidée à trouver le véhicule parfait pour mes trajets quotidiens.',
    image: null
  },
  {
    id: 3,
    name: 'Karim Tazi',
    role: 'Architecte',
    car: 'Dacia Duster',
    rating: 5,
    text: 'Le Duster que j\'ai acheté est en parfait état. Le processus de financement était simple et rapide. Merci pour votre professionnalisme !',
    image: null
  },
  {
    id: 4,
    name: 'Amina El Fassi',
    role: 'Enseignante',
    car: 'Renault Clio',
    rating: 5,
    text: 'Transparence totale sur l\'état du véhicule. Pas de mauvaises surprises après l\'achat. C\'est rare de nos jours !',
    image: null
  },
  {
    id: 5,
    name: 'Youssef Berrada',
    role: 'Ingénieur',
    car: 'Volkswagen Golf',
    rating: 5,
    text: 'J\'ai comparé plusieurs concessionnaires avant de choisir AUTOCONFIANCE. Leur sérieux et leur honnêteté font vraiment la différence.',
    image: null
  },
  {
    id: 6,
    name: 'Sara Benjelloun',
    role: 'Avocate',
    car: 'Honda Civic',
    rating: 5,
    text: 'Un suivi impeccable même après l\'achat. Le service après-vente est réactif et compétent. Je suis cliente fidèle maintenant.',
    image: null
  }
];

const videoTestimonials = [
  {
    id: 1,
    name: 'Ahmed M.',
    title: 'Mon expérience avec AUTOCONFIANCE',
    thumbnail: null
  },
  {
    id: 2,
    name: 'Layla K.',
    title: 'Pourquoi j\'ai choisi AUTOCONFIANCE',
    thumbnail: null
  },
  {
    id: 3,
    name: 'Omar B.',
    title: 'De l\'achat à la livraison',
    thumbnail: null
  }
];

const TestimonialsPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const displayedTestimonials = testimonials.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <Layout>
      <PageHeader
        badge="Témoignages"
        title="Ce Que Disent Nos Clients"
        subtitle="Plus de 1000 clients satisfaits"
        description="Découvrez les expériences de nos clients. Leur satisfaction est notre plus grande fierté et la preuve de notre engagement envers l'excellence."
      />

      {/* Stats */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="font-serif text-4xl font-bold text-gold-gradient">+1000</p>
              <p className="text-muted-foreground">Clients Satisfaits</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl font-bold text-gold-gradient">4.9/5</p>
              <p className="text-muted-foreground">Note Moyenne</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl font-bold text-gold-gradient">98%</p>
              <p className="text-muted-foreground">Recommandent</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-4xl font-bold text-gold-gradient">+500</p>
              <p className="text-muted-foreground">Avis 5 étoiles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Written Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Avis de Nos Clients
            </h2>
            <p className="text-muted-foreground">
              Des témoignages authentiques de personnes qui nous ont fait confiance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 relative"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-gold/20" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                    <span className="font-serif text-lg font-bold text-gold">
                      {testimonial.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-gold">{testimonial.car}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-4">
              <Button 
                variant="gold-outline" 
                size="icon"
                onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
                disabled={currentPage === 0}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <div className="flex items-center gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentPage === i ? 'bg-gold' : 'bg-gold/30 hover:bg-gold/50'
                    }`}
                  />
                ))}
              </div>
              <Button 
                variant="gold-outline" 
                size="icon"
                onClick={() => setCurrentPage(p => Math.min(totalPages - 1, p + 1))}
                disabled={currentPage === totalPages - 1}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Témoignages Vidéo
            </h2>
            <p className="text-muted-foreground">
              Découvrez les histoires de nos clients en vidéo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {videoTestimonials.map((video) => (
              <div 
                key={video.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer"
              >
                <div className="relative aspect-video bg-gradient-to-br from-charcoal to-charcoal-light">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-gold">
                      <Play className="w-6 h-6 text-primary-foreground ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-foreground mb-1">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">{video.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Rejoignez Notre Communauté de Clients Satisfaits
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Faites confiance à AUTOCONFIANCE pour votre prochain véhicule et 
              découvrez pourquoi nos clients nous recommandent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/cars">
                <Button variant="gold" size="xl">
                  Voir Nos Véhicules
                </Button>
              </Link>
              <Link to="/appointment">
                <Button variant="gold-outline" size="xl">
                  Prendre Rendez-vous
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TestimonialsPage;
