import { motion } from "framer-motion";

const VideoSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container-tight mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Watch & Learn</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            See what APEs is{" "}
            <span className="text-gradient">all about</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Get a glimpse into the community, the energy, and the mission.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-border bg-card aspect-video">
            <iframe
              src="https://www.youtube.com/embed/rUtxy713cVg"
              title="APEs Community Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
