import { ArrowUpRight } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-scroll";
import Container from "./Container";

const Footer = () => {
  const [email, setEmail] = useState("");
  const rightArray = [
    { title: "About us", href: "#" },
    { title: "Our Team", href: "#" },
    { title: "Packages", href: "#" },
    { title: "Gallery", href: "#" },
    { title: "Services", href: "#" },
  ];
  const leftArray = [
    { title: "Booking", href: "#" },
    { title: "Products", href: "#" },
    { title: "Recent Post", href: "#" },
    { title: "Latest News", href: "#" },
    { title: "Contact us", href: "contact" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert("Subscribed Successfully!");
    setEmail("");
  };
  const date = new Date().getFullYear();
  return (
    <footer className="bg-[#0F0F0F] py-10 md:py-20 text-white/80">
      <Container className="grid grid-cols-1 md:grid-cols-6 gap-10 md:gap-5">
        <div className="flex items-start flex-col gap-5">
          {rightArray?.map((item) => (
            <Link
              key={item?.title}
              to={item?.href}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-sm md:text-lg uppercase font-normal tracking-widest relative hover:text-white duration-300 group overflow-hidden cursor-pointer"
            >
              {item?.title}
              <span className="w-full h-[1px] inline-block absolute left-0 bottom-0 bg-white -translate-x-[110%] group-hover:translate-x-0 transition-transform ease-in-out duration-300" />
            </Link>
          ))}
        </div>
        <form
          onSubmit={handleSubmit}
          className="md:col-span-4 flex flex-col md:items-center justify-center"
        >
          <p className="text-base md:text-xl uppercase font-medium max-w-sm text-center mb-5">
            Sign up for all the latest news and offers
          </p>
          <div className="border border-white/40 bg-[#161616] flex items-center ">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your mail"
              className="bg-transparent outline-none border-r border-r-white/40 py-2 px-6 text-white placeholder:text-white/60 flex-1 min-w-72"
              required
            />
            <button
              type="submit"
              className="px-2 flex items-center gap-1 text-white/80 hover:text-green-500 duration-300"
            >
              <span>Subscribe</span> <ArrowUpRight size={10} />
            </button>
          </div>
        </form>
        <div className="flex flex-col gap-5 md:items-end">
          {leftArray?.map((item) => (
            <Link
              key={item?.title}
              to={item?.href}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-sm md:text-lg uppercase font-normal tracking-widest relative hover:text-white duration-300 group overflow-hidden cursor-pointer"
            >
              {item?.title}
              <span className="w-full h-[1px] inline-block absolute left-0 bottom-0 bg-white -translate-x-[110%] group-hover:translate-x-0 transition-transform ease-in-out duration-300" />
            </Link>
          ))}
        </div>
      </Container>
      <div className="text-center font-semibold mx-auto py-5">
        <p>
          Copyright © {date} - All right reserved by{" "}
          <span className="text-secondary">Mozammel Hosen</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
