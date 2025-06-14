import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, ArrowRight } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for your message! We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an issue sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="content-container">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h1 className="font-display text-foreground text-balance">Contact Us</h1>
            <h2 className="text-2xl font-display text-foreground text-balance">Let's Make Something Real.</h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We're ready when you are. Reach out, ask questions, or let us know how you'd like to start&nbsp;the&nbsp;journey.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16 bg-muted">
        <div className="content-container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center">
              <a 
                href="https://calendly.com/jourlev-v"
                target="_blank"
                rel="noopener noreferrer"
                className="button-jourlev bg-accent text-black font-semibold text-lg hover:shadow-xl inline-block"
              >
                Start the Conversation
              </a>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
