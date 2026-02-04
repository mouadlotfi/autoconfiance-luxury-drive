import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { useState, useMemo } from 'react';
import { Calculator, Info, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinancePage = () => {
  const [vehiclePrice, setVehiclePrice] = useState(150000);
  const [downPayment, setDownPayment] = useState(30000);
  const [loanTerm, setLoanTerm] = useState(48);
  const [interestRate, setInterestRate] = useState(5.5);

  const calculation = useMemo(() => {
    const principal = vehiclePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm;

    if (principal <= 0) {
      return {
        monthlyPayment: 0,
        totalPayment: downPayment,
        totalInterest: 0,
        loanAmount: 0
      };
    }

    const monthlyPayment = principal * 
      (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / 
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    const totalPayment = monthlyPayment * numberOfPayments + downPayment;
    const totalInterest = totalPayment - vehiclePrice;

    return {
      monthlyPayment: Math.round(monthlyPayment),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest),
      loanAmount: principal
    };
  }, [vehiclePrice, downPayment, loanTerm, interestRate]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('fr-MA', {
      style: 'currency',
      currency: 'MAD',
      maximumFractionDigits: 0
    }).format(value);
  };

  const termOptions = [12, 24, 36, 48, 60, 72, 84];

  return (
    <Layout>
      <PageHeader
        badge="Financement"
        title="Calculateur de Financement"
        subtitle="Estimez vos mensualités"
        description="Utilisez notre outil pour simuler votre crédit auto et découvrir les mensualités adaptées à votre budget."
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Form */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-gold" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  Simulateur de Crédit
                </h2>
              </div>

              <div className="space-y-8">
                {/* Vehicle Price */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-medium text-foreground">Prix du véhicule</label>
                    <span className="text-gold font-semibold">{formatCurrency(vehiclePrice)}</span>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="500000"
                    step="5000"
                    value={vehiclePrice}
                    onChange={(e) => setVehiclePrice(Number(e.target.value))}
                    className="w-full h-2 bg-secondary rounded-full appearance-none cursor-pointer accent-gold"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>50,000 MAD</span>
                    <span>500,000 MAD</span>
                  </div>
                </div>

                {/* Down Payment */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-medium text-foreground">Apport initial</label>
                    <span className="text-gold font-semibold">{formatCurrency(downPayment)}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={vehiclePrice * 0.5}
                    step="5000"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="w-full h-2 bg-secondary rounded-full appearance-none cursor-pointer accent-gold"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>0 MAD</span>
                    <span>{formatCurrency(vehiclePrice * 0.5)}</span>
                  </div>
                </div>

                {/* Loan Term */}
                <div>
                  <label className="font-medium text-foreground block mb-3">
                    Durée du crédit
                  </label>
                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                    {termOptions.map((term) => (
                      <button
                        key={term}
                        onClick={() => setLoanTerm(term)}
                        className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                          loanTerm === term
                            ? 'bg-gold-gradient text-primary-foreground shadow-gold'
                            : 'bg-secondary text-foreground hover:bg-secondary/80'
                        }`}
                      >
                        {term} mois
                      </button>
                    ))}
                  </div>
                </div>

                {/* Interest Rate */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="font-medium text-foreground">Taux d'intérêt annuel</label>
                    <span className="text-gold font-semibold">{interestRate.toFixed(1)}%</span>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="12"
                    step="0.5"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full h-2 bg-secondary rounded-full appearance-none cursor-pointer accent-gold"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-1">
                    <span>3%</span>
                    <span>12%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div>
              <div className="bg-charcoal rounded-2xl p-8 text-cream mb-8">
                <h3 className="text-lg font-medium text-cream/80 mb-2">
                  Mensualité estimée
                </h3>
                <p className="font-serif text-5xl font-bold text-gold mb-6">
                  {formatCurrency(calculation.monthlyPayment)}
                  <span className="text-lg font-normal text-cream/60">/mois</span>
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-cream/10 rounded-xl p-4">
                    <p className="text-cream/60 text-sm mb-1">Montant emprunté</p>
                    <p className="text-xl font-semibold">{formatCurrency(calculation.loanAmount)}</p>
                  </div>
                  <div className="bg-cream/10 rounded-xl p-4">
                    <p className="text-cream/60 text-sm mb-1">Coût total du crédit</p>
                    <p className="text-xl font-semibold">{formatCurrency(calculation.totalInterest)}</p>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-cream/20">
                  <div className="flex justify-between items-center">
                    <span className="text-cream/80">Coût total</span>
                    <span className="text-2xl font-bold">{formatCurrency(calculation.totalPayment)}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gold/10 border border-gold/30 rounded-xl p-6 mb-8">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground mb-1">Simulation indicative</p>
                    <p className="text-sm text-muted-foreground">
                      Cette simulation est donnée à titre indicatif. Le taux et les conditions 
                      définitives dépendent de votre profil et de l'organisme de financement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/appointment" className="flex-1">
                  <Button variant="gold" size="lg" className="w-full">
                    Demander un Financement
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link to="/cars" className="flex-1">
                  <Button variant="gold-outline" size="lg" className="w-full">
                    Voir les Véhicules
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financing Options */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Nos Options de Financement
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Plusieurs solutions adaptées à votre situation et vos besoins.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                Crédit Classique
              </h3>
              <p className="text-muted-foreground mb-4">
                Financez votre véhicule sur une durée de 12 à 84 mois avec des mensualités fixes.
              </p>
              <ul className="space-y-2 text-sm text-foreground">
                <li>✓ Taux à partir de 4.5%</li>
                <li>✓ Apport de 10% minimum</li>
                <li>✓ Propriétaire dès l'achat</li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card border-2 border-gold relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Populaire
              </div>
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                LOA / Leasing
              </h3>
              <p className="text-muted-foreground mb-4">
                Louez avec option d'achat. Mensualités réduites et flexibilité en fin de contrat.
              </p>
              <ul className="space-y-2 text-sm text-foreground">
                <li>✓ Mensualités allégées</li>
                <li>✓ Option d'achat finale</li>
                <li>✓ Changement de véhicule facile</li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                Crédit Ballon
              </h3>
              <p className="text-muted-foreground mb-4">
                Mensualités réduites avec un solde final plus important à la fin du crédit.
              </p>
              <ul className="space-y-2 text-sm text-foreground">
                <li>✓ Mensualités très basses</li>
                <li>✓ Valeur résiduelle garantie</li>
                <li>✓ Options flexibles à l'échéance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FinancePage;
