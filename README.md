# Fit_With_Friends

![License](https://img.shields.io/badge/license-MIT-brightgreen)

![University of Denver Logog](https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/denver-switchup-thumbnail-a/original.png?1560210160)

## Description

Fitness with Friends, is a Full-Stack application designed and built using the MVC (Model View Controller) paradigm, with a server-side API with user authentication, as well as, a Node server connection, and Sequelize to interact with a MYSQL database. Express-Handlebars was one of the NPM packages used for the project. In addition, GitHub techiques such as branching, merging were used extensively. The tasks were done collaboratively but team members worked concurrently on sections of the MVC with the routes, models, and handlebars following the guidelines. Each team member assisted each other in cases where there were gaps or difficulties in the code. The project uses an open forum for the application for users to login into a user account page to view and post their activities and movements.The focus was to get goals and activites to post in the main user account page. The application is running on a localhost as well as Heroku.

Project 2 - Team 8

- Cynthia Godoy
- Ellen Furness
- Walker Jezek
- Jordan Covarrubias

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [License](#license)
  - [Git Info](#git-info)
  - [Contact](#contact-me)

  ## Installation

[express-handlebars](https://www.npmjs.com/package/express-handlebars) The application's folder structure follows the Model-View-Controller paradigm by using the handlebars package.

```
npm install express-handlebars
```

[MySQL2](https://www.npmjs.com/package/mysql2)

```
npm install --save mysql2
```

[Sequelize](https://www.npmjs.com/package/sequelize) packages to connect to a MySQL database for your Models, and create an Express.js API for your Controllers.

```
npm i sequelize
```

[dotenv package](https://www.npmjs.com/package/dotenv) to use environment variables.

```
npm install dotenv --save
```

[bcrypt package](https://www.npmjs.com/package/bcrypt) to hash passwords.

```
npm install bcrypt
```

[express-session](https://www.npmjs.com/package/express-session) **Note**: The package stores the
session data on the client in a cookie. When you are idle on the site for more than a set time, the
cookie will expire and you will be required to log in again to start a new session. This is the
default behavior and you do not have to do anything to your application other than implement the npm
package.

```
npm install express-session
```

[connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize) packages to add authentication.

```
npm install connect-session-sequelize
```

## Deployed Heroku URL:

[Heroku]()
[GITHUB] (https://github.com/AuraFly/Fit_With_Friends.git)
[GITHUB] (git@github.com:AuraFly/Fit_With_Friends.git)

NPM packeges used:

[bcrypt 5.0.1](https://www.npmjs.com/package/bcrypt)
[colors 1.4.0](https://www.npmjs.com/package/colors)
[connect-session-sequelize 7.1.3](https://www.npmjs.com/package/connect-session-sequelize)
[dotenv 16.0.1](https://www.npmjs.com/package/dotenv)
[express 4.18.1](https://expressjs.com/)
[express-handlebars 6.0.6](https://www.npmjs.com/package/express-handlebars)
[express-session 1.17.3](https://www.npmjs.com/package/express-session)
[mysql2 2.3.3](https://www.npmjs.com/package/mysql2)
[sequelize 6.19.2](https://sequelize.org/docs/v6/getting-started/)
[sql-template-strings 2.2.2](https://www.npmjs.com/package/sql-template-strings)

## Additional Tools used:

[SQL-Template-Strings] The SQL template string tag transforms the template string and returns an object that is understood by both mysql and postgres.

[Trello] - Kanban Board an agile methodology and a visual method for managing and processing work.
(https://trello.com/en-US)

[Formidable] A Node.js module for parsing form data, especially file uploads.
(https://formidable.com/)

## Usage

Deploying to Heroku:

[To install the Heroku CLI](https://coding-boot-camp.github.io/full-stack/heroku/how-to-install-the-heroku-cli)

Once Heroku has been installed, verify Heroku was installed on Terminal

```
heroku --version
```

Once Heroku is verified on Terminal, check your git is installed.

```
git --version
```

[Heroku documentation on getting started with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs?singlepage=true)

To direct your project to your heroku account

```
heroku login or heroku login i
cd ~/ PROJECT LOCATION
heroku create
```

[To deploy a project on Heroku](https://coding-boot-camp.github.io/full-stack/heroku/heroku-deployment-guide)

Create a variable to locate Port

```
const port = process.env.PORT || 3001
```

```Terminal
git status
git init
heroku create
git remote -v
git add -A
git commit -m "Pushing to Heroku"
git push heroku main
```

To open the application from the terminal

```
heroku open
```

[Heroku documentation on creating a Heroku remote](https://devcenter.heroku.com/articles/git#creating-a-heroku-remote)
To confirm there is a remote name heroku set on your app

```
git remote -v
```

# Contribution

Open to any and all contributions!

# Contact Me

[Contact Me](mailto:JordanJco@gmail.com)

# License

This application is covered under the MIT open source license.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files, to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
