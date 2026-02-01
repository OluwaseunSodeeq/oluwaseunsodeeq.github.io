import { useState } from "react";
import ContentContainer from "../Ui/ContentContainer";
import ProjectCard from "./ProjectCard";
import ContuinuousMovingIcons from "./ContinuousMovingIcons";

export default function ProjectHeroSection() {
  const projectsDeatails = [
    {
      id: 1,
      demo: true,
      title: "Clemeset",
      description: "Admin platform to manage farmers & customers.",
      tools: ["Next.js", "Tailwind CSS", "Ai"],
      image: "../lemon-logo.png",
      live: "https://your-live-link.com",
      github: "https://github.com/yourname/farmconnect",
      category: "nextjs",
    },
    {
      id: 2,
      demo: false,
      title: "FarmConnect",
      description: "Admin platform to manage farmers & customers.",
      tools: ["Next.js", "Tailwind CSS", "Node.js"],
      image: " ../farmlogo.png",
      live: "https://your-live-link.com",
      github: "https://github.com/yourname/farmconnect",
      category: "nextjs",
    },
    {
      id: 3,
      demo: false,
      title: "BES – Engineering Services",
      description:
        "Responsive business site showcasing services. business site showcasing services.",
      tools: ["React.js", "Tailwind CSS", "Formspree"],
      image: "../BESLOGO.svg",
      live: "https://your-live-link.com",
      github: "https://github.com/yourname/bes",
      category: "nextjs",
    },
    {
      id: 4,
      demo: false,
      title: "IP-Address-Tracker",
      description: "Responsive business site showcasing services.",
      tools: ["React.js", "Tailwind CSS", "Formspree"],
      image: "../lemon-logo.png",
      live: "https://oluwaseunsodeeq.github.io/ip-address-tracker/",
      github: "https://github.com/yourname/bes",
      category: "nextjs",
    },
    {
      id: 5,
      demo: false,
      title: "IP-Address-Tracker",
      description: "Responsive business site showcasing services.",
      tools: ["React.js", "Tailwind CSS", "Formspree"],
      image: "../fontendMentor-Logo.png",
      live: "https://oluwaseunsodeeq.github.io/ip-address-tracker/",
      github: "https://github.com/yourname/bes",
      category: "nextjs",
    },
    {
      id: 6,
      demo: false,
      title: "Second Project",
      description: "Responsive business site showcasing services.",
      tools: ["React.js", "Tailwind CSS", "Formspree"],
      image: "../fontendMentor-Logo.png",
      live: "https://oluwaseunsodeeq.github.io/ip-address-tracker/",
      github: "https://github.com/yourname/bes",
      category: "nextjs",
    },
  ];

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
      <section className="w-full lg:mt-[150px] px-4 md:px-[40px] mt-24 lg:pb-[72px]">
        <div className="flex justify-center gap-6 mb-6">
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

        <div className="py-3">
          <div className="font-mono text-left text-3xl font-bold mb-8 text-text-color w-[300px] italic">
            My Skillset
          </div>
          <div>
            <ContuinuousMovingIcons />
          </div>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
