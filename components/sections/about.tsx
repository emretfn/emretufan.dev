import { profile } from "@/.velite";
import { BlurFade } from "../ui/blur-fade";
import { aboutAnimationDelays } from "@/constants/animations";

export function About() {
  return (
    <section className="flex flex-col gap-2">
      <BlurFade delay={aboutAnimationDelays.title}>
        <h2 className="text-xl font-bold">About</h2>
      </BlurFade>
      <BlurFade delay={aboutAnimationDelays.description}>
        <div
          className="prose leading-snug prose-neutral dark:prose-invert !max-w-none text-justify"
          dangerouslySetInnerHTML={{ __html: profile.about }}
        />
      </BlurFade>
    </section>
  );
}
