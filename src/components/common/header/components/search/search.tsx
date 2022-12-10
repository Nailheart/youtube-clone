import { ChangeEventHandler, FC, FormEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from 'components/common/common';
import styles from './styles.module.scss';

const Search: FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleClearInput = () => {
    setSearchTerm('');
  }

  const handleSubmit: FormEventHandler<HTMLFormElement & HTMLButtonElement> = (e) => {
    e.preventDefault();

    if (searchTerm.length) {
      navigate('/search/' + searchTerm);
    }
  }

  return (
    <form className={styles.search} onSubmit={handleSubmit}>
      <div className={styles.searchBar}>
        <input 
          className={styles.searchInput}
          value={searchTerm}
          type="search"
          name="search"
          placeholder="Search ..."
          onChange={handleChange}
        />
        {searchTerm && (
          <button 
            className={styles.searchClear}
            type="reset"
            aria-label="Clear input"
            onClick={handleClearInput}
          >
            <Icon name="cross" />
          </button>
        )}
        <button 
          className={styles.searchSubmit}
          type="submit"
          aria-label="Search"
          onSubmit={handleSubmit}
        >
          <Icon name="search" size={20} />
        </button>
      </div>
    </form>
  );
};

export { Search };