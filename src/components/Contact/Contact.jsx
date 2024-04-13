import css from "./Contact.module.css";

const Contact = ({ contactUser, onDeleteContact }) => {
  return (
    <li className={css.contact_item}>
      <div>
        <div className={css.element_contact}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 008 15a6.987 6.987 0 005.468-2.63z"></path>
            <path
              fill-rule="evenodd"
              d="M8 9a3 3 0 100-6 3 3 0 000 6z"
              clip-rule="evenodd"
            ></path>
            <path
              fill-rule="evenodd"
              d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <p>{contactUser.name}</p>
        </div>
        <div className={css.element_contact}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
          </svg>
          <p>{contactUser.number}</p>
        </div>
      </div>

      <button type="button" onClick={() => onDeleteContact(contactUser.id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
