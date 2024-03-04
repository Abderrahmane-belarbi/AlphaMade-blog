import Header from "@/app/components/Header";
import PostComponent from "@/app/components/PostComponent";
import { Post } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import React from "react";

export const revalidate = 60;

interface Params {
    params: {
      slug: string;
    };
  }

async function getPostByTag(tag: string){
    const qurey =`
    *[_type == 'post' && references(*[_type == 'tag' && slug.current == "${tag}"]._id)]{
        title,
        slug,
        publishedAt,
        excerpt,
        _id,
        body,
        tags[]->{
          _id,
          slug,
          name,
        },
      }
    `;
    const posts = await client.fetch(qurey);
    return posts;
}

export default async function page({params}:Params){
    const posts: Array<Post> = await getPostByTag(params.slug)
    return <div>
        <Header title={`#${params?.slug}`}/>
        <div>
            {posts?.length > 0 && posts?.map((post) => {
                return <PostComponent key={post?._id} post={post}/>
            })}
        </div>
    </div>
}
