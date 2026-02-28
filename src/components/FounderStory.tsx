import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const FounderStory = () => {
  return (
    <section className="section-padding bg-card/30 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container-tight mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">The Origin Story</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Why APEs{" "}
            <span className="text-gradient">exists</span>
          </h2>
        </motion.div>

        {/* Story narrative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Right now, we are in the <strong className="text-foreground">early days of AI</strong>.
            </p>
            <p>
              Most people are consuming AI content. Few are building with it. Even fewer are monetising it.
            </p>
            <p className="text-foreground text-xl font-medium border-l-2 border-primary pl-6">
              APEs was not created to talk about AI.
              <br />
              It was created to <span className="text-gradient">build with it</span>.
            </p>
            <p>
              We saw thousands of entrepreneurs struggling alone — confused about which tools to use, how to automate, how to build AI-powered products. We knew the answer wasn't more content. It was a <strong className="text-foreground">community of builders</strong> who learn by doing.
            </p>
          </div>
        </motion.div>

        {/* Founders */}
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Rishabh Jain",
              role: "Co-founder, APEs",
              image: "https://apes.lla.in/founders/rj.avif",
              bio: "Serial entrepreneur and co-founder of LLA, India's leading personal finance & employee rights platform with over 8M subscribers.",
              quote: "I wanted to create a space where entrepreneurs don't just learn AI — they build empires with it.",
            },
            {
              name: "Nivedan Rathi",
              role: "Co-founder, APEs",
              image: "https://apes.lla.in/founders/nivedan.avif",
              bio: "Founder of Future & AI, India's leading Generative AI education platform. Ran a funded AI startup in 2017-18.",
              quote: "The best way to learn AI is to build with it, alongside people who are doing the same.",
            },
          ].map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-3xl p-8 relative overflow-hidden group hover:border-primary/20 transition-colors"
            >
              <div className="absolute -top-2 -right-2 opacity-[0.04]">
                <Quote size={120} />
              </div>
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-16 h-16 rounded-2xl object-cover ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all"
                />
                <div>
                  <h3 className="font-bold text-lg">{founder.name}</h3>
                  <p className="text-primary text-sm font-medium">{founder.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">{founder.bio}</p>
              <blockquote className="border-l-2 border-primary/40 pl-4">
                <p className="text-foreground italic text-sm leading-relaxed">"{founder.quote}"</p>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderStory;
