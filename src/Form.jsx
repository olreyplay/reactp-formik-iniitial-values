import React from "react";
import { useFormik } from "formik";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      // Specify initial values for form fields
    },
    onSubmit: (values) => {
      // Handle form submission
    },
    validate: (values) => {
      // Perform form field validation
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        onChange={formik.handleChange}
        value={formik.values.username}
        type="text"
        name="username"
        placeholder="Name"
      />
      <input
        onChange={formik.handleChange}
        value={formik.values.occupation}
        type="text"
        name="occupation"
        placeholder="Occupation"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
