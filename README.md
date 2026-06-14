# Blog Frontend

A public blog platform built with Next.js that allows users to read blog posts and participate in discussions through a moderated comment system.

## Live Demo

* Frontend: https://blog-frontend-sepia-one.vercel.app/
* API: https://blog-api-k0tb.onrender.com

## Features

* View all published blog posts
* Read individual blog posts
* Submit comments on posts
* Rate-limited comment submissions
* Responsive user interface
* REST API integration with a separate backend service

## Tech Stack

* Next.js
* TypeScript
* Tailwind CSS
* REST API

## Architecture

This application consumes content from a separately deployed backend API and demonstrates frontend-backend integration across different domains using proper CORS configuration.

Related Projects:

* Frontend: https://github.com/MrVyde/Blog-frontend
* Admin Dashboard: https://github.com/MrVyde/Blog-admin
* Backend API: https://blog-api-k0tb.onrender.com

## Local Setup

Clone the repository:

```bash
git clone https://github.com/MrVyde/Blog-frontend.git
cd Blog-frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=https://blog-api-k0tb.onrender.com
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## API Integration

The frontend retrieves blog posts and comments from the backend API and allows users to submit comments by providing a username and email address. Comment submissions are protected with rate limiting to reduce spam and abuse.

## Repository

https://github.com/MrVyde/Blog-frontend
