import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Calendar, Clock, Car, Wrench, MessageSquare, ChevronRight, Check } from 'lucide-react';
import { getCarById } from '@/data/cars';

type AppointmentType = 'test-drive' | 'inspection' | 'consultation';

const appointmentTypes = [
  {
    id: 'test-drive' as AppointmentType,
    icon: Car,
    title: 'Essai Véhicule',
    description: 'Testez le véhicule de votre choix sur route',
    duration: '30-45 min'
  },
  {
    id: 'inspection' as AppointmentType,
    icon: Wrench,
    title: 'Inspection Technique',
    description: 'Faites inspecter un véhicule par nos experts',
    duration: '1-2 heures'
  },
  {
    id: 'consultation' as AppointmentType,
    icon: MessageSquare,
    title: 'Consultation',
    description: 'Discutez de vos besoins avec un conseiller',
    duration: '30 min'
  }
];

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
];

const AppointmentPage = () => {
  const [searchParams] = useSearchParams();
  const carId = searchParams.get('car');
  const selectedCar = carId ? getCarById(carId) : null;

  const [step, setStep] = useState(1);
  const [appointmentType, setAppointmentType] = useState<AppointmentType>('test-drive');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Generate next 14 days for date selection
  const availableDates = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i + 1);
    // Skip Sundays
    if (date.getDay() === 0) {
      date.setDate(date.getDate() + 1);
    }
    return date;
  }).slice(0, 10);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('fr-FR', {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="py-32 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-lg mx-auto text-center">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-gold" />
              </div>
              <h1 className="font-serif text-3xl font-bold text-foreground mb-4">
                Rendez-vous Confirmé !
              </h1>
              <p className="text-muted-foreground mb-8">
                Votre demande de rendez-vous a été enregistrée. Nous vous contacterons 
                sous peu pour confirmer les détails.
              </p>
              <div className="bg-secondary rounded-xl p-6 mb-8 text-left">
                <h3 className="font-semibold text-foreground mb-4">Récapitulatif</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="text-muted-foreground">Type :</span> {appointmentTypes.find(t => t.id === appointmentType)?.title}</p>
                  <p><span className="text-muted-foreground">Date :</span> {selectedDate}</p>
                  <p><span className="text-muted-foreground">Heure :</span> {selectedTime}</p>
                  {selectedCar && (
                    <p><span className="text-muted-foreground">Véhicule :</span> {selectedCar.brand} {selectedCar.name}</p>
                  )}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/cars">
                  <Button variant="gold">
                    Voir les Véhicules
                  </Button>
                </Link>
                <Link to="/">
                  <Button variant="gold-outline">
                    Retour à l'Accueil
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHeader
        badge="Rendez-vous"
        title="Prenez Rendez-vous"
        subtitle="Réservez votre créneau"
        description="Essai, inspection ou consultation - notre équipe est à votre disposition pour vous accompagner."
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                    step >= s 
                      ? 'bg-gold-gradient text-primary-foreground' 
                      : 'bg-secondary text-muted-foreground'
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div className={`w-16 sm:w-24 h-1 mx-2 rounded ${
                    step > s ? 'bg-gold' : 'bg-secondary'
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Selected Car Info */}
          {selectedCar && (
            <div className="bg-gold/10 border border-gold/30 rounded-xl p-4 mb-8 flex items-center gap-4">
              <img 
                src={selectedCar.image} 
                alt={`${selectedCar.brand} ${selectedCar.name}`}
                className="w-20 h-14 object-contain"
              />
              <div>
                <p className="text-sm text-gold font-medium">Véhicule sélectionné</p>
                <p className="font-semibold text-foreground">{selectedCar.brand} {selectedCar.name}</p>
              </div>
            </div>
          )}

          {/* Step 1: Type Selection */}
          {step === 1 && (
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
                Choisissez le type de rendez-vous
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {appointmentTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setAppointmentType(type.id)}
                    className={`p-6 rounded-xl border-2 text-left transition-all ${
                      appointmentType === type.id
                        ? 'border-gold bg-gold/5'
                        : 'border-border hover:border-gold/50'
                    }`}
                  >
                    <type.icon className={`w-8 h-8 mb-4 ${
                      appointmentType === type.id ? 'text-gold' : 'text-muted-foreground'
                    }`} />
                    <h3 className="font-semibold text-foreground mb-2">{type.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{type.description}</p>
                    <p className="text-xs text-gold flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {type.duration}
                    </p>
                  </button>
                ))}
              </div>
              <div className="text-center">
                <Button variant="gold" size="lg" onClick={() => setStep(2)}>
                  Continuer
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Date & Time Selection */}
          {step === 2 && (
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
                Choisissez une date et une heure
              </h2>

              {/* Date Selection */}
              <div className="mb-8">
                <h3 className="font-medium text-foreground mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-gold" />
                  Sélectionnez une date
                </h3>
                <div className="grid grid-cols-5 gap-3">
                  {availableDates.map((date, index) => {
                    const dateStr = date.toISOString().split('T')[0];
                    return (
                      <button
                        key={index}
                        onClick={() => setSelectedDate(dateStr)}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          selectedDate === dateStr
                            ? 'border-gold bg-gold/10 text-gold'
                            : 'border-border hover:border-gold/50'
                        }`}
                      >
                        <p className="text-xs text-muted-foreground">{formatDate(date).split(' ')[0]}</p>
                        <p className="font-semibold">{date.getDate()}</p>
                        <p className="text-xs">{formatDate(date).split(' ').slice(2).join(' ')}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Selection */}
              {selectedDate && (
                <div className="mb-8">
                  <h3 className="font-medium text-foreground mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-gold" />
                    Sélectionnez une heure
                  </h3>
                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-3 px-4 rounded-lg border text-center transition-all ${
                          selectedTime === time
                            ? 'border-gold bg-gold/10 text-gold font-semibold'
                            : 'border-border hover:border-gold/50'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex justify-between">
                <Button variant="ghost" onClick={() => setStep(1)}>
                  Retour
                </Button>
                <Button 
                  variant="gold" 
                  size="lg" 
                  onClick={() => setStep(3)}
                  disabled={!selectedDate || !selectedTime}
                >
                  Continuer
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Contact Form */}
          {step === 3 && (
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6 text-center">
                Vos Coordonnées
              </h2>
              <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message (optionnel)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                    placeholder="Questions ou précisions..."
                  />
                </div>

                <div className="flex justify-between">
                  <Button variant="ghost" type="button" onClick={() => setStep(2)}>
                    Retour
                  </Button>
                  <Button variant="gold" size="lg" type="submit">
                    Confirmer le RDV
                    <Check className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default AppointmentPage;
