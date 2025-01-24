import { profile } from "@/.velite";

export function About() {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-xl font-bold">About</h2>
      <div 
        className="prose leading-snug prose-neutral dark:prose-invert !max-w-none text-justify"
        dangerouslySetInnerHTML={{ __html: profile.about }}
      />
    </section>
  );
}
