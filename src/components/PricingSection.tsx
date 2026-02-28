import { motion } from "framer-motion";
import { Check, Shield, Clock, Headphones, Users, Sparkles } from "lucide-react";

const features = [
  "Access to APE Platform",
  "Monthly Expert Workshops (Recorded)",
  "AI Tools, Agents & Automations",
  "Complete Resource Library",
  "Demo Days & Pitch Access",
  "City Meetup Invitations",
  "Member Directory (The Gem)",
  "APEs Launchpad Access",
  "Co-founder & Hiring Board",
  "APEs Newsletter & Updates",
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
            Invest in your{" "}
            <span className="text-gradient">AI future</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Less than a coffee a day to be part of India's most action-oriented AI community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* 5 Year Plan — Featured */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-card border-2 border-primary rounded-3xl p-8 sm:p-10 animate-pulse-glow order-1"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground text-xs font-bold px-5 py-1.5 rounded-full flex items-center gap-1">
              <Sparkles size={12} /> BEST VALUE
            </div>
            <h3 className="text-xl font-bold mb-2">5 Year Membership</h3>
            <p className="text-muted-foreground text-sm mb-4">Lock in the lowest price. Build for the long term.</p>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-5xl font-bold text-gradient">₹9,950</span>
              <span className="text-muted-foreground line-through text-lg">₹39,800</span>
            </div>
            <p className="text-primary text-sm font-bold mb-2">Save 75% — ₹5.45/day</p>
            <p className="text-xs text-muted-foreground mb-6">One-time payment. No recurring fees.</p>

            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-primary" />
                  </div>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://link.lla.in/apes_5year"
              className="block w-full text-center bg-gradient-primary text-primary-foreground font-bold py-4 rounded-full hover:opacity-90 transition-opacity text-lg"
            >
              Join APEs — 5 Year Access
            </a>
          </motion.div>

          {/* 1 Year Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-3xl p-8 sm:p-10 order-2"
          >
            <h3 className="text-xl font-bold mb-2">1 Year Membership</h3>
            <p className="text-muted-foreground text-sm mb-4">Start building with AI today.</p>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-5xl font-bold">₹3,650</span>
              <span className="text-muted-foreground line-through text-lg">₹9,950</span>
            </div>
            <p className="text-primary text-sm font-bold mb-2">Save 65% — ₹10/day</p>
            <p className="text-xs text-muted-foreground mb-6">One-time payment. No recurring fees.</p>

            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-muted-foreground" />
                  </div>
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://link.lla.in/apes_1year"
              className="block w-full text-center border-2 border-primary text-primary font-bold py-4 rounded-full hover:bg-primary/10 transition-colors text-lg"
            >
              Join APEs — 1 Year Access
            </a>
          </motion.div>
        </div>

        {/* Trust */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 mt-12 text-muted-foreground text-sm"
        >
          {[
            { icon: Shield, label: "Secure Payment" },
            { icon: Clock, label: "30-Day Money Back" },
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
