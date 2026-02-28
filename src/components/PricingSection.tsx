import { motion } from "framer-motion";
import { Check, Shield, Clock, Headphones, Users } from "lucide-react";

const features = [
  "Access to APE Platform",
  "Monthly Expert Workshops",
  "AI Tools & Agents",
  "Learning Resources & Library",
  "Demo Days Access",
  "City Meetup Invitations",
  "Member Directory Access",
  "APEs Launchpad",
];

const PricingSection = () => {
  return (
    <section className="section-padding" id="pricing">
      <div className="container-tight mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Membership</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Choose your{" "}
            <span className="text-gradient">plan</span>
          </h2>
          <p className="text-muted-foreground text-lg">Join thousands of entrepreneurs leveraging AI to grow</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* 5 Year Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-card border-2 border-primary rounded-2xl p-8 card-shadow animate-pulse-glow"
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full">
              MOST POPULAR
            </div>
            <h3 className="text-xl font-semibold mb-2">5 Year Membership</h3>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-4xl font-bold text-gradient">₹9,950</span>
              <span className="text-muted-foreground line-through text-lg">₹39,800</span>
            </div>
            <p className="text-primary text-sm font-semibold mb-6">Save 75% Today</p>
            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-primary flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://link.lla.in/apes_5year"
              className="block w-full text-center bg-gradient-primary text-primary-foreground font-semibold py-3.5 rounded-xl hover:opacity-90 transition-opacity"
            >
              Get Started
            </a>
            <p className="text-center text-muted-foreground text-xs mt-3">Limited Time Offer</p>
          </motion.div>

          {/* 1 Year Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border rounded-2xl p-8 card-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">1 Year Membership</h3>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-4xl font-bold">₹3,650</span>
              <span className="text-muted-foreground line-through text-lg">₹9,950</span>
            </div>
            <p className="text-primary text-sm font-semibold mb-6">Save 65% Today</p>
            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <Check size={16} className="text-primary flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://link.lla.in/apes_1year"
              className="block w-full text-center border border-primary text-primary font-semibold py-3.5 rounded-xl hover:bg-primary/10 transition-colors"
            >
              Get Started
            </a>
            <p className="text-center text-muted-foreground text-xs mt-3">Limited Time Offer</p>
          </motion.div>
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mt-10 text-muted-foreground text-sm"
        >
          {[
            { icon: Shield, label: "Secure Payment" },
            { icon: Clock, label: "30-Day Guarantee" },
            { icon: Headphones, label: "24/7 Support" },
            { icon: Users, label: "3000+ Members" },
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
