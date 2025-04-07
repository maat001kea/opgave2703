import Navbar from "../components/Navnbar";
import HeroSection from "../components/HeroSection";
import React from "react";

export default async function iWatch() {
  // Hent blogdata fra API
  let posts = [];

  try {
    const data = await fetch("https://api.vercel.app/blog", { cache: "no-store" });
    posts = await data.json();
  } catch (error) {
    console.error("Fejl ved hentning af data:", error);
  }

  return (
    <>
      <main>
        <Navbar />

        <h1 className="text-3xl font-bold pb-6 text-white bg-[#b6ccda]">Seneste blogindlæg</h1>

        <ul className="space-y-4 bg-[#b6ccda] text-white">
          {posts.map((post: any) => (
            <li key={post.id} className=" p-4 rounded shadow-md">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              {/* Hvis der er mere info i post-objektet kan det vises her */}
            </li>
          ))}
        </ul>

        <HeroSection />
      </main>
    </>
  );
}

// export default async function Page() {
//   const data = await fetch("https://api.vercel.app/blog");
//   const posts = await data.json();
//   return (
//     <ul>
//       {posts.map((post) => (
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//   );
// }
