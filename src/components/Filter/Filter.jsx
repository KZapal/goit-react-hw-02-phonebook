import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <div className={css.filter}>
      <label>
        <input
          className={css.filterInput}
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default Filter;
