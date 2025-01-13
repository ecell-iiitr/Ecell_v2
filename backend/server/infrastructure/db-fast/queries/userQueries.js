const redis = require('..');

const getDataFromRedis = async (key) => {
  try {
    const data = await redis.get(key);
    return data ? JSON.parse(data) : null;
  } catch (err) {
    console.error('Error fetching data from Redis:', err);
    throw err; // Propagate error to caller
  }
}

module.exports = { getDataFromRedis };
