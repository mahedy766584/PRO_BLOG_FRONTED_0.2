import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import { quickLinks, tagCategories } from "@/components/topAuthors/instImage";
import { Facebook, Instagram, X } from "lucide-react";

const Footer = () => (
  <footer className="bg-[#F2F8F7] z-50 h-full w-full mt-20 text-[#555555]">
    <div className="lg:flex lg:px-0 px-4 lg:space-y-0 space-y-8 justify-between max-w-6xl mx-auto py-14">
      <div>
        <Logo />
        <p className="text-[#555555] w-52.5 mt-4">Did you come here for something in particular or just general Riker</p>
      </div>
      <div className="flex flex-col space-y-4">
        <h2 className="text-[#222222] text-lg font-medium">Blog</h2>
        {
          tagCategories?.map((tag) => (
            <Link className="hover:underline duration-300" to={'#'} key={tag.id}>{tag.title}</Link>
          ))
        }
      </div>
      <div className="flex flex-col space-y-4">
        <h2 className="text-[#222222] text-lg font-medium">Quick links</h2>
        {
          quickLinks?.map((link) => (
            <Link className="hover:underline duration-300" to={'#'} key={link.id}>{link.title}</Link>
          ))
        }
      </div>
      <div className="flex flex-col space-y-4">
        <h2 className="text-[#222222] text-lg font-medium">Subscribe for newsletter</h2>
        <div className="flex items-center w-50 lg:w-fit">
          <input className="bg-[#DFF1F0] outline-none! border-none! px-4 py-2 rounded-l-md focus:outline-none! focus:ring-0! focus:border-none! outline-o! lg:w-fit w-40" placeholder="Your email" />
          <button className="px-6 py-2 cursor-pointer rounded-r-md bg-[#00AAA1] text-white">Subscribe</button>
        </div>
        <div className="mt-7">
          <h2 className="text-[#222222] text-lg font-medium">follow on:</h2>
          <div className="flex items-center gap-2.5 mt-3.5">
            <button className="hover:bg-[#00AAA1] hover:text-[#E8F3F3] duration-300 p-1 rounded text-lg flex justify-center items-center"><Facebook /></button>
            <button className="hover:bg-[#00AAA1] hover:text-[#E8F3F3] duration-300 p-1 rounded text-lg flex justify-center items-center"><X /></button>
            <button className="hover:bg-[#00AAA1] hover:text-[#E8F3F3] duration-300 p-1 rounded text-lg flex justify-center items-center"><Instagram /></button>
          </div>
        </div>
      </div>
    </div>
    <div className="py-3 max-w-6xl mx-auto text-center">
      <div className="max-w-6xl h-0.5 bg-gray-200"/>
      <p className="py-2 mt-3 text-sm">Design ©2026 Created by Mohammad Mehedi Hasan </p>
    </div>
  </footer>
);

export default Footer;
