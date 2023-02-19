​
# Interactive Full-Stack Project: Craft But Not Least
​
Craft But Not Least is a full-stack web application that allows users to create an account, login, create listings for and purchase or trade craft supplies and tools directly from other users. 
​
## �� Description
​
User can be connected with other craft makers through this application to buy, sell or trade secondhand craft supplies and tools.
​
​
## �� Technologies 
​
**Runtime:** Node.js
​
**Lanuage:** Javascript
​
**Dependencies:** 
​
    "bcrypt": "^5.0.0",
    "connect-session-sequelize": "^7.0.4",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "express-handlebars": "^5.2.0",
    "express-session": "^1.17.1",
    "multer": "^1.4.5-lts.1",
    "mysql2": "^2.2.5",
    "path": "^0.12.7",
    "sequelize": "^6.3.5"
​
​
## �� Installation
​
​
With the package.json file, use jest to excute the tests in the terminal by the following command:
```
npm i
```
​
For npm scripts:
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "seed": "node seeds/seed.js"
  }
```
## Usage
​
To excute MySQL shell in the terminal by the following command:
```
mysql -u root
```
or if you have a password for database try:
```
mysql -u root -p
```
then source the schema file:
```
SOURCE db/schema.sql;
```
To seed the database:
```
npm run seed
```
To run the application:
```
node index.js
```
Or 
```
npm start
```
​
​
## Badges
​
Add badges from somewhere like: [shields.io](https://shields.io/)
​
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
