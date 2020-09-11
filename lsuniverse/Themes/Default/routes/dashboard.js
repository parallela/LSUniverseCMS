/*
 * Frontend application routes
 */


import Index from "../pages/Dashboard/Index";
import Tickets from "../pages/Dashboard/Tickets";
// TODO: Make multilang route names
const DashboardRoutes = [
    {
        path: '/index',
        component: Index,
        name: "Home"
    },
    {
        path: '/tickets',
        component: Tickets,
        name: "Tickets"
    }
]

export default DashboardRoutes;
