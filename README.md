# frontend

## Overview

A Next.js application serving as the user interface, interacting with the backend services for authentication and image handling.

## Prerequisites

<details><summary><b>Show Prerequisites</b></summary>

- Docker (for containerization)
- Node.js (for development)

### Template

Nim is a free and open-source personal website template built with Next.js 15, React 19, Tailwind CSS v4, and Motion.
Live demo: [https://nim-fawn.vercel.app](https://nim-fawn.vercel.app)

### Getting Started

For detailed setup instructions, refer to the https://github.com/ibelick/nim/blob/main/README.md

```bash
git clone https://github.com/ibelick/nim.git
cd nim
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

</details>

## Commands

<details><summary><b>Show Commands</b></summary>

### Setup

- Run the backend db (mongodb)
- Run the backend and auth services

### Build the image:

- Open a terminal in the frontend directory and run:

  ```sh
  docker build -t frontend .
  ```

- Run the container:

  ```sh
  docker run -d -p 3000:3000 frontend
  ```

</details>
