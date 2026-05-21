"use client";

import { useRouter } from "next/navigation";
import CommentList from "./commentList";
import CommentForm from "./commentForm";
import { Comment } from "@/types/comment";


export default function CommentSystem({
  postId,
  initialComments,
}: {
  postId: string;
  initialComments: Comment[];
}) {
  const router = useRouter();

  return (
    <section>
      <h2 className="mb-8 text-3xl font-semibold">
        Comments
      </h2>

      {/* list */}
      <CommentList
        comments={initialComments}
      />

      {/* form */}
      <CommentForm
        postId={postId}
        onSuccess={() => router.refresh()}
      />
    </section>

  );
}