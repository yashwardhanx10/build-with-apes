import { motion } from "framer-motion";
import { MessageCircle, GraduationCap, TrendingUp, Users, Rocket, Calendar } from "lucide-react";

const benefits = [
  {
    icon: MessageCircle,
    tag: "Connect",
    title: "Exclusive Community Access",
    description: "Engage with 3,000+ founders from 120+ cities. Find co-founders, vendors, tech partners, or your first customers.",
  },
  {
    icon: GraduationCap,
    tag: "Learn",
    title: "2 Live Masterclasses Monthly",
    description: "One on AI & business tools, one on growth fundamentals. Interact directly with successful founders, VCs, and operators.",
  },
  {
    icon: TrendingUp,
    tag: "Grow",
    title: "Monthly Demo Days",
    description: "Pitch live to the entire APEs network — potential clients, collaborators, and investors. Get feedback and find traction.",
  },
  {
    icon: Users,
    tag: "Hire",
    title: "APE Careers & Matching",
    description: "Founders hire, members find jobs, startups get interns, and builders find co-founders. All within the community.",
  },
  {
    icon: Rocket,
    tag: "Launch",
    title: "APEs Launchpad",
    description: "Get community announcements, beta users, founder interviews, and instant feedback when you launch your product.",
  },
  {
    icon: Calendar,
    tag: "Meet",
    title: "City Meetups & Retreats",
    description: "Monthly meetups across 11+ Indian cities. Annual member-only retreats. Build real relationships, not just connections.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-padding" id="benefits">
      <div className="container-tight mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Membership Benefits</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Everything you need to{" "}
            <span className="text-gradient">build & scale</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Not just content and networking. Real tools, real connections, real outcomes.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 card-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <b.icon size={24} className="text-primary" />
              </div>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">{b.tag}</span>
              <h3 className="text-lg font-semibold mt-2 mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
