import { Mail } from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
} from "react-icons/fa";


import Logo from "../ui/Logo";
import Container from "../ui/Container";

const Footer = () => {
  return (
    <footer
    id="contact"
     className="relative mt-32 border-t border-violet-500/10 bg-[#090914]">

      {/* Purple Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,.15),transparent_65%)]" />

      <Container>

        <div className="relative py-20 grid lg:grid-cols-4 md:grid-cols-2 gap-14">

          {/* Company */}

          <div>

            <Logo />

            <p className="mt-6 text-slate-400 leading-8">
              Building premium websites and modern digital experiences
              for startups, businesses and entrepreneurs.
            </p>

            <div className="flex items-center gap-3 mt-8 text-slate-300">

              <Mail
                size={18}
                className="text-violet-400"
              />

              <span>
                webfusion33@gmail.com
              </span>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <a href="#" className="text-slate-400 hover:text-violet-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="text-slate-400 hover:text-violet-400 transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#" className="text-slate-400 hover:text-violet-400 transition">
                  Portfolio
                </a>
              </li>

              <li>
                <a href="#" className="text-slate-400 hover:text-violet-400 transition">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Services
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>Website Development</li>

              <li>MERN Stack Development</li>

              <li>UI / UX Design</li>

              <li>Website Maintenance</li>

            </ul>

          </div>

          {/* Social */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-6">
              Follow Us
            </h3>

            <div className="flex gap-4">

              {/* Instagram */}

              <a
                href="https://instagram.com/webfusion.dev_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-slate-300 hover:bg-violet-500 hover:text-white transition-all duration-300"
              >
                <FaInstagram size={22} />
              </a>

              {/* TikTok */}

              <a
                href="https://tiktok.com/@webfusiondev"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-slate-300 hover:bg-violet-500 hover:text-white transition-all duration-300"
              >
                <FaTiktok size={20} />
              </a>

              {/* Facebook

              <a
                href="https://facebook.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-slate-300 hover:bg-violet-500 hover:text-white transition-all duration-300"
              >
                <Facebook size={22} />
              </a> */}

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-violet-500/10 py-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-500">
            © 2026 WebFusion. All Rights Reserved.
          </p>

          <p className="text-slate-500 mt-4 md:mt-0">
            Crafted with ❤️ by WebFusion
          </p>

        </div>

      </Container>

    </footer>
  );
};

export default Footer;