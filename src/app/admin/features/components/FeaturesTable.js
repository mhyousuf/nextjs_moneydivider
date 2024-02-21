'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import classNames from "classnames";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FeaturesTable() {
    let [loding, setLoding] = useState(false);
    let [features, setFeatures] = useState([]);
    const supabase = createClientComponentClient();

    useEffect(() => {
        getFeatures();
    }, []);

    const getFeatures = async () => {

        setLoding(true);

        const { data, error } = await supabase
            .from('features')
            .select('*')
            .order('id', { ascending: false });

        if (error) throw (error);

        setFeatures(data);

        setLoding(false);

    };

    const destroy = async (id) => {

        setLoding(true);

        const { error } = await supabase
            .from('features')
            .delete()
            .eq('id', id);

        if (error) throw (error);

        setFeatures();

        // router.push("/admin/features/list")
    }

    return (
        <>
            <div className={classNames({ "app-loding": loding, "overflow-x-auto": true })}>
                <table className="table">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Icon</th>
                            <th>Name</th>
                            <th>description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {features.map((feature, index) => (
                            <tr>
                                <th>{index + 1}</th>
                                <td><i className={`${feature.icon} text-2xl`}> </i></td>
                                <td>{feature.name}</td>
                                <td>{feature.description}</td>
                                <td className="flex gap-2">
                                    <Link href={`/admin/features/edit/${feature.id}`} className="btn btn-info">Edit</Link>
                                    <button onClick={() => destroy(feature.id)} className="btn btn-secondary">Delete</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </>
    );
}