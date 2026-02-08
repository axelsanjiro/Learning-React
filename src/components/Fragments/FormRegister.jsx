import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Full Name"
        type="text"
        placeholder="Insert your name here"
        name="Full Name"
      />
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
      <InputForm
        label="Confirm Password"
        type="password"
        placeholder="Enter your password"
        name="confirmPassword"
      />
      <Button className="bg-blue-600 w-full mt-4">Register</Button>
    </form>
  );
};

export default FormRegister;
