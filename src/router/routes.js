
export default [
    {
        path: "/login",
        name: "login",
        component: () => import("../views/account/login.vue"),
        title: "Login", authRequired: false,

    },
    {
        path: "/register",
        name: "register",
        component: () => import("../views/account/register.vue"),
        title: "register", authRequired: false,

    },
];
