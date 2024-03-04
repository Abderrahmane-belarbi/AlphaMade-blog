import Header from "@/app/components/Header";
import { Tag } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import React from "react";

async function getTags(){
    const query = `
    *[_type=='tag'] {
        name,
        slug,
        _id,
        'postCount': count(*[_type == 'post' && references('tags', ^._id)])
      }
    `;
    const tags = client.fetch(query);
    return tags;
}

export const revalidate = 60;

export default async function page(){
    const tags: Tag[] = await getTags();
    return <div>
        <Header title='Tags'/>
        <div>
            {tags?.length>0 && tags?.map((tag) => {
                return <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
                    <div className="mb-2 p-2 text-sm lowercase dark:text-purple3 hover:dark:text-purple1">
                        #{tag.name} ({tag?.postCount})
                    </div>
                </Link>
            })}
        </div>
    </div>
}