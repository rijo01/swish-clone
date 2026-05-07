function CardIllustration() {
  return (
    <svg
      viewBox="0 0 240 200"
      className="w-3/4 max-w-[260px] mx-auto opacity-90"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="cardGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1F2F4D" />
          <stop offset="100%" stopColor="#0F1A2E" />
        </linearGradient>
      </defs>
      <rect
        x="40"
        y="40"
        width="160"
        height="120"
        rx="14"
        fill="url(#cardGrad)"
        stroke="#2A3A5C"
        strokeWidth="2"
      />
      <circle cx="78" cy="84" r="16" fill="#3FA9F5" opacity="0.9" />
      <rect x="102" y="74" width="68" height="6" rx="3" fill="#2A3A5C" />
      <rect x="102" y="86" width="48" height="6" rx="3" fill="#2A3A5C" />
      <rect x="58" y="118" width="124" height="6" rx="3" fill="#2A3A5C" />
      <rect x="58" y="132" width="80" height="6" rx="3" fill="#2A3A5C" />
    </svg>
  );
}

export default function ForfragningarPage() {
  return (
    <div className="px-5 pt-2">
      <h1 className="text-center text-xl font-semibold mt-3 mb-6">
        Förfrågningar
      </h1>

      <div className="my-6">
        <CardIllustration />
      </div>

      <h2 className="text-2xl font-bold leading-tight mb-4">
        Din bank stödjer inte funktionen för personer under 18 år än.
      </h2>

      <p className="text-textSecondary text-base leading-relaxed mb-4">
        Vill du veta mer kan du be din vårdnadshavare att vända sig till din
        bank.
      </p>
      <p className="text-textSecondary text-base leading-relaxed">
        Med förfrågningar kommer du kunna be vänner och familj att swisha dig.
      </p>
    </div>
  );
}
