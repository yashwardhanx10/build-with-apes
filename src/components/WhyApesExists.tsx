import { motion } from "framer-motion";

const WhyApesExists = () => {
  return (
    <section className="section-padding" id="community">
      <div className="container-tight mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Why APEs Exists</p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 sm:mb-8">
            Built for builders.{" "}
            <span className="text-gradient">Not spectators.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-6 text-center"
        >
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            Most people are consuming AI content.{" "}
            <span className="text-foreground font-medium">Very few are actually building with it.</span>
          </p>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            APEs was created for builders who want to use AI to launch products, grow businesses, improve operations, and move faster with the right people around them.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
            This is not just a content community.{" "}
            <span className="text-foreground font-medium">
              It is a place to learn, connect, execute, and grow with serious entrepreneurs across India.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyApesExists;
