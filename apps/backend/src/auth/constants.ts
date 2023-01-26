export const jwtConstants = {
  secret: process.env['JWT_SECRET'] || 'sharenergy',
};

export const cryptConstants = {
  saltRounds: Number(process.env['CRYPT_SALT']) || 10,
};
