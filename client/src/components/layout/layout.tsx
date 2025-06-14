import Navigation from "./navigation";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-20 md:pt-24 lg:pt-28 xl:pt-32">
        {children}
      </main>
      <Footer />
    </div>
  );
}
