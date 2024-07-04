# Cat Catalog

This project is a Cat Catalog built with Next.js, TypeScript, and Redux. It fetches cat breed data from the Cat API and displays it in a searchable list, with detailed breed information available on individual breed pages.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Dependencies](#dependencies)
- [License](#license)

## Getting Started

### Prerequisites

Ensure you have the following installed on your development machine:

- Node.js (>= 14.x)
- npm (>= 6.x) or yarn (>= 1.x)

### Installation

1. Clone the repository:

   ```bash
        git clone https://github.com/Harshamal-Masinghe/cat-catalog.git
        cd cat-catalog

2. Install the dependencies:

    ```bash
        npm install
        # or
        yarn install
3. Create a .env.local file in the root of the project and add Cat API key:

    ```bash
        NEXT_PUBLIC_CAT_API_KEY=live_7pASTbr1wgSwkotytmK5tVH8DmH9QrO6JlEqZN0MjV3qoDj1oijmP4eelhlFWjvw

4. Start the development server:

    ```bash
        npm run dev
        # or
        yarn dev

The app will be available at http://localhost:3000.

## Project Structure

        cat-catalog/
        ├── components/
        │   ├── BreedList.tsx
        │   ├── BreedDetail.tsx
        ├── pages/
        │   ├── index.tsx
        │   ├── breed/
        │   │   ├── [id].tsx
        ├── store/
        │   ├── index.ts
        │   ├── breedSlice.ts
        ├── styles/
        │   ├── globalStyles.ts
        ├── public/
        ├── .env.local
        ├── README.md
        ├── tsconfig.json
        ├── next.config.js
        ├── package.json

### Components
* BreedList.tsx: Displays a list of cat breeds and allows searching.
* BreedDetail.tsx: Displays detailed information about a selected cat breed.
  
### Pages
* index.tsx: The home page that includes the `BreedList` component.
* breed/[id].tsx: Dynamic route for displaying breed details using the `BreedDetail` component.
  
### Store
* index.ts: Configures the Redux store.
* breedSlice.ts: Defines the breed slice for managing cat breed data with Redux Toolkit.
  
### Styles
* globalStyles.ts: Contains global styles for the application.

## Environment Variables
The project uses the following environment variables:

* NEXT_PUBLIC_CAT_API_KEY: live_7pASTbr1wgSwkotytmK5tVH8DmH9QrO6JlEqZN0MjV3qoDj1oijmP4eelhlFWjvw.

## Available Scripts
In the project directory, you can run:

`npm run dev`
Runs the app in development mode.
Open http://localhost:3000 to view it in the browser.

`npm run build`
Builds the app for production.

`npm start`
Starts the production build of the app.

## Dependencies
* Next.js: The React framework for production.
* React: A JavaScript library for building user interfaces.
* Redux Toolkit: The official, recommended way to write Redux logic.
* TypeScript: A strongly typed programming language that builds on JavaScript.

## License
This project is licensed under the MIT License. See the LICENSE file for details.
