// Challenge / Exercise

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import EventsPage, { eventsLoader } from "./pages/EventsPage";
import EventDetailPage, { deleteEventActoin, eventDetailLoader } from "./pages/EventDetailPage";
import NewEventPage from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import EventsRootLayout from "./pages/EventsRootLayout";
import ErrorPage from "./pages/ErrorPage";
import { PARAMS_IDS, ROUTER_IDS } from "./constants/constants";
import { manipulateEventAction } from "./components/EventForm";
import NewsletterPage, { newsletterAction } from "./pages/NewsletterPage";
import AuthenticationPage, { authAction } from "./pages/AuthenticationPage";
import { logoutAction } from "./pages/LogoutPage";
import { checkAuthLodaer, loaderToken } from "./utils/auth";

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    loader: loaderToken,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader
          },
          {
            path: `:${PARAMS_IDS.EVENT_ID}`,
            loader: eventDetailLoader,
            id: ROUTER_IDS.EVENT_DETAIL,
            children: [
              { index: true, element: <EventDetailPage />, action: deleteEventActoin },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventAction,
                loader: checkAuthLodaer
              }
            ]
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: manipulateEventAction,
            loader: checkAuthLodaer
          }
        ]
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: newsletterAction
      },
      {
        path: "auth",
        element: <AuthenticationPage />,
        action: authAction
      },
      { path: "logout", action: logoutAction }
    ]
  }
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
