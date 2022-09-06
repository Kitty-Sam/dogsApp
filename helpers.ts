import { API_URI } from './config';

export const fetchPublishAbleKey = async () => {
  try {
    const response = await fetch(`${API_URI}/config`, { method: 'GET' });
    const { publishableKey } = await response.json();
    return publishableKey;
  } catch (e) {
    // @ts-ignore
    console.log(e.message);
  }
};
