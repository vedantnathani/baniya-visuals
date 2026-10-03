"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/config";
import { ArrowUpRight, Check } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border-subtle">
      {/* Heading & Subline */}
      <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/10 border border-accent-gold/30 text-accent-gold text-xs uppercase tracking-wider font-medium mb-3">
          TRANSPARENT EDITING RATES
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-fg-primary font-light tracking-tight">
          Simple <span className="italic-serif-accent">pricing.</span>
        </h2>
        <p className="font-sans text-sm sm:text-base text-fg-muted font-light mt-3 max-w-[55ch] mx-auto">
          Pick the level that fits your content. Custom quotes available for bigger projects.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {siteConfig.pricing.map((plan, idx) => {
          const isFeatured = plan.isFeatured;
          const encodedMessage = encodeURIComponent(plan.whatsappPrefill);
          const bookingUrl = `${siteConfig.whatsappLink}?text=${encodedMessage}`;

          return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex flex-col justify-between p-6 sm:p-8 rounded-[2rem] transition-all duration-500 sm:hover:-translate-y-1.5 ${
                isFeatured
                  ? "bg-bg-card border-2 border-accent-gold shadow-[0_12px_40px_var(--accent-glow)] z-10"
                  : "bg-bg-card border border-border-subtle sm:hover:border-accent-gold/40 hover:shadow-xl"
              }`}
            >
              {/* Featured Badge */}
              {isFeatured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full bg-accent-gold text-black font-mono text-[10px] uppercase font-bold tracking-widest shadow-md">
                  MOST POPULAR
                </div>
              )}

              <div>
                {/* Monospace Uppercase Tag */}
                <div className="mb-4">
                  <span
                    className={`font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border ${
                      isFeatured
                        ? "border-accent-gold/40 text-accent-gold bg-accent-gold/10"
                        : "border-border-subtle text-fg-muted bg-bg-card-subtle"
                    }`}
                  >
                    {plan.tag}
                  </span>
                </div>

                {/* Plan Title */}
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-fg-primary mb-4">
                  {plan.title}
                </h3>

                {/* Price Display */}
                <div className="flex items-baseline gap-2 mb-6 border-b border-border-subtle pb-6">
                  <span className="font-serif text-3xl sm:text-4xl text-accent-gold font-normal">
                    {plan.price}
                  </span>
                  <span className="font-mono text-xs text-fg-muted uppercase">
                    {plan.priceSub}
                  </span>
                </div>

                {/* Features List */}
                <ul className="flex flex-col gap-3 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 font-sans text-xs sm:text-sm text-fg-muted font-light">
                      <Check className="w-4 h-4 text-accent-gold shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <a
                  href={bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-6 min-h-[48px] rounded-full font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 whitespace-nowrap ${
                    isFeatured
                      ? "bg-accent-gold text-black hover:bg-accent-gold-hover shadow-lg"
                      : "border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-black"
                  }`}
                >
                  <span>{plan.buttonText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Custom Quote Note */}
      <div className="text-center mt-10">
        <p className="font-sans text-xs sm:text-sm text-fg-dim font-light max-w-xl mx-auto">
          Final price depends on video length, footage and effects. Message me for a custom quote.
        </p>
      </div>
    </section>
  );
}
