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
import { useState } from "react";
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
                Faça parte dos +35 mil profissionais que impulsionaram suas carreiras. 87% dos nossos alunos conquistam
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
                    +<CountUp end={35} suffix="k" />
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
                Aproveite benefícios como +3 cursos bônus de IA e até 70% OFF.*
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
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
                  <item.icon
                    className="h-10 w-10 text-primary animate-float"
                    style={{
                      animationDelay: `${index * 0.2}s`,
                    }}
                  />
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
                  text: "Networking alumni",
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
                  text: "Networking alumni",
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
                    <CountUp end={210} />
                  </div>
                  <p className="text-muted-foreground">Parceiras corporativas</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-4">
              <Card className="p-6 hover-scale">
                <h3 className="font-bold text-lg mb-2">Career Lab</h3>
                <p className="text-sm text-muted-foreground">
                  Diagnóstico de perfil, construção de plano de carreira e acesso a oportunidades
                </p>
              </Card>

              <Card className="p-6 hover-scale">
                <h3 className="font-bold text-lg mb-2">Sprints com Empresas</h3>
                <p className="text-sm text-muted-foreground">
                  Desafios com líderes para solucionar cases reais do mercado
                </p>
              </Card>

              <Card className="p-6 hover-scale">
                <h3 className="font-bold text-lg mb-2">Comunidade Alumni</h3>
                <p className="text-sm text-muted-foreground">Ambiente exclusivo para compartilhar vagas e mentorias</p>
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
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <p>Agenda flexível para atendimento individual</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                  <p>Atendimento rápido e personalizado            </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
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
                        <h4 className="font-bold text-lg">Acesso ao laboratório de IAs premium</h4>
                        <p className="text-muted-foreground text-sm">Ferramentas profissionais à sua disposição</p>
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

                  {/* Financing Info */}
                  <div className="mb-4 md:mb-6">
                    <h4 className="font-bold text-base md:text-lg mb-2">
                      Bolsas e Financiamentos: PROUNI, FIES, Parcelamento FASUL
                    </h4>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      Diversas opções de financiamento e bolsas disponíveis. Consulte nossas condições especiais.
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
      <footer className="text-white py-12 px-4 bg-[0C2039] bg-[#0d213a]">
        <div className="container mx-auto">
          <div className="flex flex-col items-center space-y-6">
            {/* Logo */}
            <img src={logoFasul} alt="Fasul Educacional" className="h-16" />

            {/* Social Media */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/fasuleducacionalead"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/fasulead/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/school/54152401/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://www.youtube.com/@fasuleducacionalead"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-white/60 pt-4">© 2025 Fasul Educacional. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Index;
