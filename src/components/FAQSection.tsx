import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What exactly is APEs?",
    a: "APEs (AI-Powered Entrepreneurs) is India's AI-first entrepreneur community with 3,000+ members. We help founders and business owners build, launch, and scale using AI — through live workshops, city meetups, demo days, and a curated network of builders.",
  },
  {
    q: "Who is APEs for?",
    a: "APEs is for early-stage founders, business owners scaling with AI, operators building AI workflows, and serious builders who want to execute — not just consume content. If you're building something and want to leverage AI, this is for you.",
  },
  {
    q: "What do I get with my membership?",
    a: "You get access to the APE platform, 2 live masterclasses every month, 100+ recorded sessions, member directory, monthly demo days, city meetups, APEs Launchpad, AI tools & agents, prompt libraries, automation templates, and much more.",
  },
  {
    q: "How are workshops conducted?",
    a: "We host 2 live online workshops every month — one focused on AI tools & business applications, and one on business fundamentals & growth. All sessions are recorded and available in our library for you to revisit anytime.",
  },
  {
    q: "What is APEs Launchpad?",
    a: "When you launch a product, APEs Launchpad gives you community announcements, Instagram and Twitter features, a founder interview, community feedback, and access to beta users — all from within the network.",
  },
  {
    q: "What are APEs Demo Days?",
    a: "Every 2 months, 10 selected founders pitch their ideas to the entire community. You get investor feedback, find early customers, and validate your product with real entrepreneurs.",
  },
  {
    q: "Are there in-person events?",
    a: "Yes! We host monthly city meetups across 10+ Indian cities including Mumbai, Bangalore, Delhi, Pune, Jaipur, Ahmedabad, and more. Plus annual member-only retreats at exotic locations.",
  },
  {
    q: "Can I get a refund?",
    a: "Yes, we offer a 30-day money-back guarantee. If APEs isn't the right fit for you, just reach out within 30 days and we'll process your refund — no questions asked.",
  },
  {
    q: "How is APEs different from other communities?",
    a: "Most communities offer content and networking. APEs offers that plus real outcomes — users for your product, beta testers, co-founder matching, demo days with investors, and a launchpad for your business. We're built for action, not passive learning.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-card/50" id="faq">
      <div className="container-tight mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Got questions?{" "}
            <span className="text-gradient">We've got answers.</span>
          </h2>
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
                className="bg-background border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
