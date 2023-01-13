import Header from "@/components/Header";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <Header />
      <section>
        <div className="container">
          <h1 className="text-3xl leading-relaxed">
            Snippetbase is a code base for developers and designers focused on
            simplicity, functionality, and unobtrusive design.
          </h1>
        </div>
      </section>
    </main>
  );
}
