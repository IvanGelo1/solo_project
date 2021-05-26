# yKnot

yKnot is a mobile running app, that helps users interact with the running community.

## Purpose

I started building this mobile app as a way to get familiar and learn about developing full-stack mobile apps. Throughout the process I aquired knowledge about using React Native and enjoyed it thoroughly.

## 🛠 Instalation
1. To clone the repository run the following command:
  ```
  git clone https://github.com/IvanGelo1/yKnot.git
  ```
2. After cloning the repository, from both client and server folders, run the following command:
```
npm install
```

## 🚀 Usage
Setup the [environment variables](https://medium.com/chingu/an-introduction-to-environment-variables-and-how-to-use-them-f602f66d15fa) and the config folder:
1. Inside the client folder create a `.env` file. See `client-example-env.txt` for reference
2. Inside the server folder create a `.env` file. See `server-example-env.txt` for reference
3. Inside the server folder create a `config` folder, and `config.json` file inside. See `config-example` for reference

To run the app:
1. From the server folder run:
  ```
  nodemon index.js
  ```
2. From the client folder run:
  ```
  npm run start
  ```

## 📸 Images
<img src="/assets/yKnot1.png" alt="yKnot"/>
<img src="/assets/yKnot2.png" alt="yKnot"/>

## Technology Used

* React Native
* Expo
* Redux
* Express
* PostgreSQL
