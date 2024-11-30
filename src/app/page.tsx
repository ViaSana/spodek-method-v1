import Image from "next/image";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navigation />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start mt-16">
        <h1>Spodek Method</h1>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
