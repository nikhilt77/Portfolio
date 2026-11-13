"use client";
import React, { useState } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaCopy,
  FaCheck,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("nikhiltomy.mec@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `mailto:nikhiltomy.mec@gmail.com?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name}`
    )}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`)}`;
    window.location.href = url;
  };

  const profiles = [
    { name: "GitHub",     handle: "@nikhilt77",      link: "https://github.com/nikhilt77",                              icon: <FaGithub className="text-lg" />,    hover: "hover:border-gray-400 hover:text-white" },
    { name: "LinkedIn",   handle: "Nikhil Tomy",     link: "https://www.linkedin.com/in/nikhil-tomy-4a5b45254/",       icon: <FaLinkedin className="text-lg text-blue-500" />,  hover: "hover:border-blue-500" },
    { name: "LeetCode",   handle: "@nikhilt77",      link: "https://leetcode.com/nikhilt77/",                           icon: <SiLeetcode className="text-lg text-yellow-500" />, hover: "hover:border-yellow-500" },
    { name: "HackerRank", handle: "@nikhiltomy75",   link: "https://www.hackerrank.com/profile/nikhiltomy75",           icon: <SiHackerrank className="text-lg text-green-500" />, hover: "hover:border-green-500" },
    { name: "Instagram",  handle: "@nikhil._.t77",   link: "https://www.instagram.com/nikhil._.t77/",                   icon: <FaInstagram className="text-lg text-pink-500" />,  hover: "hover:border-pink-500" },
  ];

  return (
    <div className="bg-black py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/60 border border-red-800 text-red-400 text-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to opportunities &amp; collaborations
          </div>
          <h1 className="text-red-600 font-extrabold text-4xl sm:text-5xl mb-3">Let's Connect</h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Have a project in mind, a question, or a role you're hiring for? Reach out directly or send a message below.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT — message form */}
          <div className="lg:col-span-7 bg-gray-900/40 border border-red-900/60 rounded-xl p-6 sm:p-8">
            <h2 className="text-white text-xl font-bold mb-1 flex items-center gap-2">
              <FaPaperPlane className="text-red-500 text-base" /> Send a Message
            </h2>
            <p className="text-gray-500 text-sm mb-6">Opens your email client pre-filled — no sign-in needed.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Name</label>
                  <input
                    type="text" required placeholder="Your name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/60 border border-red-900/50 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Email</label>
                  <input
                    type="email" required placeholder="you@example.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black/60 border border-red-900/50 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Subject</label>
                <input
                  type="text" placeholder="Opportunity / Collab / Question"
                  value={formData.subject}
                  onChange={e => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-black/60 border border-red-900/50 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Message</label>
                <textarea
                  rows={4} required placeholder="Hi Nikhil, I'd like to chat about..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-black/60 border border-red-900/50 rounded-lg px-4 py-2.5 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-red-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold px-7 py-2.5 rounded-lg transition-colors text-sm cursor-pointer"
              >
                <FaPaperPlane className="text-xs" /> Send Message
              </button>
            </form>
          </div>

          {/* RIGHT — email + info + profiles */}
          <div className="lg:col-span-5 space-y-5">

            {/* Direct email */}
            <div className="bg-gray-900/40 border border-red-900/60 rounded-xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 bg-red-950/80 rounded-lg text-red-500">
                  <FaEnvelope className="text-lg" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base">Direct Email</h3>
                  <p className="text-gray-500 text-xs">Best way to reach me</p>
                </div>
              </div>
              <p className="text-gray-200 font-mono text-xs bg-black/50 p-2.5 rounded border border-red-950 mb-3 break-all">
                nikhiltomy.mec@gmail.com
              </p>
              <div className="flex gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-red-900/40 hover:bg-red-900/70 border border-red-800 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-colors"
                >
                  {copied ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                  {copied ? "Copied!" : "Copy"}
                </button>
                <a
                  href="mailto:nikhiltomy.mec@gmail.com"
                  className="flex-1 inline-flex items-center justify-center bg-red-600 hover:bg-red-500 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-colors"
                >
                  Open Mail
                </a>
              </div>
            </div>

            {/* Location & Education */}
            <div className="bg-gray-900/40 border border-red-900/60 rounded-xl p-5 space-y-3">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-semibold">Kerala, India</p>
                  <p className="text-gray-500 text-xs">IST / UTC+5:30</p>
                </div>
              </div>
              <div className="flex items-start gap-3 pt-3 border-t border-red-950/60">
                <FaGraduationCap className="text-red-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm font-semibold">B.Tech CS — 2026</p>
                  <p className="text-gray-500 text-xs">Govt. Model Engineering College, Kerala</p>
                </div>
              </div>
            </div>

            {/* Profiles grid */}
            <div className="bg-gray-900/40 border border-red-900/60 rounded-xl p-5">
              <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">Profiles &amp; Platforms</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {profiles.map((p, i) => (
                  <a
                    key={i}
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2.5 p-2.5 rounded-lg bg-black/40 border border-red-950 transition-all ${p.hover} hover:bg-gray-900/80`}
                  >
                    {p.icon}
                    <div className="overflow-hidden">
                      <p className="text-xs font-semibold text-white leading-tight">{p.name}</p>
                      <p className="text-[11px] text-gray-500 truncate">{p.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
