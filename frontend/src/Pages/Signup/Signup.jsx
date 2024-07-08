import React from 'react';

const Signup = () => {
  return (
    <div className='flex items-center justify-center min-h-screen '>
      <div className="w-full max-w-md bg-white rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 p-8 mx-4">
        <h1 className='text-3xl font-semibold text-center mb-4'>SignUp</h1>
        <span className='block text-center text-xl mb-8'>Enchanted Pages</span>

        <div className='flex flex-col items-center'>
          <div className='w-full mb-4'>
            <label className='block text-lg mb-2'>FullName</label>
            <input type="text" placeholder="Enter your fullname" className="input input-bordered input-primary w-full p-2" />
          </div>

          <div className='w-full mb-4'>
            <label className='block text-lg mb-2'>Username</label>
            <input type="text" placeholder="Enter your Username" className="input input-bordered input-primary w-full p-2" />
          </div>

          <div className='w-full mb-4'>
            <label className='block text-lg mb-2'>Email</label>
            <input type="email" placeholder="Enter your Email" className="input input-bordered input-primary w-full p-2" />
          </div>

          <div className='w-full mb-4'>
            <label className='block text-lg mb-2'>Password</label>
            <input type="password" placeholder="Enter your Password" className="input input-bordered input-primary w-full p-2" />
          </div>
        </div>
        <div>
          <button className="btn btn-square">
            <span className="loading loading-spinner"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
