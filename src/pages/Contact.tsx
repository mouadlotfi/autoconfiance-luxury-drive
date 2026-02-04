import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone & WhatsApp",
      content: "+212 661-299420",
      subtext: "Service Commercial 1"
    },
    {
      icon: Phone,
      title: "Téléphone & WhatsApp",
      content: "+212 662-021536",
      subtext: "Service Commercial 2"
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "Marrakech, Maroc",
      subtext: "Visitez notre showroom"
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lun-Sam: 9h-19h",
      subtext: "Dimanche sur RDV"
    }
  ];

  const handleWhatsAppClick = (number: string) => {
    const cleanNumber = number.replace(/\D/g, '');
    window.open(`https://wa.me/${cleanNumber}`, '_blank');
  };

  return (
    <Layout>
      <PageHeader
        badge="Contact"
        title="Contactez-Nous"
        subtitle="Nous sommes à votre écoute"
        description="Une question, un projet, ou simplement besoin d'informations ? Notre équipe est là pour vous aider."
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-8">
                Nos Coordonnées
              </h2>
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                      <info.icon className="w-6 h-6 text-gold" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                    <p className="text-foreground font-medium">{info.content}</p>
                    <p className="text-sm text-muted-foreground">{info.subtext}</p>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="bg-card rounded-2xl overflow-hidden shadow-card h-80">
                <div className="w-full h-full bg-gradient-to-br from-cream to-cream-dark flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gold mx-auto mb-4" />
                    <p className="text-foreground font-medium">AUTOCONFIANCE</p>
                    <p className="text-muted-foreground text-sm">Marrakech, Maroc</p>
                    <a
                      href="https://maps.google.com/?q=Marrakech,Morocco"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-gold hover:underline text-sm"
                    >
                      Ouvrir dans Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA instead of Form */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 flex flex-col justify-center text-center">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                Discutez avec nous
              </h2>
              <p className="text-muted-foreground mb-8">
                Pour une réponse rapide et personnalisée, contactez-nous directement sur WhatsApp.
              </p>

              <div className="space-y-4">
                <Button
                  variant="gold"
                  size="lg"
                  className="w-full gap-2"
                  onClick={() => handleWhatsAppClick("+212661299420")}
                >
                  <Send className="w-5 h-5" />
                  Contacter Service Commercial 1
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full gap-2 border-gold text-gold hover:bg-gold hover:text-white"
                  onClick={() => handleWhatsAppClick("+212662021536")}
                >
                  <Send className="w-5 h-5" />
                  Contacter Service Commercial 2
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
