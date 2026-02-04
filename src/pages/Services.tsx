import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  CreditCard,
  ClipboardCheck,
  Wrench,
  RefreshCw,
  Shield,
  Truck,
  ChevronRight,
  CheckCircle
} from 'lucide-react';

const services = [
  {
    id: 'financing',
    icon: CreditCard,
    title: 'Financement & Facilités de Paiement',
    description: 'Des solutions de financement flexibles adaptées à votre budget. Crédit auto, leasing, ou paiement échelonné.',
    features: [
      'Taux compétitifs à partir de 4.5%',
      'Durée flexible de 12 à 84 mois',
      'Réponse sous 24-48h',
      'Accompagnement personnalisé',
      'Partenariats avec les grandes banques'
    ],
    link: '/finance'
  },
  {
    id: 'inspection',
    icon: ClipboardCheck,
    title: 'Inspection & Certification',
    description: 'Chaque véhicule passe par un processus rigoureux d\'inspection en 150 points avant mise en vente.',
    features: [
      'Contrôle mécanique complet',
      'Vérification électronique',
      'Historique du véhicule',
      'Rapport d\'inspection détaillé',
      'Garantie de conformité'
    ],
    link: '/appointment'
  },
  {
    id: 'aftersales',
    icon: Wrench,
    title: 'Service Après-Vente',
    description: 'Un accompagnement complet après votre achat. Notre équipe reste à votre disposition pour l\'entretien.',
    features: [
      'Atelier de réparation équipé',
      'Pièces d\'origine garanties',
      'Techniciens certifiés',
      'Véhicule de courtoisie',
      'Devis gratuit'
    ],
    link: '/appointment'
  },
  {
    id: 'tradein',
    icon: RefreshCw,
    title: 'Reprise de Véhicule',
    description: 'Nous reprenons votre ancien véhicule au meilleur prix. Estimation gratuite et sans engagement.',
    features: [
      'Estimation gratuite',
      'Offre sous 24h',
      'Reprise au meilleur prix',
      'Déduction directe du prix',
      'Formalités administratives incluses'
    ],
    link: '/appointment'
  },
  {
    id: 'insurance',
    icon: Shield,
    title: 'Assurance Auto',
    description: 'Des partenariats avec les meilleures compagnies d\'assurance pour protéger votre investissement.',
    features: [
      'Devis comparatifs',
      'Tous risques ou tiers',
      'Assistance 24/7',
      'Bonus préservé',
      'Tarifs négociés'
    ],
    link: '/contact'
  },
  {
    id: 'delivery',
    icon: Truck,
    title: 'Livraison à Domicile',
    description: 'Recevez votre véhicule directement chez vous ou à l\'adresse de votre choix.',
    features: [
      'Livraison partout au Maroc',
      'Véhicule préparé et nettoyé',
      'Documents en règle',
      'Démonstration à la livraison',
      'Suivi en temps réel'
    ],
    link: '/contact'
  }
];

const ServicesPage = () => {
  return (
    <Layout>
      <PageHeader
        badge="Nos Services"
        title="Un Accompagnement Complet"
        subtitle="De la sélection à l'après-vente"
        description="Chez AUTOCONFIANCE, nous ne vendons pas seulement des voitures. Nous offrons une expérience complète avec des services premium pour vous accompagner à chaque étape."
      />

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 border border-border/50"
              >
                <div className="w-16 h-16 bg-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <service.icon className="w-8 h-8 text-gold" />
                </div>

                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact">
                  <Button variant="gold-outline" className="w-full group/btn">
                    <span>En savoir plus</span>
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Prêt à Démarrer Votre Projet ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Notre équipe est à votre disposition pour répondre à toutes vos questions
              et vous accompagner dans votre projet d'achat automobile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <Link to="/contact">
                <Button variant="gold-outline" size="xl">
                  Nous Contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
