import { Link } from 'react-router-dom';
import { CheckCircle, Clock, Mail, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export function ThankYou() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center px-4">
      <div className="max-w-3xl w-full py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full mb-6 shadow-lg">
            <CheckCircle className="w-14 h-14 text-green-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Thank You!
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Your request has been successfully received.
          </p>
        </div>

        <Card className="p-8 mb-8 bg-white shadow-xl">
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
              <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  We'll Reply Within 24 Hours or Less
                </h3>
                <p className="text-slate-600">
                  Our team is reviewing your request and will get back to you with a personalized
                  response as soon as possible. Most responses are sent within a few hours.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
              <div className="bg-slate-600 p-3 rounded-lg flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  Check Your Email
                </h3>
                <p className="text-slate-600">
                  We've sent a confirmation to your email address. If you don't see it,
                  please check your spam folder.
                </p>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-3 text-center">
                What Happens Next?
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    1
                  </div>
                  <span className="text-slate-700">
                    Our expert team will review your requirements and business needs
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    2
                  </div>
                  <span className="text-slate-700">
                    We'll reach out to schedule your free consultation at a time that works for you
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    3
                  </div>
                  <span className="text-slate-700">
                    We'll discuss how our automation solutions can transform your business
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        <div className="text-center space-y-4">
          <p className="text-slate-600">
            In the meantime, feel free to explore more about our services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" variant="primary" className="group">
                Return to Home
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
