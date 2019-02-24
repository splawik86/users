import Users from "../views/Users";
import UserDetails from "../views/UserDetails";

export default [

    {
        path: "/",
        redirect: { name: 'users'}
    },
    {
        path: "/users",
        name: "users",
        component: Users
    },
    {
        path: "/user/:id",
        name: "user",
        props: true,
        component: UserDetails
    }
]
