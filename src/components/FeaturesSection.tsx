import { Brain, Activity, Shield, Zap, Users, BarChart3 } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms provide deeper insights into cognitive patterns and assessment results.",
    },
    {
      icon: Activity,
      title: "Real-Time Monitoring",
      description: "Track patient progress with live data visualization and automated report generation.",
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Enterprise-grade security ensures patient data protection and regulatory compliance.",
    },
    {
      icon: Zap,
      title: "Instant Results",
      description: "Get comprehensive assessment reports within minutes of test completion.",
    },
    {
      icon: Users,
      title: "Collaborative Platform",
      description: "Share insights securely with your healthcare team and improve patient outcomes.",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive data visualization and trend analysis for better clinical decisions.",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="heading-section mb-6">
            Comprehensive Neuropsychological
            <br />
            <span className="gradient-secondary bg-clip-text text-transparent">Assessment Platform</span>
          </h2>
          <p className="text-medical max-w-3xl mx-auto">
            Revolutionize neuropsychological evaluations with AI-powered assessments, 
            real-time analytics, and evidence-based insights for better patient outcomes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title}
                className="float-card p-8 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="glass-hero p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              Ready to Transform Your Practice?
            </h3>
            <p className="text-medical mb-8">
              Join hundreds of healthcare professionals using NeuroZen for advanced neuropsychological assessments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Start Free Trial
              </button>
              <button className="btn-secondary">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;