# Full-stack from scratch boilerplate

This is a simple boilerplate for building a full-stack application from scratch using React, Express and Webpack. Babel is also pre-configured inside of the webpack.config.js file.

I created this boilerplate for a few different reasons:

- As a sandbox to practice webpack for any future personal projects.
- To avoid becoming too dependent on Create-React-App (CRA). There's a lot of configuration underneath the hood with CRA and it's easy to overlook some of that inital set-up.
- To share with others and learn from people way smarter than me.

Feel free to chime in with any comments or suggestions. And I'd love to see other boilerplates as well!

I hope this is useful to anyone who may stumble across it!

Cheers!

## Install

Clone this repo and rename directory

```bash
git clone https://github.com/matthewoctober/full-stack-from-scratch-boilerplate.git
mv full-stack-from-scratch-boilerplate/ enter-project-name
```

Install dependecies

```bash
cd enter-project-name
npm i
cd client
npm i
```

Launch webpack dev server

```bash
npm run dev
```

Open a new terminal window and launch express server

```bash
cd ..
npm run dev
```

Now fire up <a href="http://localhost:8080" target="_blank">http://localhost:8080</a> in your browser. You should see a message that says "You created a react app from scratch!!" Next you'll want to traverse over to <a href="http://localhost:8080/api" target="_blank">http://localhost:8080/api</a> to make sure you Express server is running properly.

If you see "Hello, this is your server!", you're all set to build whatever your little heart desires!

Oh, and you'll want to do two last things:

- Don't forget to edit your package.json files' info to your own project details (name, description, keywords, author, etc.).
- Uncomment the environment variable filename in your .gitignore file before pushing to any remote repo!

Happy hacking!
