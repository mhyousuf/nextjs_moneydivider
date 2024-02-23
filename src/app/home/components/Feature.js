import FeatureCard from "@/components/Ui/FeatureCard";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers';

async function getData() {

    const supabase = createServerComponentClient({ cookies });

    const { data, error } = await supabase
        .from('features')
        .select('*')
        .order('id', { ascending: true });

    if (error) throw (error);

    return data;
}

export default async function Feature() {
    let features = await getData();
    // let features = [
    //     {
    //         icon:"ph ph-hand-coins",
    //         title:"Add expenses on the go",
    //         description:"Whether you claim regular expenses for travel, make learning and development purchases, or have an agreed co-working space budget, managing your expenses is just another task to add to your ever-growing admin to-do list."
    //     },

    //     {
    //         icon:"ph ph-hand-coins",
    //         title:"Add expenses on the go",
    //         description:"Whether you claim regular expenses for travel, make learning and development purchases, or have an agreed co-working space budget, managing your expenses is just another task to add to your ever-growing admin to-do list."
    //     },

    //     {
    //         icon:"ph ph-hand-coins",
    //         title:"Add expenses on the go",
    //         description:"Whether you claim regular expenses for travel, make learning and development purchases, or have an agreed co-working space budget, managing your expenses is just another task to add to your ever-growing admin to-do list."
    //     },
    //     {
    //         icon:"ph ph-hand-coins",
    //         title:"Add expenses on the go",
    //         description:"Whether you claim regular expenses for travel, make learning and development purchases, or have an agreed co-working space budget, managing your expenses is just another task to add to your ever-growing admin to-do list."
    //     },

    //     {
    //         icon:"ph ph-hand-coins",
    //         title:"Add expenses on the go",
    //         description:"Whether you claim regular expenses for travel, make learning and development purchases, or have an agreed co-working space budget, managing your expenses is just another task to add to your ever-growing admin to-do list."
    //     },

    //     {
    //         icon:"ph ph-hand-coins",
    //         title:"Add expenses on the go",
    //         description:"Whether you claim regular expenses for travel, make learning and development purchases, or have an agreed co-working space budget, managing your expenses is just another task to add to your ever-growing admin to-do list."
    //     },
    // ];
    return (
        <>
            <section className="feature-section">
                <div className="container mx-auto p-4 mt-5">
                    <div className="text-center text-5xl font-bold mb-16 text-blue-500">Features </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {features.map((feature, index) => (
                            <FeatureCard
                                key={`feature=${index}`}
                                icon={feature.icon}
                                name={feature.name}
                                description={feature.description}

                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}