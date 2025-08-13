import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, Award } from "lucide-react";
import Header from "@/components/Header";
import SearchFilters from "@/components/SearchFilters";
import PropertyCard from "@/components/PropertyCard";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { mockProperties } from "@/data/properties";
import heroImage from "@/assets/hero-real-estate.jpg";

const Index = () => {
  const navigate = useNavigate();
  const [filteredProperties] = useState(mockProperties.slice(0, 6)); // Show first 6 properties

  const handlePropertyClick = (propertyId: string) => {
    navigate(`/property/${propertyId}`);
  };

  const stats = [
    { icon: TrendingUp, label: "Imóveis vendidos", value: "2.500+" },
    { icon: Users, label: "Clientes satisfeitos", value: "1.200+" },
    { icon: Award, label: "Anos de experiência", value: "15+" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppFloat />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Real Estate Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 overlay-gradient"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white section-padding max-w-4xl mx-auto">
          <h1 className="text-hero mb-6 animate-fade-up">
            Encontre o Imóvel dos 
            <span className="block text-primary-glow">Seus Sonhos</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Mais de 2.500 imóveis vendidos. Sua nova casa está aqui.
          </p>
          
          {/* Quick Stats */}
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-12 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary-glow" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>

          <Button 
            className="bg-white/20 backdrop-blur-sm text-white border border-white/20 hover:bg-white/30 h-14 px-8 text-lg font-semibold animate-bounce-in"
            style={{ animationDelay: '0.6s' }}
            onClick={() => document.getElementById('search')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Buscar Imóveis
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Search Section */}
      <section id="search" className="section-margin section-padding bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Busque Seu Imóvel Ideal
            </h2>
            <p className="text-xl text-muted-foreground">
              Use nossos filtros avançados para encontrar exatamente o que procura
            </p>
          </div>
          
          <SearchFilters 
            onSearch={(filters) => {
              console.log('Search filters:', filters);
              // Navigate to search results or filter properties
            }}
          />
        </div>
      </section>

      {/* Featured Properties */}
      <section id="properties" className="section-margin section-padding">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Imóveis em Destaque
            </h2>
            <p className="text-xl text-muted-foreground">
              Selecionamos os melhores imóveis para você
            </p>
          </div>

          <div className="properties-grid">
            {filteredProperties.map((property, index) => (
              <div
                key={property.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <PropertyCard
                  {...property}
                  onClick={() => handlePropertyClick(property.id)}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              className="h-12 px-8 text-lg"
              onClick={() => {
                // Navigate to full property listing page
                console.log('Show all properties');
              }}
            >
              Ver Todos os Imóveis
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-margin section-padding bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Por que Escolher a Claudio Nascimento corretor de imóveis?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 hero-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Experiência Comprovada</h3>
                    <p className="text-muted-foreground">
                      Mais de 15 anos no mercado imobiliário com milhares de clientes satisfeitos.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 hero-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Atendimento Personalizado</h3>
                    <p className="text-muted-foreground">
                      Nossa equipe especializada te acompanha em todo o processo de compra ou venda.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 hero-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Reconhecimento de Mercado</h3>
                    <p className="text-muted-foreground">
                      Premiada como uma das melhores imobiliárias de Pernambuco.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
                <img
                  src={heroImage}
                  alt="Sobre a Claudio Nascimento corretor de imóveis"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-margin section-padding">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Encontrar Seu Imóvel?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Nossa equipe está pronta para te ajudar a realizar o sonho da casa própria.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="hero-gradient text-white h-14 px-8 text-lg font-semibold"
              onClick={() => {
                const phoneNumber = "5581993524942";
                const message = "Olá! Gostaria de mais informações sobre os imóveis disponíveis.";
                const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(url, '_blank');
              }}
            >
              Falar no WhatsApp
            </Button>
            <Button 
              variant="outline" 
              className="h-14 px-8 text-lg font-semibold"
            >
              Agendar Visita
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto section-padding">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 hero-gradient rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Claudio Nascimento corretor de imóveis</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Sua imobiliária de confiança há mais de 15 anos. 
                Realizamos sonhos e conectamos pessoas aos seus lares ideais.
              </p>
              <div className="text-sm text-muted-foreground">
                CRECI-SP 12345 • CNPJ: 12.345.678/0001-90
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>(81) 99352-4942</p>
                <p>claudionascimento02@gmail.com</p>
                <p>Recife, PE</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Links Úteis</h4>
              <div className="space-y-2 text-sm">
                <a href="#" className="text-muted-foreground hover:text-primary block">Financiamento</a>
                <a href="#" className="text-muted-foreground hover:text-primary block">Documentação</a>
                <a href="#" className="text-muted-foreground hover:text-primary block">Avaliação</a>
                <a href="#" className="text-muted-foreground hover:text-primary block">Blog</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 Claudio Nascimento corretor de imóveis. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
