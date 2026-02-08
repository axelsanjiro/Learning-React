import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center items-center min-h-screen flex-col gap-4">
      <h1 className="text-3xl font-bold">Woi Dongo</h1>
      <p className="text-xl">Gada APA APA DI SINI</p>
      <p className="text-lg">{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
