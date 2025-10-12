import { Github, Linkedin, Instagram, Code, Mail } from 'lucide-react'; 

interface IconProps {
    size?: number;
    className?: string;
    style?: React.CSSProperties;
    // We include standard SVG element props to avoid using 'any' explicitly
    'aria-label'?: string;
    onClick?: () => void;
    
}

interface ContactLink {
  name: string;
  href: string;
  icon: React.FC<IconProps>;  // ✅ simpler & cleaner
  color: string;
}


const contactLinks: ContactLink[] = [
    { 
        name: 'Email', 
        href: 'mailto:shyamkrishnabnair@gmail.com', 
        icon: Mail, 
        color: 'hover:text-red-600' // Gmail Red
    },
    { 
        name: 'GitHub', 
        href: 'https://github.com/shyamkrishnabnair', 
        icon: Github, 
        color: 'hover:text-gray-900' // GitHub Black
    },
    { 
        name: 'LinkedIn', 
        href: 'https://linkedin.com/in/shyamkrishnabnair', 
        icon: Linkedin, 
        color: 'hover:text-blue-700' // LinkedIn Blue
    },
    { 
        name: 'Instagram', 
        href: 'https://instagram.com/shyamkrizzna', 
        icon: Instagram, 
        color: 'hover:text-pink-600' // Instagram Pink/Purple
    },
    { 
        name: 'LeetCode', 
        href: 'https://leetcode.com/u/TJ0qdRpATR/', 
        icon: Code, // Using a generic Code icon from Lucide
        color: 'hover:text-yellow-600' // LeetCode Yellow/Orange
    },
];


const ContactSection: React.FC = () => (
    <section id="contact" className="py-24 bg-gray">
        <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-4xl font-extrabold text-center mb-4 text-blue-400">
                Get In Touch
            </h2>
            <p className="text-xl text-center text-white mb-16 max-w-2xl mx-auto">
                I&apos;m currently seeking new opportunities. Feel free to connect or drop me an email!
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
                {contactLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center p-4 rounded-xl border border-blue-400 bg-black-400 
                                   shadow-md transition-all duration-300 hover:shadow-xl transform hover:scale-[1.03]
                                   group"
                    >
                        <link.icon 
                            size={32} 
                            className={`text-white transition-colors duration-300 group-hover:scale-110 ${link.color}`} 
                            style={{ width: '32px', height: '32px' }}
                        />
                        <span className={`mt-3 text-lg font-semibold text-white transition-colors duration-300 ${link.color}`}>
                            {link.name}
                        </span>
                    </a>
                ))}
            </div>
        </div>
    </section>
);

export default ContactSection