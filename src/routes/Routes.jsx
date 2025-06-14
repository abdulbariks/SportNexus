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

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "events",
        hydrateFallbackElement: <Loading></Loading>,
        loader: () => fetch("http://localhost:3000/events"),
        Component: Events,
      },
      {
        path: "/event-details/:id",
        hydrateFallbackElement: <Loading></Loading>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/events/${params.id}`),
        Component: EventDetails,
      },

      {
        path: "manage-events",
        hydrateFallbackElement: <Loading></Loading>,
        loader: () => fetch("http://localhost:3000/events"),
        Component: ManageEvents,
      },

      {
        path: "my-bookings",
        hydrateFallbackElement: <Loading></Loading>,
        loader: () => fetch("http://localhost:3000/events"),
        Component: MyBookings,
      },

      { path: "create-event", Component: CreateEvent },

      {
        path: "/update-event/:id",
        hydrateFallbackElement: <Loading></Loading>,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/events/${params.id}`),
        Component: UpdateEvent,
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
