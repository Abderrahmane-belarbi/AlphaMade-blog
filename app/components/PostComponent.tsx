import Link from 'next/link';
import React from 'react';
import { Post } from '../utils/interface';
import { Permanent_Marker, VT323 } from "next/font/google";

interface Props{
    post: Post;
}

const font = Permanent_Marker({ weight: "400", subsets: ["latin"] });
const datefont = VT323({ weight: "400", subsets: ["latin"] });

export default function PostComponent({post}: Props){
    return <div className={cardStyle}>
        <Link href={`/posts/${post?.slug?.current}`}>
            <h2 className={`uppercase font-bold`}>{post?.title}</h2>
            <p className={`${datefont.className}`}>{new Date(post?.publishedAt).toDateString()}</p>
            <p>{post?.excerpt}</p>
        </Link>

        {/* TAGS */}

        <div>
            {post?.tags?.map((tag) => {
                return <span className='text-sm lowercase dark:text-purple3' key={tag?._id}>#{tag?.name} </span>
            })}
        </div>
    </div>
}

const cardStyle = `
mb-8
p-4
border
border-purple1
rounded-md
shadow-md
shadow-black
hover:dark:shadow-md
hover:dark:bg-purple4
dark:text-wec
hover:dark:text-white
`