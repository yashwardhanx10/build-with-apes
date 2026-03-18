import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const footerLinks = [
  { label: "Community", href: "#community" },
  { label: "Benefits", href: "#benefits" },
  { label: "Events", href: "#events" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Login", href: "https://link.lla.in/apex_login" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/apescommunity" },
  { label: "LinkedIn", href: "https://linkedin.com/company/apescommunity" },
  { label: "YouTube", href: "https://youtube.com/@apescommunity" },
];

const CTAFooter = () => {
  return (
    <>
      <section className="section-padding">
        <div className="container-tight mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-card border border-primary/15 rounded-3xl p-10 sm:p-16 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(24_95%_53%/0.08)_0%,transparent_60%)]" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                The future belongs to{" "}
                <span className="text-gradient">AI builders.</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-8">
                3,000+ entrepreneurs chose to adapt. The question is — will you?
              </p>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-bold px-10 py-5 rounded-full text-lg hover:opacity-90 transition-all glow-border group"
              >
                Join APEs
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="container-tight mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mb-8">
            <div className="text-center md:text-left">
              <img
                src="https://i.postimg.cc/WbdqmBqy/APES-Logo-Inverted-Vector.png"
                alt="APEs Logo"
                className="h-10 w-auto mb-3 mx-auto md:mx-0"
              />
              <p className="text-muted-foreground text-sm">
                India's AI-First Entrepreneur Community.
                <br />
                Building the future, one founder at a time.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-xs text-muted-foreground">© 2025 APEs Community. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CTAFooter;
