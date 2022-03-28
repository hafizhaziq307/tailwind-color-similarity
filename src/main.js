import App from "./App.svelte";

const app = new App({
  target: document.body,
  props: {
    colors: [
      // slate
      { title: "slate-50", hexcode: "#F8FAFC" },
      { title: "slate-100", hexcode: "#F1F5F9" },
      { title: "slate-200", hexcode: "#E2E8F0" },
      { title: "slate-300", hexcode: "#CBD5E1" },
      { title: "slate-400", hexcode: "#94A3B8" },
      { title: "slate-500", hexcode: "#64748B" },
      { title: "slate-600", hexcode: "#475569" },
      { title: "slate-700", hexcode: "#334155" },
      { title: "slate-800", hexcode: "#1E293B" },
      { title: "slate-900", hexcode: "#0F172A" },

      // gray
      { title: "gray-50", hexcode: "#F9FAFB" },
      { title: "gray-100", hexcode: "#F3F4F6" },
      { title: "gray-200", hexcode: "#E5E7EB" },
      { title: "gray-300", hexcode: "#D1D5DB" },
      { title: "gray-400", hexcode: "#9CA3AF" },
      { title: "gray-500", hexcode: "#6B7280" },
      { title: "gray-600", hexcode: "#4B5563" },
      { title: "gray-700", hexcode: "#374151" },
      { title: "gray-800", hexcode: "#1F2937" },
      { title: "gray-900", hexcode: "#111827" },

      // zinc
      { title: "zinc-50", hexcode: "#FAFAFA" },
      { title: "zinc-100", hexcode: "#F4F4F5" },
      { title: "zinc-200", hexcode: "#E4E4E7" },
      { title: "zinc-300", hexcode: "#D4D4D8" },
      { title: "zinc-400", hexcode: "#A1A1AA" },
      { title: "zinc-500", hexcode: "#71717A" },
      { title: "zinc-600", hexcode: "#52525B" },
      { title: "zinc-700", hexcode: "#3F3F46" },
      { title: "zinc-800", hexcode: "#27272A" },
      { title: "zinc-900", hexcode: "#18181B" },

      // Neutral
      { title: "neutral-50", hexcode: "#FAFAFA" },
      { title: "neutral-100", hexcode: "#F5F5F5" },
      { title: "neutral-200", hexcode: "#E5E5E5" },
      { title: "neutral-300", hexcode: "#D4D4D4" },
      { title: "neutral-400", hexcode: "#A3A3A3" },
      { title: "neutral-500", hexcode: "#737373" },
      { title: "neutral-600", hexcode: "#525252" },
      { title: "neutral-700", hexcode: "#404040" },
      { title: "neutral-800", hexcode: "#262626" },
      { title: "neutral-900", hexcode: "#171717" },

      // Stone
      { title: "stone-50", hexcode: "#FAFAF9" },
      { title: "stone-100", hexcode: "#F5F5F4" },
      { title: "stone-200", hexcode: "#E7E5E4" },
      { title: "stone-300", hexcode: "#D6D3D1" },
      { title: "stone-400", hexcode: "#A8A29E" },
      { title: "stone-500", hexcode: "#78716C" },
      { title: "stone-600", hexcode: "#57534E" },
      { title: "stone-700", hexcode: "#44403C" },
      { title: "stone-800", hexcode: "#292524" },
      { title: "stone-900", hexcode: "#1C1917" },

      // Red
      { title: "red-50", hexcode: "#FEF2F2" },
      { title: "red-100", hexcode: "#FEE2E2" },
      { title: "red-200", hexcode: "#FECACA" },
      { title: "red-300", hexcode: "#FCA5A5" },
      { title: "red-400", hexcode: "#F87171" },
      { title: "red-500", hexcode: "#EF4444" },
      { title: "red-600", hexcode: "#DC2626" },
      { title: "red-700", hexcode: "#B91C1C" },
      { title: "red-800", hexcode: "#991B1B" },
      { title: "red-900", hexcode: "#7F1D1D" },

      // orange
      { title: "orange-50", hexcode: "#FFF7ED" },
      { title: "orange-100", hexcode: "#FFEDD5" },
      { title: "orange-200", hexcode: "#FED7AA" },
      { title: "orange-300", hexcode: "#FDBA74" },
      { title: "orange-400", hexcode: "#FB923C" },
      { title: "orange-500", hexcode: "#F97316" },
      { title: "orange-600", hexcode: "#EA580C" },
      { title: "orange-700", hexcode: "#C2410C" },
      { title: "orange-800", hexcode: "#9A3412" },
      { title: "orange-900", hexcode: "#7C2D12" },

      // Amber
      { title: "amber-50", hexcode: "#FFFBEB" },
      { title: "amber-100", hexcode: "#FEF3C7" },
      { title: "amber-200", hexcode: "#FDE68A" },
      { title: "amber-300", hexcode: "#FCD34D" },
      { title: "amber-400", hexcode: "#FBBF24" },
      { title: "amber-500", hexcode: "#F59E0B" },
      { title: "amber-600", hexcode: "#D97706" },
      { title: "amber-700", hexcode: "#B45309" },
      { title: "amber-800", hexcode: "#92400E" },
      { title: "amber-900", hexcode: "#78350F" },

      // Yellow
      { title: "yellow-50", hexcode: "#FEFCE8" },
      { title: "yellow-100", hexcode: "#FEF9C3" },
      { title: "yellow-200", hexcode: "#FEF08A" },
      { title: "yellow-300", hexcode: "#FDE047" },
      { title: "yellow-400", hexcode: "#FACC15" },
      { title: "yellow-500", hexcode: "#EAB308" },
      { title: "yellow-600", hexcode: "#CA8A04" },
      { title: "yellow-700", hexcode: "#A16207" },
      { title: "yellow-800", hexcode: "#854D0E" },
      { title: "yellow-900", hexcode: "#713F12" },

      // Lime
      { title: "lime-50", hexcode: "#F7FEE7" },
      { title: "lime-100", hexcode: "#ECFCCB" },
      { title: "lime-200", hexcode: "#D9F99D" },
      { title: "lime-300", hexcode: "#BEF264" },
      { title: "lime-400", hexcode: "#A3E635" },
      { title: "lime-500", hexcode: "#84CC16" },
      { title: "lime-600", hexcode: "#65A30D" },
      { title: "lime-700", hexcode: "#4D7C0F" },
      { title: "lime-800", hexcode: "#3F6212" },
      { title: "lime-900", hexcode: "#365314" },

      // Green
      { title: "", hexcode: "" },
      { title: "", hexcode: "" },
      { title: "", hexcode: "" },
      { title: "", hexcode: "" },
      { title: "", hexcode: "" },
      { title: "", hexcode: "" },
      { title: "", hexcode: "" },
      { title: "", hexcode: "" },
      { title: "", hexcode: "" },
      { title: "", hexcode: "" },

      { title: "", hexcode: "" },
      { title: "", hexcode: "" },
      { title: "", hexcode: "" },
      { title: "", hexcode: "" },
      { title: "", hexcode: "" },
      { title: "", hexcode: "" },
      { title: "", hexcode: "" },
      { title: "", hexcode: "" },
      { title: "", hexcode: "" },
      { title: "", hexcode: "" },
    ],
  },
});

export default app;
