import css from "./SearchBar.module.css"

const SearchBar = ({ onSubmit }) => {

const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
		const topic = form.elements.topic.value;
    
		// Якщо текстове поле порожнє, виводимо повідомлення 
		// і припиняємо виконання функції.
		if(form.elements.topic.value.trim() === "") {
			alert("Please enter search term!")
			return;
		}

		// У протилежному випадку викликаємо пропс 
		// і передаємо йому значення поля
		onSubmit(topic);
    form.reset();
  };


  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          name="topic"
          type="text"
            autoComplete="off"
            autoFocus
          placeholder="Search images and photos"
          className={css.input}
        />
        <button type="submit" className={css.btn}>Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
