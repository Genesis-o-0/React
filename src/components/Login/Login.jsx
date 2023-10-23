import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      {" "}
      <h1 className="pt-3 text-center text-primary">Login</h1>
      <Form className="pt-1" onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Email */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            className="mb-3"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            })}
          />
          {errors.email?.type === "required" ? (
            <Form.Text className="text-danger fw-bold">
              Email is required
            </Form.Text>
          ) : null}
          {errors.email?.type === "pattern" ? (
            <Form.Text className="text-danger fw-bold">
              Please enter a valid email address.
            </Form.Text>
          ) : null}
        </Form.Group>
        {/* Password */}
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            className="mb-3"
            {...register("password", {
              required: true,
              pattern:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            })}
          />
          {errors.password?.type === "required" ? (
            <Form.Text className="text-danger fw-bold">
              Password is required
            </Form.Text>
          ) : null}
          {errors.password?.type === "pattern" ? (
            <Form.Text className="text-danger fw-bold">
              Password must contain at least one alphabet character, one digit,
              one special character, 8 characters in length
            </Form.Text>
          ) : null}
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default Login;
