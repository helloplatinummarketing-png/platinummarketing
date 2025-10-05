import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export function Blog() {
  const posts = [
    {
      title: '10 Ways Marketing Automation Can Transform Your Business',
      excerpt:
        'Discover how automation can help you capture more leads, improve customer relationships, and drive revenue growth.',
      author: 'Sarah Johnson',
      date: 'October 1, 2025',
      category: 'Automation',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'The Future of AI in Customer Support',
      excerpt:
        'Learn how AI-powered support systems are revolutionizing customer service and what it means for your business.',
      author: 'Michael Chen',
      date: 'September 28, 2025',
      category: 'AI Technology',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Lead Generation Strategies That Actually Work',
      excerpt:
        'Proven techniques for capturing high-quality leads and converting them into loyal customers.',
      author: 'Emily Rodriguez',
      date: 'September 25, 2025',
      category: 'Lead Generation',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Email Marketing Best Practices for 2025',
      excerpt:
        'Stay ahead of the curve with these cutting-edge email marketing strategies that drive engagement and conversions.',
      author: 'David Park',
      date: 'September 22, 2025',
      category: 'Email Marketing',
      image: 'https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'SEO Trends You Need to Know',
      excerpt:
        'The search landscape is evolving. Learn the latest SEO strategies to keep your website ranking high.',
      author: 'Lisa Anderson',
      date: 'September 19, 2025',
      category: 'SEO',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Building a Scalable CRM Strategy',
      excerpt:
        'How to implement a CRM system that grows with your business and maximizes customer lifetime value.',
      author: 'Tom Williams',
      date: 'September 15, 2025',
      category: 'CRM',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
              Insights & Resources
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Expert tips, industry insights, and practical guides to help you master marketing automation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} hover className="flex flex-col h-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-3">
                    <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 mb-4 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-slate-500">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Stop reading about automation and start experiencing it. Schedule your free consultation today.
          </p>
          <Link to="/landing">
            <Button size="lg" className="group">
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
