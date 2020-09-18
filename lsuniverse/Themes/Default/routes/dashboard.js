/*
 * Frontend application routes
 */


import Index from "../pages/Dashboard/Index";
import Tickets from "../pages/Dashboard/Tickets";
import TicketAnswers from "../pages/Dashboard/TicketAnswers";
import Billing from "../pages/Dashboard/Billling";
// TODO: Make multilang route names
const DashboardRoutes = [
    {
        path: '/index',
        component: Index,
        name: "Home",
        show: true,
    },
    {
        path: '/tickets',
        component: Tickets,
        name: "Tickets",
        show: true,
    },
    {
        path: '/ticket/:id',
        component: TicketAnswers,
        name: "Show ticket",
        static: false,
    },
    {
        path: '/billing',
        component: Billing,
        name: "Billing details",
        show: true
    }

]

export default DashboardRoutes;
