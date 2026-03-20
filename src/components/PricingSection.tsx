import { motion } from "framer-motion";
import { Check, Shield, Headphones, Users, Sparkles } from "lucide-react";

const features = [
  "Access to APEs Platform",
  "Live Masterclasses & Recordings",
  "Member Directory",
  "Community Discussions",
  "Meetup Access",
  "Founder Network",
];

const PricingSection = () => {
  return (
    <section className="section-padding bg-card/30 relative overflow-hidden" id="pricing">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container-tight mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Membership</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Choose your <span className="text-gradient">membership</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Get inside India's AI-first entrepreneur community at an early member price.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* 1 Year */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-3xl p-8"
          >
            <h3 className="text-lg font-bold mb-2">1 Year Membership</h3>
            <p className="text-muted-foreground text-sm mb-4">Perfect for members getting started with APEs.</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">₹1,299</span>
              <span className="text-muted-foreground text-sm ml-2">/ year</span>
            </div>
            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <Check size={18} className="text-primary flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://link.lla.in/apes_1year"
              className="block w-full text-center border-2 border-primary text-primary font-bold py-3.5 rounded-full hover:bg-primary/10 transition-colors"
            >
              Join APEs — 1 Year
            </a>
          </motion.div>

          {/* Lifetime — Featured */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative bg-card border-2 border-primary rounded-3xl p-8 animate-pulse-glow"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground font-bold px-5 py-1.5 rounded-full flex items-center gap-1 text-lg">
              <Sparkles size={12} /> BEST VALUE
            </div>
            <h3 className="text-lg font-bold mb-2">Lifetime Membership</h3>
            <p className="text-muted-foreground text-sm mb-4">Full lifetime access & future benefits</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gradient">₹1,999</span>
              <span className="text-muted-foreground text-sm ml-2">/ lifetime</span>
            </div>
            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <Check size={18} className="text-primary flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://link.lla.in/apes_lifetime"
              className="block w-full text-center bg-gradient-primary text-primary-foreground font-bold py-3.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Join APEs — Lifetime
            </a>
          </motion.div>

          {/* 5 Year */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card border border-border rounded-3xl p-8"
          >
            <h3 className="text-lg font-bold mb-2">5 Year Membership</h3>
            <p className="text-muted-foreground text-sm mb-4">For serious long-term builders.</p>
            <div className="mb-6">
              <span className="text-4xl font-bold">₹1,499</span>
              <span className="text-muted-foreground text-sm ml-2">/ 5 years</span>
            </div>
            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <Check size={18} className="text-primary flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://link.lla.in/apes_5year"
              className="block w-full text-center border-2 border-primary text-primary font-bold py-3.5 rounded-full hover:bg-primary/10 transition-colors"
            >
              Join APEs — 5 Years
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 mt-12 text-muted-foreground text-sm"
        >
          {[
            { icon: Shield, label: "Secure Payment" },
            { icon: Headphones, label: "24/7 Support" },
            { icon: Users, label: "3,000+ Members" },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-2">
              <b.icon size={16} className="text-primary" />
              <span>{b.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
