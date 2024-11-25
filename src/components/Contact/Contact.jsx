import css from "./Contact.module.css";

const Contact = ({ name, number }) => {
  return (
    <div className={css.contact}>
      <span className={css.title}>{name}</span>
      <span className={css.description}>{number}</span>
      <button className={css.btn}>Remove</button>
    </div>
  );
};

export default Contact;
