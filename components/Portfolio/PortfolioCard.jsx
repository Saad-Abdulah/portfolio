// import Badge from "../Common/Badge"

const PortfolioCard = ({ data, onViewDetail }) => {
    return (
        <div className="group relative w-full h-auto rounded-lg overflow-hidden transition-all duration-300">
            {/* Border gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Main content container */}
            <div className="relative bg-[#0B0B0B] h-full p-0.5 rounded-lg border border-[#2A2A2A] group-hover:border-green-500 transition-all duration-300">
                <div className="h-full bg-[#0B0B0B] rounded-lg overflow-hidden group-hover:bg-[#161616] transition-colors duration-300">
                    {/* Image container */}
                    <div className="aspect-[16/9] w-full overflow-hidden">
                        <img 
                            src={data.thumbnailimage} 
                            alt={data.projectName} 
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    {/* Content section */}
                    <div className="p-4 flex flex-col gap-3">
                        <h2 className="text-Snow text-lg font-medium truncate">{data.projectName}</h2>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                {data.technologiesUsed.slice(0, 3).map((tech, index) => (
                                    <img 
                                        key={index}
                                        src={tech.src} 
                                        alt={tech.tech}
                                        title={tech.tech}
                                        className="w-6 h-6 object-contain"
                                    />
                                ))}
                                {data.technologiesUsed.length > 3 && (
                                    <span className="text-Snow/60 text-sm">+{data.technologiesUsed.length - 3}</span>
                                )}
                            </div>
                            <button
                                onClick={() => onViewDetail(data)}
                                className="inline-flex items-center gap-1.5 px-4 py-1.5 text-Snow border border-[#2A2A2A] rounded-full 
                                         group-hover:border-green-500 group-hover:text-green-400 transition-all duration-300 text-sm font-medium"
                            >
                                <span>See My Work</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;