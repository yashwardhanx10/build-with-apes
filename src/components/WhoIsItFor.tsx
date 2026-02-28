import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";

const forItems = [
  { text: "Early-stage founders building with AI", detail: "Turn your idea into an AI-powered product" },
  { text: "Operators creating AI workflows", detail: "Automate and scale your business operations" },
  { text: "Business owners scaling smarter with AI", detail: "10x output without 10x the team" },
  { text: "Serious builders who execute", detail: "Ship products, not just watch tutorials" },
];

const notForItems = [
  "Passive learners who don't implement",
  "People looking for quick money schemes",
  "Those not willing to put in the work",
  "Content consumers with no intent to build",
];

const WhoIsItFor = () => {
  return (
    <section className="section-padding" id="community">
      <div className="container-tight mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Who is this for?</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Built for builders.{" "}
            <span className="text-muted-foreground">Not spectators.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            APEs is a curated community of doers. If you're building something real, you belong here.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* For You */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-3xl p-8 sm:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/[0.04] rounded-full blur-[60px]" />
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-8">
              <Check size={14} />
              This is for you
            </div>
            <div className="space-y-6">
              {forItems.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium">{item.text}</p>
                    <p className="text-muted-foreground text-sm mt-0.5">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm mt-8 hover:underline"
            >
              Join the builders <ArrowRight size={14} />
            </a>
          </motion.div>

          {/* Not For You */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-3xl p-8 sm:p-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-semibold mb-8">
              <X size={14} />
              Not for you if...
            </div>
            <div className="space-y-6">
              {notForItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <X size={12} className="text-destructive" />
                  </div>
                  <p className="text-muted-foreground">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
