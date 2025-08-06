import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Bed, Bath, Car, Ruler, MapPin, Share2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPropertyById } from "@/data/properties";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Header from "@/components/Header";

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [property, setProperty] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  useEffect(() => {
    if (id) {
      const propertyData = getPropertyById(id);
      setProperty(propertyData);
    }
  }, [id]);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Imóvel não encontrado</h2>
          <Button onClick={() => navigate('/')} variant="outline">
            Voltar ao início
          </Button>
        </div>
      </div>
    );
  }

  const handleWhatsApp = () => {
    const phoneNumber = "5511999999999";
    const message = `Olá! Tenho interesse no imóvel: ${property.title} - ${property.price}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: property.title,
          text: `Confira este imóvel: ${property.title}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copiado para a área de transferência!');
    }
  };

  const images = property.images || [property.image];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppFloat />
      
      {/* Back Button */}
      <div className="fixed top-20 left-4 z-30">
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate(-1)}
          className="bg-white/90 backdrop-blur-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar
        </Button>
      </div>

      {/* Hero Gallery */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={images[currentImageIndex]}
          alt={property.title}
          className="w-full h-full object-cover cursor-pointer"
          onClick={() => setShowLightbox(true)}
        />
        
        {/* Gallery Navigation */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentImageIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        )}

        {/* Overlay Gradient */}
        <div className="absolute inset-0 overlay-gradient"></div>
        
        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleShare}
            className="bg-white/90 backdrop-blur-sm"
          >
            <Share2 className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-white/90 backdrop-blur-sm"
          >
            <Heart className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="property-details-grid section-padding py-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Property Header */}
          <div className="space-y-4">
            <div className="property-price text-3xl md:text-4xl">
              {property.price}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              {property.title}
            </h1>
            <div className="flex items-center gap-2 property-location text-base">
              <MapPin className="w-5 h-5" />
              {property.location}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-muted/50 rounded-xl">
            <div className="text-center">
              <Bed className="w-6 h-6 mx-auto mb-2 text-primary" />
              <div className="font-semibold">{property.bedrooms}</div>
              <div className="text-sm text-muted-foreground">Quartos</div>
            </div>
            <div className="text-center">
              <Bath className="w-6 h-6 mx-auto mb-2 text-primary" />
              <div className="font-semibold">{property.bathrooms}</div>
              <div className="text-sm text-muted-foreground">Banheiros</div>
            </div>
            <div className="text-center">
              <Car className="w-6 h-6 mx-auto mb-2 text-primary" />
              <div className="font-semibold">{property.parking}</div>
              <div className="text-sm text-muted-foreground">Vagas</div>
            </div>
            <div className="text-center">
              <Ruler className="w-6 h-6 mx-auto mb-2 text-primary" />
              <div className="font-semibold">{property.area}m²</div>
              <div className="text-sm text-muted-foreground">Área</div>
            </div>
          </div>

          {/* Description */}
          <div className="prose prose-gray max-w-none">
            <div 
              dangerouslySetInnerHTML={{ 
                __html: property.description.replace(/\n/g, '<br>') 
              }} 
            />
          </div>

          {/* Features Tags */}
          {property.features && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Características</h3>
              <div className="flex flex-wrap gap-2">
                {property.features.map((feature, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contact Card */}
          <div className="bg-card rounded-xl p-6 border border-border shadow-[var(--shadow-soft)] sticky top-24">
            <h3 className="text-lg font-semibold mb-4">Interessado?</h3>
            <div className="space-y-3">
              <Button 
                onClick={handleWhatsApp}
                className="w-full hero-gradient text-white font-semibold h-12"
              >
                Falar no WhatsApp
              </Button>
              <Button variant="outline" className="w-full h-12">
                Agendar Visita
              </Button>
              <Button variant="outline" className="w-full h-12">
                Simular Financiamento
              </Button>
            </div>
            
            <div className="mt-6 pt-6 border-t border-border">
              <div className="text-sm text-muted-foreground mb-2">Corretor responsável</div>
              <div className="font-semibold">João Silva</div>
              <div className="text-sm text-muted-foreground">CRECI 123456-F</div>
            </div>
          </div>

          {/* Map */}
          {property.mapEmbed && (
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-lg font-semibold mb-4">Localização</h3>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src={property.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {showLightbox && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowLightbox(false)}
        >
          <img
            src={images[currentImageIndex]}
            alt={property.title}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <Button
            variant="outline"
            className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white border-white/20"
            onClick={() => setShowLightbox(false)}
          >
            ✕
          </Button>
        </div>
      )}

      {/* Fixed CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border p-4 md:hidden">
        <Button 
          onClick={handleWhatsApp}
          className="w-full hero-gradient text-white font-semibold h-12"
        >
          Entrar em Contato - {property.price}
        </Button>
      </div>
    </div>
  );
};

export default PropertyDetails;