import { Target, Users, Award, TrendingUp } from 'lucide-react';
import { Card } from '../components/ui/Card';

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Mission Driven',
      description: 'We are committed to empowering businesses through intelligent automation.',
    },
    {
      icon: Users,
      title: 'Client Focused',
      description: 'Your success is our success. We build lasting partnerships.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We deliver premium quality in every project we undertake.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We stay ahead of trends to bring you cutting-edge solutions.',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              About Platinum Marketing
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We are a forward-thinking marketing automation agency dedicated to helping
              businesses thrive in the digital age through innovative technology and strategic expertise.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Founded with a vision to revolutionize how businesses approach marketing,
                  Platinum Marketing has grown into a trusted partner for companies seeking to
                  automate and optimize their marketing operations.
                </p>
                <p>
                  We recognized early on that businesses were drowning in manual tasks, losing
                  valuable leads, and struggling to maintain consistent customer communication.
                  Our solution? Intelligent automation that works 24/7 to capture, nurture, and
                  convert leads while providing real-time insights.
                </p>
                <p>
                  Today, we serve businesses of all sizes, from startups to enterprises, helping
                  them achieve unprecedented growth through our comprehensive automation solutions.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why We're Different</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Automation First</div>
                    <div className="text-sm opacity-90">
                      Every solution we build is designed to save you time and maximize efficiency.
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Data-Driven Results</div>
                    <div className="text-sm opacity-90">
                      We measure everything and optimize constantly for better performance.
                    </div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-white/20 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Dedicated Support</div>
                    <div className="text-sm opacity-90">
                      Our team is always here to ensure your success.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              These principles guide everything we do and define who we are as a company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} hover className="p-6 text-center">
                  <div className="bg-gradient-to-br from-blue-100 to-cyan-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-600">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 sm:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-lg opacity-90 mb-8">
              Let's discuss how we can help automate your marketing and drive real results.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-sm opacity-75">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-sm opacity-75">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-sm opacity-75">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
