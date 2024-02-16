import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from 'next/headers';
import Link from "next/link";

export default async function Menu(props) {
    const supabase = createServerComponentClient({ cookies });

    const { data: { user } } = await supabase.auth.getUser();

    return (
        <>
            <ul className={props.className}>
                <li><Link href={"/"}>Home</Link></li>
                <li><a>About</a></li>
                <li><a>Features</a></li>
                <li><a>How It Works</a></li>
                <li><a>Blog</a></li>
                <li><a>Contact</a></li>
                <li><a>FAQ</a></li>
                {user
                    ? (
                        <>
                        <li><Link href={"/user/dashboard"}>Dashboard</Link></li>
                        </>
                    )

                    : (
                        <>
                        <li><Link href={"/login"}>Login</Link></li>
                        {props.device == "mobile" && <i className="sm:hidden"><Link href={"/register"}>Register</Link></i>}
                        </>
                    )
                }

            </ul>
        </>

    )
}