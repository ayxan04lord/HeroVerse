import { createContext, useContext, useState, useEffect } from 'react';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('hv-favorites')) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('hv-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggle = (id) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const isFav = (id) => favorites.includes(id);

  return (
    <FavoritesContext.Provider value={{ favorites, toggle, isFav }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
