'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation';

export default function FeaturesDelete({id}) {

    const router = useRouter()
    const supabase = createClientComponentClient()

    const destroy = async () => {
        const { error } = await supabase
        .from('features')
        .delete()
        .eq('id', id);

        router.push("/admin/features/list")
      }

    return (
        <>
            <button onClick={destroy} className="btn btn-danger">Delete</button>
        </>
    );
}