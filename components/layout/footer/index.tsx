'use client';

export default function Footer() {
    return (
        <footer className="w-full border-t py-6 mt-auto flex items-center justify-center">
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()} My Blog. All rights reserved.
      </p>
    </footer>
    );
}