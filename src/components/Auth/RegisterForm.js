'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function RegisterForm() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const supabase = createClientComponentClient()

    const handleSignUp = async (e) => {
        e.preventDefault();

        await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${location.origin}/auth/callback`,
          },
        });

        // setName('');
        // setPhone('');
        // setEmail('');
        // setPassword('');

        router.push("/login");
      }

    return (
        <>
            <form onSubmit={handleSignUp}>
                <div>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-bold required">Name</span>
                        </div>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter Your Name"
                            className="input input-bordered w-full"
                            required
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                    </label>
                </div>

                <div>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-bold required">Phone</span>
                        </div>
                        <input
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Enter Your phone"
                            className="input input-bordered w-full"
                            required
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                        />
                    </label>
                </div>

                <div>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-bold required">Email</span>
                        </div>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter Your email"
                            className="input input-bordered w-full"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </label>
                </div>

                <div>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-bold required">Password</span>
                        </div>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter Your password"
                            className="input input-bordered w-full"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </label>
                </div>

                <div className="form-control w-full pt-3">
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>

                <div className="m-4">
                    Already have an account? <Link className="link link-primary" href={"/login"}>Login</Link>
                </div>
            </form>
        </>
    );
}