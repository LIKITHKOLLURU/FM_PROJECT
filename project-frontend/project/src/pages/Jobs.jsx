import { useState } from 'react';
import { format } from 'date-fns';
import toast from 'react-hot-toast';

function Jobs() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "React Developer Needed",
      description: "Looking for an experienced React developer for a 3-month project. Must have experience with modern React practices, TypeScript, and state management.",
      budget: "$3000-5000",
      skills: ["React", "TypeScript", "Tailwind CSS"],
      postedDate: "2024-02-15",
      proposals: 4,
      status: "open"
    },
    {
      id: 2,
      title: "Full Stack Developer for E-commerce Project",
      description: "Need a full stack developer to build an e-commerce platform. Experience with Node.js and React required.",
      budget: "$5000-8000",
      skills: ["React", "Node.js", "MongoDB", "Express"],
      postedDate: "2024-02-16",
      proposals: 6,
      status: "open"
    },
    {
      id: 3,
      title: "UI/UX Designer for Mobile App",
      description: "Seeking a talented UI/UX designer for our mobile app redesign project. Must have experience with Figma and mobile design principles.",
      budget: "$2000-4000",
      skills: ["UI/UX", "Figma", "Mobile Design"],
      postedDate: "2024-02-17",
      proposals: 3,
      status: "open"
    }
  ]);

  const handleApply = (jobId) => {
    toast.promise(
      new Promise((resolve) => setTimeout(resolve, 1000)),
      {
        loading: 'Submitting your application...',
        success: 'Application submitted successfully!',
        error: 'Error submitting application.',
      }
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Available Jobs</h1>
        <div className="flex gap-4">
          <select className="input-field px-4 py-2">
            <option value="">All Categories</option>
            <option value="development">Development</option>
            <option value="design">Design</option>
            <option value="marketing">Marketing</option>
          </select>
          <select className="input-field px-4 py-2">
            <option value="">Budget Range</option>
            <option value="0-1000">$0 - $1,000</option>
            <option value="1000-5000">$1,000 - $5,000</option>
            <option value="5000+">$5,000+</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6">
        {jobs.map((job) => (
          <div key={job.id} className="card hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
                <p className="text-gray-600 mb-4">{job.description}</p>
              </div>
              <span className="bg-black text-white px-3 py-1 rounded-full text-sm">
                {job.budget}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {job.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
              <div>Posted {format(new Date(job.postedDate), 'MMM dd, yyyy')}</div>
              <div>{job.proposals} proposals</div>
            </div>

            <div className="flex justify-between items-center">
              <button
                onClick={() => handleApply(job.id)}
                className="btn-primary"
              >
                Apply Now
              </button>
              <button className="text-gray-600 hover:text-black">
                Save Job
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;