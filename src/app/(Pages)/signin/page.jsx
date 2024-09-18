'use client'

import axios from "axios";
import {signIn} from 'next-auth/react'

const SignIn = () => {

    const submit = async (e)=>{
          e.preventDefault()
          const form = e.target
          const email = form.email.value
          const pass = form.pass.value
          await signIn('credentials',{email,pass,redirect: false})
    }

    return (
        <main className="w-full flex justify-center items-center h-[100vh]">
           <section className="bg-red-600 text-white p-5 w-[350px]">
            <h1 className="text-2xl font-semibold text-center">Create a new account</h1>
           <form className="card-body text-white" onSubmit={submit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered bg-transparent border-white" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Password</span>
          </label>
          <input type="password" name='pass' placeholder="password" className="input input-bordered bg-transparent border-white"   required />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-transparent text-white">Login</button>
        </div>
      </form>
            </section>
        </main>
    );
};

export default SignIn;