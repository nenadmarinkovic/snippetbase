import Header from "@/components/Header";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <Header />
      <section>
        <div className="container">
          <h1 className="text-2xl leading-[1.75] mt-5">
            Snippetbase is a codebase for developers and designers focused on
            simplicity, functionality, and unobtrusive design.
          </h1>
        </div>
      </section>
    </main>
  );
}
