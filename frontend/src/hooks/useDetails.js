import { useEffect, useState } from 'react';

export const useDetails = (id) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:4000/api/items/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.item);
      })
      .catch(() => {
        setProduct([]);
      });
    setIsLoading(false);
  }, [id]);

  return { product, isLoading };
};
