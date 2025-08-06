import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

interface SearchFiltersProps {
  onSearch?: (filters: SearchFilters) => void;
}

interface SearchFilters {
  location: string;
  type: string;
  priceRange: string;
  bedrooms: string;
}

const SearchFilters = ({ onSearch }: SearchFiltersProps) => {
  const [filters, setFilters] = useState<SearchFilters>({
    location: "",
    type: "",
    priceRange: "",
    bedrooms: ""
  });

  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleSearch = () => {
    onSearch?.(filters);
  };

  const updateFilter = (key: keyof SearchFilters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-[var(--shadow-medium)] border border-border/50">
      {/* Main Search Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        {/* Location */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Localização</label>
          <Input
            placeholder="Cidade ou bairro"
            value={filters.location}
            onChange={(e) => updateFilter('location', e.target.value)}
            className="h-12"
          />
        </div>

        {/* Property Type */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Tipo</label>
          <Select value={filters.type} onValueChange={(value) => updateFilter('type', value)}>
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apartamento">Apartamento</SelectItem>
              <SelectItem value="casa">Casa</SelectItem>
              <SelectItem value="cobertura">Cobertura</SelectItem>
              <SelectItem value="sobrado">Sobrado</SelectItem>
              <SelectItem value="terreno">Terreno</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Price Range */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Preço</label>
          <Select value={filters.priceRange} onValueChange={(value) => updateFilter('priceRange', value)}>
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Faixa de preço" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-300000">Até R$ 300.000</SelectItem>
              <SelectItem value="300000-500000">R$ 300.000 - R$ 500.000</SelectItem>
              <SelectItem value="500000-800000">R$ 500.000 - R$ 800.000</SelectItem>
              <SelectItem value="800000-1500000">R$ 800.000 - R$ 1.500.000</SelectItem>
              <SelectItem value="1500000+">Acima de R$ 1.500.000</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Search Button */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground opacity-0">Buscar</label>
          <Button onClick={handleSearch} className="w-full h-12 hero-gradient text-white font-semibold">
            <Search className="w-4 h-4 mr-2" />
            Buscar
          </Button>
        </div>
      </div>

      {/* Advanced Filters Toggle */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <Button
          variant="ghost"
          onClick={() => setShowAdvanced(!showAdvanced)}
          className="text-muted-foreground hover:text-primary"
        >
          <SlidersHorizontal className="w-4 h-4 mr-2" />
          Filtros avançados
        </Button>

        {/* Quick Filter Pills */}
        <div className="flex gap-2">
          {['1 quarto', '2 quartos', '3+ quartos'].map((filter) => (
            <button
              key={filter}
              onClick={() => updateFilter('bedrooms', filter)}
              className={`filter-pill ${filters.bedrooms === filter ? 'active' : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Advanced Filters Panel */}
      {showAdvanced && (
        <div className="mt-4 pt-4 border-t border-border animate-fade-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Área (m²)</label>
              <Input placeholder="Área mínima" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Vagas</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Garagem" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0">Sem garagem</SelectItem>
                  <SelectItem value="1">1 vaga</SelectItem>
                  <SelectItem value="2">2 vagas</SelectItem>
                  <SelectItem value="3+">3+ vagas</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground">Características</label>
              <div className="flex flex-wrap gap-2">
                {['Piscina', 'Academia', 'Varanda', 'Churrasqueira'].map((feature) => (
                  <span key={feature} className="filter-pill text-xs">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchFilters;