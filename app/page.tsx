import Hero from "@components/Home/Hero";
import Who from "@components/Home/Who";
import Selections from "./components/Home/Selections";
import Why from "./components/Home/Why";
import Reviews from "./components/Home/Reviews";

export default function Home() {
  return (
    <main className=" flex flex-col gap-0">
      <Hero />
      <Who />
      <Selections />
      <Why />
      <Reviews />
    </main>
  );
}
