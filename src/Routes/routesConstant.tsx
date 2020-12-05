import { lazy } from 'react';
const Home = lazy(() => import('../Containers/Home/index'))
const Contact = lazy(() => import('../Containers/Contact/index'))
const Skills = lazy(() => import('../Containers/Skills/index'))
// const About = lazy(() => import('../Containers/About/index'))


export const ROUTES_LIST = [
    {
        exact: true,
        NotFound: true,
        path: "/",
        component: Home
    },
    {
        NotFound: true,
        path: "/contact",
        component: Contact
    },
    {
        NotFound: true,
        path: "/skills",
        component: Skills
    },
    // {
    //     NotFound: true,
    //     path: "/about",
    //     component: About
    // }
]