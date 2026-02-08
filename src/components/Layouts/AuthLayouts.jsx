import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-500">{title}</h1>
        <p className="font-medium text-slate-500 mb-4">
          Welcome, Please Enter Your Details
        </p>
        {children}
        <p className="text-sm mt-6 text-center font-medium text-slate-600">
          {type === "login"
            ? "Don't have an account ? "
            : "Already have an account ? "}
          {type === "login" ? (
            <Link to="/register" className="font-bold text-blue-600">
              Sign up
            </Link>
          ) : (
            <Link to="/login" className="font-bold text-blue-600">
              Sign in
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
