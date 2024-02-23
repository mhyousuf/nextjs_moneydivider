'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import classNames from 'classnames';
import { Field, Form, Formik } from 'formik';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function FaqsForm({ id }) {
    let [loding, setLoding] = useState(false);
    let [faq, setFaq] = useState({});
    const router = useRouter()
    const supabase = createClientComponentClient()

    useEffect(() => {
        const getFaq = async () => {

            setLoding(true);

            const { data, error } = await supabase
                .from('faqs')
                .select('*')
                .eq('id', id)
                .single();

            if (error) throw (error);

            setFaq(data);

            setLoding(false);

        };

        id && getFaq();
    }, [id]);



    return (
        <>
            <div>
                <Formik
                    enableReinitialize={true}
                    initialValues={{
                        id: faq?.id,
                        question: faq?.question,
                        answer: faq?.answer,
                    }}
                    onSubmit={async (values, actions) => {
                        let id = values.id;
                        let question = values.question;
                        let answer = values.answer;

                        if (id) {
                            const { error } = await supabase
                                .from('faqs')
                                .update({ question: question, answer: answer, updated_at: new Date() })
                                .eq('id', id);

                            if (error) throw (error);

                        } else {
                            const { error } = await supabase
                                .from('faqs')
                                .insert({ question: question, answer: answer });

                            if (error) throw (error);

                        }

                        actions.setSubmitting(false);

                        router.push("/admin/faqs/list");
                    }}
                >
                    {(props) => (
                        <Form className={classNames({ "app-loding": loding })}>
                            <div>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text font-bold">Question</span>
                                    </div>
                                    <Field
                                        type="Text"
                                        name="question"
                                        id="question"
                                        placeholder="Enter Your question"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </label>
                            </div>

                            <div>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text font-bold">Answer</span>
                                    </div>
                                    <Field
                                        type="text"
                                        name="answer"
                                        id="answer"
                                        placeholder="Enter Your answer"
                                        className="input input-bordered w-full"
                                        required
                                    />
                                </label>
                            </div>

                            <div className="form-control w-full pt-3">
                                <button type="submit" className={classNames({ "app-loding": props.isSubmitting, 'btn btn-primary': true })}>Submit</button>
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