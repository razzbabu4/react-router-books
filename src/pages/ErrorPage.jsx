import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className="flex flex-col gap-10 justify-center items-center min-h-screen">
            <h1 className="text-5xl font-bold">Oops!!!!</h1>
            <p>Sorry! an unexpected error has occurred</p>
            <p className="text-red-500 text-lg font-medium">{error.statusText || error.message}</p>
            <Link to='/' className="border p-4 rounded-lg bg-green-200">Go Back to Home</Link>
        </div>
    );
};

export default ErrorPage;