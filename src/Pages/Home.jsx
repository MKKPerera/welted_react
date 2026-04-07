import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.jpeg";

const slides = [
  "https://picsum.photos/id/1015/1600/900",
  "https://picsum.photos/id/1016/1600/900",
  "https://picsum.photos/id/1018/1600/900",
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="text-white scroll-smooth">
      <nav
        className={`fixed top-0 w-full flex justify-between items-center px-10 py-3 z-50 transition ${
          scrolled
            ? "bg-gradient-to-r from-[#0E255E] to-[#1F77B4] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <img src={Logo} alt="WERLTEC" className="object-contain h-10" />
        <div className="flex gap-6">
          {["home", "about", "services", "careers", "blog", "contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item}`}
                className="capitalize transition hover:text-blue-300"
              >
                {item}
              </a>
            ),
          )}
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative flex items-center justify-center h-screen"
      >
        {slides.map((img, i) => (
          <div
            key={i}
            className={`absolute w-full h-full bg-cover bg-center transition-all duration-1000 ${
              current === i ? "opacity-100 scale-100" : "opacity-0 scale-110"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        <div className="absolute inset-0 bg-black/50" />

        <div className="z-10 text-center">
          <h1 className="mb-4 text-5xl font-bold md:text-6xl">
            Where Technology Meets Business Excellence.
          </h1>
          <p className="mb-6">We develop modern experiences</p>

          <button
            onClick={() =>
              document
                .getElementById("careers")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-2 text-white border rounded-full bg-white/10 backdrop-blur-md border-white/30"
          >
            View Careers
          </button>

          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  current === i ? "bg-cyan-400" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="min-h-screen px-10 pt-20 pb-4 text-black bg-white"
      >
        <div className="grid items-start grid-cols-1 gap-8 mx-auto max-w-7xl md:grid-cols-3">
          {/* Left — Big heading + subtitle */}
          <div className="flex flex-col justify-between h-full">
            <h2 className="text-8xl md:text-9xl font-black leading-none tracking-tight uppercase text-[#0E255E]">
              ABOUT
              <br />
              US
            </h2>
            <div className="mt-10">
              <p className="text-sm uppercase tracking-widest mb-4 text-[#0E255E]">
                Innovative IT Solutions & Digital Transformation
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                We deliver cutting-edge technology solutions designed to
                streamline operations, enhance performance, and drive business
                growth in a rapidly evolving digital world.
              </p>
            </div>
          </div>

          {/* Center — Large image */}
          <div className="h-full">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800"
              alt="Interior Design"
              className="object-cover w-full h-125 rounded-2xl"
            />
          </div>

          {/* Right — Small image + Our Philosophy */}
          <div className="flex flex-col gap-6">
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600"
              alt="Philosophy"
              className="object-cover w-full h-48 rounded-2xl"
            />
            <div>
              <h3 className="text-2xl font-bold mb-3 text-[#0E255E]">
                Our Philosophy
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                At WERLTEC, we believe technology should simplify complexity and
                create meaningful impact. We focus on delivering smart,
                scalable, and user-centric solutions that help businesses grow
                and succeed in the digital era.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-10 pt-4 pb-16 text-black bg-white">
        <div className="grid items-start grid-cols-1 gap-16 mx-auto max-w-7xl md:grid-cols-2">
          {/* Left — heading, description, image */}
          <div>
            <h2 className="text-8xl md:text-9xl font-black leading-none tracking-tight uppercase mb-6 text-[#0E255E]">
              OUR
              <br />
              SERVICES
            </h2>
            <p className="max-w-md mb-10 text-sm leading-relaxed text-gray-500">
              At WERLTEC, we provide innovative and scalable IT solutions
              designed to help businesses grow, adapt, and succeed in a
              fast-changing digital landscape.
            </p>
            <img
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=700"
              alt="IT Services"
              className="object-cover w-full h-45 rounded-2xl"
            />
          </div>

          {/* Right — service list */}
          <div className="flex flex-col divide-y divide-[#1e7fc6] text-[#0E255E]">
            {[
              {
                title: "WEB DEVELOPMENT",
                desc: "We build modern, responsive, and high-performance websites tailored to your business needs using the latest technologies.",
              },
              {
                title: "MOBILE APP DEVELOPMENT",
                desc: "Our team creates user-friendly and scalable mobile applications for both iOS and Android platforms.",
              },
              {
                title: "CLOUD SOLUTIONS",
                desc: "We help businesses migrate, manage, and optimize their infrastructure with secure and scalable cloud technologies.",
              },
              {
                title: "IT CONSULTING",
                desc: "We provide expert guidance to help you choose the right technology solutions and improve your business processes.",
              },
            ].map((service) => (
              <div key={service.title} className="py-8">
                <h3 className="mb-3 text-lg font-black tracking-widest uppercase">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-500">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section
        id="careers"
        className="relative px-10 pt-24 pb-20 overflow-hidden text-black bg-white"
      >
        {/* Gradient blob top-right */}
        <div className="absolute top-0 right-0 rounded-full pointer-events-none w-80 h-80 bg-linear-to-bl from-blue-300 via-blue-100 to-transparent opacity-60 blur-3xl" />

        <div className="relative z-10 grid items-start grid-cols-1 gap-16 mx-auto max-w-7xl md:grid-cols-2">
          {/* Left — big heading + badge + description */}
          <div className="flex flex-col gap-6">
            <div>
              <span className="inline-block px-4 py-1 mb-6 text-sm border border-black rounded-full">
                We're hiring!
              </span>
              <h2 className="text-8xl md:text-9xl font-black leading-none tracking-tight uppercase text-[#0E255E]">
                BE OUR
                <br />
                TEAM
              </h2>
            </div>
            <div>
              <p className="text-sm text-[#0E255E] uppercase tracking-widest mb-4">
                Be part of our mission
              </p>
              <p className="text-sm leading-relaxed text-gray-700">
                We're looking for passionate people to join us on our mission.
                We value flat hierarchies, clear communication, and full
                ownership and responsibility.
              </p>
            </div>
          </div>

          {/* Right — filter tabs + job listings */}
          <div className="flex flex-col gap-4">
            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2 mb-2 text-[#0E255E]">
              {[
                "View all",
                "Development",
                "Design",
                "Marketing",
                "Customer Service",
                "Operations",
                "Finance",
                "Management",
              ].map((tab, i) => (
                <button
                  key={tab}
                  className={`px-3 py-1 rounded-full text-xs border transition ${
                    i === 0
                      ? "bg-linear-to-r from-[#0E255E] to-[#1F77B4] text-white border-transparent"
                      : "bg-transparent text-black border-black hover:bg-linear-to-r hover:from-[#0E255E] hover:to-[#1F77B4] hover:text-white hover:border-transparent"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Job listings */}
            <div className="flex flex-col divide-y divide-[#1e7fc6] text-[#0E255E]">
              {[
                {
                  title: "Product Designer",
                  desc: "We're looking for a mid-level product designer to join our team.",
                },
                {
                  title: "Engineering Manager",
                  desc: "We're looking for an experienced engineering manager to join our team.",
                },
                {
                  title: "Customer Success Manager",
                  desc: "We're looking for a customer success manager to join our team.",
                },
                {
                  title: "Frontend Developer",
                  desc: "We're looking for a skilled frontend developer to join our team.",
                },
              ].map((job) => (
                <div
                  key={job.title}
                  className="flex items-start justify-between py-5 group"
                >
                  <div>
                    <h3 className="mb-1 text-base font-bold">{job.title}</h3>
                    <p className="mb-3 text-xs text-gray-500">{job.desc}</p>
                    <div className="flex gap-2">
                      <span className="flex items-center gap-1 px-2 py-1 text-xs border border-gray-400 rounded-full">
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        100% remote
                      </span>
                      <span className="flex items-center gap-1 px-2 py-1 text-xs border border-gray-400 rounded-full">
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        Full-time
                      </span>
                    </div>
                  </div>
                  <button className="mt-1 ml-4 text-sm font-bold whitespace-nowrap hover:underline">
                    Apply ↗
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="px-10 py-20 text-black bg-white">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-[#0E255E] mb-3">
              From the WERLTEC Blog
            </h2>
            <p className="max-w-xl mx-auto text-sm text-gray-500">
              Stay updated with expert insights, tech guides, and a little
              digital inspiration.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600",
                category: "BEGINNER",
                title: "5 Easy Steps to Start Your Digital Journey",
                desc: "Just getting started with technology? Here are five beginner-friendly steps to build a strong digital foundation.",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600",
                category: "CLOUD",
                title: "Top 4 Cloud Platforms for Modern Businesses",
                desc: "Did you know cloud computing can cut costs by 30%? Here are the most effective platforms for your business.",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600",
                category: "DEV TIPS",
                title: "Web Performance Basics for Developers",
                desc: "Fast websites win users. Here are simple tips and tricks to help your web apps perform at their best.",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
                category: "MOBILE",
                title: "Mobile Apps That Thrive on Any Device",
                desc: "No fancy hardware? No problem. Here are apps built to run beautifully on any mobile device you own.",
              },
            ].map((post) => (
              <div
                key={post.title}
                className="flex flex-col cursor-pointer group"
              >
                <div className="mb-4 overflow-hidden rounded-2xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-48 transition-transform duration-500 rounded-2xl group-hover:scale-105"
                  />
                </div>
                <p className="text-xs font-bold tracking-widest text-[#1F77B4] mb-2 uppercase">
                  {post.category}
                </p>
                <h3 className="text-base font-black text-[#0E255E] mb-2 leading-snug">
                  {post.title}
                </h3>
                <p className="flex-1 mb-4 text-xs leading-relaxed text-gray-500">
                  {post.desc}
                </p>
                <a
                  href="#"
                  className="text-[#1F77B4] text-sm font-semibold hover:text-[#0E255E] transition"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>

          {/* Explore More */}
          <div className="flex justify-center mt-12">
            <button className="border-2 border-[#0E255E] text-[#0E255E] px-10 py-3 rounded-full text-sm font-semibold hover:bg-[#0E255E] hover:text-white transition">
              Explore More
            </button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-10 py-20 text-black bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-4xl font-black text-center text-[#0E255E] md:text-5xl">
            Our Happy Clients Say It Best
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
                stars: 5,
                quote:
                  '"Absolutely love working with WERLTEC! They built our platform from scratch, delivered on time, and the quality was outstanding. Definitely our go-to tech partner."',
                name: "Sarah M.",
                role: "CEO, StartupHub",
              },
              {
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
                stars: 5,
                quote:
                  '"I found the perfect tech solutions for my business with WERLTEC. Their team is incredibly knowledgeable and the support has been exceptional every step of the way."',
                name: "James K.",
                role: "Founder, TechVentures",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="flex items-stretch gap-0 overflow-hidden bg-white border border-gray-100 shadow-sm rounded-2xl"
              >
                {/* Left image */}
                <img
                  src={t.image}
                  alt={t.name}
                  className="object-cover w-36 shrink-0"
                />
                {/* Right content */}
                <div className="flex flex-col justify-center px-6 py-6">
                  {/* Stars */}
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-yellow-400"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mb-4 text-sm italic leading-relaxed text-gray-600">
                    {t.quote}
                  </p>
                  <div>
                    <p className="text-sm font-bold text-[#0E255E]">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section
        className="relative px-10 py-24 overflow-hidden text-white"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0E255E]/80" />

        <div className="relative z-10 mx-auto text-center max-w-2xl">
          <h2 className="mb-3 text-3xl font-black md:text-4xl">
            Get Tech Insights in Your Inbox
          </h2>
          <p className="mb-8 text-sm text-white/70">
            Expert tips, industry news, and exclusive updates — delivered straight to you.
          </p>
          <div className="flex items-center gap-3 max-w-lg mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5">
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-1 bg-transparent text-sm text-white placeholder-white/50 outline-none py-2 px-2"
            />
            <button className="bg-white text-[#0E255E] font-semibold text-sm px-6 py-2 rounded-full hover:bg-[#1F77B4] hover:text-white transition whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="px-10 pt-8 pb-20 overflow-hidden text-black bg-white"
      >
        <div className="mx-auto max-w-7xl">
          {/* Heading — one line, slides in from left */}
          <h2
            className="text-6xl md:text-8xl font-black leading-none tracking-tight uppercase mb-10 opacity-0 -translate-x-20 transition-all duration-700 ease-out text-[#0E255E]"
            ref={(el) => {
              if (!el) return;
              const obs = new IntersectionObserver(
                ([e]) => {
                  if (e.isIntersecting) {
                    el.classList.remove("opacity-0", "-translate-x-20");
                    obs.disconnect();
                  }
                },
                { threshold: 0.2 },
              );
              obs.observe(el);
            }}
          >
            GET IN TOUCH
          </h2>

          {/* Two column layout */}
          <div className="grid items-start grid-cols-1 gap-16 md:grid-cols-2">
            {/* Left — image + description + contact info */}
            <div
              className="flex flex-col gap-6 transition-all duration-700 ease-out delay-200 -translate-x-10 opacity-0"
              ref={(el) => {
                if (!el) return;
                const obs = new IntersectionObserver(
                  ([e]) => {
                    if (e.isIntersecting) {
                      el.classList.remove("opacity-0", "-translate-x-10");
                      obs.disconnect();
                    }
                  },
                  { threshold: 0.2 },
                );
                obs.observe(el);
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
                alt="Contact"
                className="w-full h-48 object-cover rounded-2xl border-4 border-[#1e7fc6]"
              />
              <p className="text-sm leading-relaxed text-gray-500">
                Have a project in mind? We’d love to hear from you. Send us a
                message and we’ll get back to you within 24 hours.
              </p>
              {[
                { label: "EMAIL", value: "hello@werltec.com" },
                { label: "PHONE", value: "+94753456786" },
                { label: "LOCATION", value: "Colombo, Sri Lanka" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="border-t border-[#1e7fc6] pt-4"
                >
                  <p className="text-xs text-[#1F4695] uppercase tracking-widest mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold text-gray-800 text-[#0c1633]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Right — form */}
            <div
              className="transition-all duration-700 ease-out delay-300 translate-x-10 opacity-0"
              ref={(el) => {
                if (!el) return;
                const obs = new IntersectionObserver(
                  ([e]) => {
                    if (e.isIntersecting) {
                      el.classList.remove("opacity-0", "translate-x-10");
                      obs.disconnect();
                    }
                  },
                  { threshold: 0.2 },
                );
                obs.observe(el);
              }}
            >
              <h3 className="mb-6 text-2xl font-bold">Send us a message</h3>
              <form className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    placeholder="First Name"
                    className="p-3 border border-[#1e7fc6] rounded-xl text-sm focus:outline-none focus:border-[#0E255E] transition"
                  />
                  <input
                    placeholder="Last Name"
                    className="p-3 border border-[#1e7fc6] rounded-xl text-sm focus:outline-none focus:border-[#0E255E] transition"
                  />
                </div>
                <input
                  placeholder="Email Address"
                  className="p-3 border border-[#1e7fc6] rounded-xl text-sm focus:outline-none focus:border-[#0E255E] transition"
                />
                <input
                  placeholder="Subject"
                  className="p-3 border border-[#1e7fc6] rounded-xl text-sm focus:outline-none focus:border-[#0E255E] transition"
                />
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="p-3 border border-[#1e7fc6] rounded-xl text-sm focus:outline-none focus:border-[#1e7fc6] transition resize-none"
                />
                <button className="bg-linear-to-r from-[#0E255E] to-[#1F77B4] text-white py-3 rounded-xl text-sm font-semibold hover:opacity-90 transition w-full">
                  Send Message ↗
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0c1633] text-white px-10 pt-20 pb-10">
        <div className="mx-auto max-w-7xl">
          {/* Top — big marquee brand name */}
          <div className="pb-10 mb-12 overflow-hidden border-b border-white/10">
            <p className="text-[10rem] font-black leading-none tracking-tighter uppercase whitespace-nowrap opacity-10 select-none">
              WERLTEC
            </p>
          </div>

          {/* Middle — 4 columns */}
          <div className="grid grid-cols-2 gap-10 mb-16 md:grid-cols-4">
            {/* Brand */}
            <div>
              <img
                src={Logo}
                alt="WERLTEC"
                className="object-contain h-12 mb-4"
              />
              <p className="text-sm leading-relaxed text-gray-400">
                We build modern digital experiences with cutting-edge technology
                and bold design.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#41B8E8] mb-4 ">
                Navigation
              </h4>
              <ul className="flex flex-col gap-3">
                {[
                  "Home",
                  "About",
                  "Services",
                  "Careers",
                  "Blog",
                  "Contact",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-sm text-gray-400 transition hover:text-white"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#41B8E8] mb-4">
                Services
              </h4>
              <ul className="flex flex-col gap-3">
                {[
                  "Web Development",
                  "Mobile Apps",
                  "Cloud Solutions",
                  "IT Consulting",
                  "UI/UX Design",
                ].map((s) => (
                  <li key={s} className="text-sm text-gray-400">
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-[#41B8E8] mb-4">
                Contact
              </h4>
              <ul className="flex flex-col gap-3 text-sm text-gray-400">
                <li>hello@werltec.com</li>
                <li>+94 75 345 6786</li>
                <li>Colombo, Sri Lanka</li>
              </ul>
              {/* Social icons */}
              <div className="flex gap-4 mt-6">
                {[
                  {
                    label: "TW",
                    path: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
                  },
                  {
                    label: "LI",
                    path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z",
                  },
                  {
                    label: "GH",
                    path: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22",
                  },
                ].map(({ label, path }) => (
                  <a
                    key={label}
                    href="#"
                    className="flex items-center justify-center transition border rounded-full w-9 h-9 border-white/20 hover:border-white hover:bg-white hover:text-black"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={path}
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col items-center justify-between gap-4 pt-8 border-t md:flex-row border-white/10">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} WERLTEC. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-xs text-gray-500 transition hover:text-white"
                  >
                    {item}
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
