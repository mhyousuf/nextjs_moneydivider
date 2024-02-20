'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Field, Form, Formik } from 'formik';
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function FeaturesForm({feature}) {

    const router = useRouter()
    const supabase = createClientComponentClient()

    return (
        <>
            <div>
                <Formik
                    initialValues={{
                        id: feature?.id,
                        icon: feature?.icon,
                        name: feature.name,
                        description: feature.description,
                    }}
                    onSubmit={async (values, actions) => {
                        let id = values.id;
                        let icon = values.icon;
                        let name = values.name;
                        let description = values.description;

                        if(id)
                        {
                            const { error } = await supabase
                            .from('features')
                            .update({ icon: icon, name: name, description: description, updated_at:new Date() })
                            .eq('id', id);

                        if(error) throw (error);

                        }else{
                            const { error } = await supabase
                        .from('features')
                        .insert({ icon: icon, name: name, description: description });

                        if(error) throw (error);

                        }

                        actions.setSubmitting(false);

                        router.push("/admin/features/list");
                    }}
                >
                    {(props) => (
                        <Form>
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
                                <button type="submit" className={props.isSubmitting ? 'app-loading btn btn-primary' : '' + 'btn btn-primary'}>Submit</button>
                            </div>

                            <div>
                                don't have an account? <Link className="link link-primary" href={"/register"}>Register</Link>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
}