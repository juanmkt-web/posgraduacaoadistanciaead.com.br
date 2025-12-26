import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CountdownTimer } from "@/components/CountdownTimer";
import { CountUp } from "@/components/CountUpStats";
import { LiveFeed } from "@/components/LiveFeed";
import {
  TrendingUp,
  PieChart,
  BarChart3,
  Sparkles,
  Brain,
  Briefcase,
  Award,
  Users,
  Clock,
  Video,
  BookOpen,
  Target,
  Lightbulb,
  GraduationCap,
  FolderKanban,
  Trophy,
  ChevronDown,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import { Meteors } from "@/components/ui/meteors";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { BorderBeam } from "@/components/ui/border-beam";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import logoFasul from "@/assets/logo_fasul.png";
const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    area: "",
    objective: "",
    consent: false,
  });

  // Set countdown to 2 days from now
  const countdownDate = new Date();
  countdownDate.setDate(countdownDate.getDate() + 2);

  // Load Reclame Aqui scripts
  useEffect(() => {
    // Script for reputation widget
    const reputationScript = document.createElement('script');
    reputationScript.src = 'https://s3.amazonaws.com/raichu-beta/selos/bundle.js';
    reputationScript.defer = true;
    reputationScript.id = 'ra-embed-reputation';
    reputationScript.setAttribute('data-id', 'cDd6eDZOQ09hVFdfM0pjcDpmYXN1bG1nLWZhY3VsZGFkZS1zdWxtaW5laXJh');
    reputationScript.setAttribute('data-target', 'reputation-ra');
    reputationScript.setAttribute('data-model', '2');
    
    // Script for verified seal
    const verifiedScript = document.createElement('script');
    verifiedScript.src = 'https://s3.amazonaws.com/raichu-beta/ra-verified/bundle.js';
    verifiedScript.defer = true;
    verifiedScript.id = 'ra-embed-verified-seal';
    verifiedScript.setAttribute('data-id', 'cDd6eDZOQ09hVFdfM0pjcDpmYXN1bG1nLWZhY3VsZGFkZS1zdWxtaW5laXJh');
    verifiedScript.setAttribute('data-target', 'ra-verified-seal');
    verifiedScript.setAttribute('data-model', '2');

    const reputationContainer = document.getElementById('reputation-ra');
    const verifiedContainer = document.getElementById('ra-verified-seal');
    
    if (reputationContainer) {
      reputationContainer.appendChild(reputationScript);
    }
    if (verifiedContainer) {
      verifiedContainer.appendChild(verifiedScript);
    }

    return () => {
      // Cleanup scripts on unmount
      const existingReputation = document.getElementById('ra-embed-reputation');
      const existingVerified = document.getElementById('ra-embed-verified-seal');
      if (existingReputation) existingReputation.remove();
      if (existingVerified) existingVerified.remove();
    };
  }, []);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast({
        title: "Consentimento necessário",
        description: "Por favor, aceite receber comunicações para continuar.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Formulário enviado!",
      description: "Entraremos em contato em até 24 horas.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      area: "",
      objective: "",
      consent: false,
    });
  };
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="gradient-hero pt-20 md:pt-32 pb-12 md:pb-20 px-4 relative overflow-hidden">
        {/* Meteors effect */}
        <div className="absolute inset-0 opacity-50">
          <Meteors number={50} />
        </div>

        {/* Animated particles effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-pulse-soft" />
          <div className="absolute top-40 right-20 w-3 h-3 bg-accent rounded-full animate-float" />
          <div
            className="absolute bottom-40 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse-soft"
            style={{
              animationDelay: "1s",
            }}
          />
          <div
            className="absolute top-1/3 right-1/3 w-2 h-2 bg-accent rounded-full animate-float"
            style={{
              animationDelay: "2s",
            }}
          />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-5 gap-6 md:gap-8 items-center">
            {/* Left Column - 60% */}
            <div className="lg:col-span-3 space-y-4 md:space-y-6">
              <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <span className="text-white text-sm font-semibold">PÓS-GRADUAÇÃO EAD</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Já pensou em ganhar mais? Com uma Pós isso pode se tornar realidade
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed">
                Faça parte dos +10 mil profissionais que impulsionaram suas carreiras. 87% dos nossos alunos conquistam
                promoção em até 12 meses.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground font-semibold px-8 hover:bg-accent/90 hover:scale-[1.02] hover:shadow-xl transition-all duration-500 ease-out"
                  asChild
                >
                  <a
                    href="#lead-form"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("lead-form")?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                  >
                    Garantir minha bolsa
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-primary font-semibold"
                  asChild
                >
                  <a
                    href="https://www.fasuleducacional.edu.br/posgraduacao/cursos"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Conhecer os cursos
                  </a>
                </Button>
              </div>

              {/* Social Proof Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 pt-6 md:pt-8">
                <div className="text-center">
                  <div className="flex justify-center mb-1 md:mb-2">
                    <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-accent" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    +<CountUp end={10} suffix="k" />
                  </div>
                  <p className="text-white/80 text-xs md:text-sm mt-1">Profissionais impulsionados</p>
                </div>

                <div className="text-center">
                  <div className="flex justify-center mb-1 md:mb-2">
                    <PieChart className="h-6 w-6 md:h-8 md:w-8 text-accent" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    <CountUp end={98} suffix="%" />
                  </div>
                  <p className="text-white/80 text-xs md:text-sm mt-1">Satisfação dos alunos</p>
                </div>

                <div className="text-center">
                  <div className="flex justify-center mb-1 md:mb-2">
                    <BarChart3 className="h-6 w-6 md:h-8 md:w-8 text-accent" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    +<CountUp end={120} />
                  </div>
                  <p className="text-white/80 text-xs md:text-sm mt-1">Empresas parceiras</p>
                </div>
              </div>
            </div>

            {/* Right Column - 40% Pricing Card */}
            <div className="lg:col-span-2">
              <Card className="bg-white/95 backdrop-blur-sm border-none shadow-2xl p-6 md:p-8 animate-float hover:shadow-primary/20 transition-shadow duration-300">
                <div className="text-center space-y-6 my-[2px]">
                  <div className="bg-primary/10 rounded-lg py-3 px-4">
                    <p className="text-primary font-bold text-sm uppercase tracking-wide">
                      Condição Especial de Lançamento
                    </p>
                  </div>

                  <div className="py-4">
                    <p className="text-muted-foreground text-sm md:text-base mb-2">A partir de 12x de</p>
                    <p className="mb-2 font-sans font-extrabold text-primary text-6xl md:text-7xl lg:text-8xl">R$66</p>
                    <p className="text-muted-foreground text-sm md:text-base">mensais*</p>
                  </div>

                  <div className="space-y-3 text-left pt-2 my-0">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm">​Ganhe mais 3 Pós-Graduações como bônus</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm">Conclusão a partir de 3 meses</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm">Matrícula grátis    </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Banner */}
      <section className="gradient-dark py-8 md:py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Incentivos exclusivos para a nova turma
              </h2>
              <p className="text-white/80 mb-1 font-normal text-sm md:text-base">
                Aproveite benefícios como +3 Pós-Graduações e até 70% OFF.*
              </p>
              <p className="text-accent font-bold text-base md:text-lg">VAGAS LIMITADAS</p>
            </div>

            <div className="text-center w-full lg:w-auto">
              <p className="text-white/80 mb-3 md:mb-4 uppercase text-xs md:text-sm tracking-wide">
                A oferta termina em:
              </p>
              <CountdownTimer targetDate={countdownDate} />
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section id="differentials" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              A combinação certa entre excelência acadêmica e performance profissional
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estruturamos as jornadas de Pós-Graduação para que você aprenda com profundidade, aplique rápido e avance
              na carreira
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "Aprendizado Ativo",
                desc: "Conteúdo criado voltado para o mercado.",
              },
              {
                icon: GraduationCap,
                title: "Docentes e Mentores",
                desc: "Professores mestres e doutores",
              },
              {
                icon: FolderKanban,
                title: "Projeto de Carreira",
                desc: "Trilhas personalizadas para seu desenvolvimento",
              },
              {
                icon: Trophy,
                title: "Reconhecimento",
                desc: "Cursos credenciados pelo MEC e alinhados às demandas do setor",
              },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4 hover-lift">
                <div
                  className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4 animate-float-container"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <item.icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section - Carousel */}
      <section id="advantages" className="relative py-20 px-4 overflow-hidden bg-[030D1A] bg-[#030e1b]">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <p className="text-white/50 text-sm uppercase tracking-[0.3em] mb-4">BENEFÍCIOS & PROMOÇÕES</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Vantagens exclusivas na Pós-Graduação FASUL</h2>
          </div>

          {/* Carousel Container */}
          <div className="marquee-container">
            <div className="marquee-content">
              {/* Lista Original */}
              {[
                {
                  text: "Conclua em 3 meses",
                },
                {
                  text: "+10 cursos de IA inclusos",
                },
                {
                  text: "Faça de onde quiser",
                },
                {
                  text: "Certificação MEC",
                },
                {
                  text: "Liberdade e Flexibilidade",
                },
                {
                  text: "Aulas on demand",
                },
                {
                  text: "Bolsa Fasul",
                },
              ].map((vantagem, index) => (
                <div className="card-vantagem" key={`original-${index}`}>
                  <CheckCircle2 className="w-5 h-5 text-accent mb-2 flex-shrink-0" />
                  <p className="text-white font-semibold text-sm">{vantagem.text}</p>
                </div>
              ))}
              {/* Lista Duplicada (para o efeito infinito) */}
              {[
                {
                  text: "Conclua em 3 meses",
                },
                {
                  text: "+10 cursos de IA inclusos",
                },
                {
                  text: "Faça de onde quiser",
                },
                {
                  text: "Certificação MEC",
                },
                {
                  text: "Liberdade e Flexibilidade",
                },
                {
                  text: "Aulas on demand",
                },
                {
                  text: "Bolsa Fasul",
                },
              ].map((vantagem, index) => (
                <div className="card-vantagem" key={`clone-${index}`} aria-hidden="true">
                  <CheckCircle2 className="w-5 h-5 text-accent mb-2 flex-shrink-0" />
                  <p className="text-white font-semibold text-sm">{vantagem.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Results */}
      <section id="social-proof" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3 space-y-6">
              <div className="inline-block bg-primary/10 rounded-full px-4 py-2">
                <span className="text-primary text-sm font-semibold uppercase">Resultados de Empregabilidade</span>
              </div>

              <h2 className="text-4xl font-bold">Evolução concreta da carreira</h2>

              <p className="text-xl text-muted-foreground">
                Nossa formação combina competências técnicas e comportamentais para você liderar transformações
              </p>

              <div className="grid grid-cols-3 gap-6 pt-6">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={87} suffix="%" />
                  </div>
                  <p className="text-muted-foreground">Alunos promovidos em até 12 meses</p>
                </div>

                <div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={42} suffix="%" />
                  </div>
                  <p className="text-muted-foreground">Média de aumento salarial</p>
                </div>

                <div>
                  <div className="text-4xl font-bold text-primary mb-2">
                    <CountUp end={120} />
                  </div>
                  <p className="text-muted-foreground">Parceiras corporativas</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-4">
              <Card className="p-6 hover-scale">
                <h3 className="font-bold text-lg mb-2">PÓS 100% EAD</h3>
                <p className="text-sm text-muted-foreground">
                  Estude de onde estiver com total flexibilidade. Aulas online ao vivo e gravadas para você acompanhar
                  no seu ritmo
                </p>
              </Card>

              <Card className="p-6 hover-scale">
                <h3 className="font-bold text-lg mb-2">10 CURSOS DE IA</h3>
                <p className="text-sm text-muted-foreground">
                  Receba 10 cursos de Inteligência Artificial voltados para aplicação prática na sua área de
                  Pós-Graduação
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Live Feed Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="inline-block bg-primary/10 rounded-full px-4 py-2">
                <span className="text-primary text-sm font-semibold uppercase">Inscrições em tempo real</span>
              </div>

              <h2 className="text-4xl font-bold">Quem está garantindo vaga agora na Pós</h2>

              <p className="text-xl text-muted-foreground">
                A cada minuto novos profissionais se conectam. Veja as inscrições recentes e garanta a sua antes que as
                turmas esgotem.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p>Atendimento rápido e humanizado  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p>Condições especiais liberadas para as próximas matrículas</p>
                </div>
              </div>
            </div>

            <div>
              <LiveFeed />
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section id="lead-form" className="py-12 md:py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 md:gap-12 items-center">
            <div className="lg:col-span-2 space-y-4 md:space-y-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Receba o guia completo dos programas</h2>

              <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
                Entre em contato para conversar com nosso time de consultores educacionais e descobrir as condições
                especiais desta edição.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p>Agenda flexível para atendimento individual</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p>Atendimento rápido e personalizado            </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p>Condições especiais de lançamento para turmas 2026</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <Card className="relative p-5 md:p-6 lg:p-8 shadow-xl overflow-hidden bg-muted/30 border border-border">
                <div className="space-y-4 md:space-y-6">
                  {/* Header */}
                  <div className="mb-4 md:mb-6">
                    <h3 className="text-xl md:text-2xl font-bold">Bônus Exclusivos Desta Campanha</h3>
                  </div>

                  {/* Benefits List */}
                  <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-lg">+3 Pós-Graduações grátis</h4>
                        <p className="text-muted-foreground text-sm">
                          Continue sua especialização sem custos adicionais
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                      <h4 className="font-bold text-lg">10 Cursos de IA da sua área</h4>
                        <p className="text-muted-foreground text-sm">Cursos práticos de Inteligência Artificial específicos para sua área de pós-graduação</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-lg">Conclusão a partir de 3 meses                    </h4>
                        <p className="text-muted-foreground text-sm">Valorize seu currículo rapidamente</p>
                      </div>
                    </div>
                  </div>

                  {/* Price Card */}
                  <div className="bg-accent rounded-lg p-4 md:p-6 text-center my-4 md:my-6">
                    <p className="text-[#0d213a] text-xs md:text-sm font-semibold mb-1 md:mb-2">A partir de</p>
                    <p className="text-[#0d213a] font-extrabold mb-1 md:mb-2 text-4xl md:text-5xl lg:text-6xl">
                      R$ 66/mês
                    </p>
                    <p className="text-[#0d213a] text-xs md:text-sm font-semibold">Apenas R$ 2,20 por dia</p>
                  </div>

                  {/* Certificate Info */}
                  <div className="mb-4 md:mb-6">
                    <h4 className="font-bold text-base md:text-lg mb-2">
                      Certificado reconhecido pelo MEC
                    </h4>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      Diploma válido em todo território nacional com reconhecimento do Ministério da Educação.
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Button
                    size="lg"
                    className="w-full bg-[#0c213b] hover:bg-[#0c213b]/90 text-white font-bold text-base md:text-lg py-5 md:py-6 hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <a href="https://www.fasuleducacional.edu.br/#anchor_pos" target="_blank" rel="noopener noreferrer">
                      QUERO MINHA BOLSA
                    </a>
                  </Button>
                </div>
                <BorderBeam size={250} duration={12} borderWidth={1.5} />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Left Column - Title */}
            <div className="md:col-span-2 space-y-4">
              <div className="inline-block">
                <span className="text-primary text-sm font-semibold uppercase tracking-wide">Perguntas frequentes</span>
              </div>
              <h2 className="text-4xl font-bold leading-tight">
                Tudo o que você precisa saber para decidir com confiança.
              </h2>
              <p className="text-muted-foreground">
                Caso sua pergunta não esteja aqui, nossa equipe educacional está pronta para ajudar.
              </p>
            </div>

            {/* Right Column - Questions */}
            <div className="md:col-span-3">
              <Accordion type="single" collapsible className="space-y-3">
                <AccordionItem
                  value="item-1"
                  className="bg-card border border-border rounded-lg px-6 hover:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="hover:no-underline py-5 text-left font-normal">
                    Os cursos são reconhecidos pelo MEC?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    Sim, todos os nossos programas de pós-graduação são credenciados pelo MEC e seguem as diretrizes do
                    Conselho Nacional de Educação. Você receberá um diploma reconhecido em todo território nacional.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="bg-card border border-border rounded-lg px-6 hover:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="hover:no-underline py-5 text-left font-normal">
                    Como funcionam as aulas?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    As aulas são 100% online, com conteúdos gravados disponíveis na plataforma 24/7. Você escolhe quando
                    e onde estudar!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="bg-card border border-border rounded-lg px-6 hover:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="hover:no-underline py-5 text-left font-normal">
                    Posso concluir em 3 Meses?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    Sim! você consegue concluir sua Pós-Graduação em apenas 3 meses, a especialização que você precisa
                    no menor tempo possivel!
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="bg-card border border-border rounded-lg px-6 hover:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="hover:no-underline py-5 text-left font-normal">
                    Posso conciliar com a rotina de trabalho?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    Absolutamente. Nossa metodologia foi desenhada para profissionais em atividade. Com aulas gravadas,
                    você consegue equilibrar trabalho, estudo e vida pessoal.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-5"
                  className="bg-card border border-border rounded-lg px-6 hover:border-primary/30 transition-colors"
                >
                  <AccordionTrigger className="hover:no-underline py-5 text-left font-normal">
                    Quais são as formas de pagamento?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    Oferecemos parcelamento em até 18x no cartão de crédito, boleto bancário ou PIX. Além disso, temos
                    condições especiais de bolsa para matrículas antecipadas e programas de financiamento estudantil.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-main rodapePadd">
        {/* Main Footer Content */}
        <div className="white-background">
          <div className="footer-container white-background !p-0 sm:!p-5">
            <div className="footer-row">
              {/* First Column - Logo and Social */}
              <div className="w-full lg:w-1/4 p-0 text-left">
                <a href="https://www.fasuleducacional.edu.br/" title="Faculdade FASUL">
                  <img loading="lazy" width="222" height="87" src="/images/logorodape.png" className="max-w-full h-auto mb-4" alt="FASUL LOGO" />
                </a>
                <a href="https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/MjE3NTc=" title="QR Code MEC" target="_blank" rel="noopener noreferrer">
                  <img loading="lazy" width="211" height="104" src="/images/qrcodemec.webp" className="mb-4" alt="QR Code MEC" />
                </a>
                <ul className="p-0 text-left">
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/quem-somos">O GRUPO</a></li>
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/polos-fasul-educacional">SEJA POLO FASUL</a></li>
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/trabalhe-conosco">TRABALHE CONOSCO</a></li>
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/assessoria-imprensa">ASSESSORIA DE IMPRENSA</a></li>
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/termos-de-uso">TERMOS DE USO</a></li>
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/ouvidoria">OUVIDORIA</a></li>
                </ul>
                <div className="text-left p-0 mt-4">
                  <a href="https://www.facebook.com/fasuleducacionalead/" target="_blank" rel="noopener noreferrer" title="Facebook">
                    <img loading="lazy" width="32" height="32" src="/images/facebook.webp" alt="Facebook" className="max-w-full h-auto m-1 inline-block" />
                  </a>
                  <a href="https://www.instagram.com/fasulead/" target="_blank" rel="noopener noreferrer" title="Instagram">
                    <img loading="lazy" width="29" height="30" src="/images/instagram.webp" alt="Instagram" className="max-w-full h-auto m-1 inline-block" />
                  </a>
                  <a href="https://www.youtube.com/channel/UCXFGu7TVBJPX5LuHtWu2OHQ" target="_blank" rel="noopener noreferrer" title="Youtube">
                    <img loading="lazy" width="33" height="27" src="/images/youtube.webp" alt="Youtube" className="max-w-full h-auto m-1 inline-block" />
                  </a>
                  <a href="https://www.linkedin.com/company/fasul-educacional/" target="_blank" rel="noopener noreferrer" title="Linkedin">
                    <img loading="lazy" width="29" height="29" src="/images/linkedin.webp" alt="Linkedin" className="max-w-full h-auto m-1 inline-block" />
                  </a>
                </div>
                <br />
                <span className="porttxt">PORTARIA DE CREDENCIAMENTO EAD:</span>
                <br />
                <span className="txtrodape">A FACULDADE FASUL EDUCACIONAL EAD FOI CREDENCIADA DE ACORDO COM A PORTARIA Nº499 DE 08/07/2021, CONFORME PUBLICAÇÃO NO D.O.U. EM 09/07/2021.</span>
              </div>

              {/* Second Column - Institucional */}
              <div className="w-full lg:w-1/4 p-0">
                <h2 className="tituloRodape">Institucional</h2>
                <ul className="p-0 text-left">
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/organizacao-administrativa">Organização Administrativa</a></li>
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/corpo-docente">Corpo Docente</a></li>
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/quem-somos">Quem Somos</a></li>
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/modalidades-de-ensino">Modalidades de Ensino</a></li>
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/processos-seletivos">Processos Seletivos</a></li>
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/regimento-interno">Regimento Interno</a></li>
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/formas-de-ingresso">Formas de Ingresso</a></li>
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/projetos-e-pesquisas">Projetos e Pesquisas</a></li>
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/extensao-e-responsabilidade-social">Extensão e Responsabilidade Social</a></li>
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/comissao-propria-de-avaliacao">Comissão Própria de Avaliação</a></li>
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/egressos">Egressos</a></li>
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/formaturas">Formaturas</a></li>
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/perguntas-frequentes">Perguntas Frequentes</a></li>
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/central-de-empregos-e-carreiras">Central de Empregos e Carreiras</a></li>
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/cadastro-do-egresso">Cadastro do Egresso</a></li>
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/bibliotecas">Bibliotecas</a></li>
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/desenvolvimento-artistico-e-cultural">Desenvolvimento Artístico e Cultural</a></li>
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/revista-cientifica-fasul">Revista Científica FASUL</a></li>
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/plano-de-desenvolvimento-institucional">Plano de Desenvolvimento Institucional - (PDI)</a></li>
                </ul>
              </div>

              {/* Third Column - Educação a Distância */}
              <div className="w-full lg:w-1/4 p-0">
                <h2 className="tituloRodape">Educação a Distância</h2>
                <ul className="p-0 text-left">
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/cursos-graduacao-ead">Graduação EAD</a></li>
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/posgraduacao/cursos">Pós-Graduação EAD</a></li>
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/extensao-universitaria-ead">Extensão Universitária EAD</a></li>
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/mba-ead">MBA EAD</a></li>
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/cursos-profissionalizantes-ead">Cursos Profissionalizantes EAD</a></li>
                </ul>
                <h2 className="tituloRodape mt-6">Educação Presencial<br />SEMIPRESENCIAL</h2>
                <ul className="p-0 text-left">
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/cursos-graduacao-presencial">Graduação</a></li>
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/cursos-pos-graduacao-presencial">Pós-Graduação</a></li>
                </ul>
                <h2 className="tituloRodape mt-6">Manuais</h2>
                <ul className="p-0 text-left">
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/docs/manual-geral-do-aluno-fasul-2025.pdf" target="_blank">Manual do Aluno</a></li>
                </ul>
                <h2 className="tituloRodape mt-6">Acadêmico</h2>
                <ul className="p-0 text-left">
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/diploma">Registro de Diplomas</a></li>
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/diploma-historico">Registro de Históricos</a></li>
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/tcc-repositorio">Repositórios de TCC</a></li>
                </ul>
              </div>

              {/* Fourth Column - Bolsas e Regulamentos */}
              <div className="w-full lg:w-1/4 p-0">
                <h2 className="tituloRodape">Bolsas e Financiamentos</h2>
                <ul className="p-0 text-left">
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/concursodebolsas">Programa de Bolsas</a></li>
                </ul>
                <h2 className="tituloRodape mt-6">Regulamentos</h2>
                <ul className="p-0 text-left">
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/docs/regulamento-enade.pdf" target="_blank">Regulamento e Termo de Compromisso Enade</a></li>
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/docs/regulamento-atividades-complementares.pdf" target="_blank">Regulamento de Atividades Complementares</a></li>
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/docs/regulamento-atividades-extensao.pdf" target="_blank">Regulamento de Atividades de Extensão</a></li>
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/docs/regulamento-pict.pdf" target="_blank">Regulamento do Programa de Iniciação Científica e Tecnológica - PICT</a></li>
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/docs/regulamentos-campanhas-promocionais.pdf" target="_blank">Regulamentos de Campanhas Promocionais</a></li>
                  <li className="lirodape"><a className="atxtrodape" href="https://www.fasuleducacional.edu.br/docs/regulamento-certificacao-intermediaria.pdf" target="_blank">Regulamento Certificação Intermediária</a></li>
                </ul>
                <h2 className="tituloRodape mt-6 pt-2">Reclame Aqui</h2>
                <div className="flex flex-row gap-2 items-center mt-2 pb-4">
                  <div id="reputation-ra"></div>
                  <div id="ra-verified-seal"></div>
                </div>
                <div className="mt-5">
                  <p className="text-footer-acreditamos m-0">Nós Acreditamos em Deus</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <section className="footer-contact" aria-labelledby="footer-contact-title">
          <div className="footer-contact__container">
            <div className="footer-contact__intro">
              <span className="footer-contact__intro-title">Fale Conosco</span>
              <span className="footer-contact__intro-subtitle" id="footer-contact-title">Qual canal gostaria de falar?</span>
            </div>
            <div className="footer-contact__cards">
              {/* Call Card */}
              <div className="contact-channel-card contact-channel-card--call">
                <div className="contact-channel-card__label">
                  <span className="contact-channel-card__label-icon">
                    {/* CallIcon SVG */}
                  </span>
                  LIGAÇÃO
                </div>
                <div className="contact-channel-card__list">
                  <div className="contact-channel-card__item contact-channel-card__item--call">
                    <div className="contact-channel-card__item-content">
                      <div className="contact-channel-card__item-title">1. FAÇA SUA MATRÍCULA AGORA</div>
                      <div className="contact-channel-card__promo-banner">
                        <div className="contact-channel-card__promo-content">
                          <span className="contact-channel-card__promo-text contact-channel-card__promo-text--cyan">GANHE 3 PÓS-GRADUAÇÕES</span>
                          <span className="contact-channel-card__promo-text contact-channel-card__promo-text--pink">+ 10 CURSOS DE IA</span>
                        </div>
                        <div className="contact-channel-card__promo-badge">VAGAS<br />LIMITADAS</div>
                      </div>
                      <p className="contact-channel-card__item-text">Tire suas dúvidas sobre Cursos de Graduação e Pós-graduação...</p>
                      <div className="contact-channel-card__phone contact-channel-card__phone--inline contact-channel-card__phone-text">
                        {/* PhoneIcon SVG */}
                        (35) 2888-0007
                      </div>
                      <a className="contact-channel-card__phone contact-channel-card__phone--inline contact-channel-card__phone-link" href="https://wa.me/5531987885883">
                        {/* WhatsAppIcon SVG */}
                        (31) 98788-5883
                      </a>
                    </div>
                  </div>
                  <div className="contact-channel-card__item contact-channel-card__item--call">
                    <div className="contact-channel-card__item-content">
                      <div className="contact-channel-card__item-title">2. CONVERSE CONOSCO</div>
                      <p className="contact-channel-card__item-text">Estamos prontos para tirar suas dúvidas...</p>
                      <div className="contact-channel-card__phone contact-channel-card__phone--inline contact-channel-card__phone-text">
                        {/* PhoneIcon SVG */}
                        (35) 2038-0560
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="contact-channel-card contact-channel-card--whatsapp">
                <div className="contact-channel-card__label">
                  <span className="contact-channel-card__label-icon">
                    {/* WhatsAppIcon SVG */}
                  </span>
                  WHATSAPP
                </div>
                <div className="contact-channel-card__list">
                  <div className="contact-channel-card__item">
                    <div className="contact-channel-card__item-content">
                      <div className="contact-channel-card__item-title">3. ATENDIMENTO SECRETARIA</div>
                      <p className="contact-channel-card__item-text">Pendências de Documentos, Histórico, Declarações...</p>
                    </div>
                    <a className="contact-channel-card__cta" href="https://wa.me/5521991586516">
                      {/* WhatsAppIcon SVG */}
                    </a>
                  </div>
                  <div className="contact-channel-card__item">
                    <div className="contact-channel-card__item-content">
                      <div className="contact-channel-card__item-title">4. TUTORIA (APOIO AO ALUNO)</div>
                      <p className="contact-channel-card__item-text">Dúvidas sobre o Conteúdo das Aulas...</p>
                    </div>
                    <a className="contact-channel-card__cta" href="https://wa.me/5511991401940">
                      {/* WhatsAppIcon SVG */}
                    </a>
                  </div>
                  <div className="contact-channel-card__item">
                    <div className="contact-channel-card__item-content">
                      <div className="contact-channel-card__item-title">5. FINANCEIRO E ACORDO FÁCIL</div>
                      <p className="contact-channel-card__item-text">Pague sem dor de cabeça! 2ª via de Boletos...</p>
                    </div>
                    <a className="contact-channel-card__cta" href="https://wa.me/5531984088941">
                      {/* WhatsAppIcon SVG */}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Copyright Bar */}
        <div className="blue-background">
          <div className="footer-container flex flex-row justify-between items-center gap-2 py-0.5 sm:py-2 !px-0 sm:!px-2">
            <span className="txtDir text-[7px] sm:text-[15px]">COPYRIGHT © 1997-2025 - FASUL. TODOS OS DIREITOS RESERVADOS.</span>
            <a className="txtPol text-[7px] sm:text-[15px] whitespace-nowrap" href="https://www.fasuleducacional.edu.br/termos-de-uso">Política de privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Index;
