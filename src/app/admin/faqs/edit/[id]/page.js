import Logout from "@/components/Auth/Logout";
import BackendMenu from "@/components/Layout/BackendMenu";
import Layout from "@/components/Layout/Layout";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers';
import Link from "next/link";
import { redirect } from "next/navigation";
import LayoutAuth from "@/components/Layout/LayoutAuth";
import FaqsForm from "../../components/FaqsForm";

export const metadata = {
    title: "Faqs Create",
    // description: "Generated by create next app",
};


export default async function Edit({ params }) {

    const supabase = createServerComponentClient({ cookies });

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
        return redirect("/login");
    }

    // const { data, error } = await supabase
    //     .from('features')
    //     .select('*')
    //     .eq('id', params.id);

    // if (error) throw (error);

    // let feature = data[0] ?? {};

    return (
        <>
            <Layout>
                <section className="blog-section">
                    <div className="container mx-auto p-4 mt-5">
                        <div className="text-center text-5xl font-bold mb-16 text-blue-500">Dashboard </div>
                        <div className="text-sm breadcrumbs mb-3">
                            <ul>
                                <li>
                                    <Link href={"/"}>Home</Link>
                                </li>
                                <li>Create</li>
                            </ul>
                        </div>
                        <div className="flex justify-center gap-3">
                            <LayoutAuth>
                                <div>
                                    <div className="flex justify-between item-center">
                                        <div className="card-title">Edit Faqs</div>
                                        <div className="">
                                            <Link href={"/admin/faqs/list"} className="btn btn-success">Cencel</Link>
                                        </div>
                                    </div>
                                    <div>
                                        <FaqsForm id={params.id} />
                                    </div>
                                </div>
                            </LayoutAuth>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}