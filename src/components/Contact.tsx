import { Button } from '@/components/ui/button';
import { Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
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
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-medium uppercase tracking-widest text-sm mb-4 block">
            Contact
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Parlons de Votre Projet
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Vous avez des questions ou souhaitez prendre rendez-vous ?
            Notre équipe est à votre disposition pour vous accompagner.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <div>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
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

            {/* Map Placeholder */}
            <div className="bg-card rounded-2xl overflow-hidden shadow-card h-64">
              <div className="w-full h-full bg-gradient-to-br from-cream to-cream-dark flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gold mx-auto mb-4" />
                  <p className="text-foreground font-medium">AUTOCONFIANCE</p>
                  <p className="text-muted-foreground text-sm">Marrakech, Maroc</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Replacement - WhatsApp CTA */}
          <div className="bg-card rounded-2xl p-8 shadow-card flex flex-col justify-center text-center">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
              Contactez-nous directement
            </h3>
            <p className="text-muted-foreground mb-8">
              Privilégiez WhatsApp pour une réponse rapide.
            </p>

            <div className="space-y-4">
              <Button
                variant="gold"
                size="lg"
                className="w-full gap-2"
                onClick={() => handleWhatsAppClick("+212661299420")}
              >
                <Send className="w-5 h-5" />
                Service Commercial 1 (+212 661-299420)
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full gap-2 border-gold text-gold hover:bg-gold hover:text-white"
                onClick={() => handleWhatsAppClick("+212662021536")}
              >
                <Send className="w-5 h-5" />
                Service Commercial 2 (+212 662-021536)
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
