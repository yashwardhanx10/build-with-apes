import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";

const pastEvents = [
  { image: "https://framerusercontent.com/images/Kg8Yg021blb7BcHLDsIhjobQA3k.png", title: "AI for Business Growth", speaker: "Industry Expert" },
  { image: "https://framerusercontent.com/images/4mO6tuKu68KgWemgpj86ZXoZ8s.png", title: "Building AI Workflows", speaker: "Nivedan Rathi" },
  { image: "https://framerusercontent.com/images/SPcOx3eOaVjXxWPWw9TuSWnUBeM.png", title: "MVP Masterclass", speaker: "Rishabh Jain" },
  { image: "https://framerusercontent.com/images/fU8BB8zo4A5wx6eqtudYd2eHWM.png", title: "Growth Strategy Workshop", speaker: "Guest Speaker" },
  { image: "https://framerusercontent.com/images/mAPLIUQmkIeVqWWgjGDaRwq9c.png", title: "AI Tools Deep Dive", speaker: "Community Expert" },
];

const PastWorkshops = () => {
  return (
    <section className="section-padding">
      <div className="container-tight mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Past Events</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              24+ workshops.{" "}
              <span className="text-gradient">All recorded.</span>
            </h2>
          </div>
          <a href="#pricing" className="flex items-center gap-2 text-primary font-semibold text-sm hover:underline whitespace-nowrap">
            Access all recordings <ArrowRight size={14} />
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {pastEvents.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all cursor-pointer"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm">
                  <Play size={18} className="text-primary-foreground ml-0.5" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-xs font-bold text-foreground">{event.title}</p>
                <p className="text-xs text-muted-foreground">{event.speaker}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastWorkshops;
