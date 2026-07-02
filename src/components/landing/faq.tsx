"use client";

import React from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import { type FaqItem } from "./data";
import { EASE, Reveal } from "./motion";
import { SectionHeading } from "./section";

function FaqRow({
  item,
  open,
  onToggle,
}: {
  item: FaqItem;
  open: boolean;
  onToggle: () => void;
}) {
  const reduce = useReducedMotion();
  return (
    <div className="border-b border-line">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-serif text-lg font-bold leading-snug text-ink">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: EASE }}
          className="shrink-0 text-ink-muted"
        >
          <Plus className="h-5 w-5" strokeWidth={1.5} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            animate={reduce ? { opacity: 1 } : { height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-6 text-[15px] leading-relaxed text-ink-soft">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FaqSection({
  title,
  items,
}: {
  title: string;
  items: FaqItem[];
}) {
  const [open, setOpen] = React.useState<number | null>(0);
  return (
    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
      <SectionHeading
        title={title}
        subtitle="Si tu duda no está aquí, escríbenos y te respondemos el mismo día hábil."
      />
      <Reveal delay={0.1}>
        <div className="border-t border-line">
          {items.map((item, i) => (
            <FaqRow
              key={item.q}
              item={item}
              open={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </Reveal>
    </div>
  );
}
