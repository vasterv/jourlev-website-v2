import Layout from "@/components/layout/layout";
import newLogoPath from "@assets/Jourlev-Logo-768x193.png";

export default function LogoTest() {
  return (
    <Layout>
      <div className="min-h-screen bg-background pt-20">
        <div className="content-container">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h1 className="font-display text-4xl text-foreground mb-8">Logo Comparison Test</h1>
              <p className="text-muted-foreground text-lg">
                Comparing the current logo with the new white text version on the site's black background
              </p>
            </div>

            {/* Current Logo */}
            <div className="bg-background border border-border rounded-lg p-8">
              <h2 className="font-display text-2xl text-foreground mb-6 text-center">Current Logo (SVG)</h2>
              <div className="flex justify-center items-center h-24 bg-background">
                <img 
                  src="/jourlev-logo-black-bg.svg" 
                  alt="Current JOURLEV Logo" 
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-center text-muted-foreground mt-4">
                Current SVG logo as it appears in navigation
              </p>
            </div>

            {/* New Logo */}
            <div className="bg-background border border-border rounded-lg p-8">
              <h2 className="font-display text-2xl text-foreground mb-6 text-center">New Logo (PNG with White Text)</h2>
              <div className="flex justify-center items-center h-24 bg-background">
                <img 
                  src={newLogoPath} 
                  alt="New JOURLEV Logo with White Text" 
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-center text-muted-foreground mt-4">
                New PNG logo with white text on transparent background
              </p>
            </div>

            {/* Side by Side Comparison */}
            <div className="bg-background border border-border rounded-lg p-8">
              <h2 className="font-display text-2xl text-foreground mb-6 text-center">Side by Side Comparison</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <p className="text-muted-foreground mb-4">Current</p>
                  <div className="flex justify-center items-center h-24 bg-background border border-border rounded">
                    <img 
                      src="/jourlev-logo-black-bg.svg" 
                      alt="Current Logo" 
                      className="h-12 w-auto"
                    />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-muted-foreground mb-4">New</p>
                  <div className="flex justify-center items-center h-24 bg-background border border-border rounded">
                    <img 
                      src={newLogoPath} 
                      alt="New Logo" 
                      className="h-12 w-auto"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Preview */}
            <div className="bg-background border border-border rounded-lg p-8">
              <h2 className="font-display text-2xl text-foreground mb-6 text-center">Navigation Bar Preview</h2>
              <div className="bg-background border-b border-border">
                <div className="content-container">
                  <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-8">
                      <img 
                        src={newLogoPath} 
                        alt="JOURLEV Logo in Navigation" 
                        className="h-8 w-auto"
                      />
                      <div className="hidden md:flex space-x-6">
                        <span className="text-muted-foreground">Services</span>
                        <span className="text-muted-foreground">Team</span>
                        <span className="text-muted-foreground">About</span>
                        <span className="text-muted-foreground">Insights</span>
                        <span className="text-muted-foreground">Contact</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center text-muted-foreground mt-4">
                How the new logo would look in the actual navigation bar
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}