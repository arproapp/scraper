import { defineStore } from "pinia";
import { getFirebaseBackend } from '../authUtils'

export const useUserStore = defineStore("user", {
    state: () => ({
        currentUser: sessionStorage.getItem('authUser'),
        userData: null,
        loadingUser: false,
        loadingSession: false
    }),
    actions: {
        // register the user
        async register(username, email, password ) {
            return getFirebaseBackend().registerUser(username, email, password).then((response) => {
                const user = response
                commit('SET_CURRENT_USER', user)
                return user
            });
        },

    }
});
