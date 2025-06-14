import { JLettermark, EmpathyHearts, ConnectionCircles, EmpathyWave } from "@/components/ui/footer-symbols";

export default function SymbolPreview() {
  const symbols = [
    {
      name: "Option 1: Stylized 'J' Lettermark",
      component: JLettermark,
      description: "Clean, modern lettermark that represents JOURLEV while being compact"
    },
    {
      name: "Option 2A: Empathy Hearts (Connected)",
      component: EmpathyHearts,
      description: "Two hearts representing empathy and connection with a linking element"
    },
    {
      name: "Option 2B: Connection Circles",
      component: ConnectionCircles,
      description: "Overlapping circles representing connection and collaboration"
    },
    {
      name: "Option 2C: Empathy Wave",
      component: EmpathyWave,
      description: "Flowing wave with center point, representing the flow of empathy"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-foreground mb-8 text-center">Footer Symbol Options for JOURLEV</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {symbols.map((symbol, index) => {
            const Symbol = symbol.component;
            return (
              <div key={index} className="card-jourlev text-center">
                <h3 className="font-display text-foreground mb-6">{symbol.name}</h3>
                
                {/* Large preview */}
                <div className="mb-6">
                  <div className="bg-muted rounded-lg p-8 mb-4">
                    <Symbol className="w-16 h-16 text-accent mx-auto" />
                  </div>
                  <p className="text-sm text-muted-foreground">Large size preview</p>
                </div>
                
                {/* Footer context preview */}
                <div className="bg-muted rounded-lg p-6 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Symbol className="w-8 h-8 text-accent" />
                      <span className="text-muted-foreground text-sm">JOURLEV</span>
                    </div>
                    <div className="text-muted-foreground text-xs">© 2024</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">How it looks in footer context</p>
                
                <p className="text-muted-foreground text-sm">{symbol.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Each symbol would link back to the homepage, just like the iCrossing approach you mentioned.
          </p>
          <p className="text-accent font-semibold">
            Which option resonates with the JOURLEV brand for you?
          </p>
        </div>
      </div>
    </div>
  );
}