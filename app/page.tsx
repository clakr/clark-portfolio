import Image from "next/image";
import clark from "./clark.jpg";

export default function Home() {
  return (
    <main className="min-h-screen grid grid-cols-4 gap-12 container mx-auto">
      <article className="col-span-1 p-8">
        <div className="flex flex-col gap-8 items-end sticky top-8 text-end">
          <Image
            alt="Clark Tolosa's Image"
            src={clark}
            className="rounded-full outline outline-gray-200/75 outline-offset-4"
            height={200}
            width={200}
          />
          <h1 className="text-7xl font-bold">Clark Kenneth Tolosa</h1>
        </div>
      </article>
      <article className="col-span-2">
        <section className="min-h-screen">Frontend</section>
        <section className="min-h-screen">Fullstack</section>
        <section className="min-h-screen">Automated Tester</section>
      </article>
      <article className="col-span-1 p-8">
        <div className="flex flex-col gap-8 sticky top-8">
          {/* TODO: 'animate on section view' */}
          <h2 className="text-6xl font-bold">Frontend</h2>
        </div>
      </article>
    </main>
  );
}
