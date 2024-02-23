'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import classNames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FaqsTable() {
    let [loding, setLoding] = useState(false);
    let [faqs, setFaq] = useState([]);
    const supabase = createClientComponentClient();

    useEffect(() => {
        getFaq();
    }, []);

    const getFaq = async () => {

        setLoding(true);

        const { data, error } = await supabase
            .from('faqs')
            .select('*')
            .order('id', { ascending: false });

        if (error) throw (error);

        setFaq(data);

        setLoding(false);

    };

    const destroy = async (id) => {

        setLoding(true);

        const { error } = await supabase
            .from('faqs')
            .delete()
            .eq('id', id);

        if (error) throw (error);

        setFaq();

        // router.push("/admin/features/list")
    }

    return (
        <>
            <div className={classNames({ "app-loding": loding, "overflow-x-auto": true })}>
                <table className="table">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>question</th>
                            <th>Answer</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {faqs.map((faq, index) => (
                            <tr>
                                <th>{index + 1}</th>
                                <td>{faq.question}</td>
                                <td>{faq.answer}</td>
                                <td className="flex gap-2">
                                    <Link href={`/admin/faqs/edit/${faq.id}`} className="btn btn-info">Edit</Link>
                                    <button onClick={() => destroy(faq.id)} className="btn btn-secondary">Delete</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </>
    );
}