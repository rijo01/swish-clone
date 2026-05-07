export function generateSwedishMobile(): string {
  const prefixes = ["70", "72", "73", "76", "79"];
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const rest = Array.from({ length: 7 }, () =>
    Math.floor(Math.random() * 10)
  ).join("");
  return `+46 ${prefix} ${rest.slice(0, 3)} ${rest.slice(3, 5)} ${rest.slice(5, 7)}`;
}
