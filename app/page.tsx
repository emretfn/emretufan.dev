import { Header } from "@/components/header";
import { About } from "@/components/sections/about";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";

export default function Home() {
  return (
    <main className="container p-4 md:p-16">
      <div className="space-y-8 max-w-2xl mx-auto">
        <Header />
        <About />
        <Experience />
        <Education/>
      </div>
    </main>
  );
}
