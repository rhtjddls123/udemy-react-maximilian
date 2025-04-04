import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error occurred!";
  let message = "Something went wrong!";
  console.log(error);

  if (isRouteErrorResponse(error)) {
    if (error.status === 500) {
      message = error.data?.message || "Something went wrong!";
    }

    if (error.status === 404) {
      title = "Not found!";
      message = "Could not find resource or page";
    }
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>{message}</PageContent>
    </>
  );
};

export default ErrorPage;
