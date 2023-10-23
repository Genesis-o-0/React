import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import makeAnimated from "react-select/animated";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  const animatedComponents = makeAnimated();

  return (
    <div>
      <h1 className="pt-3 text-center text-primary">Signup to join us</h1>

      {/* Email */}
      <Form className="pt-2" onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* userName */}
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            className="mb-3"
            {...register("userName", { required: true })}
          />
          {errors.userName ? (
            <Form.Text className="text-danger fw-bold">
              Username is required
            </Form.Text>
          ) : null}
        </Form.Group>
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
        {/* Confirm password */}
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            className="mb-3"
            {...register("confirmPassword", {
              required: true,
              validate: (value) => {
                if (watch("password") !== value) {
                  return false;
                }
              },
            })}
          />
          {errors?.confirmPassword?.type === "validate" ? (
            <Form.Text className="text-danger fw-bold">
              Your passwords do no match
            </Form.Text>
          ) : null}
          {errors.confirmPassword?.type === "required" ? (
            <Form.Text className="text-danger fw-bold">
              This field is required
            </Form.Text>
          ) : null}
        </Form.Group>

        <h3 className="pt-1 pb-1">Gender</h3>
        <Controller
          name="gender"
          rules={{ required: true }}
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={[
                { value: "Male", label: "Male" },
                { value: "Female", label: "Female" },
              ]}
            />
          )}
        />
        {errors?.gender?.type === "required" ? (
          <Form.Text className="text-danger fw-bold d-block">
            This field is required
          </Form.Text>
        ) : null}
        <h3 className="pt-4 pb-1">Hobbies</h3>
        <Select
          closeMenuOnSelect={false}
          components={animatedComponents}
          isMulti
          options={[
            { value: "Playing Chess", label: "Playing Chess" },
            { value: "Gaming", label: "Gaming" },
            { value: "Swimming", label: "Swimming" },
            { value: "Running", label: "Running" },
          ]}
        />

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
