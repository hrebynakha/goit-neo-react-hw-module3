import css from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={css.contact}>
      <div>
        <span className={css.description}>{number}</span>
        <span className={css.title}>{name}</span>
      </div>
      <button
        className={css.btn}
        onClick={() => {
          onDelete(id);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default Contact;
