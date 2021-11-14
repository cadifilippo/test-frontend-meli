import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

export const useSearchBox = (search) => {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const route = new URLSearchParams(search).get('search');
    if (!route) {
      setText('');
    }
  }, [search]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/items?search=${text}`);
  };

  return {
    text,
    handleChange,
    handleSubmit,
  };
};
