# full-stack-works

Homework and practice projects from the Tech Career Full Stack Bootcamp. This repository is a collection of standalone exercises rather than a single application, covering vanilla JS/HTML pages, React apps, and a MERN-stack project.

## Tech Stack

- Vanilla HTML, CSS, and JavaScript (`case`, `horse-race`, `fetch-requests`, `practices`, `clean-blog-template`)
- React with Create React App (`introduce-react`, `rtk`, `react-table-sample`)
- Redux Toolkit and React Redux for state management (`rtk`, `mern-stack-app/client`)
- TypeScript (`react-table-sample`)
- Chakra UI (`mern-stack-app/client`)
- Node.js and Express (`mern-stack-app/server`)
- MongoDB with Mongoose (`mern-stack-app/server`)
- JWT-based authentication with `jsonwebtoken` and `bcryptjs` (`mern-stack-app/server`)

## Getting Started

Each folder is an independent project with its own dependencies. Pick a project and install its packages before running it.

### React projects (`introduce-react`, `rtk`, `react-table-sample`)

```bash
cd <project-folder>
npm install   # or yarn
npm start
```

### MERN stack app (`mern-stack-app`)

```bash
# Server
cd mern-stack-app/server
npm install
cp .env.example .env   # fill in your MongoDB URI and secrets
npm run dev

# Client
cd mern-stack-app/client
npm install
npm start
```

### Static HTML pages (`case`, `horse-race`, `fetch-requests`, `practices`, `clean-blog-template`)

Open the relevant `index.html` file directly in a browser, or serve the folder with any static file server.
