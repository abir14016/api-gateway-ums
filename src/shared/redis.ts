import { createClient } from 'redis';
import { errorLogger, logger } from './logger';
import config from '../config';

let redisClient = createClient({
  url: config.redis.url
});

redisClient.on('error', (error) => errorLogger.error('❌ RedisError', error));
redisClient.on('connect', (error) => logger.info(`✅ Redis Connected on port ${config.redis.url}`));

const connect = async (): Promise<void> => {
  await redisClient.connect();
};

export const RedisClient = {
  connect
};
