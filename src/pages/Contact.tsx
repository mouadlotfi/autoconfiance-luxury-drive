import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      content: "+212 6 00 00 00 00",
      subtext: "Lun-Sam: 9h-19h"
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@autoconfiance.ma",
      subtext: "Réponse sous 24h"
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "Boulevard Mohamed V",
      subtext: "Casablanca, Maroc"
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lun-Sam: 9h-19h",
      subtext: "Dimanche sur RDV"
    }
  ];

  if (isSubmitted) {
    return (
      <Layout>
        <section className="py-32 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-lg mx-auto text-center">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-10 h-10 text-gold" />
              </div>
              <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
                Message Envoyé !
              </h1>
              <p className="text-muted-foreground mb-8">
                Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.
              </p>
              <Button variant="gold" onClick={() => setIsSubmitted(false)}>
                Envoyer un autre message
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

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
                {contactInfo.map((info) => (
                  <div 
                    key={info.title}
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
                    <p className="text-muted-foreground text-sm">Boulevard Mohamed V, Casablanca</p>
                    <a 
                      href="https://maps.google.com" 
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

            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                Envoyez-nous un Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nom Complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                    placeholder="Votre nom"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                      placeholder="+212 6 00 00 00 00"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="info">Demande d'information</option>
                    <option value="vehicle">Question sur un véhicule</option>
                    <option value="finance">Financement</option>
                    <option value="aftersales">Service après-vente</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all resize-none"
                    placeholder="Comment pouvons-nous vous aider ?"
                  />
                </div>
                <Button variant="gold" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Envoyer le Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
