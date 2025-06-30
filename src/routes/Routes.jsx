import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../pages/Error";
import Events from "../pages/Events";
import CreateEvent from "../pages/CreateEvent";
import Loading from "../components/Loading";
import EventDetails from "../pages/EventDetails";
import ManageEvents from "../pages/ManageEvents";
import UpdateEvent from "../pages/UpdateEvent";
import MyBookings from "../pages/MyBookings";
import PrivateRoute from "./PrivateRoute";
import BookEvent from "../pages/BookEvent";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "events",
        // hydrateFallbackElement: <Loading></Loading>,
        // loader: () =>
        //   fetch("https://b11a11-server-side-coral.vercel.app/events"),
        Component: Events,
      },
      {
        path: "/event-details/:id",
        hydrateFallbackElement: <Loading></Loading>,
        loader: ({ params }) =>
          fetch(
            `https://b11a11-server-side-coral.vercel.app/events/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <EventDetails></EventDetails>
          </PrivateRoute>
        ),
      },

      {
        path: "manage-events",
        hydrateFallbackElement: <Loading></Loading>,
        loader: () =>
          fetch("https://b11a11-server-side-coral.vercel.app/events"),
        element: (
          <PrivateRoute>
            <ManageEvents></ManageEvents>
          </PrivateRoute>
        ),
      },

      {
        path: "my-bookings",
        hydrateFallbackElement: <Loading></Loading>,
        loader: () =>
          fetch("https://b11a11-server-side-coral.vercel.app/bookings"),
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },

      {
        path: "book-event",
        hydrateFallbackElement: <Loading></Loading>,
        loader: () =>
          fetch("https://b11a11-server-side-coral.vercel.app/bookings"),
        element: (
          <PrivateRoute>
            <BookEvent></BookEvent>
          </PrivateRoute>
        ),
      },

      { path: "create-event", Component: CreateEvent },

      {
        path: "/update-event/:id",
        hydrateFallbackElement: <Loading></Loading>,
        loader: ({ params }) =>
          fetch(
            `https://b11a11-server-side-coral.vercel.app/events/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <UpdateEvent></UpdateEvent>
          </PrivateRoute>
        ),
      },
      { path: "login", Component: Login },
      { path: "register", Component: Register },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);
