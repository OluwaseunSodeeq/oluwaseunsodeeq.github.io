import { FaGithub, FaPlay } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";

export default function ProjectCard({ project }) {
  return (
    <div className=" rounded-xl overflow-hidden lg:h-100 ">
      <div className="relative bg-plain-white shadow-lg rounded-md overflow-hidden transition-transform transform hover:scale-105">
        {/* Project Image */}
        <div className="w-full h-48 flex items-center justify-center border-2">
          <img
            src={project.image}
            alt={project.title}
            className={`w-[60%] h-[80%] object-contain ${project.id === 2 ? "bg-farm-green p-2 rounded-md" : ""}`}
          />
        </div>

        {/* Content */}
        <div className="p-5 bg-text-color-two">
          <h3 className="text-lg font-semibold text-gray-900">
            {project.title}
          </h3>

          <p className="mt-2 text-sm text-btn-text-color">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {(project.tools || []).map((tool, idx) => (
              <span
                key={idx}
                className="text-xs border-2 border-gray-300 bg-text-color-two text-blue-text px-2 py-1 rounded-md"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Icons */}
          <div
            className={`flex items-center text-btn-text-color mt-4 ${project.demo ? "justify-between" : "justify-end"}`}
          >
            {project.demo && (
              <div className="flex items-center gap-2 hover:text-blue-text cursor-pointer">
                <span>
                  <FaPlay size={15} className="mr-1" />
                </span>
                <span>Watch Demo</span>
              </div>
            )}
            <div className="flex gap-2 lg:gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" transition cursor-pointer"
                >
                  <FaGithub size={20} />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-text transition cursor-pointer"
                >
                  <BsGlobe2 size={20} color="#007bff" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// export default function ProjectCard({ project }) {
//   return (
//     <div className="border-2">
//       <div className="relative bg-farm-green shadow-lg rounded-2xl overflow-hidden transition-transform transform hover:scale-105">
//         {/* Project Year Badge */}
//         <div className="absolute top-4 right-4 bg-gray-900 text-blue-text text-xs font-bold px-3 py-1 rounded-full">
//           {project.year}
//         </div>

//         {/* Project Image */}
//         <div className="w-full h-48 overflow-hidden">
//           <img
//             src={project.image}
//             alt={project.title}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Content */}
//         <div className="p-5">
//           <h3 className="text-lg font-semibold text-gray-900 ">
//             {project.title}
//           </h3>

//           <p className="mt-2 text-sm text-btn-text-color ">
//             {project.description}
//           </p>

//           {/* Tags */}
//           <div className="flex flex-wrap gap-2 mt-3">
//             {project.tags.map((tag, idx) => (
//               <span
//                 key={idx}
//                 className="text-xs text-plain-white  bg-blue-text px-2 py-1 rounded-full"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>

//           {/* Icons */}
//           <div className="flex items-center justify-between mt-4">
//             <div className="flex gap-4 text-gray-700 ">
//               {project.github && (
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-blue-text transition"
//                 >
//                   <FaGithub size={18} />
//                 </a>
//               )}
//               {project.live && (
//                 <a
//                   href={project.live}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:text-blue-text transition"
//                 >
//                   <FaExternalLinkAlt size={18} />
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function ProjectCard({ project }) {
//   return (
//     <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
//       <img
//         src={project.image}
//         alt={project.title}
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-5">
//         <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">
//           {project.title}
//         </h2>
//         <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
//           {project.description}
//         </p>
//         <div className="flex flex-wrap gap-2 my-3">
//           {project.tools.map((t, i) => (
//             <span
//               key={i}
//               className="bg-indigo-200 dark:bg-blue-text text-blue-text dark:text-blue-text px-2 py-1 rounded-full text-xs"
//             >
//               {t}
//             </span>
//           ))}
//         </div>
//         <div className="flex justify-between">
//           <a
//             href={project.live}
//             target="_blank"
//             className="text-sm font-semibold text-blue-text dark:text-blue-text"
//           >
//             Live
//           </a>
//           <a
//             href={project.github}
//             target="_blank"
//             className="text-sm font-semibold text-blue-text dark:text-blue-text"
//           >
//             GitHub
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// ===============
// export default function ProjectCard({ project }) {
//   return (
//     <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
//       <img
//         src={project.image}
//         alt={project.title}
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-5">
//         <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100">
//           {project.title}
//         </h2>
//         <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
//           {project.description}
//         </p>
//         <div className="flex flex-wrap gap-2 my-3">
//           {project.tools.map((t, i) => (
//             <span
//               key={i}
//               className="bg-blue-text dark:bg-indigo-700 text-blue-text dark:text-indigo-200 px-2 py-1 rounded-full text-xs"
//             >
//               {t}
//             </span>
//           ))}
//         </div>
//         <div className="flex justify-between">
//           <a
//             href={project.live}
//             target="_blank"
//             className="text-sm font-semibold text-indigo-600 dark:text-indigo-400"
//           >
//             Live
//           </a>
//           <a
//             href={project.github}
//             target="_blank"
//             className="text-sm font-semibold text-indigo-600 dark:text-indigo-400"
//           >
//             GitHub
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
