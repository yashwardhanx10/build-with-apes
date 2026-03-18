import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Didn't expect it to be this practical and engaging. Left with real, usable insights that I applied to my SaaS product the very next week.",
    name: "Shenthil Thakku",
    role: "SaaS Founder",
    image: "https://framerusercontent.com/images/uTz4Zq0hB3m6j1IaHlGQfCEPk.jpeg",
    result: "Applied AI insights to SaaS in 1 week",
  },
  {
    quote: "I was confused about marketing my shop—but now I've found clarity and my target audience. The AI workflows changed everything for my retail business.",
    name: "Kartik Singhania",
    role: "Retail Business Owner",
    image: "https://framerusercontent.com/images/v38VQxUavAEpIgfVm9sLgljTmk.png?scale-down-to=1024",
    result: "Found target audience using AI",
  },
  {
    quote: "Seeing the first demo pitches was inspiring—makes building feel less intimidating. Found my co-founder through the APEs directory!",
    name: "Sunil Maurya",
    role: "Tech Entrepreneur",
    image: "https://framerusercontent.com/images/uTs5BPwwNSvgUzjlDCoMGzG6fc.jpeg",
    result: "Found co-founder via APEs",
  },
  {
    quote: "The MVP and business plan framework was super clear and actionable. Went from idea to paying customers in 60 days using AI automations.",
    name: "Walson Dmello",
    role: "EdTech Founder",
    image: "https://framerusercontent.com/images/YJtfq6Qd9vRfKFRkyfkSOFVL3Sw.jpeg",
    result: "Idea → Paying customers in 60 days",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding" id="testimonials">
      <div className="container-tight mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Member Stories</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Real builders.{" "}
            <span className="text-gradient">Real results.</span>
          </h2>
          <p className="text-muted-foreground text-lg">Hear from entrepreneurs building with AI inside APEs.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/20 transition-all relative overflow-hidden"
            >
              <Quote size={32} className="text-primary/10 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="text-primary fill-primary" />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed text-sm">"{t.quote}"</p>
              <div className="bg-primary/[0.06] rounded-lg px-3 py-2 mb-4">
                <p className="text-primary text-xs font-semibold">🎯 {t.result}</p>
              </div>
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover ring-1 ring-border"
                />
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
