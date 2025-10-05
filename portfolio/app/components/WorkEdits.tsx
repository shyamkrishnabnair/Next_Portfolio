interface VideoLink {
    id: number;
    embedUrl: string; // YouTube embed link
}


// NEW: Dummy data for video edits
const dummyEdits: VideoLink[] = [
    {
        id: 1,
        embedUrl: "https://youtube.com/embed/vrJraJWnfFk?si=grL8Bu7Xkd7sCmXq", 
    },
    
    {
        id: 2,
        embedUrl: "https://youtube.com/embed/wtNGvDRFk24?si=D1DegHf0tHhdw3yO", 
    },
 
];

const WorkEdits: React.FC = () => (
    <div className="mt-16">
        <h3 className="text-3xl font-bold text-white mb-8 border-b border-gray-700 pb-4">Edits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dummyEdits.map((video) => (
                <div key={video.id} className="p-4 bg-gray-900 border border-gray-800 rounded-xl shadow-xl">
                    {/* <h4 className="text-xl font-bold text-white mb-3">{video.title}</h4> */}
                    {/* Responsive Video Embed Container (16:9 Aspect Ratio) */}
                    <div className="relative pt-[56.25%] w-full rounded-lg overflow-hidden border border-indigo-700 shadow-lg">
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src={video.embedUrl}
                            // title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default WorkEdits