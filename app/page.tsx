import Link from "next/link";
import { postApi } from "@/lib/api/posts";

export default async function HomePage() {
  const posts = await postApi.getPosts();

  return (
    <main className="min-h-screen bg-gray-100 px-4 py-10">
      {/* centered container */}
      <div className="mx-auto w-full max-w-3xl">
        {/* page title */}
        <h1 className="mb-10 text-center text-4xl font-bold text-gray-900">
          Blog Posts
        </h1>

        {/* posts */}
        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/posts/${post.id}`}
              className="
                block rounded-2xl border border-gray-200
                bg-white p-6 shadow-sm transition
                hover:-translate-y-1 hover:shadow-md
              "
            >
              {/* title */}
              <h2 className="text-2xl font-semibold text-gray-900">
                {post.title}
              </h2>

              {/* preview */}
              <p className="mt-3 line-clamp-3 text-gray-600">
                {post.content.slice(0, 150)}
              </p>

              {/* footer */}
              <div className="mt-5 flex items-center justify-between text-sm text-gray-400">
                <span>
                  {new Date(post.createdAt).toLocaleDateString()}
                </span>

                {post.author?.username && (
                  <span>{post.author.username}</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}