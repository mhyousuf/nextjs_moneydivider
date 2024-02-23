'use client'

import { createClientComponentClient,} from "@supabase/auth-helpers-nextjs";
import Link from "next/link";

export default async function BackendMenu() {
    const supabase = createClientComponentClient();

    const { data: { user } } = await supabase.auth.getUser();

    return (
        <>
             <ul className="menu">
                <li><Link href={"/"}>Dashboard</Link></li>
                <li><Link href={"/admin/features/list"}>Features</Link></li>
                <li><Link href={"/admin/how-it-works/list"}>How It Works</Link></li>
                <li><Link href={"/admin/faqs/list"}>FAQ</Link></li>
                <li><a>Blog</a></li>
                <li><a>Contact</a></li>
            </ul>
        </>

    )
}