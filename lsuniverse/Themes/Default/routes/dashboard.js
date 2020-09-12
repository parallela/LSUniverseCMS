/*
 * Frontend application routes
 */


import Index from "../pages/Dashboard/Index";
import Tickets from "../pages/Dashboard/Tickets";
import TicketAnswers from "../pages/Dashboard/TicketAnswers";
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
    }

]

export default DashboardRoutes;
