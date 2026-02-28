import { motion } from "framer-motion";
import { MessageCircle, GraduationCap, TrendingUp, Users, Rocket, Calendar, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: MessageCircle,
    tag: "Connect",
    title: "3,000+ Founders Network",
    description: "Find co-founders, vendors, tech partners, or your first customers across 120+ cities and 51+ industries.",
    highlight: true,
  },
  {
    icon: GraduationCap,
    tag: "Learn",
    title: "2 Live Masterclasses/Month",
    description: "Expert-led sessions on AI tools, business strategy, and growth. All recorded for on-demand access.",
  },
  {
    icon: TrendingUp,
    tag: "Grow",
    title: "Monthly Demo Days",
    description: "Pitch live to the APEs network — potential clients, collaborators, and investors. Get real feedback.",
  },
  {
    icon: Users,
    tag: "Hire",
    title: "APE Careers & Matching",
    description: "Founders hire. Members find jobs. Startups get interns. Builders find co-founders. All inside APEs.",
  },
  {
    icon: Rocket,
    tag: "Launch",
    title: "APEs Launchpad",
    description: "Launch to the community: announcements, beta users, founder interviews, and social media features.",
  },
  {
    icon: Calendar,
    tag: "Meet",
    title: "City Meetups & Retreats",
    description: "Monthly meetups across 11+ cities. Annual member-only retreats at exotic locations.",
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
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Everything Inside</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Not just content.{" "}
            <span className="text-gradient">Real outcomes.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Most communities offer content and networking. We offer users, feedback, customers, and a launchpad.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group relative bg-card border rounded-2xl p-7 transition-all duration-300 hover:border-primary/30 overflow-hidden ${
                b.highlight ? "border-primary/20 sm:col-span-2 lg:col-span-1" : "border-border"
              }`}
            >
              {b.highlight && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              )}
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <b.icon size={22} className="text-primary" />
              </div>
              <span className="text-[11px] font-bold text-primary uppercase tracking-[0.2em]">{b.tag}</span>
              <h3 className="text-lg font-bold mt-2 mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a href="#pricing" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
            See all membership benefits <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
