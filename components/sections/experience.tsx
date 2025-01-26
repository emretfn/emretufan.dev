import { experience } from "@/.velite";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { BlurFade } from "../ui/blur-fade";
import { experienceAnimationDelays } from "@/constants/animations";

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

function ExperienceItem({
  company,
  companyUrl,
  title,
  location,
  startDate,
  endDate,
  description,
  highlights,
  technologies,
}: (typeof experience)[number]) {
  return (
    <div className="relative grid pb-1 sm:grid-cols-8 sm:gap-8 md:gap-4">
      <header
        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2"
        aria-label="Experience period"
      >
        {formatDate(startDate)} — {endDate ? formatDate(endDate) : "Present"}
      </header>
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-primary">
          <div>
            <span className="font-bold">{title}</span>
            <span className="text-muted-foreground"> · </span>
            {companyUrl ? (
              <Link
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary hover:underline underline-offset-2 transition-colors"
              >
                {company}
              </Link>
            ) : (
              <span>{company}</span>
            )}
          </div>
          <div className="text-sm text-muted-foreground">{location}</div>
        </h3>
        <p className="mt-2 text-sm leading-normal text-foreground/90">{description}</p>
        {highlights && (
          <ul className="mt-2 text-sm list-disc list-inside space-y-0.5 text-foreground/90">
            {highlights.map((highlight, i) => (
              <li key={i} className="leading-snug">
                {highlight}
              </li>
            ))}
          </ul>
        )}
        {technologies && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <li key={tech}>
                <Badge variant="outline" className="px-3">
                  {tech}
                </Badge>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export function Experience() {
  // Sort experiences by endDate (missing endDate means current job, should be first)
  const sortedExperience = [...experience].sort((a, b) => {
    if (!a.endDate) return -1;
    if (!b.endDate) return 1;
    return new Date(b.endDate).getTime() - new Date(a.endDate).getTime();
  });

  return (
    <section className="flex flex-col gap-2">
      <BlurFade delay={experienceAnimationDelays.title}>
        <h2 className="text-xl font-bold">Experience</h2>
      </BlurFade>
      <div className="space-y-8">
        {sortedExperience.map((job, i) => (
          <BlurFade key={i} delay={experienceAnimationDelays.items * (i * 0.2 + 1)}>
            <ExperienceItem {...job} />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
