import { Field, Form, Formik } from "formik";
import { INITIAL_VALUE_FORM_SEARCH_BOX } from "../../utils/constants";
import css from "./SearchBox.module.css";

const SearchBox = ({ filter, setFilter }) => {
  const onChangeFilter = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Formik initialValues={INITIAL_VALUE_FORM_SEARCH_BOX}>
      <Form className={css.search_box}>
        <p>Find contacts by name</p>
        <label>
          <Field
            type="text"
            name="contactFind"
            value={filter}
            onChange={onChangeFilter}
          />
        </label>
      </Form>
    </Formik>
  );
};

export default SearchBox;
