import { Header } from "@/components/header";
import { About } from "@/components/sections/about";

export default function Home() {
  return (
    <main className="container max-w-2xl py-10">
      <div className="space-y-8">
        <Header />
        <About />
      </div>
    </main>
  );
}
