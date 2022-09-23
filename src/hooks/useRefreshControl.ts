import { useState } from 'react';

export const useRefreshControl = (initialValue: boolean) => {
  const [value, setValue] = useState(false);
  return {
    value,
    onRefresh: (value: boolean) => {
      setValue(value);
    },
    resetRefresh: () => setTimeout(() => setValue(initialValue), 2000),
  };
};
