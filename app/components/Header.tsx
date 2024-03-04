import Link from "next/link";
import React from "react";
interface Props{
    title: string;
    tags?: boolean; 
}
export default function Header({title='', tags=false}:Props){
    console.log('tags', tags)
    return <header className="py-14 px-4 mb-12 text-center border-b dark:border-purple1">
        <h2 className="uppercase text-2xl mx-auto max-w-2x font-bold dark:text-wec">{title}</h2>
        {tags && (
            <div className="text-xs mt-2 dark:text-purple3 hover:dark:text-purple1">
                <Link href='/tag'>#tags</Link>
            </div>
        )}

    </header>
}