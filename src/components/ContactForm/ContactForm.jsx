import { ErrorMessage, Field, Form, Formik } from "formik";
import {
  FORM_INITIAL_VALUES_CONTACT_FORM,
  MAX_CHAR_NAME_VALIDATION,
  MIN_CHAR_NAME_VALIDATION,
} from "../../utils/constants";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const contactFormSchema = Yup.object({
  name: Yup.string()
    .required("The field must be filled")
    .min(
      MIN_CHAR_NAME_VALIDATION,
      `The length of the name must be less than ${MIN_CHAR_NAME_VALIDATION} characters`
    )
    .max(
      MAX_CHAR_NAME_VALIDATION,
      `The length of the name must be more than ${MAX_CHAR_NAME_VALIDATION} characters`
    )
    .default(""),
  number: Yup.string()
    .required("The field must be filled")
    .default("")
    .nullable(),
});

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES_CONTACT_FORM}
      validationSchema={contactFormSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.contact_form}>
        <label>
          <span>Name</span>
          <Field type="name" name="name" required />
          <ErrorMessage component="p" name="name" />
        </label>
        <label>
          <span>Number</span>
          <Field type="text" name="number" required />
          <ErrorMessage component="p" name="number" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
