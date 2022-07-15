import { useEffect, useState } from 'react';

function useDebounce(value, durable) {
  const [debounceValue, setdebounceValue] = useState(value);

  useEffect(() => {
    const handle = setTimeout(() => {
      setdebounceValue(value);
    }, durable);
    return () => {
      clearTimeout(handle);
    };
  }, [value]);

  return debounceValue;
}
export default useDebounce;
