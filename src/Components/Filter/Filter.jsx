const Filter = ({ heandlerInputChange, filter }) => {
  return (
    <>
      <span>Find contacts by name</span>
      <input
        value={filter}
        onChange={heandlerInputChange}
        type="text"
        name="filter"
      />
    </>
  );
};

export default Filter;
