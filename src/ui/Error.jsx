import { useNavigate, useRouteError } from "react-router-dom";
import LinkButtom from "./LinkButtom";

function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButtom to="-1">&larr; Go back</LinkButtom>
    </div>
  );
}

export default Error;
