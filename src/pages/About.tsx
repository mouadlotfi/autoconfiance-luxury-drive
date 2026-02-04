import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Eye, 
  Heart, 
  Award,
  Users,
  MapPin,
  Phone,
  Mail,
  CheckCircle
} from 'lucide-react';

const team = [
  {
    name: 'Ahmed Bennani',
    role: 'Directeur Général',
    bio: '20 ans d\'expérience dans l\'automobile',
  },
  {
    name: 'Khadija El Amrani',
    role: 'Responsable Commercial',
    bio: 'Experte en conseil client et financement',
  },
  {
    name: 'Youssef Tahiri',
    role: 'Chef d\'Atelier',
    bio: 'Mécanicien certifié, 15 ans d\'expertise',
  },
  {
    name: 'Salma Idrissi',
    role: 'Responsable Administratif',
    bio: 'Gestion des dossiers et formalités',
  },
];

const values = [
  {
    icon: Heart,
    title: 'Confiance',
    description: 'La transparence et l\'honnêteté sont au cœur de chaque interaction avec nos clients.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Nous ne proposons que des véhicules qui répondent à nos standards de qualité élevés.'
  },
  {
    icon: Users,
    title: 'Service Client',
    description: 'Chaque client est unique. Nous adaptons notre approche à vos besoins spécifiques.'
  },
  {
    icon: Target,
    title: 'Intégrité',
    description: 'Pas de surprises cachées. Nous vous disons tout sur chaque véhicule.'
  },
];

const milestones = [
  { year: '2010', event: 'Fondation d\'AUTOCONFIANCE à Casablanca' },
  { year: '2013', event: 'Ouverture du premier showroom moderne' },
  { year: '2016', event: 'Lancement du service financement' },
  { year: '2018', event: 'Cap des 500 clients satisfaits' },
  { year: '2020', event: 'Extension de l\'atelier après-vente' },
  { year: '2023', event: 'Plus de 1000 véhicules vendus' },
];

const certifications = [
  'Membre de l\'Association des Professionnels de l\'Automobile',
  'Certification ISO 9001 - Qualité de Service',
  'Partenaire agréé des principales banques',
  'Label Qualité Véhicules d\'Occasion',
];

const AboutPage = () => {
  return (
    <Layout>
      <PageHeader
        badge="À Propos"
        title="Notre Histoire"
        subtitle="Plus de 10 ans d'expertise automobile"
        description="AUTOCONFIANCE est né d'une passion pour l'automobile et d'une vision : offrir une expérience d'achat transparente et de confiance."
      />

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-gold" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-foreground">Notre Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Transformer l'expérience d'achat de véhicules d'occasion au Maroc en établissant 
                de nouveaux standards de transparence, de qualité et de service client.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nous croyons que chaque client mérite de connaître l'histoire complète de son 
                futur véhicule, sans surprises ni zones d'ombre. C'est pourquoi nous avons 
                développé un processus d'inspection rigoureux et une politique de transparence totale.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-gold" />
                </div>
                <h2 className="font-serif text-3xl font-bold text-foreground">Notre Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Devenir la référence incontournable du marché des véhicules d'occasion au Maroc, 
                reconnue pour son intégrité et la satisfaction de ses clients.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nous aspirons à créer un écosystème où l'achat d'une voiture d'occasion est 
                synonyme de sérénité, où la confiance entre le vendeur et l'acheteur est 
                naturelle et où chaque client devient ambassadeur de notre marque.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Nos Valeurs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ces principes guident chacune de nos actions et décisions au quotidien.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Notre Parcours
            </h2>
            <p className="text-muted-foreground">
              Les étapes clés de notre développement.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center">
                    <span className="font-serif font-bold text-gold">{milestone.year}</span>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gold/20 mt-4" />
                  )}
                </div>
                <div className="pt-4">
                  <p className="text-lg text-foreground font-medium">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Notre Équipe
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Des professionnels passionnés à votre service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-6 shadow-card text-center"
              >
                <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif text-3xl font-bold text-gold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-gold text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">
                Certifications & Partenariats
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Notre engagement envers la qualité est reconnu par les organismes professionnels 
                et nos partenaires financiers.
              </p>
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-foreground">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary rounded-2xl p-8">
              <h3 className="font-serif text-xl font-bold text-foreground mb-6">
                Visitez Notre Showroom
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Adresse</p>
                    <p className="text-muted-foreground">Boulevard Mohamed V, Casablanca</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Téléphone</p>
                    <p className="text-muted-foreground">+212 6 00 00 00 00</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">contact@autoconfiance.ma</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/contact">
                  <Button variant="gold" className="w-full">
                    Nous Contacter
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
