import { motion } from "framer-motion";

const FounderStory = () => {
  return (
    <section className="section-padding bg-card/50">
      <div className="container-tight mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">The Story</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Be around people{" "}
            <span className="text-gradient">smarter than you</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Most people are consuming AI content. Few are building with it. Even fewer are monetising it. APEs was not created to talk about AI — it was created to build with it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://apes.lla.in/founders/rj.avif"
                  alt="Rishabh Jain"
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <h3 className="font-semibold text-lg">Rishabh Jain</h3>
                  <p className="text-muted-foreground text-sm">Co-founder, APEs</p>
                </div>
              </div>
              <p className="text-secondary-foreground leading-relaxed">
                Serial entrepreneur and co-founder of LLA, India's leading personal finance & employee rights platform with over 8M subscribers. Now on a mission to empower millions to become successful AI-powered entrepreneurs.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://apes.lla.in/founders/nivedan.avif"
                  alt="Nivedan Rathi"
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <h3 className="font-semibold text-lg">Nivedan Rathi</h3>
                  <p className="text-muted-foreground text-sm">Co-founder, APEs</p>
                </div>
              </div>
              <p className="text-secondary-foreground leading-relaxed">
                Founder of Future & AI, India's leading Generative AI education platform. Ran a funded AI startup in 2017-18 and now consults top Indian & Global companies for their AI transformation journeys.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;
