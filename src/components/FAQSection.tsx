import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What exactly is APEs?",
    a: "APEs (AI-Powered Entrepreneurs) is India's AI-first entrepreneur community with 3,000+ members across 120+ cities. We help founders and business owners build, launch, and scale using AI — through live workshops, city meetups, demo days, and a curated network of serious builders.",
  },
  {
    q: "Who is APEs for — and who is it NOT for?",
    a: "APEs is for early-stage founders, business owners scaling with AI, operators building AI workflows, and anyone serious about executing. It is NOT for passive learners, people looking for quick money, or those unwilling to put in the work.",
  },
  {
    q: "What do I get with my membership?",
    a: "You get access to the full APE platform: 2 live masterclasses/month, 100+ recorded sessions, member directory, monthly demo days, city meetups, APEs Launchpad, AI tools & agents, prompt libraries, automation templates, co-founder matching, and more.",
  },
  {
    q: "How are the workshops conducted?",
    a: "We host 2 live online workshops every month — one on AI tools & business applications, and one on business fundamentals & growth. All sessions are recorded and available in our library for on-demand access anytime.",
  },
  {
    q: "What is APEs Launchpad?",
    a: "When you launch a product, APEs Launchpad gives you community announcements, Instagram and Twitter features, a founder interview, community feedback, and access to beta users — all from within the 3,000+ member network.",
  },
  {
    q: "What are APEs Demo Days (APEs Tank)?",
    a: "Every 2 months, 10 selected founders pitch their ideas to the entire community. You get investor feedback, find early customers, and validate your product with real entrepreneurs who can become your first users.",
  },
  {
    q: "Are there in-person events and meetups?",
    a: "Yes! We host monthly city meetups across 10+ Indian cities including Mumbai, Bangalore, Delhi, Pune, Jaipur, Ahmedabad, Chennai, Hyderabad, and more. Plus annual member-only retreats at exotic locations.",
  },
  {
    q: "How is APEs different from other communities?",
    a: "Most communities offer content and networking. APEs offers real outcomes — users for your product, beta testers, co-founder matching, demo days with investors, a launchpad for your business, and a directory of 3,000+ entrepreneurs. We're built for action, not passive consumption.",
  },
  {
    q: "Can I get a refund?",
    a: "Yes! We offer a 30-day money-back guarantee. If APEs isn't the right fit for you, just reach out within 30 days and we'll process your refund — no questions asked.",
  },
  {
    q: "Is this a one-time payment or recurring subscription?",
    a: "Both plans (1-year and 5-year) are one-time payments. No recurring fees, no hidden charges. Pay once and get full access for the duration of your membership.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding" id="faq">
      <div className="container-tight mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Got questions?{" "}
            <span className="text-gradient">We've got answers.</span>
          </h2>
          <p className="text-muted-foreground">Everything you need to know before joining APEs.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border rounded-2xl px-6 data-[state=open]:border-primary/20 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5 text-sm sm:text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-muted-foreground text-sm mb-3">Still have questions?</p>
          <a href="mailto:support@apescommunity.com" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline">
            Contact us <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
