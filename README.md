# React GPT-3.5 boilerplate w/Azure and express.js

Simple, straightforward boilerplate to get started with a chat-like bot using OpenAI on Azure. The front-end uses easily understood CSS within a React wrapper that is under 100 lines of javascript. In short, this template requires only a rudimentry understanding of React and CSS from which to demo, test, build and ideate with ChatGPT.

Highlights include:
- fast start with ChatGPT chatbot
- complete React web app
- responsive CSS
- built by a dumb guy ... anyone can use it!

# Usage

Refer to the section below, Getting Started, to run. Only re-prerequisite is you will need your own openAI key and create a new "secret" (env variable) in your Repl.

[Login into Azure](https://portal.azure.com/](https://www.npmjs.com/package/azure-openai ) to configurd your Azure OpenAI's key, endpoint and deploymentId.
[How to use Secrets in Repl](https://docs.replit.com/programming-ide/workspace-features/secrets) to configure your environment variable. You'll need two secrets, "endpoint" and "openAI", to work with the script located in /api/server.js

All good? You're ready to "run"!

# Frameworks and Packages

## Azure Openai
[NPM Azure-Openai](https://www.npmjs.com/package/azure-openai) is fork of the official OpenAI Node.js library that has been adapted to support the Azure OpenAI API.

## express.js
[Express.js Help docs](https://expressjs.com/en/starter/installing.html) if you need more information. Not a requirement to run this template.

## Running React on Repl.it

[React](https://reactjs.org/) is a popular JavaScript library for building user interfaces.

[Vite](https://vitejs.dev/) is a blazing fast frontend build tool that includes features like Hot Module Reloading (HMR), optimized builds, and TypeScript support out of the box.

Using the two in conjunction is one of the fastest ways to build a web app.

### Getting Started
- Hit run
- Edit [App.jsx](#src/App.jsx) and watch it live update!

By default, Replit runs the `dev` script, but you can configure it by changing the `run` field in the [configuration file](#.replit). Here are the vite docs for [serving production websites](https://vitejs.dev/guide/build.html)

# License

[MIT License](https://opensource.org/license/mit-0/)
MIT License

Copyright (c) [2023] [jesse korzan]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.