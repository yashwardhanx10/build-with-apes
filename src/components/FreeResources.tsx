import { motion } from "framer-motion";
import { FileText, Zap, BarChart3, Cpu } from "lucide-react";

const resources = [
  { icon: FileText, title: "Prompt Libraries", description: "Battle-tested prompts for sales, marketing, content, and product development." },
  { icon: Zap, title: "Automation Templates", description: "Ready-to-use workflows for repetitive tasks — from lead gen to customer support." },
  { icon: BarChart3, title: "Growth Playbooks", description: "Step-by-step guides to scale your business using AI-powered strategies." },
  { icon: Cpu, title: "AI Stack Breakdowns", description: "Curated tool recommendations by use case — so you don't waste time researching." },
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
            Start building{" "}
            <span className="text-gradient">before you join</span>
          </h2>
          <p className="text-muted-foreground text-lg">Access our most popular resources — completely free.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {resources.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex items-start gap-5 bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors card-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <r.icon size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{r.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeResources;
