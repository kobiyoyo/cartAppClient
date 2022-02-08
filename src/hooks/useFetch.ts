import { useEffect, useState } from 'react';

function useFilter<T>(
  values: T[],
  isError: boolean,
  isSuccess: boolean,
  errorMessage: string,
) {
  const [valuesData, setProductData] = useState<T[]>([]);

  const fetchProductData = async () => setProductData(values);

  useEffect(() => {
    if (isSuccess) {
      fetchProductData();
    }
    if (isError) {
      console.error(errorMessage);
    }
  }, [isSuccess, isError, values]);
  return [valuesData];
}

export default useFilter;
