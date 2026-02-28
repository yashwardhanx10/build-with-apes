import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const cities = [
  { name: "Mumbai", image: "https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/671890f009338115a459e2a5_Frame%201171276346.webp" },
  { name: "Bangalore", image: "https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/671890efb5eacf44656ba635_Frame%201171276344.webp" },
  { name: "Delhi", image: "https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/671890f010ad8a0594b8f144_Frame%201171276343.webp" },
  { name: "Pune", image: "https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/671890efab5e0ede27ef00e5_Frame%201171276361.webp" },
  { name: "Jaipur", image: "https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/671890ee33d8333c62b26f5b_Frame%201171276347.webp" },
  { name: "Ahmedabad", image: "https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/671890f0a03870a224653e58_Frame%201171276349.webp" },
  { name: "Chennai", image: "https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/671897d3731ac80375d132cf_Frame%201171276357.webp" },
  { name: "Hyderabad", image: "https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/671897d393f3aece4139ca78_Frame%201171276350.webp" },
  { name: "Surat", image: "https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/671897d28058d89d9ff931a8_Frame%201171276360.webp" },
  { name: "Vadodara", image: "https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/671890f0d9e6f55f4d263dad_Frame%201171276337.webp" },
];

const CityMeetups = () => {
  return (
    <section className="section-padding bg-card/50" id="events">
      <div className="container-tight mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">City Chapters</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Lunch, brunch, bakar.{" "}
            <span className="text-gradient">In your city.</span>
          </h2>
          <p className="text-muted-foreground text-lg">Monthly meetups across 10+ Indian cities. Real conversations, real connections.</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {cities.map((city, i) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer"
            >
              <img
                src={city.image}
                alt={`${city.name} Meetup`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5">
                <MapPin size={14} className="text-primary" />
                <span className="text-sm font-semibold">{city.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityMeetups;
