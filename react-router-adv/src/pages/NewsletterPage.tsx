import { ActionFunctionArgs } from "react-router-dom";
import PageContent from "../components/PageContent";
import NewsletterSignup from "../components/NewsletterSignup";

function NewsletterPage() {
  return (
    <PageContent title="Join our awesome newsletter!">
      <NewsletterSignup />
    </PageContent>
  );
}

export default NewsletterPage;

export async function newsletterAction({ request }: ActionFunctionArgs) {
  const data = await request.formData();
  const email = data.get("email");

  // send to backend newsletter server ...
  console.log(email);
  return { message: "Signup successful!" };
}
