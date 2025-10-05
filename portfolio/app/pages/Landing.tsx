const Landing = () => (
    // Added 'pt-20' to offset the fixed navbar height
    <section 
        id="landing" 
        className="min-h-screen pt-20 flex items-center justify-center" 
    >
        <div className="container mx-auto px-6 text-center py-24">
            <p className="text-6xl font-medium text-slate-600 mb-4 sm:text-2xl">
                SHYAMKRISHNA B NAIR 
            </p>
            {/* Responsive Headline using fluid font sizes */}
            <h1 className="text-6xl font-bold tracking-tighter text-gray-900 mb-6 
                           sm:text-7xl lg:text-8xl leading-tight">
                I <span className="text-blue-600 font-extrabold">Design</span> , <span className="text-blue-600 font-extrabold">Edit</span> & <span className="text-blue-600 font-extrabold">Code</span> stuff.
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10 sm:text-xl">
                I'm a final-year Data Science undergrad and creative developer who loves building things that blend design and engineering seamlessly.
            </p>
            {/* Call to Action Button */}
            <a 
                href="#works" 
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium 
                           rounded-full shadow-lg text-white bg-indigo-600 hover:bg-indigo-700 transition duration-300 
                           hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] sm:text-lg"
            >
                Check out my Works
            </a>
        </div>
    </section>
);

export default Landing