import app from 'firebase/app';

    const config = {
        apiKey: "AIzaSyBpKDwr5geStbQ33SqecPhBQDdcfqfkDWU",
        authDomain: "online-project-cd6a7.firebaseapp.com",
        databaseURL: "https://online-project-cd6a7-default-rtdb.firebaseio.com",
        projectId: "online-project-cd6a7",
        storageBucket: "online-project-cd6a7.appspot.com",
        messagingSenderId: "820662775378",
        appId: "1:820662775378:web:8806e2392fcc477ec7b98b",
        measurementId: "G-JTVY5P0HDS"
      };


class Firebase {
    constructor() {
        app.initializeApp(config);

    }
}