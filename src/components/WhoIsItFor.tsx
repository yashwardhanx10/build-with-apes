import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const forItems = [
  "Early-stage founders building with AI",
  "Operators creating AI workflows",
  "Business owners scaling smarter with AI",
  "Serious builders who execute, not just consume",
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Built for builders.{" "}
            <span className="text-muted-foreground">Not spectators.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8 card-shadow"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <Check size={16} />
              APEs is for you if...
            </div>
            <ul className="space-y-4">
              {forItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8 card-shadow"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-semibold mb-6">
              <X size={16} />
              APEs is NOT for you if...
            </div>
            <ul className="space-y-4">
              {notForItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                    <X size={12} className="text-destructive" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
