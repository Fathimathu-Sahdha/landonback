Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Docker (deployment)

Build + run on host port `5000`:

```sh
docker compose up --build
```

Open `http://localhost:5000`.

Or without Compose:

```sh
docker build -t london-bakery .
docker run --rm -p 5000:5000 london-bakery
```
