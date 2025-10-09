import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Zap, TrendingUp, Users, Clock } from 'lucide-react';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Select } from '../components/ui/Select';
import { Button } from '../components/ui/Button';
import { Loading } from '../components/ui/Loading';
import { SERVICES } from '../constants/services';
import { leadService } from '../services/leads';

export function Landing() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    company: '',
    service_interested: SERVICES[0],
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.full_name.trim()) {
      newErrors.full_name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\(\)\+]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await leadService.createLead(formData);

      if (error) {
        alert('Failed to submit form. Please try again.');
        setIsSubmitting(false);
        return;
      }

      navigate('/thank-you');
    } catch (error) {
      alert('An unexpected error occurred. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const benefits = [
    {
      icon: Zap,
      title: 'Instant Response',
      description: 'Get a personalized consultation within 24 hours',
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Join 500+ businesses growing with our solutions',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Work with certified automation specialists',
    },
    {
      icon: Clock,
      title: 'No Commitment',
      description: 'Free consultation with no obligation',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="lg:sticky lg:top-24">
            <div className="mb-6">
              <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
                Free Consultation
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Transform Your Business with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                  Marketing Automation
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Stop losing leads and missing opportunities. Let our automation solutions work
                24/7 to capture, nurture, and convert prospects into customers.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-slate-700 font-medium">
                  Capture leads from multiple channels automatically
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-slate-700 font-medium">
                  Never miss a follow-up with intelligent reminders
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-slate-700 font-medium">
                  Scale your operations without hiring more staff
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-slate-700 font-medium">
                  Get real-time insights into your marketing performance
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 shadow-sm border border-slate-200"
                  >
                    <Icon className="w-8 h-8 text-blue-600 mb-2" />
                    <h3 className="font-semibold text-slate-900 text-sm mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-slate-600">{benefit.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm opacity-75">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">95%</div>
                  <div className="text-sm opacity-75">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">24/7</div>
                  <div className="text-sm opacity-75">Support</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10">
            <div className="mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                Get Your Free Consultation
              </h2>
              <p className="text-slate-600">
                Fill out the form below and we'll be in touch within 24 hours to discuss your needs.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                label="Full Name"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                error={errors.full_name}
                placeholder="John Doe"
                required
              />

              <Input
                label="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                placeholder="john@company.com"
                required
              />

              <Input
                label="Phone Number"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                error={errors.phone}
                placeholder="(555) 123-4567"
                required
              />

              <Input
                label="Company (Optional)"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company Name"
              />

              <Select
                label="Service Interested In"
                name="service_interested"
                value={formData.service_interested}
                onChange={handleChange}
                options={SERVICES.map((service) => ({
                  value: service,
                  label: service,
                }))}
                required
              />

              <Textarea
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                placeholder="Tell us about your business needs and goals..."
                rows={4}
                required
              />

              <Button
                type="submit"
                size="lg"
                fullWidth
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <Loading size="sm" />
                    <span>Submitting...</span>
                  </div>
                ) : (
                  'Get Free Consultation'
                )}
              </Button>

              <p className="text-xs text-slate-500 text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
                We'll never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
