# Random Quote Machine (React + TypeScript)

This is a random quote generator app built with React and TypeScript. It fetches random quotes from an external API and displays them with a nice background color. You can also tweet the quote directly from the app.

## Live Demo

You can check out the live version of the app on GitHub Pages:

Random Quote Machine - [Live Demo](https://bakdavid.github.io/random-quote-machine/)

Make sure to replace your-username with your GitHub username.

## Features

-   Displays a random quote with the author.
-   Background color changes every time a new quote is generated.
-   Allows users to tweet the quote via Twitter.
-   Built with React and TypeScript.

## Technologies Used

-   React
-   TypeScript
-   CSS (for styling)
-   Fetch API to get quotes data

## Installation

To run this project locally, follow these steps:

1.  Clone this repository:

```bash
git clone https://github.com/your-username/random-quote-machine.git
```

2.  Navigate to the project directory:

```
cd random-quote-machine
```

3. Install dependencies:

```
npm install
```

4. Run the project

```
npm run dev
```

5.  Open the app in your browser at http://localhost:5173 (or the default URL provided by Vite).

## Deployment to GitHub Pages

### 1. Install `gh-pages` (GitHub Pages deployment package)

To deploy the app to GitHub Pages, first install the `gh-pages` package:

```
npm install --save-dev gh-pages
```

### 2. Update `vite.config.ts`

In your `vite.config.ts` file, set the base option to your GitHub repository name (this is required for the app to work correctly when served from a subdirectory).

For example, if your GitHub repository is called `random-quote-machine`, update the `vite.config.ts` file like this:

```
export default defineConfig({
    plugins: [react()],
    base: '/random-quote-machine/', // Adjust this based on your GitHub repository name
})
```

### 3. Add Deployment Scripts to `package.json`

In your `package.json`, add two scripts for deploying to GitHub Pages:

```
"scripts": {
    "deploy": "gh-pages -d dist",
    "predeploy": "npm run build"
}
```

predeploy: Runs the build command before deploying.
deploy: Deploys the contents of the dist/ folder to GitHub Pages.

### 4. Deploy to GitHub Pages

To deploy your app to GitHub Pages, run the following command:

```
npm run deploy
```

After a successful deployment, your app will be available at:

https://your-username.github.io/random-quote-machine/
Replace `your-username` with your actual GitHub username.

### 5. Set GitHub Pages Branch

Make sure that your GitHub repository is set to use the `gh-pages` branch for GitHub Pages deployment.

To do this:

-   Go to your GitHub repository page.
-   Navigate to Settings > Pages.
-   Under Source, choose the `gh-pages` branch (it should appear once you deploy your site for the first time).

## Usage

1. Click on New Quote to get a random quote.
2. Click the Twitter icon to share the quote on Twitter.
3. The background color changes every time you generate a new quote!

## License

This project is licensed under the MIT License.

```

```

```

```

```

```
