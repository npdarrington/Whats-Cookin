# Can You Smell What's Cookin'?

## Abstract
### App in Action
//screenshots and/or gif's here
## Setup & Installation
To view and use the application, clone down [this repository](git@github.com:npdarrington/Whats-Cookin.git) and install npm. 
```
git clone git@github.com:npdarrington/Whats-Cookin.git
npm install
```
To view the test suite:
```
npm test
```
## Skills 
- OOP using ES6 classes
- Array iterator methods/Object methods
- Test Driven Development - designing an application by testing first and pseudo-coding before coding functionality
- Accessibility - following ARIA guidelines to provide seamless tabbing for screen readers and choosing a color scheme that accommodates for colorblindness
- Group workflow using a project board, concise commits, linking commits/PR's to issues, automated PR template, and documented code review
- Refactoring existing code base by following SRP and DRY principles and using newer technologies
## Technologies Used
- Vanilla JS
- HTML
- CSS/SASS
- Webpack
- Mocha framework
- Chai library with Spies plug-in for DOM testing
- NPM
- Fetch API to GET/POST data to a server
- GitHub/Git
- Eslint
## Wins & Challenges
### Challenges
- Writing our tests based the wrong data -- in hindsight, we should have checked the API data supplied before writing new tests and methods. We learned later in the process that API datasets differed from original project's repo data and could have saved time with functionality that was unneeded (RIP `User.marioCondoMyPantry`)
- Using API data that can be modified by multiple developers (both within our group and other students in the class). We're all learning how to use API data for the first time, so data was sometimes altered in ways that might not work with how our class methods were written.
### Wins
- Tackling complicated logic involving multiple datasets.
- Learning how to taking advantage of Webpack features to consolidate our files into one neat bundle. We found that while everything doesn't have to be linked through a `html scripts` tag, the correct files must be linked in `index.js` and a chosen entry point (`scripts.js`) before deployment.
- Using `Fetch` to `GET` and `POST` data to a server.
- Deciding (not) to use inheritance - while this is a new feature we learned during this module, we felt that it did not offer enough advantages to be applicable for how we structured our classes.
## Contributors
- [Ashley McDonald](https://github.com/aemcdonald)
- [Hanna Kim](https://github.com/hannakim91)
- [Jeff Woltjen](https://github.com/JWoltjen)
- [Nathan Darrington](https://github.com/npdarrington)
## Additional Links
- [Project Board](https://github.com/npdarrington/Whats-Cookin/projects/1)
- [Visual planning](https://jamboard.google.com/d/1k-Fsp7zcx3fZqDgq3sIR5eu4ZKydwCJyzZFebz4ChQg/viewer?f=3)
- [Refactor Specs](https://frontend.turing.io/projects/whats-cookin.html)
- [Original Project Specs](https://frontend.turing.io/projects/module-2/refactor-tractor-wc.html)