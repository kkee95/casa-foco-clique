import { Bed, Bath, Car, MapPin } from "lucide-react";
import { useState } from "react";

interface PropertyCardProps {
  id: string;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  image: string;
  onClick?: () => void;
}

const PropertyCard = ({ 
  title, 
  price, 
  location, 
  bedrooms, 
  bathrooms, 
  parking, 
  image, 
  onClick 
}: PropertyCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div 
      className="property-card cursor-pointer group"
      onClick={onClick}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden">
        {!imageLoaded && (
          <div className="image-placeholder h-48">
            <div className="w-8 h-8 bg-muted-foreground/20 rounded"></div>
          </div>
        )}
        <img
          src={image}
          alt={title}
          className={`property-image ${imageLoaded ? 'block' : 'hidden'}`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute top-3 right-3">
          <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-semibold text-primary">
            Destaque
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-3">
        {/* Price */}
        <div className="property-price">
          {price}
        </div>

        {/* Title */}
        <h3 className="text-property-title line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1 property-location">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{location}</span>
        </div>

        {/* Features */}
        <div className="flex items-center gap-4 pt-2 border-t border-border">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Bed className="w-4 h-4" />
            <span className="text-sm">{bedrooms}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Bath className="w-4 h-4" />
            <span className="text-sm">{bathrooms}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Car className="w-4 h-4" />
            <span className="text-sm">{parking}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;