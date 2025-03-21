import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Event_Form = () => {
  const initialValues = {
    name: "",
    branch: "",
    section: "",
    batch: "",
    email: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    branch: Yup.string().required("Branch is required"),
    section: Yup.string().required("Section is required"),
    batch: Yup.string().required("Batch is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form data submitted:", values);
    resetForm();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Event Registration Form</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="grid grid-cols-2 gap-6">
              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <Field
                  type="text"
                  name="name"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700">Branch</label>
                <Field
                  as="select"
                  name="branch"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                >
                  <option value="">Select Branch</option>
                  {['CSE', 'IT', 'ECE', 'EEE', 'AI-DS', 'CSE-DS'].map((branch) => (
                    <option key={branch} value={branch}>{branch}</option>
                  ))}
                </Field>
                <ErrorMessage name="branch" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700">Section</label>
                <Field
                  as="select"
                  name="section"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                >
                  <option value="">Select Section</option>
                  {['A', 'B', 'C'].map((section) => (
                    <option key={section} value={section}>{section}</option>
                  ))}
                </Field>
                <ErrorMessage name="section" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label className="block text-sm font-medium text-gray-700">Batch</label>
                <Field
                  as="select"
                  name="batch"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
                >
                  <option value="">Select Batch</option>
                  {['2025', '2026', '2027', '2028'].map((batch) => (
                    <option key={batch} value={batch}>{batch}</option>
                  ))}
                </Field>
                <ErrorMessage name="batch" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="col-span-2 flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-1/2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                >
                  {isSubmitting ? "Submitting..." : "Register"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Event_Form;

