import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '999',
      description: 'Perfect for small businesses getting started with automation',
      features: [
        'Lead Capture & CRM Integration',
        'Basic Email Campaigns',
        'Up to 1,000 leads/month',
        'Email support',
        'Monthly reporting',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Professional',
      price: '2,499',
      description: 'Ideal for growing businesses ready to scale',
      features: [
        'Everything in Starter',
        'Customer Support Ticketing',
        'Appointment Setting',
        'Up to 10,000 leads/month',
        'Priority support',
        'Weekly reporting',
        'A/B testing',
      ],
      cta: 'Get Started',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions for large organizations',
      features: [
        'Everything in Professional',
        'AI Phone Callers',
        'Website Design & SEO',
        'Unlimited leads',
        'Dedicated account manager',
        'Daily reporting',
        'Custom integrations',
        'White-label options',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Choose the plan that fits your business needs. All plans include core automation
              features and can be customized to your requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                hover
                className={`p-8 flex flex-col relative ${
                  plan.popular ? 'ring-2 ring-blue-600' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-slate-600 text-sm">{plan.description}</p>
                </div>

                <div className="mb-6">
                  {plan.price === 'Custom' ? (
                    <div className="text-4xl font-bold text-slate-900">Custom</div>
                  ) : (
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold text-slate-900">
                        ${plan.price}
                      </span>
                      <span className="text-slate-600 ml-2">/month</span>
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/landing">
                  <Button
                    variant={plan.popular ? 'primary' : 'outline'}
                    size="lg"
                    fullWidth
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </Card>
            ))}
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
