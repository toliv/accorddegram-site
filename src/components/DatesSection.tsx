"use client";

export interface DateEntry {
  date: string;
  title: string;
  href: string;
  venue?: string;
}

const dates: DateEntry[] = [
  { date: "May 17, 2026", title: "Nomad Supper Club • A Pearl Jam", href: "https://www.eventbrite.com/e/a-pearl-jam-tickets-1986899890057", venue: "Apartment 5 - 157 Ludlow St" },
  // { date: "May 22, 2026", title: "Spring Festival", href: "#", venue: "Central Park" },
  // { date: "June 3, 2026", title: "Summer Series", href: "#", venue: "Riverside Amphitheater" },
  // { date: "June 18, 2026", title: "Midnight Jazz", href: "#", venue: "Blue Note Club" },
];

export function DatesSection({ id = "dates" }: { id?: string }) {
  return (
    <section id={id} className="w-full max-w-2xl mx-auto px-4 py-12">
      <h2 className="font-mono text-2xl tracking-widest uppercase mb-8 text-center">
        Upcoming Dates
      </h2>
      <ul className="flex flex-col gap-4">
        {dates.map((item, index) => (
          <li
            key={index}
            className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 p-4 border border-foreground/20 hover:border-foreground/60 transition-colors group"
          >
            <span className="font-mono text-sm shrink-0 w-28 text-foreground/70 group-hover:text-foreground transition-colors">
              {item.date}
            </span>
            <a
              href={item.href}
              className="font-mono text-lg tracking-widest uppercase hover:opacity-60 transition-opacity"
            >
              {item.title}
            </a>
            {item.venue && (
              <span className="font-mono text-xs text-foreground/50 hidden sm:block ml-auto">
                {item.venue}
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}