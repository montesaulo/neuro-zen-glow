import { Brain, TrendingUp, Users, Clock, Award, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";

const Dashboard = () => {
  const stats = [
    {
      title: "Avaliações Completadas",
      value: "1,247",
      change: "+12%",
      icon: Brain,
      color: "text-neuro-primary"
    },
    {
      title: "Profissionais Ativos",
      value: "342",
      change: "+8%",
      icon: Users,
      color: "text-neuro-secondary"
    },
    {
      title: "Tempo Médio Avaliação",
      value: "14min",
      change: "-2min",
      icon: Clock,
      color: "text-neuro-accent"
    },
    {
      title: "Taxa de Precisão",
      value: "96.8%",
      change: "+0.5%",
      icon: Award,
      color: "text-accent"
    }
  ];

  const recentAssessments = [
    {
      id: "A001",
      patient: "Paciente Anônimo",
      type: "TDAH Adulto",
      status: "Concluído",
      score: 85,
      date: "2024-01-15"
    },
    {
      id: "A002",
      patient: "Paciente Anônimo",
      type: "Superdotação",
      status: "Em Análise",
      score: 92,
      date: "2024-01-14"
    },
    {
      id: "A003",
      patient: "Paciente Anônimo",
      type: "Dupla Excepcionalidade",
      status: "Concluído",
      score: 78,
      date: "2024-01-13"
    }
  ];

  const cognitiveAreas = [
    { name: "Atenção Sustentada", score: 88, color: "bg-neuro-primary" },
    { name: "Memória de Trabalho", score: 76, color: "bg-neuro-secondary" },
    { name: "Função Executiva", score: 82, color: "bg-neuro-accent" },
    { name: "Processamento", score: 91, color: "bg-accent" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Dashboard Neuropsicológico</h1>
            <p className="text-medical">
              Visão geral das avaliações e análises de desempenho
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="float-card">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </CardTitle>
                    <Icon className={`w-5 h-5 ${stat.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="flex items-center text-sm">
                      <TrendingUp className="w-4 h-4 mr-1 text-green-500" />
                      <span className="text-green-500">{stat.change}</span>
                      <span className="text-muted-foreground ml-1">vs último mês</span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Assessments */}
            <Card className="float-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Avaliações Recentes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAssessments.map((assessment) => (
                    <div
                      key={assessment.id}
                      className="flex items-center justify-between p-4 bg-card rounded-lg border border-border"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-mono text-muted-foreground">
                            {assessment.id}
                          </span>
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${
                              assessment.status === "Concluído"
                                ? "bg-green-500/20 text-green-400"
                                : "bg-yellow-500/20 text-yellow-400"
                            }`}
                          >
                            {assessment.status}
                          </span>
                        </div>
                        <p className="font-medium text-sm">{assessment.type}</p>
                        <p className="text-xs text-muted-foreground">{assessment.date}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold">{assessment.score}%</div>
                        <div className="text-xs text-muted-foreground">Score</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Cognitive Performance */}
            <Card className="float-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  Performance Cognitiva
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {cognitiveAreas.map((area, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">{area.name}</span>
                        <span className="text-sm font-bold">{area.score}%</span>
                      </div>
                      <div className="relative">
                        <Progress value={area.score} className="h-2" />
                        <div
                          className={`absolute top-0 left-0 h-2 rounded-full ${area.color}`}
                          style={{ width: `${area.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Insights */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="float-card">
              <CardHeader>
                <CardTitle className="text-lg">Tendências TDAH</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-neuro-primary mb-2">68%</div>
                  <p className="text-sm text-muted-foreground">
                    dos casos mostram melhoria após 6 meses
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="float-card">
              <CardHeader>
                <CardTitle className="text-lg">Superdotação</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-neuro-secondary mb-2">24%</div>
                  <p className="text-sm text-muted-foreground">
                    apresentam dupla excepcionalidade
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="float-card">
              <CardHeader>
                <CardTitle className="text-lg">Precisão IA</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">96.8%</div>
                  <p className="text-sm text-muted-foreground">
                    correlação com diagnóstico clínico
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;