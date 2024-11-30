import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { AiOutlinePhone, AiOutlineUser } from "react-icons/ai";
import { IconContext } from "react-icons";

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
        <div className={css.formField}>
          <label htmlFor="name">Name</label>
          <div className={css.inputWrap}>
            <Field id="name" name="name" placeholder="Name"></Field>
            <IconContext.Provider value={{ className: "icon", size: 25 }}>
              <AiOutlineUser />
            </IconContext.Provider>
          </div>
          <ErrorMessage name="name">
            {(msg) => <div className={css.error}>{msg}</div>}
          </ErrorMessage>
        </div>
        <div className={css.formField}>
          <label htmlFor="number">Phone</label>
          <div className={css.inputWrap}>
            <Field
              id="number"
              type="tel"
              name="number"
              placeholder="222-22-22"
            ></Field>
            <IconContext.Provider value={{ className: "icon", size: 25 }}>
              <AiOutlinePhone />
            </IconContext.Provider>
          </div>
          <ErrorMessage name="number">
            {(msg) => <div className={css.error}>{msg}</div>}
          </ErrorMessage>
        </div>
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
