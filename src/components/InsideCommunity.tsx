import { motion } from "framer-motion";
import { Monitor, Users, Video, BookOpen } from "lucide-react";

const previews = [
  {
    icon: Monitor,
    title: "Member Dashboard",
    description: "Track your progress, access workshops, and manage your profile — all in one place.",
  },
  {
    icon: Users,
    title: "Member Directory",
    description: "Find and connect with entrepreneurs by city, sector, and expertise. Your network on demand.",
  },
  {
    icon: Video,
    title: "Workshop Recordings",
    description: "100+ past sessions available on-demand. Learn AI tools, growth strategies, and business fundamentals.",
  },
  {
    icon: BookOpen,
    title: "Resource Library",
    description: "Prompt libraries, automation templates, growth playbooks, and complete AI stack breakdowns.",
  },
];

const InsideCommunity = () => {
  return (
    <section className="section-padding bg-card/50">
      <div className="container-tight mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Inside the Community</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            See what's{" "}
            <span className="text-gradient">waiting inside</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {previews.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background border border-border rounded-2xl p-8 flex flex-col items-start"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                <p.icon size={28} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsideCommunity;
