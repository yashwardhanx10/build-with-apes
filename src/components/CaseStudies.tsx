import { motion } from "framer-motion";
import { TrendingUp, Users, Zap, IndianRupee, Calendar, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    name: "Priya Sharma",
    business: "EduFlow AI",
    industry: "EdTech",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    headline: "₹0 → ₹18L MRR in 90 days with AI-powered course creation",
    story: "Priya was a solo educator struggling to scale. After joining APEs, she learned AI for automated course generation, student engagement bots, and personalized learning paths.",
    metrics: [
      { label: "Monthly Revenue", value: "₹18L", icon: IndianRupee },
      { label: "Time to Launch", value: "90 Days", icon: Calendar },
      { label: "Active Students", value: "2,000+", icon: Users },
    ],
    aiTools: ["ChatGPT API", "Zapier", "Notion AI"],
    quote: "APEs gave me a system to build, launch, and scale. I went from confused educator to funded founder.",
  },
  {
    name: "Rohan Mehta",
    business: "BrandPilot",
    industry: "Marketing Agency",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    headline: "3 clients → 28 clients while cutting costs by 60%",
    story: "Rohan automated content creation, ad copy, and reporting using AI workflows from APEs. He 9x'd clients while reducing his team from 8 to 3 full-time + AI.",
    metrics: [
      { label: "Client Growth", value: "9x", icon: TrendingUp },
      { label: "Cost Reduction", value: "60%", icon: Zap },
      { label: "Revenue Growth", value: "3.2x", icon: IndianRupee },
    ],
    aiTools: ["Midjourney", "Claude API", "Make.com"],
    quote: "AI doesn't replace creative work — it multiplies it. My agency now runs like a machine.",
  },
  {
    name: "Ananya Krishnan",
    business: "ShipFast Commerce",
    industry: "D2C E-commerce",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    headline: "Built ₹45L/month D2C brand with AI-driven product research",
    story: "Found her co-founder through APEs directory. Together, they used AI for product research, descriptions, and ad optimization to build a ₹45L/month brand in 6 months.",
    metrics: [
      { label: "Monthly Revenue", value: "₹45L", icon: IndianRupee },
      { label: "Ad ROAS", value: "4.8x", icon: TrendingUp },
      { label: "Products Launched", value: "12", icon: Zap },
    ],
    aiTools: ["GPT-4", "Canva AI", "Meta Advantage+"],
    quote: "The community gave me clarity, a co-founder, and a repeatable system.",
  },
];

const CaseStudies = () => {
  return (
    <section className="section-padding" id="case-studies">
      <div className="container-tight mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Proof, Not Promises
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Real founders.{" "}
            <span className="text-gradient">Real numbers.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            These are APEs members who used AI to build, launch, and scale real businesses.
          </p>
        </motion.div>

        <div className="space-y-8">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-3xl overflow-hidden hover:border-primary/20 transition-all"
            >
              <div className="grid lg:grid-cols-5 gap-0">
                <div className="lg:col-span-2 p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-border">
                  <div>
                    <div className="flex items-center gap-4 mb-5">
                      <img
                        src={study.image}
                        alt={study.name}
                        className="w-14 h-14 rounded-2xl object-cover ring-2 ring-primary/20"
                      />
                      <div>
                        <h3 className="font-bold text-lg">{study.name}</h3>
                        <p className="text-primary text-sm font-medium">{study.business}</p>
                        <p className="text-muted-foreground text-xs">{study.industry}</p>
                      </div>
                    </div>
                    <h4 className="text-xl font-bold leading-tight mb-4">{study.headline}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{study.story}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-2">AI Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {study.aiTools.map((tool) => (
                        <span key={tool} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3 p-8 flex flex-col justify-between">
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="bg-muted/40 rounded-2xl p-5 text-center">
                        <metric.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                        <p className="text-2xl sm:text-3xl font-bold text-gradient">{metric.value}</p>
                        <p className="text-muted-foreground text-xs mt-1">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                  <blockquote className="border-l-2 border-primary pl-4">
                    <p className="text-foreground italic leading-relaxed text-sm">"{study.quote}"</p>
                    <cite className="text-muted-foreground text-xs mt-2 block not-italic">— {study.name}</cite>
                  </blockquote>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Start Your Success Story <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
