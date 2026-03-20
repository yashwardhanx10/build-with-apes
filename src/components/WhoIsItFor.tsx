import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";

const forItems = [
"Early-stage founders building with AI",
"Operators creating AI workflows",
"Business owners scaling smarter with AI",
"Serious builders who execute",
"Future entrepreneurs preparing to build something meaningful"];


const notForItems = [
"You only want passive content consumption",
"You are looking for quick money schemes",
"You are not willing to put in the work",
"You have no intent to build, execute, or grow"];


const WhoIsItFor = () => {
  return (
    <section className="section-padding">
      <div className="container-tight mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12">
          
          <p className="text-primary font-semibold uppercase tracking-widest mb-3 text-3xl">Who is this for?</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Built for builders.{" "}
            <span className="text-muted-foreground">Not spectators.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">APEs is a curated community of builders. If you're building something real  or serious about starting — you belong here.

          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-3xl p-8">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <Check size={14} />
              This is for you
            </div>
            <div className="space-y-4">
              {forItems.map((item, i) =>
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3">
                
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-primary" />
                  </div>
                  <span className="text-sm text-foreground">{item}</span>
                </motion.div>
              )}
            </div>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm mt-6 hover:underline">
              
              Join the builders <ArrowRight size={14} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-3xl p-8">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-sm font-semibold mb-6">
              <X size={14} />
              Not for you if...
            </div>
            <div className="space-y-4">
              {notForItems.map((item, i) =>
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-3">
                
                  <div className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <X size={12} className="text-destructive" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item}</span>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

};

export default WhoIsItFor;