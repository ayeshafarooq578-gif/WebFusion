import { useState } from "react";
import { Menu, X } from "lucide-react";

import Logo from "../ui/Logo";
import Button from "../ui/Button";
import Container from "../ui/Container";
import navigation from "../../constants/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#090914]/80 backdrop-blur-xl border-b border-violet-500/10">

      <Container>

        <nav className="flex items-center justify-between py-5">

          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">

            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-300 hover:text-violet-400 transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}

          </div>

          {/* Desktop Button */}
          <div className="hidden lg:block">
            <a href="#contact">
              <Button>Get a Quote</Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="lg:hidden text-white flex-shrink-0"
>
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </nav>

      </Container>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="lg:hidden bg-[#0B0B14] border-t border-violet-500/10">

          <div className="flex flex-col px-8 py-8 space-y-6">

            {navigation.map((item) => (

              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg text-slate-300 hover:text-violet-400 transition"
              >
                {item.name}
              </a>

            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              <Button className="w-full">
                Get a Quote
              </Button>
            </a>

          </div>

        </div>

      )}

    </header>
  );
};

export default Navbar;