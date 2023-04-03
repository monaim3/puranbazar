import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import googleImg from '../../assest/2702602.png'
import { AuthContex } from '../../UserContext/UserContext';
const Login = () => {
    const [email,setEmail]=useState(null)
    const { signIn, googleSignIn, resetmethod } = useContext(AuthContex)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'
    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
                navigate(from, { replace: true })
                toast.success('User Login Succesfully', { autoClose: 500 })
            })
            .then(error => console.log(error))
    }
    const handlegoogleSignIN = () => {

        googleSignIn()
            .then(result => {
                navigate(from, { replace: true })
                toast.success('User Login Succesfully', { autoClose: 500 })
            })
    }
    const handleReset = (e) => {
        e.preventDefault();
      
        const email = e.target.email.value;
        console.log(email)
        resetmethod(email)
            .then(result => {
                toast.success('Password Reset Succesfully', { autoClose: 500 })
            })
    }
    return (
        <>
            <ToastContainer position='top-center'></ToastContainer>
            <h3 className='text-2xl text-center font-bold text-slate-600'>SIGN IN!</h3>
            <div className=" mt-5 mx-auto block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                <form onSubmit={handleSignIn}>
                    <div className="form-group mb-6">
                        <label for="exampleInputEmail2" className="form-label inline-block mb-2 text-gray-700">Email address</label>
                        <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputEmail2"
                            aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div className="form-group mb-6">
                        <label for="exampleInputPassword2" className="form-label inline-block mb-2 text-gray-700">Password</label>
                        <input type="password" name="password" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInputPassword2"
                            placeholder="Password" />
                    </div>
                    <div className="flex justify-between items-center mb-6">
                        <div className="form-group form-check">
                            <input type="checkbox"
                                className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                id="exampleCheck2" />
                            <label className="form-check-label inline-block text-gray-800" for="exampleCheck2">Remember me</label>
                        </div>
                        <button onClick={handleReset} className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">

                            Forgot
                            password?
                        </button>
                    </div>
                    <button type="submit" className="w-full px-6 py-2.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">SIGN IN</button>
                    <p className="text-gray-800 mt-6 text-center">Not a member? <Link to="/register"
                        className="text-blue-600 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out">Register</Link>
                    </p>
                </form>
            </div>
            <div className="hrstyle flex justify-start justify-center items-center">
                <hr className='h-1 bg-orange-400 mt-4 w-[10%] '></hr>
                <h3>OR</h3>
                <hr className='h-1 bg-orange-400 mt-4 w-[10%]'></hr>
            </div>
            <div onClick={handlegoogleSignIN} className="cursor-pointer signWithGoogle bg-orange-400 rounded-lg flex justify-around mx-auto w-40 border p-4 mt-2">
                <img className="w-[20%]" src={googleImg} alt="" />
                <h3 className='ml-4 text-2xl font-semibold'>Google </h3>
            </div>
        </>
    );
};

export default Login;