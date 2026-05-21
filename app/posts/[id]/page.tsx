import { postApi } from "@/lib/api/posts";
import CommentSystem from "@/components/comment/commentSystem";
import Link from "next/link";


interface PageProps {
  params: Promise<{ id: string }>;  // Type as Promise
}

export default async function PostPage({ params }: PageProps) {
  const { id } = await params;  // Await & destructure
  const post = await postApi.getPostById(id);

  if (!post) {
    throw new Error("Post not found");  
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
    <div className="mb-6">
        <Link
            href="/"
            className="text-sm font-medium text-blue-600 hover:underline"
        >
            ← Back to Home
        </Link>
    </div>
      <article>
        <h1 className="text-5xl font-bold">{post.title}</h1>
        <p className="mt-4 text-sm text-gray-500">
          {post.author?.username || "Anonymous"}
        </p>
        <div className="mt-10 whitespace-pre-wrap text-lg">{post.content}</div>
      </article>
      <hr className="my-16" />
      <CommentSystem
        postId={post.id}
        initialComments={post.comments || []}
      />
    </main>
  );
}