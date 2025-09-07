import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import PostCard from "@/components/ui/Postcard"
import { authOptions } from "@/lib/auth"

// Function to fetch all blog post data from the API
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  const posts = await res.json()

  // Add a placeholder date and a truncated body to each post
  return posts.map((post) => ({
    ...post,
    excerpt: post.body.substring(0, 100) + "...",
    date: "2025-01-01",
  }))
}

export default async function HomePage() {
  // ✅ Protect page with NextAuth
  const session = await getServerSession(authOptions)

  if (!session) {
    // Redirect to login if not logged in
    redirect("/login")
  }

  // Fetch posts only if logged in
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
