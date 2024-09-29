'use client'

import {signIn} from 'next-auth/react'
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';

const SignIn = () => {
      const router = useRouter()
    const submit = async (e)=>{
          e.preventDefault()
          const form = e.target
          const email = form.email.value
          const pass = form.pass.value
          try{
           const res = await signIn('credentials',{email,pass,redirect: false})
            if(res.error){
              toast.error('Email or password is incorrect')
            }
            if(!res.error){
              router.push('/')
            }
          }
          catch(err){
            toast.error('Something went wrong')
          }
    }

    return (
        <main className="w-full flex justify-center items-center h-[100vh]">
          <ToastContainer/>
           <section className="bg-transparent rounded-lg text-blue-500 border border-blue-600 p-5 w-[350px]">
            <h1 className="text-2xl font-semibold text-center">Sign In</h1>
           <form className="card-body text-blue-500" onSubmit={submit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-blue-500">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered bg-transparent " required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-blue-500">Password</span>
          </label>
          <input type="password" name='pass' placeholder="password" className="input input-bordered bg-transparent "   required />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-transparent text-blue-500 hover:bg-blue-500 hover:text-white">Login</button>
        </div>
      </form>
            </section>
        </main>
    );
};

export default SignIn;