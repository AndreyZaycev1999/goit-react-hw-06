import { Field, Form, Formik } from "formik";
import { INITIAL_VALUE_FORM_SEARCH_BOX } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlices";
import css from "./SearchBox.module.css";

const SearchBox = ({ filter }) => {
  const dispatch = useDispatch();
  const onChangeFilter = (event) => {
    const action = changeFilter(event.target.value);

    dispatch(action);
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
