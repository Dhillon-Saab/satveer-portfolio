import Image from 'next/image';
import { FaGithub, SiAdobeillustrator , FaFigma, FaWordpress } from 'react-icons/fa';

const ProjectDetails = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Project Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-3xl font-bold text-white">About the Project</h2>
          <p className="text-lg text-gray-400 mt-4">
            Aggüdo Coffee is a Black-Owned Coffee Shop that provides Ethiopian Coffee.
            Aggüdo comes from the Amharic word, አጉዶ, which translates to ‘Haven’. The
            owner’s intent is to continue to provide a safe space for everybody from all walks of life to relax.
          </p>
          <button className="mt-4 text-white bg-indigo-600 px-4 py-2 rounded-md">Deliverables</button>
        </div>

        {/* Right side with Goal, Role, Tools */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-white">Goal</h3>
            <p className="text-lg text-gray-400">
              Improve the employee experience (EX) and customer experience (CX).
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">Role</h3>
            <p className="text-lg text-gray-400">Design, Research & Revenue Generation</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">Tools</h3>
            <div className="flex gap-4">
              <FaFigma className="text-2xl text-white" />
              {/* <SiAdobeillustrator  className="text-2xl text-white" />
              <FaGithub className="text-2xl text-white" />
              <FaWordpress className="text-2xl text-white" /> */}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white">Duration</h3>
            <p className="text-lg text-gray-400">4 Months</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
