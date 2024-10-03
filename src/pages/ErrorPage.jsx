import { useRouteError } from "react-router-dom";
import Message from "../components/ui/Message";

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <Message 
    title={`${error.status} - ${error.statusText}`}
    msg={error.error}
    />
  )
}

export default ErrorPage;