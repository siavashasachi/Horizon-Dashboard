import loginBg from '../../assets/images/backgrounds/Login_bg.png'; 
import './Login.css'
function Login() {
  return (
    <div className="flex  h-screen justify-center overflow-y-auto">
      {/* Left Side - Login Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md px-4">
          <h2 className="text-3xl font-bold mb-2 text-primary">Sign In</h2>
          <p className="mb-2 text-secondary-gray">Enter your email and password to sign in!</p>
          <button className="w-full flex items-center justify-center gap-2 border-transparent bg-google-btn rounded-md py-2 mb-4 ">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            Sign in with Google
          </button>

          <div className="flex items-center px-2 ">
            <span className="flex-grow border-t border-light"></span>
            <span className="text-center px-4 text-secondary-gray text-center">or</span>
            <span className="flex-grow border-t border-light"></span>
          </div>

          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium">Email</label>
              <input type="email" placeholder="mail@simmmple.com" className="w-full mt-1 px-4 py-2 border border-light rounded-md" />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">Password</label>
              <input type="password" placeholder="Min. 8 characters" className="w-full mt-1 px-4 py-2 border border-light rounded-md" />
            </div>

            <div className="flex justify-between items-center mb-4">
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" />
                Keep me logged in
              </label>
              <a href="#" className="text-sm text-blue-primary font-medium">Forgot password?</a>
            </div>

            <button type="submit" className="w-full bg-blue-primary  text-white py-2 rounded-md">
              Sign In
            </button>
          </form>

          <p className="text-center text-sm mt-6">
            Not registered yet? <a href="#" className="text-blue-primary font-medium">Create an Account</a>
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col">
        <img className='h-screen rounded-bl-login' src={loginBg} alt="Login Background" />
      </div>
    </div>
  );
}

export default Login;
