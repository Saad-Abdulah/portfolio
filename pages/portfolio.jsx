import { useQuery } from "react-query";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import PortfolioCard from "../components/Portfolio/PortfolioCard";
import ProjectModal from "../components/Portfolio/ProjectModal";
import axios from "axios";
import ImageAndParagraphSkeleton from "../components/Common/ImageAndParagraphSkeleton";
import { useState } from "react";

const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const { isLoading, error, data } = useQuery('portfolio', () =>
        axios.get('api/portfolio')
            .then(({ data }) => data)
            .catch(error => console.error('Error fetching testimonials:', error)));

    const handleViewDetail = (project) => {
        setSelectedProject(project);
    };

    const categories = ["All", "Web Dev", "C/C++", "C#", "Assembly"];

    const filteredProjects = data?.filter(project => 
        selectedCategory === "All" ? true : project.category === selectedCategory
    );

    return (
        <>
            <BannerLayout>
                <div className="container mx-auto px-4 py-8 pt-20">
                    {/* Category Filter Buttons */}
                    <div className="flex flex-wrap gap-4 mb-8 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 text-lg font-medium transition-all duration-300 relative
                                    ${selectedCategory === category ? 'text-green-500' : 'text-gray-600 hover:text-green-500'}`}
                            >
                                {category}
                                {selectedCategory === category && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500"></span>
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            isLoading ?
                                [1, 2, 3, 4].map((index) => (
                                    <ImageAndParagraphSkeleton key={`skeleton-${index}`} className={"w-full object-cover"} />
                                ))
                                :
                                filteredProjects?.map((data) => (
                                    <PortfolioCard 
                                        key={data.id} 
                                        data={data} 
                                        onViewDetail={handleViewDetail}
                                    />
                                ))
                        }
                    </div>
                </div>
                <Footer />
            </BannerLayout>

            {/* Project Modal rendered at root level */}
            {selectedProject && (
                <ProjectModal 
                    project={selectedProject} 
                    onClose={() => setSelectedProject(null)} 
                />
            )}
        </>
    );
};

export default Portfolio;
