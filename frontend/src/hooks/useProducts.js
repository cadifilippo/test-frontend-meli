import { useEffect, useState } from 'react';

export const useProducts = (search) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [param, setParam] = useState('');

  useEffect(() => {
    setParam(new URLSearchParams(search).get('search'));
  }, [search]);

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:4000/api/items?q=${param}`)
      .then((res) => res.json())
      .then(({ items, categories }) => {
        let prod = [];
        for (let i = 0; i < 4; i++) {
          if (items[i]) {
            prod.push(items[i]);
          }
        }
        setProducts(prod);
        setCategories(categories?.path_from_root || []);
      })
      .catch(() => {
        setProducts([]);
        setCategories([]);
      });
    setIsLoading(false);
  }, [param]);

  return { isLoading, categories, products };
};
