import { motion } from "framer-motion";

const meetupImages = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  image: `/placeholder.svg`,
  alt: `APEs Meetup ${i + 1}`,
}));

const CityMeetups = () => {
  return (
    <section className="section-padding bg-card/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container-tight mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Past Meetups</p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
            A look at APEs meetups{" "}
            <span className="text-gradient">across India</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From founder meetups to community conversations — builders meeting offline, learning together, and creating real relationships.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 mt-8 sm:mt-12">
          {meetupImages.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="group relative overflow-hidden rounded-2xl aspect-square border border-border hover:border-primary/30 transition-all"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityMeetups;
