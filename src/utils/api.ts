import { getToken } from './auth';

export const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
  const token = getToken();
  
  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { cookies: `token=${token}` } : {}),
    ...options.headers,
  };

  return fetch(url, {
    ...options,
    headers,
  });
}; 