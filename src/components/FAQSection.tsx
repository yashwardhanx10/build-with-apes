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
    a: "APEs (AI-Powered Entrepreneurs) is India's AI-first entrepreneur community with 3,000+ members across 120+ cities. We help founders and business owners build, launch, and scale using AI — through live masterclasses, city meetups, and a curated network of serious builders.",
  },
  {
    q: "Who should join APEs?",
    a: "APEs is for early-stage founders, business owners scaling with AI, operators building AI workflows, and anyone serious about executing. If you're building something real or preparing to, this is where you belong.",
  },
  {
    q: "What do I get as a member?",
    a: "You get access to the full APEs platform: live masterclasses and recordings, the member directory, community discussions, city meetup access, demo days, founder network, and regular event updates.",
  },
  {
    q: "Are the masterclasses live or recorded?",
    a: "Both. We host live expert-led masterclasses on AI, business, growth, and execution. All sessions are recorded and available inside the community for on-demand access anytime.",
  },
  {
    q: "How often do community sessions happen?",
    a: "We run masterclasses regularly along with community discussions, demo days, and city meetups throughout the month. There's always something happening inside APEs.",
  },
  {
    q: "Does APEs have offline meetups?",
    a: "Yes! We host city meetups across India in cities like Mumbai, Bangalore, Delhi, Pune, Jaipur, Ahmedabad, Hyderabad, and more. These are real conversations with real builders.",
  },
  {
    q: "Can I connect with founders from my city or industry?",
    a: "Absolutely. The APEs Member Directory lets you find entrepreneurs by city, sector, and expertise. It's one of the most valued features in the community.",
  },
  {
    q: "Is APEs useful for beginners, or only for experienced founders?",
    a: "APEs is for anyone serious about building. Whether you're just getting started or already running a business, the community, masterclasses, and network are designed to help you move forward faster.",
  },
  {
    q: "How is APEs different from other startup or AI communities?",
    a: "Most communities offer content and networking. APEs offers real outcomes — a curated founder network, demo days with feedback, city meetups, a member directory, and practical masterclasses. We're built for action, not passive consumption.",
  },
  {
    q: "Is the payment one-time or recurring?",
    a: "All plans are one-time payments. No recurring fees, no hidden charges. Pay once and get full access for the duration of your membership.",
  },
  {
    q: "How do I join after making the payment?",
    a: "After payment, you'll receive access details via email to join the APEs platform. You can start exploring the community, masterclasses, directory, and events immediately.",
  },
  {
    q: "Who can I contact if I face any issue?",
    a: "You can reach out to our support team anytime. We're available 24/7 to help with any questions or issues you may have.",
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
          <h2 className="text-3xl sm:text-4xl font-bold">
            Frequently Asked{" "}
            <span className="text-gradient">Questions</span>
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
