import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

export interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  area: number;
  image: string;
  images?: string[];
  description: string;
  type: 'apartamento' | 'casa' | 'cobertura' | 'sobrado' | 'terreno';
  features: string[];
  mapEmbed?: string;
}

export const mockProperties: Property[] = [
  {
    id: "1",
    title: "Apartamento Moderno no Centro",
    price: "R$ 450.000",
    location: "Centro, São Paulo - SP",
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    area: 75,
    image: property1,
    images: [property1, property2, property3],
    description: `
# Apartamento Moderno no Centro

Este **apartamento moderno** oferece o melhor da vida urbana com todo o conforto que você precisa.

## Características principais:
- **2 quartos** com armários planejados
- **2 banheiros** com acabamento em porcelanato
- **Sala ampla** com varanda
- **Cozinha americana** totalmente equipada
- **1 vaga de garagem** coberta

## Localização privilegiada:
- Próximo ao metrô
- Shopping centers nas redondezas
- Escolas e hospitais
- Área de lazer completa

*Pronto para morar!*
    `,
    type: 'apartamento',
    features: ['Varanda', 'Armários Planejados', 'Portaria 24h', 'Elevador', 'Academia'],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1075!2d-46.6388!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjgiUyA0NsKwMzgnMTkuNyJX!5e0!3m2!1spt!2sbr!4v1234567890"
  },
  {
    id: "2",
    title: "Casa com Jardim Vila Madalena",
    price: "R$ 850.000",
    location: "Vila Madalena, São Paulo - SP",
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    area: 150,
    image: property2,
    images: [property2, property1, property3],
    description: `
# Casa Térrea com Jardim

Linda **casa térrea** em uma das regiões mais charmosas de São Paulo.

## Destaques:
- **3 quartos** sendo 1 suíte
- **Sala de estar** e jantar integradas
- **Cozinha gourmet** com ilha
- **Jardim privativo** com churrasqueira
- **2 vagas** de garagem

## Bairro:
A Vila Madalena é conhecida por sua **vida cultural** vibrante, com bares, restaurantes e galerias de arte.

*Perfeita para famílias!*
    `,
    type: 'casa',
    features: ['Jardim', 'Churrasqueira', 'Suíte', 'Cozinha Gourmet', 'Quintal'],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1075!2d-46.6888!3d-23.5405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMyJzI1LjgiUyA0NsKwNDEnMTkuNyJX!5e0!3m2!1spt!2sbr!4v1234567890"
  },
  {
    id: "3",
    title: "Cobertura Luxury Itaim Bibi",
    price: "R$ 1.200.000",
    location: "Itaim Bibi, São Paulo - SP",
    bedrooms: 4,
    bathrooms: 4,
    parking: 3,
    area: 200,
    image: property3,
    images: [property3, property1, property2],
    description: `
# Cobertura de Luxo

**Cobertura excepcional** com vista panorâmica da cidade.

## Luxo e sofisticação:
- **4 suítes** com closets
- **Terraço** com piscina privativa
- **Sala de estar** com pé-direito duplo
- **Cozinha gourmet** com ilha central
- **3 vagas** na garagem
- **Depósito** privativo

## Condomínio:
- Portaria 24h
- Academia completa
- Salão de festas
- Playground

*Alto padrão de acabamento!*
    `,
    type: 'cobertura',
    features: ['Piscina Privativa', 'Terraço', 'Vista Panorâmica', 'Closets', 'Academia'],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1075!2d-46.6788!3d-23.5605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzM3LjgiUyA0NsKwNDAnNDMuNyJX!5e0!3m2!1spt!2sbr!4v1234567890"
  },
  {
    id: "4",
    title: "Apartamento Mobiliado Brooklin",
    price: "R$ 380.000",
    location: "Brooklin, São Paulo - SP",
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    area: 45,
    image: property1,
    description: `
# Studio Moderno

**Studio completamente mobiliado** ideal para jovens profissionais.

## Incluso:
- Mobília completa
- Eletrodomésticos
- Internet fibra óptica
- TV por assinatura

*Mudança imediata!*
    `,
    type: 'apartamento',
    features: ['Mobiliado', 'Internet', 'TV Cabo', 'Pronto para Morar']
  },
  {
    id: "5",
    title: "Sobrado Familiar Perdizes",
    price: "R$ 720.000",
    location: "Perdizes, São Paulo - SP",
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    area: 180,
    image: property2,
    description: `
# Sobrado Familiar

**Sobrado espaçoso** perfeito para famílias grandes.

## Destaque:
- 3 pavimentos
- Quintal amplo
- Área gourmet
- Home office

*Excelente localização!*
    `,
    type: 'sobrado',
    features: ['3 Pavimentos', 'Quintal', 'Home Office', 'Área Gourmet']
  },
  {
    id: "6",
    title: "Loft Industrial Moema",
    price: "R$ 520.000",
    location: "Moema, São Paulo - SP",
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    area: 60,
    image: property3,
    description: `
# Loft Industrial

**Loft moderno** com conceito industrial e muito charme.

## Características:
- Pé-direito alto
- Tijolos aparentes
- Varanda ampla
- Cozinha integrada

*Design único!*
    `,
    type: 'apartamento',
    features: ['Loft', 'Industrial', 'Pé-direito Alto', 'Design Único']
  }
];

export const getPropertyById = (id: string): Property | undefined => {
  return mockProperties.find(property => property.id === id);
};