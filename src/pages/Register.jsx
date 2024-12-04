import Layout from "@/components/Layout";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "@/slices/auth/authSlice";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.auth);

  const initialState = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email format"
      )
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleRegister = (values, resetForm) => {
    const existingUser = users.find((user) => user.email === values.email);

    if (existingUser) {
      toast.error("Email already registered", {
        duration: 2800,
        style: {
          padding: "16px",
          color: "#fff",
          background: "#282828",
        },
      });

      return;
    } else {
      dispatch(registerUser(values));
      toast.success("User registered Successfully!", {
        duration: 2800,
        style: {
          padding: "16px",
          color: "#fff",
          background: "#282828",
        },
      });

      resetForm();

      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  return (
    <Layout>
      <div className="flex justify-center mt-16 ">
        <div className="flex flex-col justify-center  w-full max-w-md p-3 border rounded-md shadow-md">
          <h1 className="text-3xl font-semibold mb-3 text-center">Register</h1>
          <Formik
            initialValues={initialState}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              handleRegister(values, resetForm);
            }}
          >
            <Form className="w-full flex flex-col gap-3">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-1">
                  Name
                </label>
                <Field
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="h-10 border border-gray-400 w-full rounded-md px-3 "
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1 px-3"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-1">
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="h-10 border border-gray-400 w-full rounded-md px-3 "
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1 px-3 "
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-gray-700 mb-1">
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  className="h-10 border border-gray-400 w-full rounded-md px-3"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1 px-3"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black mt-3 text-white py-2 rounded-md focus:outline-none  "
              >
                Register
              </button>
            </Form>
          </Formik>
          <div className="mt-4">
            <p>
              Already have an account ? SignIn
              <Link
                to={"/login"}
                className="text-blue-500 underline mx-2 cursor-pointer"
              >
                here
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Toaster position="bottom-right" />
    </Layout>
  );
};

export default Register;
