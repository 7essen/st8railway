module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'mongo'); // استخدام 'mongo' بدلاً من 'sqlite' أو غيرها

  const connections = {
    mongo: {
      connection: {
        uri: env('DATABASE_URL', 'mongodb://localhost:27017/strapi'), // استخدام URI قاعدة البيانات الخاصة بك
        options: {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          // أضف خيارات أخرى هنا إذا لزم الأمر
        },
      },
    },
    // أضف أي نوع من قواعد البيانات الأخرى هنا إذا لزم الأمر
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
