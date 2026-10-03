"use client";

import { useState } from "react";
import { siteConfig } from "@/data/config";
import { ArrowUpRight, Mail, MessageSquare, Send, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Reels / Shorts",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) errs.message = "Please share a few details about your project";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Mailto fallback
      const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
      setIsSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border-subtle">
      {/* Huge Heading & Closing Mantra */}
      <div className="text-center max-w-4xl mx-auto mb-16 sm:mb-24">
        <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-accent-gold">
          INITIATE PRODUCTION [11]
        </span>
        <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-fg-primary tracking-tight mt-3 mb-6">
          LET'S WORK <span className="italic-serif-accent">TOGETHER.</span>
        </h2>
        <p className="font-sans text-lg sm:text-2xl text-fg-muted font-light max-w-[40ch] mx-auto leading-relaxed">
          &ldquo;{siteConfig.closingMantra}&rdquo;
        </p>
        <p className="font-mono text-xs uppercase tracking-widest text-accent-gold mt-4">
          Available for: {siteConfig.availability}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Direct Communication Channels */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="p-8 rounded-[2rem] bg-bg-card border border-border-subtle flex flex-col gap-6">
            <h3 className="font-serif text-2xl text-fg-primary font-light">
              Direct Channels
            </h3>
            <p className="font-sans text-xs sm:text-sm text-fg-muted font-light">
              Get an instant response regarding project slots, footage delivery, or custom turnaround packages.
            </p>

            <div className="flex flex-col gap-4">
              {/* WhatsApp Button */}
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-bg-card-subtle border border-border-subtle hover:border-accent-gold transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-fg-dim block">
                      Fastest Reply
                    </span>
                    <span className="font-sans text-sm font-medium text-fg-primary group-hover:text-accent-gold transition-colors">
                      WhatsApp: {siteConfig.phone}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-fg-muted group-hover:text-accent-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Email Button */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center justify-between p-4 rounded-xl bg-bg-card-subtle border border-border-subtle hover:border-accent-gold transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent-gold/10 text-accent-gold flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-fg-dim block">
                      Direct Email
                    </span>
                    <span className="font-sans text-sm font-medium text-fg-primary group-hover:text-accent-gold transition-colors truncate max-w-[180px] sm:max-w-none block">
                      {siteConfig.email}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-fg-muted group-hover:text-accent-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Instagram DM Button */}
              <a
                href={siteConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-bg-card-subtle border border-border-subtle hover:border-accent-gold transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 text-purple-400 flex items-center justify-center">
                    <span className="font-mono font-bold text-xs">IG</span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-fg-dim block">
                      Social DM
                    </span>
                    <span className="font-sans text-sm font-medium text-fg-primary group-hover:text-accent-gold transition-colors">
                      Instagram Direct Message
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-fg-muted group-hover:text-accent-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Inquiries Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-[2rem] bg-bg-card border border-border-subtle">
            {isSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <CheckCircle2 className="w-16 h-16 text-accent-gold mb-4" />
                <h3 className="font-serif text-3xl text-fg-primary font-light mb-2">
                  Inquiry Dispatched
                </h3>
                <p className="font-sans text-sm text-fg-muted font-light max-w-[40ch]">
                  Your message has been initiated. I will review your project requirements and follow up within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 font-mono text-xs text-accent-gold uppercase tracking-wider underline underline-offset-4"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                <h3 className="font-serif text-2xl text-fg-primary font-light mb-2">
                  Send a Project Brief
                </h3>

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="font-mono text-xs uppercase tracking-wider text-fg-muted">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-4 py-3 rounded-xl bg-bg-card-subtle border border-border-subtle focus:border-accent-gold text-fg-primary text-sm font-sans outline-none transition-colors"
                  />
                  {errors.name && (
                    <span className="text-red-400 text-xs font-mono">{errors.name}</span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-mono text-xs uppercase tracking-wider text-fg-muted">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@brand.com"
                    className="w-full px-4 py-3 rounded-xl bg-bg-card-subtle border border-border-subtle focus:border-accent-gold text-fg-primary text-sm font-sans outline-none transition-colors"
                  />
                  {errors.email && (
                    <span className="text-red-400 text-xs font-mono">{errors.email}</span>
                  )}
                </div>

                {/* Project Type */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="projectType" className="font-mono text-xs uppercase tracking-wider text-fg-muted">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-bg-card-subtle border border-border-subtle focus:border-accent-gold text-fg-primary text-sm font-sans outline-none transition-colors cursor-pointer"
                  >
                    <option value="Reels / Shorts">Instagram Reels / YouTube Shorts</option>
                    <option value="Cinematic Edit">Cinematic Edit & Color Grading</option>
                    <option value="YouTube Longform">YouTube Engagement Cut</option>
                    <option value="Custom Project">Full Channel / Brand Retainer</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-mono text-xs uppercase tracking-wider text-fg-muted">
                    Project Details & Footage Notes
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe the concept, timeline, and video length..."
                    className="w-full px-4 py-3 rounded-xl bg-bg-card-subtle border border-border-subtle focus:border-accent-gold text-fg-primary text-sm font-sans outline-none transition-colors resize-none"
                  />
                  {errors.message && (
                    <span className="text-red-400 text-xs font-mono">{errors.message}</span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="mt-2 w-full py-4 rounded-full bg-accent-gold text-black font-semibold text-xs tracking-wider uppercase hover:bg-accent-gold-hover hover:scale-[1.01] active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
