'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from "next/link";
import { Formik, Field, Form } from 'formik';
import { useRouter } from 'next/navigation';


export default function LoginForm() {

    const router = useRouter()
    const supabase = createClientComponentClient()


    return (
        <>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={async (values, actions) => {
                    let email = values.email;
                    let password = values.password;

                    await supabase.auth.signInWithPassword({
                        email,
                        password,
                    });

                    actions.setSubmitting(false);

                    router.push("/user/dashboard");
                }}
            >
                {(props) => (
                    <Form>
                        <div>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text font-bold">Email</span>
                                </div>
                                <Field
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter Your email"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </label>
                        </div>

                        <div>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text font-bold">Password</span>
                                </div>
                                <Field
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Enter Your password"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </label>
                        </div>

                        <div className="form-control w-full pt-3">
                            <button type="submit" className={props.isSubmitting ? 'app-loading btn btn-primary' : '' + 'btn btn-primary'}>Submit</button>
                        </div>

                        <div>
                            don't have an account? <Link className="link link-primary" href={"/register"}>Register</Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}