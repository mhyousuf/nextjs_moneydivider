'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import classNames from 'classnames';
import { Field, Form, Formik } from 'formik';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function FeaturesForm({ id }) {
    let [loding, setLoding] = useState(false);
    let [work, setWork] = useState({});
    const router = useRouter()
    const supabase = createClientComponentClient()

    useEffect(() => {
        const getWork = async () => {

            setLoding(true);

            const { data, error } = await supabase
                .from('works')
                .select('*')
                .eq('id', id)
                .single();

            if (error) throw (error);

            setWork(data);

            setLoding(false);

        };

        id && getWork();
    }, [id]);



    return (
        <>
            <div>
                <Formik
                    enableReinitialize={true}
                    initialValues={{
                        id: work?.id,
                        icon: work?.icon,
                        name: work?.name,
                        description: work?.description,
                    }}
                    onSubmit={async (values, actions) => {
                        let id = values.id;
                        let icon = values.icon;
                        let name = values.name;
                        let description = values.description;

                        if (id) {
                            const { error } = await supabase
                                .from('works')
                                .update({ icon: icon, name: name, description: description, updated_at: new Date() })
                                .eq('id', id);

                            if (error) throw (error);

                        } else {
                            const { error } = await supabase
                                .from('works')
                                .insert({ icon: icon, name: name, description: description });

                            if (error) throw (error);

                        }

                        actions.setSubmitting(false);

                        router.push("/admin/how-it-works/list");
                    }}
                >
                    {(props) => (
                        <Form className={classNames({ "app-loding": loding })}>
                            <div>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text font-bold">Icon</span>
                                    </div>
                                    <Field
                                        type="Text"
                                        name="icon"
                                        id="icon"
                                        placeholder="Enter Your icon"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text font-bold">Name</span>
                                    </div>
                                    <Field
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Enter Your name"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text font-bold">Description</span>
                                    </div>
                                    <Field
                                        as="textarea"
                                        type="text"
                                        name="description"
                                        id="description"
                                        placeholder="Enter Your description"
                                        className="textarea input input-bordered w-full"
                                        required
                                    />
                                </label>
                            </div>

                            <div className="form-control w-full pt-3">
                                <button type="submit" className={classNames({"app-loding": props.isSubmitting, 'btn btn-primary': true})}>Submit</button>
                            </div>

                            <div className='pt-3'>
                                don't have an account? <Link className="link link-primary" href={"/register"}>Register</Link>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
}