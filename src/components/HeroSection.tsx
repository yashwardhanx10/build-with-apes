import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useRef } from "react";

const companyLogos = [
  "Flipkart", "Razorpay", "Zerodha", "Ola", "PhonePe",
  "Swiggy", "Meesho", "CRED", "Zomato", "Dream11",
  "UpGrad", "Lenskart", "Nykaa", "boAt", "Mamaearth",
];

const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden pt-20 pb-8">
      {/* Animated background layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(24_95%_53%/0.12),transparent)]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.04] blur-[150px]" />
        <motion.div
          style={{ y }}
          className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ccircle%20cx%3D%221%22%20cy%3D%221%22%20r%3D%220.5%22%20fill%3D%22hsl(0%200%25%20100%25%20%2F%200.03)%22%2F%3E%3C%2Fsvg%3E')] opacity-60"
        />
      </div>

      <motion.div style={{ opacity }} className="relative z-10 container-tight mx-auto section-padding text-center flex-1 flex flex-col justify-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/[0.06] mx-auto mb-8"
        >
          <Sparkles size={14} className="text-primary" />
          <span className="text-sm text-primary font-medium">India's AI-First Entrepreneur Community</span>
        </motion.div>

        {/* Main Headline — Storytelling */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-6"
        >
          <span className="block">Welcome to</span>
          <span className="text-gradient block">APEs Community</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed"
        >
          Ten years from now, businesses will be divided into two types.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Those who adapted to AI. And those who <span className="line-through opacity-60">didn't survive</span>.{" "}
          <strong className="text-foreground">We're here to make sure you're in the first group.</strong>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#pricing"
            className="group flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold px-8 py-4 rounded-full text-lg hover:opacity-90 transition-all glow-border"
          >
            Join APEs Club
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="https://www.youtube.com/watch?v=rUtxy713cVg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-border text-foreground font-medium px-8 py-4 rounded-full text-lg hover:bg-card transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Play size={14} className="text-primary ml-0.5" />
            </div>
            Watch Our Story
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mb-16"
        >
          {[
            { number: "3,000+", label: "Entrepreneurs" },
            { number: "51+", label: "Industries" },
            { number: "120+", label: "Cities" },
            { number: "24+", label: "Expert Workshops" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl sm:text-4xl font-bold text-gradient">{stat.number}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Company Logos Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="relative z-10 border-t border-border/50 pt-8 pb-4"
      >
        <p className="text-center text-xs text-muted-foreground uppercase tracking-widest mb-6">
          Our members work at & build companies like
        </p>
        <div className="overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex animate-marquee gap-12 items-center whitespace-nowrap">
            {[...companyLogos, ...companyLogos].map((logo, i) => (
              <span key={i} className="text-muted-foreground/40 font-display text-lg font-semibold tracking-wide flex-shrink-0">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
