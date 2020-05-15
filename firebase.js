import * as firebase from 'firebase';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyATQe6LwotJ_hH1sGPqF0T8xrcsmAo96OI",
    authDomain: "react-native-test-70ba0.firebaseapp.com",
    databaseURL: "https://react-native-test-70ba0.firebaseio.com",
    projectId: "react-native-test-70ba0",
    storageBucket: "react-native-test-70ba0.appspot.com",
    messagingSenderId: "1025702632269",
    appId: "1:1025702632269:web:05e92e725efc7b70ed7504",
    measurementId: "G-4ZQSS72MPL"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth
}; 