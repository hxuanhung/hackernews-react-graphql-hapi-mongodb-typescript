import * as bcrypt from 'bcrypt';

export const hashPassword = (password: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    // Generate a salt at level 10 strength
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) reject(err);
        else resolve(hash);
      });
    });
  });
};

export const comparePassword = (
  password: string,
  userPassword: string
): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    // Generate a salt at level 10 strength
    bcrypt.compare(password, userPassword, (err, isValid) => {
      if (err) reject(err);
      else resolve(true);
    });
  });
};
