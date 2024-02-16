'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from 'react';


export default function LoginForm() {

    const [lodaing, setLodaing] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const supabase = createClientComponentClient()

    const handleSignIn = async (e) => {

        e.preventDefault();

        setLodaing(true);

        await supabase.auth.signInWithPassword({
            email,
            password,
        });

        setLodaing(false);

        router.push("/user/dashboard");
    }

    return (
        <>
            <form onSubmit={handleSignIn}>
                <div>
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text font-bold">Email</span>
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
                            <span className="label-text font-bold">Password</span>
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
                    <button type="submit" className={lodaing ? 'app-loading btn btn-primary' : '' + 'btn btn-primary'}>Submit</button>
                </div>

                <div>
                    don't have an account? <Link className="link link-primary" href={"/register"}>Register</Link>
                </div>
            </form>
        </>
    );
}