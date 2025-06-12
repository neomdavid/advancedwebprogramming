const getApiUrl = () => {
  const mode = import.meta.env.MODE;
  return mode === 'development' 
    ? import.meta.env.VITE_DEV_API_URL 
    : import.meta.env.VITE_PROD_API_URL;
};

export const API_URL = getApiUrl(); 