import Header from "@/app/components/Header";
import { Post } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {notFound} from 'next/navigation';

interface Params {
  params: {
    slug: string;
  };
}

async function getPost(slug: string) {
  const query = `
    *[_type=="post" && slug.current == "${slug}"][0]{
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
  const post = await client.fetch(query);
  return post;
}

export const revalidate = 60;

export default async function page({ params }: Params) {
  const post: Post = await getPost(params?.slug);

  if(!post){
    notFound();
  }

  return (
    <div>
      <Header title={post?.title} tags/>
      <div className="text-center">
        <span className="text-sm text-purple2">
          {new Date(post?.publishedAt).toDateString()}
        </span>
      </div>
      <div className="mt-5">
        {post?.tags?.map((tag) => {
          return (
            <Link key={tag?._id} href={`tag/${tag.slug.current}`}>
              <span className="mr-2 p-1 dark:text-purple3 lowercase hover:dark:text-purple1">
                #{tag.name}
              </span>
            </Link>
          );
        })}
      </div>
      <div className={postStyle}>
        <PortableText value={post?.body} components={myPortableTextComponents}/>
      </div>
    </div>
  );
}

const myPortableTextComponents = {
  types: {
    image: ({ value }:any) => <Image src={urlForImage(value)} alt="post" width={700} height={700}/>,
  },
};


const postStyle = `
mt-14
text-justify
max-w-2xl
m-auto

`;
