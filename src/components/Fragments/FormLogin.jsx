import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = () => {
  // Event handler for login
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/teams";
  };

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        label="Email"
        type="email"
        placeholder="example@gmail.com"
        name="email"
      />
      <InputForm
        label="Password"
        type="password"
        placeholder="Enter your password"
        name="password"
      />
      <Button className="bg-blue-600 w-full mt-4" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
