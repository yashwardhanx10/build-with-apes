import { motion } from "framer-motion";
import { Smartphone, Mic, GraduationCap, Handshake, Bot, ContactRound, BookOpen, Brain, Rocket } from "lucide-react";

const perks = [
  { icon: Smartphone, label: "Access to APE Platform & Mobile App" },
  { icon: Mic, label: "AMA Sessions with RJ & Mentors" },
  { icon: GraduationCap, label: "Expert-Led Masterclasses" },
  { icon: Handshake, label: "Offline Founder Meetups – APEx" },
  { icon: Bot, label: "Daily AI Tools & Use Cases" },
  { icon: ContactRound, label: "Access to APEs Directory" },
  { icon: BookOpen, label: "Learning Resources" },
  { icon: Brain, label: "Curated Interest Groups" },
  { icon: Rocket, label: "Demo Days Participation Access" },
];

const WhatYouGet = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container-tight mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">What You Get</p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4">
            Everything inside the{" "}
            <span className="text-gradient">APEs community</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your membership unlocks tools, people, and experiences designed to help you build faster and smarter.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {perks.map((perk, i) => (
            <motion.div
              key={perk.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-4 bg-card border border-border rounded-2xl p-5 hover:border-primary/20 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <perk.icon size={20} className="text-primary" />
              </div>
              <span className="text-sm font-medium">{perk.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;
