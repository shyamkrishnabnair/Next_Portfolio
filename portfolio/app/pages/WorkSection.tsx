import WorkDesigns from "../components/WorkDesigns";
import WorkProjects from "../components/WorkProjects";
import WorkEdits from "../components/WorkEdits";

const WorksSection: React.FC = () => (
    <section id="works" className="py-24 bg-gray-950/20 border-t border-gray-800">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-extrabold text-center mb-16 text-white">
                My Works
            </h2>
            
            <WorkProjects />
            <WorkDesigns />
            <WorkEdits />
        </div>
    </section>
);

export default WorksSection