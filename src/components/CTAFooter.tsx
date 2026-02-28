import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const footerLinks = {
  Community: [
    { label: "Benefits", href: "#benefits" },
    { label: "Events", href: "#events" },
    { label: "Resources", href: "#resources" },
    { label: "Testimonials", href: "#testimonials" },
  ],
  Programs: [
    { label: "Launchpad", href: "#benefits" },
    { label: "Demo Days", href: "#benefits" },
    { label: "Seminars", href: "#benefits" },
    { label: "Retreats", href: "#benefits" },
  ],
  Company: [
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Member Login", href: "https://link.lla.in/apex_login" },
  ],
  Social: [
    { label: "Instagram", href: "https://instagram.com/apescommunity" },
    { label: "Twitter", href: "https://twitter.com/apescommunity" },
    { label: "YouTube", href: "https://youtube.com/@apescommunity" },
    { label: "LinkedIn", href: "https://linkedin.com/company/apescommunity" },
  ],
};

const CTAFooter = () => {
  return (
    <>
      {/* Final CTA */}
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
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-4">Join the Movement</p>
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
                Join APEs Club
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-16 px-4 sm:px-6 lg:px-8">
        <div className="container-tight mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <img
                src="https://i.postimg.cc/WbdqmBqy/APES-Logo-Inverted-Vector.png"
                alt="APEs Logo"
                className="h-10 w-auto mb-4"
              />
              <p className="text-muted-foreground text-sm leading-relaxed">
                India's AI-First Entrepreneur Community. Building the future, one founder at a time.
              </p>
            </div>

            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold text-sm mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">© 2025 APEs Community. All rights reserved.</p>
            <p className="text-xs text-muted-foreground">Built with ❤️ for India's AI entrepreneurs</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CTAFooter;
