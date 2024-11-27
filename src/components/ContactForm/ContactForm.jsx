import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const ContactForm = ({ onSubmit }) => {
  const contacForm = {
    initialValues: {
      name: "",
      number: "",
    },
    schema: Yup.object({
      name: Yup.string()
        .min(3, "too short")
        .max(30, "Must be 30 characters or less")
        .required("Required"),
      number: Yup.string()
        .required("Required")
        .min(3, "too short")
        .max(30, "Must be 30 characters or less"),
    }),
    submit: (values) => {
      onSubmit(values);
    },
  };

  return (
    <Formik
      initialValues={contacForm.initialValues}
      onSubmit={contacForm.submit}
      validationSchema={contacForm.schema}
    >
      <Form className={css.form}>
        <label htmlFor="name">Name</label>
        <Field id="name" name="name"></Field>
        <ErrorMessage name="name">
          {(msg) => <div className={css.error}>{msg}</div>}
        </ErrorMessage>
        <label htmlFor="number">Phone</label>
        <Field id="number" type="tel" name="number"></Field>
        <ErrorMessage name="number">
          {(msg) => <div className={css.error}>{msg}</div>}
        </ErrorMessage>

        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
