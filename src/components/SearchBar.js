function SearchBar({ onSubmit }) {
  const handleClick = () => {
    onSubmit('Cats');
  }

  return <div>
    <input />
    <button onClick={handleClick}>Click me!</button>
  </div>
}

export default SearchBar;

