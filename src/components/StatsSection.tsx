const StatsSection = () => {
  const stats = [
    {
      number: "50K+",
      label: "Assessments Completed",
    },
    {
      number: "98%",
      label: "Accuracy Rate",
    },
    {
      number: "500+",
      label: "Healthcare Partners",
    },
    {
      number: "24/7",
      label: "Support Available",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center glass-card p-8 hover:glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Trusted By Section */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-8">Trusted by leading medical institutions</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-lg font-semibold">Mayo Clinic</div>
            <div className="text-lg font-semibold">Johns Hopkins</div>
            <div className="text-lg font-semibold">Cleveland Clinic</div>
            <div className="text-lg font-semibold">Mass General</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;