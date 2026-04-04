/**
 * Backend Configuration
 * Loads and validates environment variables for backend services
 */

interface BackendConfig {
  jwtSecret: string;
  jwtExpiration: number;
  bcryptRounds: number;
  apiVersion: string;
  environment: 'development' | 'production' | 'test';
  databaseUrl?: string;
  redisUrl?: string;
}

function getConfig(): BackendConfig {
  const jwtSecret = process.env.JWT_SECRET;
  const environment = (process.env.NODE_ENV || 'development') as 'development' | 'production' | 'test';

  if (!jwtSecret && environment === 'production') {
    throw new Error('JWT_SECRET environment variable is required in production');
  }

  return {
    jwtSecret: jwtSecret || 'dev-secret-change-in-production',
    jwtExpiration: parseInt(process.env.JWT_EXPIRATION || '86400', 10), // 24 hours
    bcryptRounds: parseInt(process.env.BCRYPT_ROUNDS || '10', 10),
    apiVersion: 'v1',
    environment,
    databaseUrl: process.env.DATABASE_URL,
    redisUrl: process.env.REDIS_URL,
  };
}

export const config = getConfig();

// Export for use in API routes
export default config;
