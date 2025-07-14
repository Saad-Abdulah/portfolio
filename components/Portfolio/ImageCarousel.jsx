import { useState, useEffect } from 'react';

const ImageCarousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!images || images.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000);

        return () => clearInterval(interval);
    }, [images]);

    if (!images || images.length === 0) return null;

    const goToNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full mt-6">
            <div className="relative w-full pt-[56.25%] bg-DeepNightBlack rounded-lg overflow-hidden">
                <img
                    src={images[currentIndex]}
                    alt={`Screenshot ${currentIndex + 1}`}
                    className="absolute top-0 left-0 w-full h-full object-contain"
                />
                
                {/* Navigation Arrows */}
                <button
                    onClick={goToPrevious}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-r transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                
                <button
                    onClick={goToNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-l transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>

            {/* Dots Indicator - Moved outside the image container */}
            <div className="flex justify-center mt-4">
                <div className="flex gap-2 bg-[#1E293B] px-3 py-2 rounded-full">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-colors ${
                                index === currentIndex ? 'bg-Green' : 'bg-white/50 hover:bg-white/75'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageCarousel; 