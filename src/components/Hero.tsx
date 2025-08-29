import { Brain, Activity, Shield, ArrowRight } from "lucide-react";
import heroBrainNetwork from "../assets/hero-brain-network.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBrainNetwork})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 gradient-surface" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neuro-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neuro-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-6 py-3 mb-8 text-sm text-muted-foreground">
            <Shield className="w-4 h-4" />
            Trusted by 500+ Healthcare Professionals
          </div>
          
          {/* Main Heading with Animated Words */}
          <h1 className="heading-hero mb-8">
            Advanced <span className="animated-word">Neurological</span>
            <br />
            <span className="gradient-primary bg-clip-text text-transparent">Assessment Platform</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-medical max-w-3xl mx-auto mb-12 text-xl md:text-2xl">
            Revolucione avaliações neuropsicológicas com análises baseadas em IA,
            análises em tempo real e insights baseados em evidências para melhores
            resultados dos pacientes.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a href="/assessment" className="btn-primary group">
              Iniciar Teste Gratuito
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/chat" className="btn-secondary">
              Assistir Demonstração
            </a>
          </div>
          
          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="float-card p-6 text-left">
              <div className="w-12 h-12 bg-neuro-primary/20 rounded-xl flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-neuro-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cognitive Profiling</h3>
              <p className="text-muted-foreground">
                Comprehensive assessment of memory, attention, executive function, and processing speed with validated neuropsychological instruments.
              </p>
            </div>
            
            <div className="float-card p-6 text-left">
              <div className="w-12 h-12 bg-neuro-primary/20 rounded-xl flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-neuro-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-time Analytics</h3>
              <p className="text-muted-foreground">
                Advanced data visualization and pattern recognition to identify cognitive strengths and areas requiring intervention.
              </p>
            </div>
            
            <div className="float-card p-6 text-left">
              <div className="w-12 h-12 bg-neuro-primary/20 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-neuro-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">HIPAA Compliant</h3>
              <p className="text-muted-foreground">
                Enterprise-grade security with end-to-end encryption ensuring patient data privacy and regulatory compliance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;