const ContactList = ({ getFilterContacts, delateContackt }) => {
  return (
    <ul>
      {getFilterContacts().map((el) => {
        return (
          <li key={el.id}>
            {el.name}: {el.number}
            <button
              onClick={() => {
                delateContackt(el.id);
              }}
            >
              Delate
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
