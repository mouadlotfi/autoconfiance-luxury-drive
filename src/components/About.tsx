import { CheckCircle, Star, Clock, ThumbsUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Star,
      title: "Excellence",
      description: "Chaque véhicule est soigneusement sélectionné pour répondre aux plus hauts standards de qualité."
    },
    {
      icon: CheckCircle,
      title: "Transparence",
      description: "Historique complet, état technique détaillé — nous ne cachons rien à nos clients."
    },
    {
      icon: Clock,
      title: "Accompagnement",
      description: "De la sélection à l'après-vente, nous vous accompagnons à chaque étape."
    },
    {
      icon: ThumbsUp,
      title: "Satisfaction",
      description: "Votre satisfaction est notre priorité. Nous construisons des relations durables."
    }
  ];

  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold font-medium uppercase tracking-widest text-sm mb-4 block">
            Qui Sommes-Nous
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            La Confiance au Cœur de Notre Métier
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Depuis notre création, AUTOCONFIANCE s'est engagé à offrir une expérience d'achat automobile 
            exceptionnelle. Nous croyons que l'achat d'une voiture doit être un moment de confiance, 
            pas de stress.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Story */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gold-gradient rounded-full" />
              <div className="pl-8">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Notre Histoire
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Fondé par des passionnés de l'automobile, AUTOCONFIANCE est né d'une vision simple : 
                  transformer l'expérience d'achat automobile. Nous avons observé un marché où la 
                  méfiance prédominait, et nous avons décidé de changer cela.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Aujourd'hui, nous sommes fiers d'avoir accompagné plus de mille clients dans 
                  l'acquisition de leur véhicule. Chaque voiture qui quitte notre showroom porte 
                  notre promesse de qualité et de fiabilité.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center p-4 bg-card rounded-xl shadow-card">
                <p className="font-serif text-3xl font-bold text-gold-gradient">+1000</p>
                <p className="text-sm text-muted-foreground mt-1">Clients Satisfaits</p>
              </div>
              <div className="text-center p-4 bg-card rounded-xl shadow-card">
                <p className="font-serif text-3xl font-bold text-gold-gradient">100%</p>
                <p className="text-sm text-muted-foreground mt-1">Véhicules Inspectés</p>
              </div>
              <div className="text-center p-4 bg-card rounded-xl shadow-card">
                <p className="font-serif text-3xl font-bold text-gold-gradient">5★</p>
                <p className="text-sm text-muted-foreground mt-1">Note Client</p>
              </div>
            </div>
          </div>

          {/* Right: Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <value.icon className="w-7 h-7 text-gold" />
                </div>
                <h4 className="font-serif text-xl font-bold text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
