import HomeContent from "@/components/HomeContent";
import { getAllPosts } from "@/lib/blog";

export default function HomePage() {
  const posts = getAllPosts().slice(0, 3);
  return <HomeContent posts={posts} />;
}
