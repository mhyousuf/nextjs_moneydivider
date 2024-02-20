import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers';
import Link from "next/link";

export default async function BackendMenu() {
    const supabase = createServerComponentClient({ cookies });

    const { data: { user } } = await supabase.auth.getUser();

    return (
        <>
             <ul className="menu">
                <li><Link href={"/"}>Dashboard</Link></li>
                <li><Link href={"/admin/features/list"}>Features</Link></li>
                <li><a>Features</a></li>
                <li><a>How It Works</a></li>
                <li><a>Blog</a></li>
                <li><a>Contact</a></li>
                <li><a>FAQ</a></li>
            </ul>
        </>

    )
}