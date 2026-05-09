type Provider = {
  name: string;
  short?: string;
  tint: string;
  ink: string;
  weight?: string;
  italic?: boolean;
};

/** Major Canadian dental insurance providers we accept. */
const providers: Provider[] = [
  { name: "Sun Life", tint: "#fff5e6", ink: "#f5a623", weight: "font-black" },
  { name: "Manulife", tint: "#eaf1fb", ink: "#0066b3", weight: "font-black" },
  { name: "Canada Life", tint: "#fff0f0", ink: "#c8102e", weight: "font-bold" },
  { name: "Green Shield", short: "Green Shield Canada", tint: "#e8f4ec", ink: "#2c8a3e", weight: "font-bold" },
  { name: "Desjardins", tint: "#e8f5e9", ink: "#00874e", weight: "font-bold" },
  { name: "Equitable Life", tint: "#eef2fb", ink: "#1d3a7e", weight: "font-bold" },
  { name: "Blue Cross", tint: "#e8f1fb", ink: "#003d7a", weight: "font-black", italic: true },
  { name: "ClaimSecure", tint: "#fef4e8", ink: "#c45c00", weight: "font-bold" },
  { name: "GreatWest Life", short: "Great-West Life", tint: "#f0eef9", ink: "#3d2c8e", weight: "font-bold" },
  { name: "SSQ", short: "SSQ Insurance", tint: "#e8f5fb", ink: "#0079b3", weight: "font-black" },
  { name: "CDCP", short: "CDCP (Federal)", tint: "#fbf2d8", ink: "#7a5614", weight: "font-bold" },
  { name: "Industrial Alliance", short: "iA Financial", tint: "#fff3ec", ink: "#c44a00", weight: "font-bold" },
];

export default function InsurancePlate() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
      {providers.map((p) => (
        <div
          key={p.name}
          className="relative rounded-xl ring-1 ring-black/5 px-3 py-4 grid place-items-center text-center hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
          style={{ backgroundColor: p.tint }}
          title={`We accept ${p.short ?? p.name} insurance`}
        >
          <span
            className={`text-[13px] tracking-tight ${p.weight ?? "font-bold"} ${
              p.italic ? "italic" : ""
            }`}
            style={{ color: p.ink }}
          >
            {p.short ?? p.name}
          </span>
        </div>
      ))}
    </div>
  );
}
