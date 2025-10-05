import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { Card } from '../components/ui/Card';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@platinummarketing.io',
      link: 'mailto:hello@platinummarketing.io',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '(555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Office',
      content: '123 Marketing Ave, Tech City, TC 12345',
      link: null,
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon-Fri: 9:00 AM - 6:00 PM EST',
      link: null,
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Have questions? We'd love to hear from you. Our team is here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} hover className="p-6 text-center">
                  <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-slate-600">{info.content}</p>
                  )}
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
              Visit Our Office
            </h2>
            <p className="text-lg text-slate-600">
              We welcome you to visit us at our headquarters. Please schedule an appointment in advance.
            </p>
          </div>

          <Card className="overflow-hidden">
            <div className="aspect-video bg-slate-200 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-600">
                  Interactive map would be displayed here
                </p>
                <p className="text-sm text-slate-500 mt-2">
                  123 Marketing Ave, Tech City, TC 12345
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 sm:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg opacity-90 mb-8">
              The best way to learn about our services is through a personalized consultation.
              Fill out our lead capture form to schedule your free session.
            </p>
            <a
              href="/landing"
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:shadow-lg transition-all"
            >
              Schedule Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
