import { motion } from "framer-motion";
import { MapPin, Users, ArrowRight } from "lucide-react";

const cities = [
  { name: "Mumbai", members: "400+", image: "https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/671890f009338115a459e2a5_Frame%201171276346.webp" },
  { name: "Bangalore", members: "350+", image: "https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/671890efb5eacf44656ba635_Frame%201171276344.webp" },
  { name: "Delhi", members: "300+", image: "https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/671890f010ad8a0594b8f144_Frame%201171276343.webp" },
  { name: "Pune", members: "250+", image: "https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/671890efab5e0ede27ef00e5_Frame%201171276361.webp" },
  { name: "Jaipur", members: "200+", image: "https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/671890ee33d8333c62b26f5b_Frame%201171276347.webp" },
  { name: "Ahmedabad", members: "180+", image: "https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/671890f0a03870a224653e58_Frame%201171276349.webp" },
  { name: "Chennai", members: "150+", image: "https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/671897d3731ac80375d132cf_Frame%201171276357.webp" },
  { name: "Hyderabad", members: "200+", image: "https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/671897d393f3aece4139ca78_Frame%201171276350.webp" },
  { name: "Surat", members: "120+", image: "https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/671897d28058d89d9ff931a8_Frame%201171276360.webp" },
  { name: "Vadodara", members: "100+", image: "https://cdn.prod.website-files.com/63a49822ee2304acc9455a42/671890f0d9e6f55f4d263dad_Frame%201171276337.webp" },
];

const CityMeetups = () => {
  return (
    <section className="section-padding" id="events">
      <div className="container-tight mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">City Chapters</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
              Find your chapter{" "}
              <span className="text-gradient">across India</span>
            </h2>
            <p className="text-muted-foreground text-lg">Monthly meetups. Real conversations. Real connections.</p>
          </div>
          <a href="#pricing" className="flex items-center gap-2 text-primary font-semibold text-sm hover:underline whitespace-nowrap">
            Join a chapter <ArrowRight size={14} />
          </a>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {cities.map((city, i) => (
            <motion.div
              key={city.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer border border-border hover:border-primary/30 transition-all"
            >
              <img
                src={city.image}
                alt={`${city.name} Meetup`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center gap-1.5 mb-1">
                  <MapPin size={12} className="text-primary" />
                  <span className="text-sm font-bold">{city.name}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Users size={10} />
                  <span>{city.members} members</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityMeetups;
