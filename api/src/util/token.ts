import * as jwt from 'jsonwebtoken';
import { secret } from '../config';

export const createToken = email => {
  return jwt.sign({ email }, secret, { algorithm: 'HS256', expiresIn: '1h' });
};
