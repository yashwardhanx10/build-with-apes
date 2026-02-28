import { motion } from "framer-motion";
import { Rocket, Mic, Trophy, Home } from "lucide-react";

const programs = [
  {
    icon: Rocket,
    title: "APEs Launchpad",
    description: "Launch your product to the community. Get beta users, founder interviews, social media features, and instant feedback.",
  },
  {
    icon: Trophy,
    title: "APEs Tank (Demo Days)",
    description: "Every 2 months, 10 founders pitch. Get investor feedback, community support, and real validation for your ideas.",
  },
  {
    icon: Mic,
    title: "APEs Seminars",
    description: "24+ expert-led seminars. Deep dives into AI tools, business strategy, growth hacking, and industry-specific workflows.",
  },
  {
    icon: Home,
    title: "APEs House & Retreat",
    description: "Exclusive member-only retreats. Exotic locations, deep conversations, and lifelong bonds with fellow builders.",
  },
];

const ProgramsSection = () => {
  return (
    <section className="section-padding bg-card/50">
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
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <p.icon size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
