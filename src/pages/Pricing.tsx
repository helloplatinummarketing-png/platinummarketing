import { Link } from 'react-router-dom';
import { Check, Puzzle, Star, Settings } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export function Pricing() {
  const plans = [
    {
      name: 'Starter Package',
      subtitle: 'Lead Launch',
      icon: Puzzle,
      setupPrice: '350',
      monthlyPrice: '50',
      color: 'blue',
      goal: 'Get small businesses online fast with a system to capture and manage leads.',
      description: 'Perfect for small real estate agents, home repair pros, cleaners, etc.',
      features: [
        '1-page conversion website (designed + hosted)',
        'Basic lead capture form integrated to Airtable CRM',
        'Email notification for every new lead',
        'Appointment booking setup (Calendly)',
        '1 automation workflow (form → email → CRM)',
      ],
      tools: ['Bolt.ai', 'Netlify', 'Airtable', 'Calendly', 'Make.com'],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Growth Package',
      subtitle: 'Client Flow',
      icon: Star,
      setupPrice: '800',
      monthlyPrice: '100',
      color: 'royal',
      goal: 'Automate lead capture, scheduling, and follow-ups to increase conversions.',
      description: 'Perfect for growing agencies & established service businesses.',
      features: [
        'Full website (3–5 pages: Home, Services, About, Contact)',
        'Integrated CRM (Airtable) with filters & dashboards',
        'Automated email follow-ups for new leads',
        'Appointment booking & reminders',
        'AI chatbot for FAQs (Voiceflow)',
        'SEO setup (on-page + Google My Business optimisation)',
      ],
      tools: ['Voiceflow', 'Airtable', 'Calendly', 'Make.com', 'Netlify'],
      cta: 'Book a Consultation',
      popular: true,
    },
    {
      name: 'Scale Package',
      subtitle: 'Automation Pro',
      icon: Settings,
      setupPrice: '1,500',
      monthlyPrice: '250',
      color: 'silver',
      goal: 'Fully automate communication, AI phone support, and advanced analytics.',
      description: 'Includes AI call credits & full management.',
      features: [
        'Everything in Growth Package',
        'AI voice agent (calls & responses) — Bland AI or Vapi AI',
        'Ticketing system for customer support (Voiceflow)',
        'Custom email sequences (nurture + reactivation)',
        'Advanced performance dashboard (Supabase/Notion)',
        'Priority support + monthly optimisation meeting',
      ],
      tools: ['Bland AI / Vapi AI', 'Voiceflow', 'Airtable', 'Make.com', 'Netlify', 'OpenAI'],
      cta: 'Talk to an Expert',
      popular: false,
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'from-blue-50 to-blue-100',
          icon: 'bg-gradient-to-br from-blue-400 to-blue-600',
          badge: 'bg-blue-100 text-blue-700',
          border: 'border-blue-200',
          hover: 'hover:border-blue-400',
        };
      case 'royal':
        return {
          bg: 'from-blue-100 to-blue-200',
          icon: 'bg-gradient-to-br from-blue-600 to-blue-800',
          badge: 'bg-blue-600 text-white',
          border: 'border-blue-600',
          hover: 'hover:shadow-2xl hover:scale-105',
        };
      case 'silver':
        return {
          bg: 'from-slate-100 to-slate-200',
          icon: 'bg-gradient-to-br from-slate-400 to-slate-600',
          badge: 'bg-slate-200 text-slate-700',
          border: 'border-slate-300',
          hover: 'hover:border-slate-500',
        };
      default:
        return {
          bg: 'from-slate-50 to-slate-100',
          icon: 'bg-slate-600',
          badge: 'bg-slate-100 text-slate-700',
          border: 'border-slate-200',
          hover: 'hover:border-slate-400',
        };
    }
  };

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Platinum Marketing Service Packages
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Choose the automation package that fits your business needs. From simple lead capture to full AI-powered communication systems.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              const colors = getColorClasses(plan.color);

              return (
                <Card
                  key={index}
                  hover
                  className={`p-8 flex flex-col relative border-2 ${colors.border} ${colors.hover} transition-all duration-300 ${
                    plan.popular ? 'ring-4 ring-blue-600 ring-offset-4' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="flex flex-col items-center text-center mb-6">
                    <div className={`${colors.icon} p-4 rounded-2xl mb-4 shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-lg font-semibold text-blue-600 mb-3">
                      "{plan.subtitle}"
                    </p>
                    <p className="text-sm text-slate-600 italic mb-4">
                      {plan.goal}
                    </p>
                  </div>

                  <div className="mb-6 text-center">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-baseline justify-center">
                        <span className="text-3xl font-bold text-slate-900">
                          £{plan.setupPrice}
                        </span>
                        <span className="text-slate-600 ml-2 text-sm">setup</span>
                      </div>
                      <div className="flex items-baseline justify-center">
                        <span className="text-2xl font-bold text-blue-600">
                          £{plan.monthlyPrice}
                        </span>
                        <span className="text-slate-600 ml-2 text-sm">/month</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">
                      Includes:
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-slate-600 mb-2 uppercase tracking-wide">
                      Tools:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {plan.tools.map((tool, tIndex) => (
                        <span
                          key={tIndex}
                          className={`${colors.badge} text-xs px-2 py-1 rounded-full font-medium`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-slate-500 italic text-center">
                      {plan.description}
                    </p>
                  </div>

                  <Link to="/landing" className="mt-auto">
                    <Button
                      variant={plan.popular ? 'primary' : 'outline'}
                      size="lg"
                      fullWidth
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Can I change plans later?
              </h3>
              <p className="text-slate-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected
                in your next billing cycle.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-slate-600">
                We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Is there a setup fee?
              </h3>
              <p className="text-slate-600">
                No setup fees for Starter and Professional plans. Enterprise plans may include a
                one-time onboarding fee depending on customization requirements.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Do you offer refunds?
              </h3>
              <p className="text-slate-600">
                Yes, we offer a 30-day money-back guarantee. If you're not satisfied with our
                services, we'll refund your payment in full.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Not Sure Which Plan Is Right?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Schedule a free consultation and we'll help you choose the perfect plan for your business.
          </p>
          <Link to="/landing">
            <Button size="lg">Schedule Free Consultation</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
