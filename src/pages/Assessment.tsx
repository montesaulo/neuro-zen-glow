import { useState } from "react";
import { Brain, ArrowRight, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";

const Assessment = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    whatsapp: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleStartAssessment = () => {
    console.log("Starting assessment with:", formData);
    // Implement assessment logic here
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              
              <h1 className="text-4xl font-bold mb-4">
                Avaliação Neuropsicológica
              </h1>
              
              <p className="text-medical">
                Descubra seu perfil neuropsicológico com nossa avaliação científica
              </p>
              
              {/* Assessment Features */}
              <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  Metodologia DSM-5
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  15 minutos
                </div>
                <div className="flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  100% Seguro
                </div>
              </div>
            </div>

            {/* Assessment Form */}
            <div className="glass-card p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Brain className="w-6 h-6" />
                Informações Pessoais
              </h2>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="fullName" className="text-base font-medium">
                    Nome completo *
                  </Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Digite seu nome completo"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    className="mt-2 h-12 bg-card border-border"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="age" className="text-base font-medium">
                      Idade *
                    </Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="Digite sua idade"
                      value={formData.age}
                      onChange={(e) => handleInputChange("age", e.target.value)}
                      className="mt-2 h-12 bg-card border-border"
                    />
                  </div>

                  <div>
                    <Label htmlFor="gender" className="text-base font-medium">
                      Gênero *
                    </Label>
                    <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                      <SelectTrigger className="mt-2 h-12 bg-card border-border">
                        <SelectValue placeholder="Selecione o gênero" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="masculino">Masculino</SelectItem>
                        <SelectItem value="feminino">Feminino</SelectItem>
                        <SelectItem value="nao-binario">Não-binário</SelectItem>
                        <SelectItem value="prefiro-nao-informar">Prefiro não informar</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="whatsapp" className="text-base font-medium">
                    WhatsApp *
                  </Label>
                  <Input
                    id="whatsapp"
                    type="tel"
                    placeholder="(11) 99999-9999"
                    value={formData.whatsapp}
                    onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                    className="mt-2 h-12 bg-card border-border"
                  />
                  <p className="text-sm text-muted-foreground mt-2">
                    Você receberá o relatório completo via WhatsApp
                  </p>
                </div>

                <Button 
                  onClick={handleStartAssessment}
                  className="w-full h-14 text-lg font-semibold gradient-primary hover:scale-105 transition-transform"
                  disabled={!formData.fullName || !formData.age || !formData.gender || !formData.whatsapp}
                >
                  Iniciar Avaliação
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="flex items-start gap-3 p-4 bg-accent/10 border border-accent/20 rounded-xl">
              <AlertCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                Esta avaliação é informativa e não substitui diagnóstico médico profissional. 
                Os resultados devem ser interpretados por profissionais qualificados.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Assessment;