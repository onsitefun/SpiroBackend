module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '806f1b9ee4e37e5a47ed2a1403270369'),
  },
});
