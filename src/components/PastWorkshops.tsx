import { motion } from "framer-motion";

const pastEvents = [
  { image: "https://framerusercontent.com/images/Kg8Yg021blb7BcHLDsIhjobQA3k.png", title: "AI for Business Growth" },
  { image: "https://framerusercontent.com/images/4mO6tuKu68KgWemgpj86ZXoZ8s.png", title: "Building AI Workflows" },
  { image: "https://framerusercontent.com/images/SPcOx3eOaVjXxWPWw9TuSWnUBeM.png", title: "MVP Masterclass" },
  { image: "https://framerusercontent.com/images/fU8BB8zo4A5wx6eqtudYd2eHWM.png", title: "Growth Strategy Workshop" },
  { image: "https://framerusercontent.com/images/mAPLIUQmkIeVqWWgjGDaRwq9c.png", title: "AI Tools Deep Dive" },
];

const PastWorkshops = () => {
  return (
    <section className="section-padding">
      <div className="container-tight mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Past Events</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Workshops that{" "}
            <span className="text-gradient">deliver results</span>
          </h2>
          <p className="text-muted-foreground text-lg">24+ seminars and counting. Every session is recorded and available to members.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {pastEvents.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-colors cursor-pointer"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastWorkshops;
