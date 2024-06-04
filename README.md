# User management system

This project is set up with React, TypeScript, and Vite for fast development and Hot Module Replacement (HMR). It also integrates Formik for form management, Yup for validation, and Material-UI (MUI) for UI components.

## Project Features

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: A fast build tool and development server.
- **Formik**: A library for building forms in React.
- **Yup**: A schema builder for value parsing and validation.
- **MUI (Material-UI)**: A popular React UI framework.

## Available Scripts

In the project directory, you can run:

### `npm install`

Installs the necessary dependencies.

### `npm run dev`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.

### `npm run lint`

Runs ESLint to check for linting errors.

## Project Structure

The project structure is as follows:

├── src
│ ├── components
│ │ ├── UserForm.tsx
│ │ ├── UserTable.tsx
│ ├── hooks
│ │ └── useUsers.ts
│ ├── pages
│ │ └── Home.tsx
│ ├── types
│ │ └── index.ts
│ └── App.tsx
│ └── main.tsx
├── public
│ └── index.html
├── tsconfig.json
├── tsconfig.node.json
├── package.json
├── vite.config.ts
└── README.md
