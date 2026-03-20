import { motion } from "framer-motion";

const founders = [
  {
    name: "Rishabh Jain",
    role: "Co-founder, APEs",
    bio: "Rishabh Jain is a serial entrepreneur and the co-founder of LLA, India's leading personal finance & employee rights platform with over 8M subscribers. \n\nHe is now on a mission to empower millions to realize their dream of becoming a successful entrepreneur.",
    image: "https://apes.lla.in/founders/rj.avif",
  },
  {
    name: "Nivedan Rathi",
    role: "Co-founder, APEs",
    bio: "Nivedan Rathi is the founder of Future & AI, India's leading Generative AI education platform for entrepreneurs to 10x their business. He ran a funded AI startup in 2017–18 and now consults top Indian and global companies on AI transformation.",
    image: "https://apes.lla.in/founders/nivedan.avif",
  },
];

const MeetFounders = () => {
  return (
    <section className="section-padding bg-card/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container-tight mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Meet the Founders</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            The visionaries{" "}
            <span className="text-gradient">behind APEs</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background border border-border rounded-3xl p-8 text-center"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 ring-2 ring-primary/20">
                <img src={f.image} alt={f.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-1">{f.name}</h3>
              <p className="text-primary text-sm font-medium mb-4">{f.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetFounders;
