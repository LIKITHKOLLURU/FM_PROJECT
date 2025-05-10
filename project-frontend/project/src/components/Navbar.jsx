import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector(state => state.auth);

  const handleNavigation = (path) => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      navigate(path);
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-black">
            FreelanceHub
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNavigation('/jobs')} 
              className="text-gray-600 hover:text-black"
            >
              Find Jobs
            </button>
            <button 
              onClick={() => handleNavigation('/post-job')} 
              className="text-gray-600 hover:text-black"
            >
              Post a Job
            </button>
            <button 
              onClick={() => handleNavigation('/profile')} 
              className="text-gray-600 hover:text-black"
            >
              Profile
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/login" className="btn-primary">
              Login
            </Link>
            <Link to="/register" className="text-black hover:text-gray-700">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;