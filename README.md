Building and Deploying a React App

Everything we've done so far has been in a development environment. We've been compiling, hot-reloading, and updating on the fly. For production, we're going to want to have static files loading in - none of the source code. We can do this by making a build and deploying it.

Now, if you just want to compile all the React code and place it in the root of a directory somewhere, all you need to do is run the following line:

npm run build

This will create a build folder which will contain your app. Put the contents of that folder anywhere, and you're done!

We can also take it a step further, and have npm deploy for us. We're going to build to GitHub pages, so you'll already have to be familiar with Git and getting your code up on GitHub.

Make sure you've exited out of your local React environment, so the code isn't currently running. First, we're going to add a homepage field to package.json, that has the URL we want our app to live on.

package.json

"homepage": "https://antonredko.github.io/react-tutorial",

We'll also add these two lines to the scripts property.

"scripts": {
  // ...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

In your project, you'll add gh-pages to the devDependencies.

npm install --save-dev gh-pages

We'll create the build, which will have all the compiled, static files.

npm run build

Finally, we'll deploy to gh-pages.

npm run deploy

And we're done! The app is now available live at https://antonredko.github.io/react-tutorial.
