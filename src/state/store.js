import { defineStore } from "pinia";
import { initFirebaseBackend } from '../authUtils';

export const useUserStore = defineStore("user", {
    state: () => ({
        userData: "bluuweb",
    }),
});


const firebaseConfig = {
    apiKey: "AIzaSyCUb1PYB6BzT3YxqS9DnznuvSuKHFnNT0k",
    authDomain: "arproapp-v3-frontend.firebaseapp.com",
    databaseURL: "",
    projectId: "arproapp-v3-frontend",
    storageBucket: "arproapp-v3-frontend.appspot.com",
    messagingSenderId: "749990058448",
    appId: "1:749990058448:web:ce78036a67b60071c8c1d5",
    measurementId: "G-XEMH0XQLFT",
};

initFirebaseBackend(firebaseConfig);
