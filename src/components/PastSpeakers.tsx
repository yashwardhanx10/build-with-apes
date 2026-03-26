import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const speakers = [
  {
    name: "Aviral Bhatnagar",
    role: "Founder & Managing Partner, AJVC",
    bio: "Backs India's most promising early-stage startups. IIT Bombay alumnus, IIM Ahmedabad gold medalist, and multi-time startup builder.",
    tags: ["Early-stage Investing", "Startup Building", "Founder Insights"],
    linkedin: "https://www.linkedin.com/in/aviral-bhatnagar-ajuniorvc/",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHBx8s2RDhSOA/profile-displayphoto-shrink_400_400/B56ZPJ2mVeHkAg-/0/1734350785498?e=1756339200&v=beta&t=9Qz9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9Q",
  },
  {
    name: "Roli Gupta",
    role: "Founder & CEO, Babblebots.ai",
    bio: "Founder of Babblebots.ai, a GenAI platform transforming recruitment. IIT Bombay & UC Berkeley alumna with 20+ years of experience.",
    tags: ["GenAI", "Recruitment Innovation", "Startup Leadership"],
    linkedin: "https://www.linkedin.com/in/rolig/",
    image: "",
  },
  {
    name: "Nitin Jain",
    role: "Orange Economy Builder",
    bio: "20+ years supporting 100+ founders, 350+ brands, and impacting 5M+ lives at the intersection of creativity, culture, and capital.",
    tags: ["Founder Growth", "Brand Building", "Creative Economy"],
    linkedin: "https://www.linkedin.com/in/indianimator/",
    image: "",
  },
  {
    name: "Sara Davison",
    role: "AI Educator & Practitioner",
    bio: "Helps businesses scale using AI and agentic workflows. Educated 8,000+ people in one of today's most in-demand skill areas.",
    tags: ["AI Education", "Agentic Workflows", "Business Scaling"],
    linkedin: "https://www.linkedin.com/in/sara-davison-21b41131/",
    image: "",
  },
  {
    name: "Tyler Fisk",
    role: "CEO & Co-Founder, AI Build Lab",
    bio: "AI speaker, educator, and builder focused on no-code agentic workflows for startups to Fortune 50 companies.",
    tags: ["No-code AI", "Agentic Workflows", "Enterprise AI"],
    linkedin: "https://www.linkedin.com/in/tyfisk/",
    image: "",
  },
  {
    name: "Dhaval Doshi",
    role: "Digital Transformation Leader",
    bio: "Deep expertise in digital transformation, marketing systems, and martech-led business growth for founders scaling go-to-market.",
    tags: ["Digital Transformation", "Martech", "Product-led Growth"],
    linkedin: "https://www.linkedin.com/in/ondhago/",
    image: "",
  },
  {
    name: "Samruddhi Dodal",
    role: "Founder, Playmo | AI Consultant",
    bio: "AI consultant for early-stage startups. Previously with BCG and Mondelez. Helps entrepreneurs convert ideas into tech-enabled businesses.",
    tags: ["AI for Startups", "Strategy", "Startup Execution"],
    linkedin: "https://www.linkedin.com/in/sdodal/",
    image: "",
  },
  {
    name: "Amit Agarwal",
    role: "Technology Leader & AI Product Builder",
    bio: "20 years building AI products at scale. Led engineering at Google, American Express, Amazon, and Yahoo. Currently building in stealth.",
    tags: ["AI Product Leadership", "Engineering Scale", "Startup Building"],
    linkedin: "#",
    image: "",
  },
  {
    name: "Dilnawaz Khan",
    role: "Founder, Power Deck",
    bio: "Trained 15,000+ startup founders on pitching, storytelling, and fundraising strategy with clarity and confidence.",
    tags: ["Pitching", "Storytelling", "Fundraising"],
    linkedin: "https://www.linkedin.com/in/dilnawazkhan/",
    image: "",
  },
  {
    name: "Ashutosh Sharma",
    role: "AI Consultant & Strategic Tech Leader",
    bio: "Two decades of global experience across digital transformation and AI enablement. Advises on Generative AI and Agentic AI at scale.",
    tags: ["Generative AI", "Enterprise AI", "Responsible AI"],
    linkedin: "https://www.linkedin.com/in/ashutoshsharmain/",
    image: "",
  },
  {
    name: "Kirti Vardhan Rathore",
    role: "Deputy Director – Technology, UIDAI",
    bio: "Multidisciplinary branding expert. NID Bengaluru & IIT Jodhpur alumnus. Worked on landmark branding projects including HPCL's Golden Jubilee.",
    tags: ["Branding", "Design Strategy", "User Experience"],
    linkedin: "https://www.linkedin.com/in/kirtivardhanrathore/",
    image: "",
  },
  {
    name: "Pritesh Mittal",
    role: "Founder, Growisto",
    bio: "Bootstrapped Growisto to $3M+ revenue with 120+ team. IIT Bombay alumnus. Scaled brands like ABFRL, Tata, Nykaa, and Puma.",
    tags: ["Bootstrapping", "Growth Systems", "Digital Scale"],
    linkedin: "https://www.linkedin.com/in/priteshmittal/",
    image: "",
  },
  {
    name: "Ashish Burade",
    role: "Founder, Addtocart Consulting",
    bio: "Growth strategist for D2C brands. Bootstrapped a content-first eCommerce brand to $500K+ ARR. Led acquisition at Flatheads & Fitternity.",
    tags: ["Growth Strategy", "D2C Scaling", "GTM"],
    linkedin: "https://www.linkedin.com/in/ashishburade/",
    image: "",
  },
];

const PastSpeakers = () => {
  return (
    <section className="section-padding">
      <div className="container-tight mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Past Speakers & Mentors</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Learn from founders, operators,{" "}
            <span className="text-gradient">and AI leaders</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Some of the most practical minds in AI, startups, growth, fundraising, and business-building have shared their insights with the APEs community.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground max-w-xl mx-auto mb-12 text-sm"
        >
          At APEs, members learn from people who have built startups, scaled businesses, raised capital, and applied AI in the real world.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {speakers.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/20 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <Avatar className="w-12 h-12">
                  {s.image && <AvatarImage src={s.image} alt={s.name} />}
                  <AvatarFallback className="bg-primary/10 text-primary font-bold text-lg">
                    {s.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                {s.linkedin && s.linkedin !== "#" && (
                  <a
                    href={s.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                )}
              </div>
              <h3 className="font-bold text-base mb-0.5">{s.name}</h3>
              <p className="text-primary text-xs font-medium mb-3">{s.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.bio}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastSpeakers;
