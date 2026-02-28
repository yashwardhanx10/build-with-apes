import { motion } from "framer-motion";
import { Rocket, Mic, Trophy, Home, ArrowUpRight } from "lucide-react";

const programs = [
  {
    icon: Rocket,
    title: "APEs Launchpad",
    tagline: "Ship with support",
    description: "Launch your product to the community. Get beta users, founder interviews, social media features, and instant feedback from 3,000+ entrepreneurs.",
    features: ["Community announcements", "Beta users", "Founder interviews", "Social media features"],
  },
  {
    icon: Trophy,
    title: "APEs Tank",
    tagline: "Pitch & validate",
    description: "Every 2 months, 10 founders pitch. Get investor feedback, community support, and real validation for your ideas.",
    features: ["Demo days", "Investor feedback", "Community votes", "Real validation"],
  },
  {
    icon: Mic,
    title: "APEs Seminars",
    tagline: "Learn from the best",
    description: "24+ expert-led seminars. Deep dives into AI tools, business strategy, growth hacking, and industry-specific workflows.",
    features: ["Expert speakers", "AI deep dives", "Recorded sessions", "Q&A access"],
  },
  {
    icon: Home,
    title: "APEs House & Retreat",
    tagline: "Bond & build",
    description: "Exclusive member-only retreats at exotic locations. Deep conversations, partnerships, and lifelong bonds.",
    features: ["Exotic locations", "Deep networking", "Founder dinners", "Lifetime bonds"],
  },
];

const ProgramsSection = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="container-tight mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Programs & Events</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            More than a community.{" "}
            <span className="text-gradient">A launchpad.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Real programs designed to take you from idea to revenue.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-background border border-border rounded-3xl p-8 hover:border-primary/20 transition-all relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <p.icon size={26} className="text-primary" />
                </div>
                <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-xs font-bold text-primary uppercase tracking-[0.15em] mb-1">{p.tagline}</p>
              <h3 className="text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.features.map((f) => (
                  <span key={f} className="text-xs bg-muted text-muted-foreground px-3 py-1.5 rounded-full">{f}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
