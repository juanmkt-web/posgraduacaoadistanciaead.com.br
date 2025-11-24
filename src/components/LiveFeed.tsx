import { useState, useEffect } from "react";
import { GraduationCap, MapPin, Clock } from "lucide-react";

interface Inscription {
  id: number;
  name: string;
  city: string;
  state: string;
  course: string;
  minutesAgo: number;
}

const inscriptions: Inscription[] = [
  { id: 1, name: "Diego Santos", city: "Aracaju", state: "SE", course: "MBA em Segurança da Informação", minutesAgo: 3 },
  { id: 2, name: "Priscila Duarte", city: "Campinas", state: "SP", course: "Pós em Finanças Corporativas", minutesAgo: 8 },
  { id: 3, name: "Igor Azevedo", city: "Florianópolis", state: "SC", course: "MBA em Gestão da Inovação", minutesAgo: 11 },
  { id: 4, name: "Mariana Costa", city: "Porto Alegre", state: "RS", course: "Pós em Liderança e Gestão de Pessoas", minutesAgo: 15 },
  { id: 5, name: "Rafael Lima", city: "Brasília", state: "DF", course: "MBA em Marketing Digital", minutesAgo: 18 },
  { id: 6, name: "Juliana Alves", city: "Curitiba", state: "PR", course: "Pós em Business Intelligence", minutesAgo: 22 },
];

export const LiveFeed = () => {
  const [visibleItems, setVisibleItems] = useState<Inscription[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % inscriptions.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const newItems = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % inscriptions.length;
      newItems.push(inscriptions[index]);
    }
    setVisibleItems(newItems);
  }, [currentIndex]);

  return (
    <div className="space-y-4">
      {visibleItems.map((item, index) => (
        <div
          key={`${item.id}-${currentIndex}-${index}`}
          className="bg-card border border-border rounded-lg p-4 animate-slide-up hover-lift"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-start gap-3">
            <div className="bg-primary/10 rounded-full p-2">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-foreground">{item.name}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                <MapPin className="h-3 w-3" />
                <span>{item.city} - {item.state}</span>
              </div>
              <p className="text-sm text-foreground mt-2">{item.course}</p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
                <Clock className="h-3 w-3" />
                <span>há {item.minutesAgo} minutos</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
