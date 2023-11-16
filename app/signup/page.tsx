'use client';
import React from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation'

const AboutUs = () => {
const router = useRouter();

const handleClick = () => {
    router.push('/login');
};

  return (
    <div className="h-full place-items-center mr-52 ml-52 mb-16 mt-10 text-white bg-gray-400 rounded-3xl" style={{height:'600px',}}>
        <h1 className='flex items-center justify-center text-xl font-bold pt-5 pb-5 text-white'>Sign Up</h1>

        <div className='pb-20'>
            <form className="grid grid-rows-1 flex flex-col">
                <div className="grid grid-cols-3 pb-2 ">
                    <label htmlFor="lastname" className="col-form-label pr-2 self-center justify-self-end">Last Name:</label>
                    <input
                    className="px-2 py-2 rounded-md w-full"
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Last Name"
                    />
                </div>
                <div className="grid grid-cols-3 pb-2">
                    <label htmlFor="firstname" className="col-form-label pr-2 self-center justify-self-end">First Name:</label>
                    <input
                    className="px-2 py-2 rounded-md w-full"
                    type="firstname"
                    name="firstname"
                    id="firstname"
                    placeholder="First Name"
                    />
                </div>
                <div className="grid grid-cols-3 pb-2">
                    <label htmlFor="middlename" className="col-form-label pr-2 self-center justify-self-end">Middle Name:</label>
                    <input
                    className="px-2 py-2 rounded-md w-full"
                    type="middlename"
                    name="middlename"
                    id="middlename"
                    placeholder="Middle Name"
                    />
                </div>
                <div className="grid grid-cols-3 pb-2">
                    <label htmlFor="address" className="col-form-label pr-2 self-center justify-self-end">Address:</label>
                    <input
                    className="px-2 py-2 rounded-md w-full"
                    type="address"
                    name="address"
                    id="address"
                    placeholder="Address"
                    />
                </div>
                <div className="grid grid-cols-3 pb-2">
                    <label htmlFor="email" className="col-form-label pr-2 self-center justify-self-end">Email:</label>
                    <input
                    className="px-2 py-2 rounded-md w-full"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    />
                </div>
                <div className="grid grid-cols-3 pb-2">
                    <label htmlFor="contactnumber" className="col-form-label pr-2 self-center justify-self-end">Contact Number:</label>
                    <input
                    className="px-2 py-2 rounded-md w-full"
                    type="contactnumber"
                    name="contactnumber"
                    id="contactnumber"
                    placeholder="Contact Number"
                    />
                </div>
                <div className="grid grid-cols-3 pb-2">
                    <label htmlFor="username" className="col-form-label pr-2 self-center justify-self-end">Username:</label>
                    <input
                    className="px-2 py-2 rounded-md w-full"
                    type="username"
                    name="username"
                    id="username"
                    placeholder="Username"
                    />
                </div>
                <div className="grid grid-cols-3 pb-2">
                    <label htmlFor="password" className="col-form-label pr-2 self-center justify-self-end">Password:</label>
                    <input
                    className="px-2 py-2 rounded-md w-full"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    />
                </div>
                <div className="grid grid-cols-3 pb-6">
                    <label htmlFor="confirmpassword" className="col-form-label pr-2 self-center justify-self-end">Confirm Password:</label>
                    <input
                    className="px-2 py-2 rounded-md w-full"
                    type="confirmpassword"
                    name="confirmpassword"
                    id="confirmpassword"
                    placeholder="Confirm Password"
                    />
                </div>
                <div className='grid grid-cols-1 place-items-center'>
                    <button
                    className="uppercase px-2 py-2 rounded-md bg-neutral-950 text-white font-medium hover:bg-sky-950 w-1/4"
                    type="button"
                    onClick={handleClick}
                    >
                    Register
                    </button>
                </div>
            </form>
        </div>
    </div>

  );
};

export default AboutUs;