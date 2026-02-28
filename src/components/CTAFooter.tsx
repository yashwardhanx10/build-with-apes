import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
            className="relative bg-card border border-primary/20 rounded-3xl p-10 sm:p-16 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(24_95%_53%/0.06)_0%,transparent_70%)]" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Ready to build with AI?
              </h2>
              <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-8">
                Join 3,000+ entrepreneurs who chose to adapt. Don't be the one who didn't survive.
              </p>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-xl text-lg hover:opacity-90 transition-all glow-border group"
              >
                Join APEs Club
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-4 sm:px-6 lg:px-8">
        <div className="container-wide mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="https://i.postimg.cc/WbdqmBqy/APES-Logo-Inverted-Vector.png"
              alt="APEs Logo"
              className="h-8 w-auto"
            />
            <span className="text-muted-foreground text-sm">
              India's AI-First Entrepreneur Community
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
            <a href="https://link.lla.in/apex_login" className="hover:text-foreground transition-colors">Login</a>
          </div>
          <p className="text-xs text-muted-foreground">© 2025 APEs. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default CTAFooter;
