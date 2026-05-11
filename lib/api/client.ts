const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },

    ...options,
  });

  if (!res.ok) {
  let errorMessage = "API Error";

  try {
    const error = await res.json();
    errorMessage = error.message || errorMessage;
  } catch {}

  throw new Error(errorMessage);
}

  return res.json();
}