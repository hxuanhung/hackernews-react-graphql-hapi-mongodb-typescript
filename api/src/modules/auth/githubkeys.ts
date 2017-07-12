import * as dotenv from 'dotenv';

dotenv.config({ silent: true });

export const {
  GITHUB_CLIENT_ID,
  GITHUBR_CLIENT_SECRET,
} = process.env;
