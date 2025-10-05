import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Target, TrendingUp, Users } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export function Home() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Automate your marketing workflows and see results in record time.',
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Reach the right audience with data-driven targeting strategies.',
    },
    {
      icon: TrendingUp,
      title: 'Growth Focused',
      description: 'Proven strategies that scale with your business growth.',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Dedicated professionals committed to your success.',
    },
  ];

  const services = [
    'Lead Capture & CRM Integration',
    'Customer Support Ticket Management',
    'Appointment Setting',
    'Website Design, SEO & Hosting',
    'Email Marketing Campaigns',
    'AI Phone Callers',
  ];

  return (
    <div className="flex flex-col">
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Automate Your Success with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Platinum Marketing
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
              Transform your business with intelligent automation solutions that capture leads,
              manage relationships, and drive conversions while you focus on what matters most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/landing">
                <Button size="lg" className="group">
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg">
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Platinum Marketing?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with proven strategies to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} hover className="p-6">
                  <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Our Comprehensive Services
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                From lead generation to customer retention, we provide end-to-end automation
                solutions that streamline your marketing operations and maximize ROI.
              </p>
              <ul className="space-y-4 mb-8">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-medium">{service}</span>
                  </li>
                ))}
              </ul>
              <Link to="/services">
                <Button variant="primary" size="lg">
                  View All Services
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
                <p className="mb-6 opacity-90">
                  Join hundreds of businesses that have automated their way to success with
                  Platinum Marketing.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-sm opacity-90">Happy Clients</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-3xl font-bold">95%</div>
                    <div className="text-sm opacity-90">Success Rate</div>
                  </div>
                </div>
                <Link to="/landing">
                  <Button variant="secondary" size="lg" fullWidth>
                    Start Your Journey
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Start Automating Today
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Schedule a free consultation and discover how Platinum Marketing can transform your business.
          </p>
          <Link to="/landing">
            <Button size="lg" className="group">
              Get Your Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
