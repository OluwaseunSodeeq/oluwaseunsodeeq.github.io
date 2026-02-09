import { useState } from "react";
import ContentContainer from "../Ui/ContentContainer";
import ProjectCard from "./ProjectCard";
import ContinuousMovingIcons from "./ContinuousMovingIcons";
import { projectsDeatails } from "./AllMyProjects";

export default function ProjectHeroSection() {
  const categories = ["All", "Nextjs", "React", "Vanilla JavaScript"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projectsDeatails
      : projectsDeatails.filter(
          (p) =>
            p.category.toLocaleLowerCase() ===
            activeCategory.toLocaleLowerCase(),
        );

  return (
    <ContentContainer background="#ffffff">
      <section className="w-full lg:mt-[150px] px-4 lg:px-0 mt-24 lg:pb-[72px]">
        <div className="hidden lg:flex justify-center gap-6 mb-6">
          {categories.map((cat) => (
            <button
              className={`px-3 py-2 md:px-4  text-nowrap text-base font-normal font-outfit leading-6 border-2 border-x-text-color-two text-btn-text-color bg-text-color-two rounded-[8px] hover:text-blue-text`}
              key={cat}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-col bg-plain-white ">
          <div className="flex justify-end">
            <div className="font-mono text-right text-3xl font-bold mb-8 text-text-color italic">
              My Skills
            </div>
          </div>
          <div>
            <ContinuousMovingIcons />
          </div>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 lg:mt-7">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </ContentContainer>
  );
}

// import { useState } from "react";
// import ContentContainer from "../Ui/ContentContainer";
// import ProjectCard from "./ProjectCard";

// export default function ProjectHeroSection() {
//   const projectsDeatails = [
//     {
//       id: 1,

//       title: "Clemeset",
//       description: "Admin platform to manage farmers & customers.",
//       tools: ["Next.js", "TailwindCSS", "OpenAI"],
//       image: "/images/farmconnect.png",
//       live: "https://your-live-link.com",
//       github: "https://github.com/yourname/farmconnect",
//       category: "nextjs",
//     },
//     {
//       id: 2,
//       title: "FarmConnect",
//       description: "Admin platform to manage farmers & customers.",
//       tools: ["Next.js", "TailwindCSS", "Node.js"],
//       image: "/images/farmconnect.png",
//       live: "https://your-live-link.com",
//       github: "https://github.com/yourname/farmconnect",
//       category: "nextjs",
//     },
//     {
//       id: 3,
//       title: "BES – Engineering Services",
//       description: "Responsive business site showcasing services.",
//       tools: ["React.js", "TailwindCSS", "Formspree"],
//       image: "/images/bes.png",
//       live: "https://your-live-link.com",
//       github: "https://github.com/yourname/bes",
//       category: "nextjs",
//     },
//   ];

//   const categories = ["All", "Nextjs", "React", "Vanilla JavaScript"];
//   const [activeCategory, setActiveCategory] = useState("All");

//   const filtered =
//     activeCategory === "All"
//       ? projectsDeatails
//       : projectsDeatails.filter(
//           (p) =>
//             p.category.toLocaleLowerCase() ===
//             activeCategory.toLocaleLowerCase(),
//         );

//   return (
//     <ContentContainer background="#ffffff">
//       <section className="w-full lg:mt-[150px] px-4 md:px-[40px] mt-24 lg:pb-[72px]">
//         <div className="flex justify-center gap-6 mb-6">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActiveCategory(cat)}
//               className={`px-4 py-2 rounded-full font-semibold transition ${
//                 activeCategory === cat
//                   ? "bg-indigo-600 text-white"
//                   : "bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//           {filtered.map((project) => (
//             <ProjectCard key={project.id} project={project} />
//           ))}
//         </div>
//       </section>
//     </ContentContainer>
//   );
// }
