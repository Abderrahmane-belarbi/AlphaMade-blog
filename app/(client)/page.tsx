import { client } from "@/sanity/lib/client";
import Header from "../components/Header";
import { Post } from "../utils/interface";
import PostComponent from "../components/PostComponent";
export const revalidate = 60;
async function getPosts() {
  const query = `
  *[_type=="post"]{
    title,
    slug,
    publishedAt,
    excerpt,
    _id,
    tags[]->{
      _id,
      slug,
      name,
    },
  }
  `;
  const data = await client.fetch(query);
  return data;
}

export default async function Home() {
  const posts: Post[] = await getPosts();
  console.log(posts);
  return <div>
    <Header title="Articles" tags/>
    <div>
      {posts?.length > 0 && posts?.map((post, key) => {
        return <PostComponent post={post} key={key}/>
      })}
    </div>
  </div>;
}
