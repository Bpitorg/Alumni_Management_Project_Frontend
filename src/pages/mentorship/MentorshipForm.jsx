import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function MentorshipForm() {
  // Validation Schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    course: Yup.string().required("Experience is required"),
    enrollmentNumber: Yup.string()
      .matches(/^\d{11}$/, "Enrollment number must be exactly 11 digits")
      .required("Enrollment number is required"),
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Apply for Mentorship</h2>

      <Formik
        initialValues={{
          name: "",
          email: "",
          course: "",
          enrollmentNumber: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form Data:", values);
          alert("Form submitted successfully!");
          resetForm(); // Reset form after submission
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="block text-gray-700">Name</label>
              <Field type="text" name="name" className="w-full p-2 border rounded" />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-700">Email</label>
              <Field type="email" name="email" className="w-full p-2 border rounded" />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Experience Dropdown */}
            <div>
              <label className="block text-gray-700">Course</label>
              <Field as="select" name="experience" className="w-full p-2 border rounded">
                <option value="">Select Course</option>
                <option value="Computer Science">Computer Science</option>
                <option value="IT">IT</option>
                <option value="ECE">ECE</option>
              </Field>
              <ErrorMessage name="Course" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-gray-700">Enrollment Number</label>
              <Field as="textarea" name="enrollmentNumber" className="w-full p-2 border rounded h-20" />
              <ErrorMessage name="enrollmentNumber" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded font-bold hover:bg-blue-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default MentorshipForm;

