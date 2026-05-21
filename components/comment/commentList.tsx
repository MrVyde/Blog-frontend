import { Comment } from "@/types/comment";


export default function CommentList({
  comments,
}: {
  comments: Comment[];
}) {
  return (
    <div className="space-y-5">
      {comments.length ? (
        comments.map((comment) => (
          <div
            key={comment.id}
            className="rounded-2xl border p-5"
          >
            <p className="font-semibold">
              {comment.name || "Anonymous"}
            </p>

            <p className="mt-2 text-gray-700">
              {comment.content}
            </p>

            <p className="text-xs text-slate-600">
              {new Date(comment.createdAt).toLocaleString()}
            </p>
          </div>
        ))
      ) : (
        <p className="text-gray-500">
          No comments yet.
        </p>
      )}
    </div>
  );
}