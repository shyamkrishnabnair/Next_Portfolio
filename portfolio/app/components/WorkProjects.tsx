import ProjectCarousel from "./ProjectCarousel";
import { Github, ArrowRight } from "lucide-react";


interface Project {
    id: number;
    title: string;
    images: string[]; // URLs for the carousel
    stack: string[];
    description: string;
    liveLink?: string;
    githubLink?: string;
}


const dummyProjects: Project[] = [
  {
    id: 2,
    title: "AirNotes - Hand Gesture Music Composer",
    images: [
    ],
    stack: ["Python", "OpenCV", "Pygame", "Mediapipe"],
    description:
      "A real-time hand gesture recognition system that controls music playback using computer vision. Features dynamic gesture detection and a symbolic notation system for musical interactions.",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 3,
    title: "Saarthi – Govt Scheme Recommender",
    images: [
    ],
    stack: ["React+Vite", "TailwindCSS", "Speech-to-Speech", "REST API"],
    description:
      "A one-stop platform for discovering Karnataka Government welfare schemes using AI-driven recommendations and voice-based search. Includes complaint filing and dashboard features.",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 4,
    title: "Traveloop-Travel Itinerary Generator",
    images: [
    ],
    stack: ["Python", "Hadoop", "Apache Spark", "Flask"],
    description:
      "A big data application leveraging Spark and Hadoop to analyze travel datasets and generate optimized itineraries based on user preferences and location analytics.",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 5,
    title: "Endxiety-Mental Wellness Chatbot",
    images: [
    ],
    stack: ["Python", "Streamlit", "Llama"],
    description:
      "An AI-powered mental wellness chatbot that provides supportive, positive interactions using local LLMs. Designed with a minimal UI for smooth, private conversations.",
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 6,
    title: "Skill Matrix - E Learning Hub",
    images: [
    ],
    stack: ["React", "Django REST", "MongoDB"],
    description:
      "A full-stack e-learning platform featuring authentication, course management, dashboards, reviews, and responsive UI. Includes optional gamification, forums, and live classes.",
    liveLink: "#",
    githubLink: "#",
  },
];


const WorkProjects = () => (
    <div className="projects"> <h3 className="text-3xl font-bold text-white mb-8 border-b border-gray-700 pb-4">Projects</h3>
        <div className=" flex justify-center items-center">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            {dummyProjects.map((project) => (
                <div 
                    key={project.id} 
                    className="p-6 bg-gray-900 border border-gray-800 rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.03] transition duration-300"
                >
                    {/* Project Image Carousel */}
                    <ProjectCarousel images={project.images} />

                    <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                    
                    {/* Stack Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.stack.map((tech) => (
                            <span 
                                key={tech} 
                                className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-900 text-indigo-200"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <p className="text-gray-300 mb-6">{project.description}</p>
                    
                    {/* Links */}
                    <div className="flex space-x-4">
                        {project.liveLink && (
                            <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center transition"
                            >
                                Live Demo <ArrowRight size={16} className="ml-1" />
                            </a>
                        )}
                        {project.githubLink && (
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white font-medium flex items-center transition"
                            >
                                GitHub <Github size={16} className="ml-1" />
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </div>
    </div>
    </div>
);


export default WorkProjects