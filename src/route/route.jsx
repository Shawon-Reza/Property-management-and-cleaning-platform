import { createBrowserRouter, Navigate } from "react-router";
import SignIn from "../features/auth/SignIn";
import ResetPassword from "../features/auth/ResetPassword";
import ForgotPassword from "../features/auth/ForgotPassword";
import VerifyCode from "../features/auth/VerifyCode";
import NotFoundPage from "../features/auth/NotFoundPage";
import MainLayout from "../Layout/MainLayout";
import Dashboard from "../features/dashboard/Dashboard";
import Notifications from "../features/notifications/Notifications";
import Buildings from "../features/buildings/Buildings";
import Profile_and_Setting from "../features/Profile_and_Setting/Profile_and_Setting";
import Team_messaging from "../features/Team_messaging/Team_messaging";
import BuildingFlatsList from "../features/buildings/BuildingFlatsList";
import BuildingFlatDetails from "../features/buildings/BuildingFlatDetails";
import BuildingFlatDetailsEdit from "../features/buildings/BuildingFlatDetailsEdit";
import Maintenence from "../features/maintenance/Maintenence";
import HouseMaintenenceDetails from "../features/maintenance/HouseMaintenenceDetails";
import MiniAdmin from "../features/userManagement/MiniAdmin";
import Cleaners from "../features/userManagement/Cleaners";
import MaintenanceWorker from "../features/userManagement/MaintenanceWorker";
import Schedule from "../features/schedule/Schedule";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="/dashboard" replace />,
            },
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "dashboard/notifications",
                element: <Notifications />,
            },
            {
                path: "buildings",
                element: <Buildings />,
            },
            {
                path: "profile-settings",
                element: <Profile_and_Setting />,
            },
            {
                path: "/team-messaging",
                element: <Team_messaging />,
            }
                path: "buildings/:buildingId",
                element: <BuildingFlatsList />,
            },
            {
                path: "buildings/:buildingId/flats/:flatId",
                element: <BuildingFlatDetails />,
            },
            {
                path: "buildings/:buildingId/flats/:flatId/edit",
                element: <BuildingFlatDetailsEdit />,
            },
            {
                path: "maintenance",
                element: <Maintenence />,
            },
            {
                path: "maintenance/:buildingId",
                element: <HouseMaintenenceDetails />,
            },
            {
                path: "schedule",
                element: <Schedule />,
            },
            {
                path: "user-management/mini-admin",
                element: <MiniAdmin />,
            },
            {
                path: "user-management/cleaners",
                element: <Cleaners />,
            },
            {
                path: "user-management/maintenance-worker",
                element: <MaintenanceWorker />,
            },
        ]
    },




    // =========================== Auth Routes ============================ \\
    {
        path: "/login",
        element: <SignIn />,
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword />,
    },
    {
        path: "/verify-code",
        element: <VerifyCode />,
    },
    {
        path: "/reset-password",
        element: <ResetPassword />,
    },


    {
        path: "*",
        element: <NotFoundPage />,
    }


]);

export default router;