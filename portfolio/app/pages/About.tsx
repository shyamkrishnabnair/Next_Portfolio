const skills: Skill[] = [
    { name: 'Next.js', level: 'Advanced' },
    { name: 'TypeScript', level: 'Advanced' },
    { name: 'Tailwind CSS', level: 'Expert' },
    { name: 'React', level: 'Advanced' },
    { name: 'Firebase/Firestore', level: 'Intermediate' },
    { name: 'Node.js/Express', level: 'Intermediate' },
    { name: 'UI/UX Design', level: 'Proficient' },
];



const About: React.FC = () => (
    <section id="about" className="py-24 bg-gray-950">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-extrabold text-center mb-16 text-white">
                About Me
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                {/* Column 1: Avatar and Contact Button */}
                <div className="md:col-span-1 flex flex-col items-center">
                    {/* Placeholder Avatar - replace with your image URL */}
                    <div className="w-60 h-60 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
                        <img 
                            src="/profile.jpg" 
                            alt="Profile" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    
                    <a 
                        href="https://drive.google.com/file/d/1gOodx219Xty3V_v1SOLs3HwCC_JFGHCn/view?usp=drive_link" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full text-center px-6 py-3 border border-indigo-600 text-base font-medium 
                                   rounded-xl text-indigo-400 bg-gray-900 hover:bg-indigo-900 transition duration-200 shadow-md"
                    >
                        Download Resume
                    </a>
                </div>

                {/* Column 2 & 3 (Desktop): Bio Text and Experience */}
                <div className="md:col-span-2 space-y-8">
                    {/* Bio Paragraphs */}
                    <div className="space-y-4 text-gray-300 text-lg">
                        <p>
                            I see technology as both an art and a science — a canvas for imagination and a tool for precision. As a final-year Data Science undergrad and Creative Developer, I’m driven by curiosity and passion to craft experiences that merge creativity with logic. 
                        </p>
                        <p>
                            Drawing inspiration from Leonardo da Vinci’s timeless curiosity and Lewis Hamilton’s relentless pursuit of perfection, I aim to build digital products that are thoughtful, impactful, and ahead of their time.
                        </p>
                    </div>

                    {/* Skill Badges List */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-white border-b border-gray-700 pb-2">
                            Core Technologies
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill) => (
                                <span 
                                    key={skill.name} 
                                    className="px-4 py-1.5 text-sm font-medium rounded-full 
                                               bg-indigo-900 text-indigo-200 border border-indigo-700 shadow-md"
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default About