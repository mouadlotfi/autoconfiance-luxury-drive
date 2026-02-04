import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    title: "Processus d'Achat",
    items: [
      {
        question: "Comment se déroule le processus d'achat chez AUTOCONFIANCE ?",
        answer: "Le processus est simple : 1) Consultez notre catalogue en ligne ou visitez notre showroom. 2) Sélectionnez le véhicule qui vous intéresse. 3) Prenez rendez-vous pour un essai. 4) Finalisez le financement si nécessaire. 5) Signez les documents et récupérez votre véhicule. Nous vous accompagnons à chaque étape."
      },
      {
        question: "Puis-je essayer un véhicule avant l'achat ?",
        answer: "Absolument ! Nous encourageons tous nos clients à essayer le véhicule avant de prendre leur décision. Prenez rendez-vous en ligne ou par téléphone pour organiser un essai gratuit et sans engagement."
      },
      {
        question: "Quels documents sont nécessaires pour l'achat ?",
        answer: "Vous aurez besoin de : votre carte d'identité nationale ou passeport, un justificatif de domicile récent (moins de 3 mois), et votre permis de conduire valide. Pour le financement, des justificatifs de revenus seront également demandés."
      },
      {
        question: "Combien de temps prend le processus d'achat complet ?",
        answer: "Un achat comptant peut être finalisé en 24-48h une fois tous les documents fournis. Avec financement, comptez 3-5 jours ouvrables pour l'approbation du crédit. Nous faisons tout pour accélérer le processus."
      }
    ]
  },
  {
    title: "Financement & Paiement",
    items: [
      {
        question: "Quelles sont les options de financement disponibles ?",
        answer: "Nous proposons plusieurs options : crédit classique (12 à 84 mois), leasing/LOA, crédit-bail, et facilités de paiement. Nos partenariats avec les principales banques nous permettent d'offrir des taux compétitifs à partir de 4.5%."
      },
      {
        question: "Quel est l'apport minimum requis ?",
        answer: "L'apport minimum varie selon le type de financement et votre profil. En général, un apport de 10-20% est recommandé, mais certaines formules permettent un financement à 100%. Contactez-nous pour une étude personnalisée."
      },
      {
        question: "Quels modes de paiement acceptez-vous ?",
        answer: "Nous acceptons : virement bancaire, chèque de banque, paiement par traites (après accord), et bien sûr le paiement comptant. Les cartes bancaires sont acceptées pour les arrhes et petits montants."
      },
      {
        question: "Puis-je obtenir une simulation de crédit en ligne ?",
        answer: "Oui ! Utilisez notre calculateur de financement en ligne pour obtenir une estimation de vos mensualités. Pour une offre personnalisée et précise, prenez rendez-vous avec notre conseiller financier."
      }
    ]
  },
  {
    title: "État des Véhicules & Garantie",
    items: [
      {
        question: "Comment vérifiez-vous l'état des véhicules ?",
        answer: "Chaque véhicule passe par un contrôle rigoureux en 150 points couvrant la mécanique, l'électronique, la carrosserie, et l'intérieur. Nous vérifions également l'historique complet du véhicule (entretien, accidents, kilométrage)."
      },
      {
        question: "Quelle garantie est proposée sur les véhicules ?",
        answer: "Tous nos véhicules bénéficient d'une garantie minimum de 6 mois. Des extensions de garantie jusqu'à 24 mois sont disponibles en option. La garantie couvre les principaux organes mécaniques et électriques."
      },
      {
        question: "Les véhicules ont-ils un historique d'entretien ?",
        answer: "Oui, nous fournissons l'historique d'entretien disponible pour chaque véhicule. Les carnets d'entretien originaux sont remis quand ils sont disponibles, et nous effectuons une révision complète avant chaque vente."
      },
      {
        question: "Puis-je faire vérifier le véhicule par un mécanicien indépendant ?",
        answer: "Bien sûr ! Nous encourageons cette démarche. Vous pouvez organiser une inspection par le professionnel de votre choix avant l'achat. C'est un gage de transparence de notre part."
      }
    ]
  },
  {
    title: "Livraison & Documentation",
    items: [
      {
        question: "Livrez-vous dans tout le Maroc ?",
        answer: "Oui, nous livrons partout au Maroc. Les frais de livraison varient selon la destination. Pour les grandes villes, la livraison peut être gratuite sous certaines conditions. Contactez-nous pour un devis."
      },
      {
        question: "Quels documents sont remis lors de la livraison ?",
        answer: "Vous recevez : la carte grise à votre nom, le certificat de vente, le rapport d'inspection, la garantie, le carnet d'entretien (si disponible), les doubles de clés, et tous les documents d'origine du véhicule."
      },
      {
        question: "Combien de temps pour recevoir la carte grise ?",
        answer: "Nous nous occupons de toutes les formalités administratives. La carte grise à votre nom est généralement prête sous 48-72h ouvrables. Vous pouvez circuler avec le certificat provisoire en attendant."
      },
      {
        question: "Que se passe-t-il si je constate un problème après la livraison ?",
        answer: "Contactez-nous immédiatement. Si le problème est couvert par la garantie, nous le prenons en charge. Nous disposons d'un service après-vente réactif pour résoudre tout souci rapidement."
      }
    ]
  },
  {
    title: "Service Après-Vente",
    items: [
      {
        question: "Proposez-vous un service d'entretien après l'achat ?",
        answer: "Oui, notre atelier est équipé pour l'entretien courant et les réparations. Nos techniciens sont formés et utilisent des pièces de qualité. Les clients AUTOCONFIANCE bénéficient de tarifs préférentiels."
      },
      {
        question: "Puis-je revendre mon véhicule à AUTOCONFIANCE plus tard ?",
        answer: "Absolument ! Nous proposons un service de reprise. Nous évaluons votre véhicule gratuitement et vous faisons une offre juste basée sur le marché actuel. C'est également possible en échange d'un nouveau véhicule."
      },
      {
        question: "Comment contacter le service après-vente ?",
        answer: "Notre SAV est joignable par téléphone au +212 6 00 00 00 00, par email à sav@autoconfiance.ma, ou en personne à notre showroom. Nous nous engageons à répondre sous 24h."
      },
      {
        question: "Proposez-vous un véhicule de remplacement pendant les réparations ?",
        answer: "Oui, sous réserve de disponibilité et pour les réparations de plus de 24h. Ce service est gratuit pour les réparations sous garantie, et disponible à tarif préférentiel pour les autres interventions."
      }
    ]
  }
];

const FAQPage = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <Layout>
      <PageHeader
        badge="FAQ"
        title="Questions Fréquentes"
        subtitle="Tout ce que vous devez savoir"
        description="Trouvez rapidement des réponses à vos questions. Si vous ne trouvez pas ce que vous cherchez, n'hésitez pas à nous contacter."
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center text-gold font-bold text-sm">
                  {categoryIndex + 1}
                </span>
                {category.title}
              </h2>

              <div className="space-y-4">
                {category.items.map((item, itemIndex) => {
                  const key = `${categoryIndex}-${itemIndex}`;
                  const isOpen = openItems[key];

                  return (
                    <div 
                      key={itemIndex}
                      className="bg-card rounded-xl border border-border/50 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(categoryIndex, itemIndex)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-secondary/50 transition-colors"
                      >
                        <span className="font-medium text-foreground pr-4">
                          {item.question}
                        </span>
                        <ChevronDown 
                          className={`w-5 h-5 text-gold flex-shrink-0 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-6">
                          <p className="text-muted-foreground leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-4">
              Vous n'avez pas trouvé votre réponse ?
            </h2>
            <p className="text-muted-foreground mb-6">
              Notre équipe est à votre disposition pour répondre à toutes vos questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+212600000000" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold-gradient text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
                Appeler Maintenant
              </a>
              <a href="mailto:contact@autoconfiance.ma" className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gold text-gold rounded-lg font-medium hover:bg-gold hover:text-primary-foreground transition-colors">
                Envoyer un Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQPage;
