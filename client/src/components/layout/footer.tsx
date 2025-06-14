import { Link } from "wouter";
import { Linkedin, Instagram } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { JLettermark } from "@/components/ui/footer-symbols";

export default function Footer() {
  const navItems = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Team", path: "/team" },
    { name: "Zane", path: "/zane" },
    { name: "Insights", path: "/insights" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-muted border-t border-border py-20">
      <div className="content-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <JLettermark className="w-12 h-12 text-accent hover:opacity-80 transition-opacity duration-300" />
            </Link>
            <p className="text-muted-foreground leading-relaxed text-lg max-w-md">
              Empathy-driven product strategy that shapes customer journeys to connect and convert.
            </p>
          </div>
          <div>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link 
                    href={item.path}
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 font-body uppercase tracking-wide text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground uppercase tracking-wide">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/jourlev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="https://www.instagram.com/jourlev.journeys/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-purple-400 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                aria-label="Instagram"
              >
                <Instagram size={28} />
              </a>
              <a
                href="https://x.com/JOURLEVJourney/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-orange-400 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
                aria-label="X (Twitter)"
              >
                <FaXTwitter size={28} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground font-body text-sm">&copy; 2025 JOURLEV. All rights reserved.</p>
            <div className="flex items-center space-x-6">
              <span className="text-muted-foreground text-sm">Made with empathy</span>
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
