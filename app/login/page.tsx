'use client';
import React from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation'

const AboutUs = () => {
const router = useRouter();

const handleClick = () => {
    // Redirect to "/login" when the button is clicked
    router.push('/');
};

  return (
    <div className="h-full place-items-center mr-52 ml-52 mb-16 mt-20 text-white bg-gray-400 rounded-3xl" style={{height:'500px',}}>
        <h1 className='flex items-center justify-center text-xl font-bold pt-20 pb-20 text-white'>Login</h1>

        <div className='pb-20'>
            <form className="flex flex-col gap-4 place-items-center">
                <div className="pb-2">
                    <label htmlFor="username" className="col-form-label pr-2">Username:</label>
                    <input
                    className="px-2 py-2 rounded-md"
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    />
                </div>
                <div className="pb-6">
                    <label htmlFor="password" className="col-form-label pr-2">Password:</label>
                    <input
                    className="px-2 py-2 rounded-md"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    />
                </div>
                <button
                className="uppercase px-2 py-2 rounded-md bg-neutral-950 text-white font-medium hover:bg-sky-950 w-1/4"
                type="button"
                onClick={handleClick}
                >
                Sign In
                </button>
            </form>
        </div>
        <div className='ml-6'>
            <span>Dont have an account? </span><Link href="/signup"><span className='hover:underline'>Sign Up</span></Link>
        </div>
    </div>

  );
};

export default AboutUs;