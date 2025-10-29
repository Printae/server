export const DATABASE_TYPE = 'postgres';
export const DATABASE_HOST = process.env.SERVER_DATABASE_HOST;
export const DATABASE_PORT = parseInt(
  process.env.SERVER_DATABASE_PORT ?? '5432',
  10,
);
export const DATABASE_USERNAME = process.env.SERVER_DATABASE_USERNAME;
export const DATABASE_PASSWORD = process.env.SERVER_DATABASE_PASSWORD;
export const DATABASE_NAME = process.env.SERVER_DATABASE_NAME;

export const VERSION = '0.1.0';
