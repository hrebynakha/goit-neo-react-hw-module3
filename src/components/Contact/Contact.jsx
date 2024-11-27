import css from "./Contact.module.css";

const Contact = ({ name, number }) => {
  return (
    <div className={css.contact}>
      <div>
        <span className={css.description}>{number}</span>
        <span className={css.title}>{name}</span>
      </div>
      <button className={css.btn}>Remove</button>
    </div>
  );
};

export default Contact;
