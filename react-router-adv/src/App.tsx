// Challenge / Exercise

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PARAMS_IDS, ROUTER_IDS } from "./constants/constants";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const RootLayout = lazy(() => import("./pages/RootLayout"));
const EventsPage = lazy(() => import("./pages/EventsPage"));
const EventDetailPage = lazy(() => import("./pages/EventDetailPage"));
const NewEventPage = lazy(() => import("./pages/NewEventPage"));
const EditEventPage = lazy(() => import("./pages/EditEventPage"));
const EventsRootLayout = lazy(() => import("./pages/EventsRootLayout"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const NewsletterPage = lazy(() => import("./pages/NewsletterPage"));
const AuthenticationPage = lazy(() => import("./pages/AuthenticationPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<p>Loading...</p>}>
        <RootLayout />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<p>Loading...</p>}>
        <ErrorPage />
      </Suspense>
    ),
    id: "root",
    loader: () => import("./utils/auth").then((module) => module.loaderToken()),
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: async () => (await import("./pages/EventsPage")).eventsLoader()
          },
          {
            path: `:${PARAMS_IDS.EVENT_ID}`,
            loader: async (meta) =>
              (await import("./pages/EventDetailPage")).eventDetailLoader(meta),
            id: ROUTER_IDS.EVENT_DETAIL,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: (meta) =>
                  import("./pages/EventDetailPage").then((module) => module.deleteEventActoin(meta))
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: (meta) =>
                  import("./components/EventForm").then((module) =>
                    module.manipulateEventAction(meta)
                  ),
                loader: () => import("./utils/auth").then((module) => module.checkAuthLodaer())
              }
            ]
          },
          {
            path: "new",
            element: <NewEventPage />,
            action: (meta) =>
              import("./components/EventForm").then((module) => module.manipulateEventAction(meta)),
            loader: () => import("./utils/auth").then((module) => module.checkAuthLodaer())
          }
        ]
      },
      {
        path: "newsletter",
        element: <NewsletterPage />,
        action: (meta) =>
          import("./pages/NewsletterPage").then((module) => module.newsletterAction(meta))
      },
      {
        path: "auth",
        element: <AuthenticationPage />,
        action: (meta) =>
          import("./pages/AuthenticationPage").then((module) => module.authAction(meta))
      },
      {
        path: "logout",
        action: () => import("./pages/LogoutPage").then((module) => module.logoutAction())
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
