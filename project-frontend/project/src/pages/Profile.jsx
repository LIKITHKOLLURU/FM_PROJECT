function Profile() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Profile</h1>
      
      <div className="card mb-8">
        <div className="flex items-start gap-8">
          <div className="w-32 h-32 bg-gray-200 rounded-full"></div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-2">John Doe</h2>
            <p className="text-gray-600 mb-4">Full Stack Developer</p>
            <p className="text-gray-700 mb-4">
              Experienced developer with a passion for building scalable web applications.
              Specialized in React, Node.js, and cloud technologies.
            </p>
            <button className="btn-primary">Edit Profile</button>
          </div>
        </div>
      </div>

      <div className="grid gap-8">
        <div className="card">
          <h3 className="text-xl font-semibold mb-4">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB'].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold mb-4">Work History</h3>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h4 className="font-semibold">E-commerce Platform Development</h4>
              <p className="text-gray-600">Completed Feb 2024</p>
              <p className="text-gray-700 mt-2">
                Developed a full-stack e-commerce platform using React and Node.js
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;