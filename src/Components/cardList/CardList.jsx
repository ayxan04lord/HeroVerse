import { useState, useMemo } from 'react';
import Cards_list_item from '../cards_list_item/Cards_list_item';
import './CardList.css';

const SORT_OPTIONS = [
  { value: 'default', label: 'Default' },
  { value: 'rating-desc', label: 'Rating ↓' },
  { value: 'rating-asc', label: 'Rating ↑' },
  { value: 'name-asc', label: 'Name A–Z' },
  { value: 'name-desc', label: 'Name Z–A' },
  { value: 'year-desc', label: 'Newest' },
  { value: 'year-asc', label: 'Oldest' },
];

const CardList = ({ data }) => {
  const [sort, setSort] = useState('default');

  const sorted = useMemo(() => {
    const arr = [...data];
    switch (sort) {
      case 'rating-desc': return arr.sort((a, b) => b.rating - a.rating);
      case 'rating-asc':  return arr.sort((a, b) => a.rating - b.rating);
      case 'name-asc':    return arr.sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc':   return arr.sort((a, b) => b.name.localeCompare(a.name));
      case 'year-desc':   return arr.sort((a, b) => Number(b.date) - Number(a.date));
      case 'year-asc':    return arr.sort((a, b) => Number(a.date) - Number(b.date));
      default:            return arr;
    }
  }, [data, sort]);

  return (
    <main className="hero-section" id="heroes">
      <div className="section-header">
        <div className="section-header-left">
          <h2 className="section-title">Heroes</h2>
          <span className="section-count">{data.length} found</span>
        </div>
        <div className="section-sort">
          <label htmlFor="sort-select" className="sort-label">Sort by</label>
          <select
            id="sort-select"
            className="sort-select"
            value={sort}
            onChange={e => setSort(e.target.value)}
          >
            {SORT_OPTIONS.map(o => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="card-grid">
        {sorted.length > 0 ? (
          sorted.map(item => (
            <Cards_list_item key={item.id} {...item} />
          ))
        ) : (
          <div className="empty-state">
            <div className="empty-icon">🦸</div>
            <h3>No heroes found</h3>
            <p>Try adjusting your search or filter.</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default CardList;
