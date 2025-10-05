import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const ProjectCarousel: React.FC<{ images: string[] }> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const totalSlides = images.length;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    if (totalSlides === 0) return null;

    return (
        <div className="relative w-full overflow-hidden rounded-xl h-64 bg-gray-800 mb-6 border border-gray-700">
            <div 
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((imgSrc, index) => (
                    <Image
                        key={index}
                        src={imgSrc}
                        width={300}
                        height={300}
                        alt={`Project screenshot ${index + 1}`}
                        className="w-full h-full object-cover flex-shrink-0"
                        // Fallback image in case the placeholder URL doesn't load
                        onError={(e) => {
                            (e.target as HTMLImageElement).onerror = null; 
                            (e.target as HTMLImageElement).src = `https://placehold.co/600x400/333333/FFFFFF/png?text=Image+Load+Failed`;
                        }}
                    />
                ))}
            </div>

            {/* Navigation Buttons (Only visible if more than one image exists) */}
            {totalSlides > 1 && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-gray-700/50 hover:bg-gray-700/80 text-white p-2 rounded-full transition z-10 shadow-md"
                        aria-label="Previous slide"
                    >
                        <ArrowRight size={20} className="transform rotate-180" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-700/50 hover:bg-gray-700/80 text-white p-2 rounded-full transition z-10 shadow-md"
                        aria-label="Next slide"
                    >
                        <ArrowRight size={20} />
                    </button>
                    {/* Indicator Dots */}
                    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`block w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                                    index === currentIndex ? 'bg-indigo-400' : 'bg-gray-500'
                                }`}
                                aria-label="Go to slide ${index + 1}"
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default ProjectCarousel