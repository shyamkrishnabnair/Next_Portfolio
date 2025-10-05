const dummyDesigns: string[] = [
    "/Poster_3.png",
    "/Poster_1.jpg",
    "/Poster_4.png",
    "/Poster_2.jpg",
    "/Poster_5.png",
    "/Poster_6.jpg"
];

const WorkDesigns: React.FC = () => (
    <div className="mt-16">
        <h3 className="text-3xl font-bold text-white mb-8 border-b border-gray-700 pb-4">Designs</h3>
        
        {/* Masonry/Collage Grid using Tailwind CSS Columns */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-6">
            {dummyDesigns.map((src, index) => (
                <div 
                    key={index} 
                    className="mb-6 break-inside-avoid-column rounded-xl overflow-hidden border border-gray-700 shadow-xl 
                               transition-transform duration-300 hover:scale-[1.01] cursor-pointer"
                >
                    <img 
                        src={src} 
                        alt={`Design piece ${index + 1}`} 
                        className="w-full h-auto object-cover" 
                        onError={(e) => {
                            (e.target as HTMLImageElement).onerror = null; 
                            (e.target as HTMLImageElement).src = `https://placehold.co/400x400/333333/FFFFFF/png?text=Error`;
                        }}
                    />
                </div>
            ))}
        </div>
    </div>
);

export default WorkDesigns