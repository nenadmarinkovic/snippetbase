import Header from "@/components/Header";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <Header />
      <section className="pt-24">
        <div className="container">
          <p>
            Snippetbase is a code base for developers and designers focused on
            simplicity, functionality, and unobtrusive design.
          </p>
        </div>
      </section>
    </main>
  );
}
