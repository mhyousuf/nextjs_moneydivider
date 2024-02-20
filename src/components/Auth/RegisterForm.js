'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { Formik, Field, Form } from 'formik';

export default function RegisterForm() {

    const router = useRouter()
    const supabase = createClientComponentClient()

    return (
        <>
            <Formik
                initialValues={{
                    name: '',
                    phone: '',
                    email: '',
                    password: '',
                }}
                onSubmit={async (values, actions) => {
                    let name = values.name;
                    let phone = values.phone;
                    let email = values.email;
                    let password = values.password;

                    let { data, error } = await supabase.auth.signUp({

                        email,
                        password,

                        option: {
                            data: {
                                role: email == 'admin@example.com' ? 'admin' : 'member',
                                name: name,
                                phone: phone,
                            }
                        },
                    });

                    if (error) {
                        console.log(error)
                    } else {
                        router.push("/user/dashboard");
                    }

                    // await supabase.auth.signInWithPassword({
                    //     name,
                    //     phone,
                    //     email,
                    //     password,
                    // });

                    actions.setSubmitting(false);

                    // router.push("/user/dashboard");
                }}
            >
                {(props) => (
                    <Form>
                        <div>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text font-bold required">Name</span>
                                </div>
                                <Field
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Enter Your Name"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </label>
                        </div>

                        <div>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text font-bold required">Phone</span>
                                </div>
                                <Field
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    placeholder="Enter Your phone"
                                    className="input input-bordered w-full"
                                    required
                                />
                            </label>
                        </div>

                        <div>
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text font-bold required">Email</span>
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
                                    <span className="label-text font-bold required">Password</span>
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

                        <div className="m-4">
                            Already have an account? <Link className="link link-primary" href={"/login"}>Login</Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}