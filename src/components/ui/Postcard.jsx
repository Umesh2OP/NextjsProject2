import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PostCard({ post }) {
  // Use the first 100 characters of the post body as the excerpt
  const excerpt = post.body.substring(0, 100) + "..."; 

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
        <CardDescription>{excerpt}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild>
          <Link href={`/blog/${post.id}`}>Read More</Link>
        </Button>
      </CardContent>
    </Card>
  );
}