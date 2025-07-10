import ImageCarousel from './ImageCarousel';
import { useEffect } from 'react';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    // Prevent background scrolling when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
            
            {/* Modal Container */}
            <div className="relative w-[95%] max-w-7xl bg-[#1A1A1A] rounded-lg shadow-xl min-h-[85vh] max-h-[90vh] flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-Green/20">
                    <div className="flex items-center gap-4">
                        <h1 className="text-Snow text-2xl font-bold">{project.projectName}</h1>
                        <div className="px-3 py-1 bg-Green/10 rounded-full">
                            <span className="text-Green text-sm">
                                {project.technologiesUsed[0]?.tech || "Project"}
                            </span>
                        </div>
                    </div>
                    <button 
                        onClick={onClose}
                        className="text-Snow hover:text-Green transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-6">
                    <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
                        {/* Left Column - Project Details */}
                        <div className="xl:col-span-5">
                            <div className="mb-8">
                                <h2 className="text-Snow text-xl font-semibold mb-4">Project Details</h2>
                                <p className="text-gray-400 text-base">{project.projectDetail}</p>
                            </div>

                            {/* Tech Stack */}
                            <div className="mb-8">
                                <h2 className="text-Snow text-xl font-semibold mb-4">Tech Stack</h2>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {project.technologiesUsed.map((tech, index) => (
                                        <div 
                                            key={index}
                                            className="bg-Green/5 rounded-lg p-3 flex flex-col items-center justify-center gap-2 hover:bg-Green/10 transition-colors"
                                        >
                                            <img 
                                                src={tech.src} 
                                                alt={tech.tech}
                                                className="w-10 h-10 object-contain"
                                            />
                                            <span className="text-Snow text-sm text-center">{tech.tech}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-3">
                                {project.codeUrl && (
                                    <div className="bg-Green/10 pr-2 rounded-full">
                                        <div className="flex items-center">
                                            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" 
                                               className="p-2 bg-Green rounded-full mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-DeepNightBlack">
                                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                                                </svg>
                                            </a>
                                            <span className="text-Snow text-sm">View on GitHub</span>
                                        </div>
                                    </div>
                                )}
                                {project.url && (
                                    <div className="bg-Green/10 pr-2 rounded-full">
                                        <div className="flex items-center">
                                            <a href={project.url} target="_blank" rel="noopener noreferrer"
                                               className="p-2 bg-[#0077B5] rounded-full mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                                </svg>
                                            </a>
                                            <span className="text-Snow text-sm">View Project</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Right Column - Media */}
                        <div className="xl:col-span-7">
                            {/* Project Video */}
                            {project.demoVideo && (
                                <div className="mb-8">
                                    <h2 className="text-Snow text-xl font-semibold mb-4">Project Demo</h2>
                                    <div className="relative w-full pt-[56.25%]">
                                        <iframe 
                                            src={project.demoVideo.replace('youtu.be/', 'youtube.com/embed/')}
                                            title={project.projectName}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="absolute top-0 left-0 w-full h-full rounded-lg"
                                        ></iframe>
                                    </div>
                                </div>
                            )}
                            
                            {/* Screenshots Carousel */}
                            {project.screenshots && project.screenshots?.length > 0 && (
                                <div>
                                    <h2 className="text-Snow text-xl font-semibold mb-4">Project Screenshots</h2>
                                    <ImageCarousel images={project.screenshots} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal; 