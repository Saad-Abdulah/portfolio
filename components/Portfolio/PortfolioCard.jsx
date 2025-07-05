import Badge from "../Common/Badge"

const PortfolioCard = ({ data }) => {
    const isVideoUrl = data?.url?.toLowerCase().endsWith('.mp4') || data?.url?.toLowerCase().endsWith('.mov');

    const handleDemoClick = (e) => {
        e.preventDefault();
        if (isVideoUrl) {
            // Open video directly in a new window
            const videoWindow = window.open('', '_blank');
            videoWindow.document.write(`
                <!DOCTYPE html>
                <html>
                    <head>
                        <title>Video Player</title>
                        <style>
                            body, html {
                                margin: 0;
                                padding: 0;
                                width: 100%;
                                height: 100%;
                                background: black;
                                overflow: hidden;
                            }
                            video {
                                width: 100%;
                                height: 100%;
                                object-fit: contain;
                            }
                        </style>
                    </head>
                    <body>
                        <video 
                            autoplay 
                            controls 
                            controlsList="nodownload" 
                            disablePictureInPicture
                            disableRemotePlayback
                        >
                            <source src="${data.url}" type="video/mp4">
                        </video>
                        <script>
                            document.querySelector('video').addEventListener('loadedmetadata', function() {
                                if (document.documentElement.requestFullscreen) {
                                    document.documentElement.requestFullscreen();
                                } else if (document.documentElement.webkitRequestFullscreen) {
                                    document.documentElement.webkitRequestFullscreen();
                                } else if (document.documentElement.msRequestFullscreen) {
                                    document.documentElement.msRequestFullscreen();
                                }
                            });
                        </script>
                    </body>
                </html>
            `);
            videoWindow.document.close();
        } else {
            window.open(data.url, '_blank');
        }
    };

    const handleCodeClick = (e) => {
        e.preventDefault();
        if (data.codeUrl) {
            window.open(data.codeUrl, '_blank');
        }
    };

    return (
        <div className="card_stylings overflow-hidden h-full cursor-pointer">
            <img
                src={data?.image}
                alt="portfolio img"
                className="w-full object-cover opacity-30 h-32 sm:h-48 md:h-64"
            />
            <div id="arrow" className="py-2 px-6 card_stylings hover:-translate-y-10 transition-all ease-in-out duration-500">
                <div className="flex justify-end gap-2 mb-1">
                    <button
                        onClick={handleDemoClick}
                        className="flex items-center gap-1 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-Snow rounded-md text-xs transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                        </svg>
                        Demo
                    </button>
                    {data.codeUrl && (
                        <button
                            onClick={handleCodeClick}
                            className="flex items-center gap-1 px-3 py-1 bg-gray-700 hover:bg-gray-800 text-Snow rounded-md text-xs transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                            </svg>
                            Code
                        </button>
                    )}
                </div>
                <div className="flex justify-between p-0 m-0">
                    <h3 className="mr-2 italic font-semibold pt-2 text-2xl text-Snow leading-tight sm:leading-normal">
                        {data?.projectName}
                    </h3>
                </div>
                <p className="text-xs text-LightGray font-normal">
                    {data?.projectDetail}
                </p>
                <div className="text-sm flex flex-wrap gap-3 py-2">
                    {data.technologiesUsed.map((tech, key) => (
                        <Badge key={key} title={tech.tech} src={tech.src} w={tech.w ? tech.w : 8} h={tech.h ? tech.h : 8} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PortfolioCard