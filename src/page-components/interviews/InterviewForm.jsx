import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const InterviewExperienceForm = () => {
  const initialValues = {
    name: "",
    course: "",
    batch: "",
    company: "",
    position: "",
    description: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    course: Yup.string().required("Course is required"),
    batch: Yup.string().required("Batch is required"),
    company: Yup.string().required("Company is required"),
    position: Yup.string().required("Position is required"),
    description: Yup.string()
      .required("Description is required")
      .min(50, "Description should be at least 50 characters long"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Data:", values);
    alert("Form submitted successfully!");
    resetForm();
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Interview Experience</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnBlur={false} // Disables validation on field blur
        validateOnChange={false} // Disables validation on field change
      >
        {({ isSubmitting, errors }) => (
          <Form className="space-y-4">
            <div>
              <label className="block font-medium">Name</label>
              <Field type="text" name="name" className="w-full p-2 border rounded" />
              <ErrorMessage name="name" component="div" className="text-red-500" />
            </div>

            <div>
              <label className="block font-medium">Course</label>
              <Field as="select" name="course" className="w-full p-2 border rounded">
                <option value="">Select Course</option>
                <option value="CSE">CSE</option>
                <option value="IT">IT</option>
                <option value="AI-DS">AI-DS</option>
                <option value="ECE">ECE</option>
                <option value="EE">EE</option>
              </Field>
              <ErrorMessage name="course" component="div" className="text-red-500" />
            </div>

            <div>
              <label className="block font-medium">Batch</label>
              <Field as="select" name="batch" className="w-full p-2 border rounded">
                <option value="">Select Batch</option>
                {[...Array(7)].map((_, i) => (
                  <option key={2020 + i} value={2020 + i}>{2020 + i}</option>
                ))}
              </Field>
              <ErrorMessage name="batch" component="div" className="text-red-500" />
            </div>

            <div>
              <label className="block font-medium">Company</label>
              <Field type="text" name="company" className="w-full p-2 border rounded" />
              <ErrorMessage name="company" component="div" className="text-red-500" />
            </div>

            <div>
              <label className="block font-medium">Position</label>
              <Field type="text" name="position" className="w-full p-2 border rounded" />
              <ErrorMessage name="position" component="div" className="text-red-500" />
            </div>

            <div>
              <label className="block font-medium">Detailed Interview Description</label>
              <Field as="textarea" name="description" className="w-full p-2 border rounded" rows="4" />
              <ErrorMessage name="description" component="div" className="text-red-500" />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-600 text-black p-2 rounded hover:bg-amber-700"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default InterviewExperienceForm;




