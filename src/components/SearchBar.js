function SearchBar() {
  const handleFormSubmit = () => {
    console.log('Form submitted');
  };

  return (
  <div>
    <form onSubmit={handleFormSubmit}>
      <input />
    </form>
  </div>
  );
}

export default SearchBar;

