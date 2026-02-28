import { motion } from "framer-motion";
import { Download, FileText, Zap, BarChart3, Cpu, BookOpen, Target, ArrowRight } from "lucide-react";

const resources = [
  {
    icon: "📝",
    count: "50+ Prompts",
    title: "AI Prompt Library",
    description: "Battle-tested prompts for sales, marketing, content creation, and product development.",
    color: "from-primary/10 to-primary/5",
  },
  {
    icon: "⚡",
    count: "20+ Templates",
    title: "Automation Templates",
    description: "Ready-to-use workflows for lead gen, customer support, and repetitive tasks.",
    color: "from-primary/10 to-primary/5",
  },
  {
    icon: "📊",
    count: "12 Playbooks",
    title: "Growth Playbooks",
    description: "Step-by-step guides to scale your business using AI-powered strategies.",
    color: "from-primary/10 to-primary/5",
  },
  {
    icon: "🔧",
    count: "30+ Tools",
    title: "AI Stack Breakdowns",
    description: "Curated tool recommendations by use case — SaaS, D2C, agency, and more.",
    color: "from-primary/10 to-primary/5",
  },
  {
    icon: "🎯",
    count: "10 Frameworks",
    title: "MVP & Business Plan Kit",
    description: "Frameworks to go from idea to paying customers in 60 days.",
    color: "from-primary/10 to-primary/5",
  },
  {
    icon: "📈",
    count: "8 Case Studies",
    title: "AI Success Stories",
    description: "Detailed breakdowns of how founders used AI to grow revenue 3x-10x.",
    color: "from-primary/10 to-primary/5",
  },
];

const FreeResources = () => {
  return (
    <section className="section-padding" id="resources">
      <div className="container-tight mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Free Resources</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Level up your{" "}
            <span className="text-gradient">AI journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Practical tools, templates, and guides — completely free. Start building before you even join.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {resources.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all cursor-pointer relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{r.icon}</span>
                <span className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{r.count}</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{r.description}</p>
              <div className="flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                Access Free <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeResources;
