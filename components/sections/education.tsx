import { education } from "@/.velite";
import Link from "next/link";
import { BlurFade } from "../ui/blur-fade";
import { educationAnimationDelays } from "@/constants/animations";

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function EducationItem({
  institution,
  institutionUrl,
  degree,
  major,
  location,
  startDate,
  endDate,
}: (typeof education)[number]) {
  return (
    <div className="relative grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4">
      <header
        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2"
        aria-label="Education period"
      >
        {formatDate(startDate)} — {endDate ? formatDate(endDate) : "Present"}
      </header>
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-primary">
          <div>
            <span className="font-bold">{degree}</span>
            <span className="text-muted-foreground"> · </span>
            {institutionUrl ? (
              <Link
                href={institutionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary hover:underline underline-offset-2 transition-colors"
              >
                {institution}
              </Link>
            ) : (
              <span>{institution}</span>
            )}
          </div>
          <div className="text-sm text-muted-foreground">{major}</div>
          <div className="text-sm text-muted-foreground">{location}</div>
        </h3>
      </div>
    </div>
  );
}

export function Education() {
  const sortedEducation = [...education].sort((a, b) => {
    if (!a.endDate) return -1;
    if (!b.endDate) return 1;
    return new Date(b.endDate).getTime() - new Date(a.endDate).getTime();
  });

  return (
    <section className="flex flex-col gap-2">
      <BlurFade delay={educationAnimationDelays.title}>
        <h2 className="text-xl font-bold">Education</h2>
      </BlurFade>
      <div className="space-y-8">
        {sortedEducation.map((edu, i) => (
          <BlurFade key={i} delay={educationAnimationDelays.items * (i * 0.2 + 1)}>
            <EducationItem {...edu} />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
