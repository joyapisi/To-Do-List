# To Do List

HTML, CSS and JavaScript To Do List Project
<a name="readme-top"></a>

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - - [Tech Stack](#tech-stack)
    - - [Key Features](#key-features)
  - [🎥 Video Explanation](#video-explanation)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#set-up)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
    - - [Install webpack](#webhint-installation)
    - - [Install linters](#linter-installation)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ](#faq)
- [📝 License](#license)

# 📖 [To_Do_List] <a name="To DO List"></a>

**[To_Do_List]** is a simple a simple web page that displays a list of To Do tasks inserted by a user. It is built using webpack and served by a webpack dev server.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

  <summary>Javascript runtime environment</summary>
  <ul>
    <li><a href="https://nodejs.org/en/">Node JS</a></li>
  </ul>

  <summary>JS Packages</summary>
  <ul>
    <li><a href="https://webpack.js.org/guides/getting-started/#basic-setup">webpack</a></li>
  </ul>

  <summary>Version control</summary>
  <ul>
    <li><a href="github.com">Git Hub</a></li>
  </ul>
</details>

### Key Features <a name="key-features"></a>

- **[Webpack]**
- **[Desktop-Version]**
- **[Dynamic-Design]**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🎥 Video Explanation <a name="video-explanation">Coming soon!</a>

## 🚀 Live Demo <a href="https://joyapisi.github.io/To-Do-List/dist" name="live-demo">Live Demo</a>

## 💻 Getting Started <a name="getting-started"></a>

Creating your first "To DO List" project

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

-A Git hub account
-Git bash
-Node JS
-Webpack
-Visual Studio Code as your code editor

# Setup <a name="set-up"></a>

Clone this repository to your desired folder:

```sh
  cd my-folder
  git clone[(https://github.com/joyapisi/To-Do-List.git)]
```
## Understand Set Up Requirements
Since this code is using webpack, run `npm start` in your terminal to run it instead of using the live server. 

## Understand Set Up Requirements

### Define webpack

<a href="https://webpack.js.org/concepts/">webpack</a>is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph from one or more entry points and then combines every module your project needs into one or more bundles, which are static assets to serve your content from.

### Define Linters

A linter is a tool to help you improve your code. You can learn more about Linters here: (source: (<https://www.testim.io/blog/what-is-a-linter-heres-a-definition-and-quick-start-guide/>)).

#### Advantages of Linting:

1. Fewer errors in production- The use of linters helps to diagnose and fix technical issues such as code smells. As a result, fewer defects make their way to production.
2. Achieving a more readable and consistent style, through the enforcement of its rules.
3. Having more secure and performant code.
4. Having an objective and measurable assessment of code quality.
5. Having fewer discussions about code style and aesthetic choices during code reviews.

# Install webpack and linters <a name="install"></a>

## Install webpack <a name="webpack-installation"></a>

- Follow the instructions <a href="https://webpack.js.org/guides/getting-started/#basic-setup">here</a> to set up webpack.

### Steps to Install webpack

- In the link above, go through these topics in order:
<ul>
  <li><a href="https://webpack.js.org/guides/getting-started/#basic-setup">Getting Started</a></li>
  <li><a href="https://webpack.js.org/guides/asset-management/#loading-css">Asset Management</a></li>
  <li><a href="https://webpack.js.org/guides/output-management/#setting-up-htmlwebpackplugin">Output Management</a></li>
  <li><a href="https://webpack.js.org/guides/development/#adjusting-your-text-editor">Development</a></li>
</ul>

## Install Linters <a name="linter-installation"></a>

Linters for various programming languages are available for use, e.g. Rubocop for Ruby or ESLint for JavaScript.

There are many ways you can integrate a linter in your workflow:

-text editor plugin
-GitHub Actions
-GitHub apps

### Steps to Install Linters

**Note:** The npm package manager is going to create a node_modules directory to install all of your dependencies. You shouldn't commit that directory. To avoid that, you can create a .gitignore file and add node_modules to it:

# .gitignore

node_modules/

## ESLint

Run

```
npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x
```

## Web Hint <a name="webhint-installation"></a>

This is a customizable linting tool that helps you improve your site's accessibility, speed, cross-browser compatibility, and more by checking your code for best practices and common errors.

**NOTE:** If you are using Windows, make sure you initialize npm to create `package.json` file.

```
npm init -y
```

1. Run
   ```
   npm install --save-dev hint@7.x
   ```
   _how to use npm: (https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)._
2. Copy [.hintrc](.hintrc) to the root directory of your project.
3. **Do not make any changes in config files - they represent style guidelines that you share with your team - which is a group of all Microverse students.**
   - If you think that change is necessary - open a [Pull Request in this repository](../README.md#contributing) and let your code reviewer know about it.
4. Run
   ```
   npx hint .
   ```
   [Copy contents of .eslintrc.json to the root directory of your project](https://github.com/microverseinc/linters-config/blob/master/html-css-js/.eslintrc.json)
5. Fix validation errors.

### [Stylelint](https://stylelint.io/) <a name="stylelint-installation"></a>

A mighty, modern linter that helps you avoid errors and enforce conventions in your styles.

1. Run

npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
not sure how to use npm? Read this.

2. Copy .stylelintrc.json to the root directory of your project.

3. **Do not make any changes in config files - they represent style guidelines that you share with your team - which is a group of all Microverse students.**

If you think that change is necessary - open a Pull Request in this repository and let your code reviewer know about it. 4. Run npx stylelint "\*_/_.{css,scss}" on the root of your directory of your project.

5. Fix linter errors.

6. **IMPORTANT NOTE:** feel free to research auto-correct options for Stylelint if you get a flood of errors but keep in mind that correcting style errors manually will help you to make a habit of writing a clean code!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Authors <a name="authors"></a>

👤 **Joy Phoebe**

- GitHub: (https://github.com/joyapisi)
- Twitter: (https://twitter.com/joyapisi)
- LinkedIn: (https://http://www.linkedin.com/in/joy-phoebe-00b80a13a)

## 🤝 Contributing <a name="contributing"></a>

## 🔭 Future Features <a name="future-features"></a>

# **[Feature-1]**

- Add more styling (aesthetics)

# **[Feature-2]**

- Add mobile version

<p align="right">(<a href="#readme-top">back to top</a>)</p>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/joyapisi/To-Do-List/issues).

## ⭐️ Show your support <a name="support"></a>

If you like this project, kindly leave a comment below and share it with someone who enjoys coding! Coding is all about continuous learning and allowing yourself to be a beginner. Keep going!

## 🙏 Acknowledgments <a name="Microverse Inc."></a>

I'm thankful to Microverse for providing a study platform which guided me through this project.

## ❓ FAQ <a name="faq"></a>

- **[Question_1]**
  An easier and quicker way to understand webpack?

  - This YouTube<a href="https://www.youtube.com/watch?v=MpGLUVbqoYQ">video</a> will help you understand webpack better and in details

- **[Question_2]**
  Where can I download node JS for installation?

  - Node Js can be downloaded here- <ul>
    <li><a href="https://nodejs.org/en/download/"> Node JS </a></li>
  </ul>

## 📝 License <a name="license"></a>

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
