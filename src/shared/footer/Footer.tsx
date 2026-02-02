import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import { quickLinks, tagCategories } from "@/components/topAuthors/instImage";
import { Facebook, Instagram, X, ArrowRight, Send, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#F2F8F7] text-[#555555] mt-24 font-sans overflow-hidden">
      
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#00AAA1] to-transparent opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">
        
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          
          {/* Brand Column (Span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-6">
            <div className="transform origin-left hover:scale-105 transition-transform duration-300">
              <Logo />
            </div>
            <p className="text-base leading-relaxed text-gray-500 max-w-sm">
              Did you come here for something in particular or just general Riker? Curating the best content for the modern reader.
            </p>
            
            <div className="flex items-center gap-4 mt-4">
              {[
                { Icon: Facebook, link: "#" },
                { Icon: X, link: "#" },
                { Icon: Instagram, link: "#" }
              ].map(({ Icon, link }, idx) => (
                <a 
                  key={idx} 
                  href={link}
                  className="group relative flex items-center justify-center w-11 h-11 rounded-full border border-gray-300 bg-transparent hover:border-[#00AAA1] hover:bg-[#00AAA1] transition-all duration-300 ease-out"
                >
                  <Icon size={18} className="text-gray-500 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links - Blog (Span 2) */}
          <div className="lg:col-span-2">
            <h3 className="text-[#222222] font-bold text-lg mb-8 tracking-tight border-b-2 border-transparent hover:border-[#00AAA1] inline-block transition-all duration-300 cursor-default">
              Blog
            </h3>
            <ul className="space-y-4">
              {tagCategories?.map((tag) => (
                <li key={tag.id}>
                  <Link to="#" className="group flex items-center text-[15px] hover:text-[#00AAA1] transition-colors duration-300">
                    {/* Arrow Container: Width 0 initially (Hidden), expands on hover */}
                    <span className="w-0 overflow-hidden opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 ease-out text-[#00AAA1]">
                      <ArrowRight size={16} className="mr-1" />
                    </span>
                    {/* Text starts exactly aligned */}
                    <span className="transition-transform duration-300">
                      {tag.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Links - Quick Links (Span 2) */}
          <div className="lg:col-span-2">
            <h3 className="text-[#222222] font-bold text-lg mb-8 tracking-tight border-b-2 border-transparent hover:border-[#00AAA1] inline-block transition-all duration-300 cursor-default">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks?.map((link) => (
                <li key={link.id}>
                  <Link to="#" className="group flex items-center text-[15px] hover:text-[#00AAA1] transition-colors duration-300">
                     {/* Arrow Container: Width 0 initially (Hidden), expands on hover */}
                     <span className="w-0 overflow-hidden opacity-0 group-hover:w-5 group-hover:opacity-100 transition-all duration-300 ease-out text-[#00AAA1]">
                      <ArrowRight size={16} className="mr-1" />
                    </span>
                    <span className="transition-transform duration-300">
                      {link.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter (Span 4) */}
          <div className="lg:col-span-4">
            <h3 className="text-[#222222] font-bold text-lg mb-4 tracking-tight">Subscribe for newsletter</h3>
            <p className="text-sm text-gray-500 mb-6">Stay updated with our latest trends and stories.</p>
            
            <form className="relative group">
              <input 
                type="email"
                className="w-full bg-white text-[#555555] pl-6 pr-36 py-4 rounded-full border border-gray-200 focus:outline-none focus:border-[#00AAA1] focus:ring-4 focus:ring-[#00AAA1]/10 transition-all duration-300 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-[0_8px_25px_-5px_rgba(0,170,161,0.15)] placeholder:text-gray-400" 
                placeholder="Enter email address" 
              />
              <button className="absolute top-1.5 right-1.5 bottom-1.5 bg-[#00AAA1] hover:bg-[#008f87] text-white px-6 rounded-full font-medium transition-all duration-300 flex items-center gap-2 group-focus-within:px-8">
                <span>Subscribe</span>
                <Send size={16} className="-mt-0.5" />
              </button>
            </form>

            <div className="mt-8 p-4 rounded-lg bg-[#00AAA1]/5 border border-[#00AAA1]/10 flex items-start gap-3">
              <Globe size={20} className="text-[#00AAA1] mt-1 shrink-0" />
              <p className="text-xs text-gray-500 leading-relaxed">
                We respect your privacy. Join over 5,000+ readers and get access to exclusive content.
              </p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-200/80 mb-8" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-gray-500">
          <p>
            &copy; 2026 Designed by <span className="text-[#00AAA1] font-bold">Mohammad Mehedi Hasan</span>
          </p>
          
          <div className="flex gap-8">
            <Link to="#" className="hover:text-[#00AAA1] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#00AAA1] hover:after:w-full after:transition-all after:duration-300">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-[#00AAA1] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#00AAA1] hover:after:w-full after:transition-all after:duration-300">
              Terms & Conditions
            </Link>
            <Link to="#" className="hover:text-[#00AAA1] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#00AAA1] hover:after:w-full after:transition-all after:duration-300">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;