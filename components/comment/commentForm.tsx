"use client";

import { useState } from "react";
import { commentApi } from "@/lib/api/comments";



export default function CommentForm({
    postId,
    onSuccess,
  }: {
    postId: string;
    onSuccess: () => void;
  }) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [content, setContent] = useState("");

    const [error, setError] = useState<string | null>(
      null
    );

    const [loading, setLoading] = useState(false);

    const submit = async (
      e: React.SubmitEvent<HTMLFormElement>
    ) => {
      e.preventDefault();

      setError(null);
      setLoading(true);

      try {
        await commentApi.createComment({
          postId,

          // backend expects "name"
          name: username,

          email,
          content,
        });

        // clear form
        setUsername("");
        setEmail("");
        setContent("");

        onSuccess();
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

  return (
    <form
      onSubmit={submit}
      className="mt-12 space-y-5 rounded-2xl border p-6"
    >
      <h3 className="text-xl font-semibold">
        Leave a Comment
      </h3>

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}

      {/* Username */}
      <div className="space-y-2">
        <label
          htmlFor="username"
          className="text-sm font-medium"
        >
          Username
        </label>

        <input
          id="username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          placeholder="Your username"
          className="w-full rounded-lg border p-3"
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="text-sm font-medium"
        >
          Email
        </label>

        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          placeholder="Your email"
          className="w-full rounded-lg border p-3"
        />
      </div>

      {/* Comment */}
      <div className="space-y-2">
        <label
          htmlFor="content"
          className="text-sm font-medium"
        >
          Comment
        </label>

        <textarea
          id="content"
          value={content}
          onChange={(e) =>
            setContent(e.target.value)
          }
          rows={5}
          placeholder="Write your comment..."
          className="w-full rounded-lg border p-3"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="rounded-lg bg-black px-6 py-3 text-white disabled:opacity-50"
      >
        {loading
          ? "Posting..."
          : "Post Comment"}
      </button>
    </form>
  );
}