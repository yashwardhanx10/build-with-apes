import { motion } from "framer-motion";
import { Users, GraduationCap, TrendingUp, Calendar, BookOpen, MessageSquare } from "lucide-react";

const features = [
  {
    icon: Users,
    tag: "Connect",
    title: "3,000+ Founder Network",
    description: "Find co-founders, collaborators, partners, and smart people building across India.",
  },
  {
    icon: GraduationCap,
    tag: "Learn",
    title: "Live Masterclasses & Recordings",
    description: "Expert-led sessions on AI, business, growth, and execution — with recordings available inside the community.",
  },
  {
    icon: TrendingUp,
    tag: "Grow",
    title: "Demo Days & Founder Feedback",
    description: "Pitch your ideas, get feedback, and learn from other builders in the community.",
  },
  {
    icon: Calendar,
    tag: "Meet",
    title: "City Meetups ",
    description: "Meet founders and builders offline through city meetup.",
  },
  {
    icon: BookOpen,
    tag: "Directory",
    title: "Member Directory — The APEs Gem",
    description: "Find entrepreneurs by city, sector, and expertise. The APEs Directory helps members discover the right people faster.",
  },
  {
    icon: MessageSquare,
    tag: "Discuss",
    title: "Community Discussions",
    description: "Active Discussions on AI trends, founder wins, feedback, and tool recommendations.",
  },
];

const InsideCommunity = () => {
  return (
    <section className="section-padding bg-card/30 relative overflow-hidden" id="benefits">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container-tight mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Inside the Community</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            A peek at what's{" "}
            <span className="text-gradient">waiting inside</span>
          </h2>
          <p className="text-muted-foreground text-lg">Everything you need to build, learn, connect, and grow.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group bg-background border border-border rounded-2xl p-7 hover:border-primary/20 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/15 transition-colors">
                <f.icon size={22} className="text-primary" />
              </div>
              <span className="text-[11px] font-bold text-primary uppercase tracking-[0.2em]">{f.tag}</span>
              <h3 className="text-lg font-bold mt-2 mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsideCommunity;
