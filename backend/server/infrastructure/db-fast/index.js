const Redis = require('redis');

const redis = Redis.createClient({
    socket: {
        host: '',
        port: 15193,
    },
    password: ''
});

(async () => {
    await redis.connect(); 
})();

module.exports = redis;
