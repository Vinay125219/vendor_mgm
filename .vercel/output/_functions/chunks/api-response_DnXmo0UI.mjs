import jwt from 'jsonwebtoken';

function getConfig() {
  const jwtSecret = process.env.JWT_SECRET;
  const environment = process.env.NODE_ENV || "development";
  if (!jwtSecret && environment === "production") {
    throw new Error("JWT_SECRET environment variable is required in production");
  }
  return {
    jwtSecret: jwtSecret || "dev-secret-change-in-production",
    jwtExpiration: parseInt(process.env.JWT_EXPIRATION || "86400", 10),
    // 24 hours
    bcryptRounds: parseInt(process.env.BCRYPT_ROUNDS || "10", 10),
    apiVersion: "v1",
    environment,
    databaseUrl: process.env.DATABASE_URL,
    redisUrl: process.env.REDIS_URL
  };
}
const config = getConfig();

function createToken(payload) {
  const expiresAt = Math.floor(Date.now() / 1e3) + config.jwtExpiration;
  const token = jwt.sign(
    { ...payload, exp: expiresAt },
    config.jwtSecret,
    { algorithm: "HS256" }
  );
  return {
    accessToken: token,
    expiresAt: expiresAt * 1e3
    // Convert to milliseconds for frontend
  };
}
function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    return {
      userId: decoded.userId,
      email: decoded.email,
      role: decoded.role,
      vendorId: decoded.vendorId
    };
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
}
function extractToken(authHeader) {
  if (!authHeader) return null;
  const parts = authHeader.split(" ");
  if (parts.length !== 2 || parts[0] !== "Bearer") {
    return null;
  }
  return parts[1];
}
function validateToken(authHeader) {
  const token = extractToken(authHeader ?? void 0);
  if (!token) return null;
  return verifyToken(token);
}

function successResponse(data, status = 200) {
  return new Response(
    JSON.stringify({
      ok: true,
      data
    }),
    {
      status,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}
function errorResponse(code, message, status = 400, details) {
  return new Response(
    JSON.stringify({
      ok: false,
      error: {
        code,
        message,
        details
      }
    }),
    {
      status,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
}
const ApiErrors = {
  unauthorized: (message = "Unauthorized") => errorResponse("UNAUTHORIZED", message, 401),
  forbidden: (message = "Forbidden") => errorResponse("FORBIDDEN", message, 403),
  notFound: (message = "Not found") => errorResponse("NOT_FOUND", message, 404),
  badRequest: (message = "Bad request", details) => errorResponse("BAD_REQUEST", message, 400, details),
  conflict: (message = "Conflict", details) => errorResponse("CONFLICT", message, 409, details),
  unprocessableEntity: (message = "Unprocessable entity", details) => errorResponse("UNPROCESSABLE_ENTITY", message, 422, details),
  internalServerError: (message = "Internal server error") => errorResponse("INTERNAL_SERVER_ERROR", message, 500)
};

export { ApiErrors as A, config as a, createToken as c, successResponse as s, validateToken as v };
