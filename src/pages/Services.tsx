import { Link } from 'react-router-dom';
import { Database, Headphones, Calendar, Globe, Mail, Phone } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export function Services() {
  const services = [
    {
      icon: Database,
      title: 'Lead Capture & CRM Integration',
      description:
        'Automatically capture leads from multiple sources and seamlessly integrate them into your CRM. Track every interaction and never miss an opportunity.',
      features: [
        'Multi-channel lead capture',
        'CRM integration',
        'Lead scoring & qualification',
        'Real-time notifications',
      ],
    },
    {
      icon: Headphones,
      title: 'Customer Support Ticket Management',
      description:
        'Streamline your support operations with automated ticket routing, prioritization, and tracking. Deliver exceptional customer service at scale.',
      features: [
        'Automated ticket routing',
        'Priority-based queuing',
        'Response templates',
        'Performance analytics',
      ],
    },
    {
      icon: Calendar,
      title: 'Appointment Setting',
      description:
        'Eliminate scheduling headaches with intelligent appointment booking. Let customers book meetings instantly while preventing double bookings.',
      features: [
        'Automated scheduling',
        'Calendar sync',
        'Reminder notifications',
        'Time zone management',
      ],
    },
    {
      icon: Globe,
      title: 'Website Design, SEO & Hosting',
      description:
        'Launch a stunning, high-performance website optimized for search engines. We handle design, development, and reliable hosting.',
      features: [
        'Custom responsive design',
        'SEO optimization',
        'Fast & secure hosting',
        'Analytics integration',
      ],
    },
    {
      icon: Mail,
      title: 'Email Marketing Campaigns',
      description:
        'Create targeted email campaigns that convert. From design to delivery, we automate your email marketing for maximum engagement.',
      features: [
        'Automated campaigns',
        'A/B testing',
        'Personalization',
        'Performance tracking',
      ],
    },
    {
      icon: Phone,
      title: 'AI Phone Callers',
      description:
        'Deploy intelligent AI-powered phone systems that handle calls professionally. Qualify leads, book appointments, and provide information 24/7.',
      features: [
        'Natural conversation AI',
        'Call recording & transcription',
        'Lead qualification',
        'Appointment booking',
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Comprehensive automation solutions designed to streamline your operations,
              capture more leads, and drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} hover className="p-6 flex flex-col h-full">
                  <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-4 flex-grow">
                    {service.description}
                  </p>
                  <div className="border-t border-slate-200 pt-4">
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li
                          key={fIndex}
                          className="text-sm text-slate-600 flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Let us show you how our automation solutions can transform your business.
            Schedule a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/landing">
              <Button size="lg">Get Your Free Consultation</Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" size="lg">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
