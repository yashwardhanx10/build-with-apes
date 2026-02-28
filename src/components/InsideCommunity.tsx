import { motion } from "framer-motion";
import { Monitor, Users, Video, BookOpen, MessageSquare, Briefcase } from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Member Dashboard",
    description: "Track progress, access workshops, manage your profile.",
    span: "lg:col-span-2",
    image: "https://framerusercontent.com/images/Kg8Yg021blb7BcHLDsIhjobQA3k.png",
  },
  {
    icon: Users,
    title: "Member Directory",
    description: "Find entrepreneurs by city, sector, and expertise. The APEs Directory is the community's gem.",
    span: "",
  },
  {
    icon: Video,
    title: "100+ Workshop Recordings",
    description: "Every session recorded. AI tools, growth, business fundamentals — on demand.",
    span: "",
  },
  {
    icon: BookOpen,
    title: "Resource Library",
    description: "Prompt libraries, automation templates, growth playbooks, and AI stack breakdowns.",
    span: "",
  },
  {
    icon: MessageSquare,
    title: "Community Discussions",
    description: "Daily threads on AI trends, founder wins, hiring, and tool recommendations.",
    span: "",
  },
  {
    icon: Briefcase,
    title: "APE Careers Board",
    description: "Jobs, internships, co-founder matching, and hiring — all within the network.",
    span: "lg:col-span-2",
  },
];

const InsideCommunity = () => {
  return (
    <section className="section-padding bg-card/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container-tight mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-3">Inside the Community</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            A peek at what's{" "}
            <span className="text-gradient">waiting inside</span>
          </h2>
          <p className="text-muted-foreground text-lg">Everything you need to build, learn, connect, and grow.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`group bg-background border border-border rounded-2xl p-6 hover:border-primary/20 transition-all relative overflow-hidden ${f.span}`}
            >
              {f.image && (
                <div className="mb-4 rounded-xl overflow-hidden border border-border">
                  <img src={f.image} alt={f.title} className="w-full h-40 object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                </div>
              )}
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <f.icon size={20} className="text-primary" />
              </div>
              <h3 className="text-base font-bold mb-1">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsideCommunity;
