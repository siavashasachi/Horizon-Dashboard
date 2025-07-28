function Login() {
  return (
    <div className="flex h-screen">
      {/* Left Side - Login Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-2">Sign In</h2>
          <p className="mb-2">Enter your email and password to sign in!</p>
          <button className="w-full flex items-center justify-center gap-2 border rounded-lg py-2 mb-4 hover:bg-gray-50">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            Sign in with Google
          </button>

          <div className="text-center mb-4 text-gray-400">or</div>

          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium">Email</label>
              <input type="email" placeholder="mail@simmmple.com" className="w-full mt-1 px-4 py-2 border rounded-md" />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">Password</label>
              <input type="password" placeholder="Min. 8 characters" className="w-full mt-1 px-4 py-2 border rounded-md" />
            </div>

            <div className="flex justify-between items-center mb-4">
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" />
                Keep me logged in
              </label>
              <a href="#" className="text-sm text-blue-500">Forgot password?</a>
            </div>

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md">
              Sign In
            </button>
          </form>

          <p className="text-center text-sm mt-6">
            Not registered yet? <a href="#" className="text-blue-500 font-medium">Create an Account</a>
          </p>
        </div>
      </div>

    </div>
  );
}

export default Login;
