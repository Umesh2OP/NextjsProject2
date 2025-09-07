import { getServerSession } from "next-auth/next"   // ✅ correct import
import { redirect } from "next/navigation"
import { authOptions } from "@/lib/auth"
import PostCard from "@/components/ui/Postcard"

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",   // ✅ avoid caching issues in dev
  })
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  const posts = await res.json()

  return posts.map((post) => ({
    ...post,
    excerpt: post.body.substring(0, 100) + "...",
    date: "2025-01-01",
  }))
}

// ✅ must be a component that returns JSX
export default async function HomePage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/login")
  }

  const posts = await getData()

  return (
    <main className="container mx-auto py-10">
      <h1 className="mb-6 text-3xl font-bold">Latest Posts</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </main>
  )
}
