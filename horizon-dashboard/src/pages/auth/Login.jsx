import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '@features/auth/authSlice';

import loginBg from '../../assets/images/backgrounds/Login_bg.png'; 
import logoImg from '../../assets/images/icons/Horizon_icon.png'; 
import logoName from '../../assets/images/icons/Horizon_Name_Icon.png';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (email === '' || password === '') {
      setError('Please enter both email and password');
      return;
    }

    // 🔐 Mock login logic (you can replace this with real API call)
    if (email === 'admin@example.com' && password === 'password123') {
      dispatch(login({ email }));
      navigate('/');
    } else {
      setError('Invalid');
    }
  };

  return (
    <div className="flex h-screen justify-center overflow-y-auto">
      {/* Left Side - Login Form */}
      <div className="w-full w-1  lg:w-1/2  flex flex-col justify-start lg:justify-center items-center p-8">
        <div className="w-full max-w-md px-4">
          <h2 className="text-3xl font-bold mb-2 text-primary">Sign In</h2>
          <p className="mb-2 text-secondary-gray">Enter your email and password to sign in!</p>

          <button className="w-full flex items-center justify-center gap-2 border-transparent bg-google-btn rounded-primary py-2 mb-4">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            Sign in with Google
          </button>

          <div className="flex items-center px-2 mb-4">
            <span className="flex-grow border-t border-light"></span>
            <span className="text-center px-4 text-secondary-gray">or</span>
            <span className="flex-grow border-t border-light"></span>
          </div>

          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="mail@simmmple.com"
                className="w-full mt-1 px-4 py-2 border border-light rounded-primary"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Min. 8 characters"
                className="w-full mt-1 px-4 py-2 border border-light rounded-primary"
              />
            </div>

            <div className="flex justify-between items-center mb-4">
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" />
                Keep me logged in
              </label>
              <a href="#" className="text-sm text-blue-primary font-medium">Forgot password?</a>
            </div>

            <button type="submit" className="w-full bg-blue-primary text-white py-2 rounded-primary">
              Sign In
            </button>
          </form>

          <p className="text-center text-sm mt-6">
            Not registered yet? <a href="#" className="text-blue-primary font-medium">Create an Account</a>
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div
        className="w-full hidden lg:flex lg:w-1/2 flex flex-col justify-center items-center bg-cover bg-center rounded-bl-login"
        style={{ backgroundImage: `url(${loginBg})` }}
      >
        <div className="flex items-center justify-center flex-col gap-14">
          <div className="login-logo-section flex flex-col items-center gap-4 h-full justify-center">
            <img src={logoImg} alt="Logo Icon" className="w-50" />
            <img src={logoName} alt="Logo Icon" className="w-50" />
          </div>
          <div className="border border-white-20 rounded-primary py-4 px-16 text-center text-white">
            <span className="text-xs"><a href="#">Learn more about Horizon UI on</a></span>
            <h4><a href="#" className="font-bold text-2xl">Horizon.com</a></h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
