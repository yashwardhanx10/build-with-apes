import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Community", href: "#community" },
  { label: "Benefits", href: "#benefits" },
  { label: "Events", href: "#events" },
  { label: "Resources", href: "#resources" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container-wide mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2">
          <img
            src="https://i.postimg.cc/WbdqmBqy/APES-Logo-Inverted-Vector.png"
            alt="APEs Logo"
            className="h-10 w-auto"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://link.lla.in/apex_login"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors px-4 py-2"
          >
            Member Login
          </a>
          <a
            href="#pricing"
            className="text-sm font-semibold bg-gradient-primary text-primary-foreground px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            Join APEs Club
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#pricing"
                className="text-sm font-semibold bg-gradient-primary text-primary-foreground px-5 py-2.5 rounded-lg text-center mt-2"
              >
                Join APEs Club
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
