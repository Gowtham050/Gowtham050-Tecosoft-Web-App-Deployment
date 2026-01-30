"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  country: Yup.string().required("Country is required"),
});

export default function BookDemoModal({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-1100 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[5px]"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-50 w-full max-w-3xl rounded-[8px] bg-white p-9 shadow-xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-400 hover:text-gray-600 cursor-pointer font-semibold text-2xl"
        >
          ✕
        </button>

        <h2 className="mb-6 text-2xl font-semibold text-sky-600">
          Request a Personalised Demo
        </h2>

        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            country: "",
            message: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {() => (
            <Form className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {/* First Name */}
              <div>
                <label className="form-label text-[#4F4F4F]">
                  First name <span className="text-red-500">*</span>
                </label>
                <Field
                  name="firstName"
                  className="form-input"
                  placeholder="Enter your first name"
                />
                <ErrorMessage
                  name="firstName"
                  component="p"
                  className="form-error"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="form-label ">
                  Last name <span className="text-red-500">*</span>
                </label>
                <Field
                  name="lastName"
                  className="form-input"
                  placeholder="Enter your last name"
                />
                <ErrorMessage
                  name="lastName"
                  component="p"
                  className="form-error"
                />
              </div>

              {/* Email */}
              <div>
                <label className="form-label">
                  Email address <span className="text-red-500">*</span>
                </label>
                <Field
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="Enter your email address"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="form-error"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="form-label">
                  Phone number <span className="text-red-500">*</span>
                </label>
                <div className="flex">
                  <span className="flex items-center rounded-l-md border border-r-0 px-3 text-sm text-gray-500">
                    +91
                  </span>
                  <Field
                    name="phone"
                    className="form-input rounded-l-none"
                    placeholder="Enter your phone number"
                  />
                </div>
                <ErrorMessage
                  name="phone"
                  component="p"
                  className="form-error"
                />
              </div>

              {/* Country */}
              <div className="md:col-span-2">
                <label className="form-label">
                  Country <span className="text-red-500">*</span>
                </label>
                <Field as="select" name="country" className="form-input">
                  <option value="">Select Country</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                </Field>
                <ErrorMessage
                  name="country"
                  component="p"
                  className="form-error"
                />
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label className="form-label">How did you find us?</label>
                <Field
                  as="textarea"
                  name="message"
                  rows={4}
                  className="form-input resize-none"
                  placeholder="Enter your message"
                />
              </div>

              {/* Submit */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-md bg-green-500 py-3 font-medium text-white hover:bg-green-600"
                >
                  Book a Demo →
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
