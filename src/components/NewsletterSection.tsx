import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="section-padding">
      <div className="container-tight mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-card border border-primary/15 rounded-3xl p-10 sm:p-16 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(24_95%_53%/0.06)_0%,transparent_70%)]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Mail size={24} className="text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
              Get the <span className="text-gradient">APEs Newsletter</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Weekly AI insights, founder stories, and actionable strategies. Join 3,000+ entrepreneurs who read it every week.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.open(`https://nas.io/apes`, '_blank');
              }}
              className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-3.5 rounded-full bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
              />
              <button
                type="submit"
                className="flex-shrink-0 flex items-center gap-2 bg-gradient-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-full hover:opacity-90 transition-opacity text-sm whitespace-nowrap"
              >
                Subscribe <ArrowRight size={14} />
              </button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">Free forever. No spam. Unsubscribe anytime.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
