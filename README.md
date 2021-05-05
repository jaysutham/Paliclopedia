# paliclo
Welcome to Paliclo! An easy to access Monster Hunter helper web application. 

Now you might be thinking.. "But there's like a million Monster Hunter database already.." Well... None of them is as simple as this!

The sole purpose of the application is to provide an EASY, CLEAN, and CLEAR UI which provides only the most important information of a monster. There shouldn't be too much information!

Feel free to pull and work on it! But Remember! EASY CLEAN CLEAR (We don't want another Kiranico)

## To Set up
```
npm install
```
If you want to work on the database, create an SQL database with the name 'paliclopedia'.

To create table and Seed information on your local Database run...
```
npm start
```

If you'd like to rename your local Database, make changes in the ./server/knexfile.js  --- in localconfig variable then run NPM start


### Run Rollback
```
npm run rollback
```

### Run nodemon with backend
```
npm run dev
```

###Building the App
```
npm run build
```
This will build the /dist folder and allows you to run your vue page with the database.

### Tailwind & CSS

Please stick to the color theme. It has to be soothing to the eye, and color-blind friendly.
Color used can be found in tailwind.config.js

Happy Hunting! (for bugs)
