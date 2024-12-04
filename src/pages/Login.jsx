import Layout from "@/components/Layout";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/slices/auth/authSlice";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const { error, users, currentUser } = useSelector((state) => state.auth);

  const initialState = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginUser = (values, resetForm) => {
    const existingUser = users.find(
      (user) => user.email === values.email && user.password === values.password
    );

    if (existingUser) {
      dispatch(loginUser(values));

      toast.success("User Login Successful !", {
        duration: 2800,
        style: {
          padding: "16px",
          color: "#fff",
          background: "#282828",
        },
      });
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);

      resetForm();
    } else {
      toast.error("Invalid email or password", {
        duration: 5000,
        style: {
          padding: "16px",
          color: "#fff",
          background: "#282828",
        },
      });
    }
  };

  return (
    <Layout>
      <div className="flex justify-center mt-16 ">
        <div className="flex flex-col justify-center  w-full max-w-md p-3 border rounded-md shadow-md">
          <h1 className="text-3xl font-semibold mb-3 text-center">Login</h1>
          <Formik
            initialValues={initialState}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              handleLoginUser(values, resetForm);
            }}
          >
            <Form className="w-full flex flex-col gap-3">
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
                  className="text-red-500 text-sm mt-1 px-3"
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
                Login
              </button>
            </Form>
          </Formik>
          <div className="mt-4">
            <p>
              Don't have an account? SignUp
              <Link
                to={"/register"}
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

export default Login;
