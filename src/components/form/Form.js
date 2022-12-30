import React from "react";
import FormInput from "./FromInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup
  .object({
    name: yup.string("name should be a string").required("name is required"),
    email: yup.string().email("email is invalid").required("email is required"),
    password: yup
      .string()
      .required("password is required")
      .matches(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
        "Must Contain One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("confirm password is required"),
    phone: yup
      .string()
      .required("phone number is required")
      .matches("^0[0-9]{9}$", "must start with 0 and have 10 digits"),
    address: yup
      .string()
      .max(50, "must not longer then 50 characters")
      .required("address is required"),
    zip: yup
      .string()
      .required("zip code is required")
      .matches("[0-9]{4}", "must have 4 digits"),
  })
  .required();
const Form = ({
  onSubmit = () => toast.success("You have register successfully"),
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <ToastContainer />
      <form className="card p-3" onSubmit={handleSubmit(onSubmit)}>
        <h6 className="text-uppercase">Register Form</h6>
        <div className="row">
          <div className="col-lg-6">
            <div className="inputbox mt-3">
              <FormInput
                dataTestid="input-name"
                id="name"
                label="Name"
                className="form-control"
                type="text"
                placeholder="Enter your name"
                register={{ ...register("name") }}
              />

              <p className="text-danger">{errors.name?.message}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="inputbox mt-3">
              <FormInput
                dataTestid="input-email"
                id="email"
                label="Email"
                className="form-control"
                type="text"
                placeholder="Enter your Email"
                register={{ ...register("email") }}
              />
              <p className="text-danger">{errors.email?.message}</p>
            </div>
          </div>
        </div>
        <div className="inputbox mt-3">
          <FormInput
            dataTestid="input-pass"
            id="password"
            label="Password"
            className="form-control"
            type="Password"
            placeholder="Enter your Password"
            register={{ ...register("password") }}
          />
          <p className="text-danger">{errors.password?.message}</p>
        </div>
        <div className="inputbox mt-3">
          <FormInput
            dataTestid="input-repass"
            id="confirmPassword"
            label="Confirm Password"
            className="form-control"
            type="Password"
            placeholder="Enter your Password again"
            register={{ ...register("confirmPassword") }}
          />
          <p className="text-danger">{errors.confirmPassword?.message}</p>
        </div>
        <div className="inputbox mt-3">
          <FormInput
            dataTestid="input-phone"
            id="phone"
            label="Phone Number"
            className="form-control"
            type="text"
            placeholder="Enter your Phone Number"
            register={{ ...register("phone") }}
          />
          <p className="text-danger">{errors.phone?.message}</p>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="inputbox mt-3">
              <FormInput
                dataTestid="input-address"
                id="address"
                label="Address"
                className="form-control"
                type="text"
                placeholder="Enter your Address"
                register={{ ...register("address") }}
              />
              <p className="text-danger">{errors.address?.message}</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="inputbox mt-3">
              <FormInput
                dataTestid="input-zip"
                id="zip"
                label="Zip Code"
                className="form-control"
                type="text"
                placeholder="Enter your Zip Code"
                register={{ ...register("zip") }}
              />
              <p className="text-danger">{errors.zip?.message}</p>
            </div>
          </div>
        </div>

        <button
          type="submit"
          data-testid="btn-submit"
          className="btn btn-success px-3 mt-4 mb-4 "
        >
          Pay
        </button>
      </form>
    </>
  );
};

export default Form;
