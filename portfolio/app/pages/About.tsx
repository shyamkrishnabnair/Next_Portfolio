import Image from "next/image";

interface Skill {
    section: string;
    items: string[];
}

const skills: Skill[] = [
    {
        section: 'Programming Languages',
        items: ['Python', 'C', 'Java'],
    },
    {
        section: 'Frontend',
        items: ['ReactJS', 'Next.js', 'TypeScript', 'Tailwind CSS','JavaScript', 'HTML5', 'CSS3',],
    },
    {
        section: 'Backend',
        items: ['Node.js', 'Express.js', 'REST APIs', 'Flask', "Django"],
    },
    {
        section: 'Databases',
        items: ['MySQL', 'MongoDB'],
    },
    {
        section: 'Version Control & Deployment',
        items: ['Git', 'GitHub', 'Vercel', 'Render', 'GitHub Pages'],
    },
    {
        section: 'Design Tools',
        items: ['Adobe Illustrator', 'Figma', 'After Effects', 'InDesign'],
    },
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
                    <div className="w-60 h-60 rounded-2xl overflow-hidden mb-6 border-4 border-white shadow-lg">
                        <Image 
                            src="/profile.jpg" 
                            alt="Profile" 
                            width={300}
                            height={300}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    
                    
                </div>

                {/* Column 2 & 3 (Desktop): Bio Text and Experience */}
                <div className="md:col-span-2 space-y-8">
                    {/* Bio Paragraphs */}
                    <div className="space-y-4 text-gray-300 text-lg">
                        <p>
                            I see technology as both an art and a science — a canvas for imagination and a tool for precision. As a final-year Data Science undergrad and Creative Developer, I&apos;m driven by curiosity and passion to craft experiences that merge creativity with logic. 
                        </p>
                        <p>
                            Drawing inspiration from Leonardo da Vinci&apos;s timeless curiosity and Lewis Hamilton&apos;s relentless pursuit of perfection, I aim to build digital products that are thoughtful, impactful, and ahead of their time.
                        </p>
                        <a 
                        href="https://drive.google.com/file/d/1gOodx219Xty3V_v1SOLs3HwCC_JFGHCn/view?usp=drive_link" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-50 inline-flex items-center justify-center border border-indigo-600 font-medium
                                   rounded text-white bg-indigo-600 hover:bg-indigo-700 transition duration-200 shadow-md"
                    >
                        Download Resume
                    </a>
                    </div>

                    {/* Skill Badges List */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 text-white border-b border-gray-700 pb-2">
                            Core Technologies
                        </h3>
                        
                        {/* Iterate over skill sections */}
                        <div className="space-y-8"> 
                            {skills.map((skillGroup) => { // FIX: Changed from implicit return (=> () to explicit return (=> {})
                                return (
                                    <div 
                                        key={skillGroup.section} 
                                        className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-start pb-4 border-b border-gray-800 last:border-b-0"
                                    >
                                        {/* Section Name (1/4 column on desktop) */}
                                        <h4 className="text-xl font-medium text-white md:col-span-1 pt-1">
                                            {skillGroup.section}
                                        </h4>
                                        
                                        {/* Items (3/4 columns on desktop) */}
                                        <div className="flex flex-wrap gap-3 md:col-span-3 items-center">
                                            {skillGroup.items.map((item) => (
                                                <span 
                                                    key={item} 
                                                    className="px-4 py-1.5 text-sm font-medium rounded-full 
                                                               bg-indigo-900 text-indigo-100 border border-indigo-700 shadow-md"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default About