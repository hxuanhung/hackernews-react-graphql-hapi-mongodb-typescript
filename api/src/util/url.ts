import { URL } from 'url';
export const assertValidLink = ({ url }) => {
  try {
    return new URL(url);
  } catch (error) {
    throw new Error('Link validation error: invalid url: ' + url);
  }
};
