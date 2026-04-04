import { API_V1_PREFIX } from '@/types/api-contracts';
import { getAuthToken } from '@/lib/client-auth';

const base = typeof window !== 'undefined' ? '' : '';

export class ApiError extends Error {
  constructor(
    public status: number,
    public code: string,
    message: string,
    public details?: unknown
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

function getHeaders(includeAuth = true): Record<string, string> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (includeAuth) {
    const token = getAuthToken();
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
  }
  return headers;
}

async function handleResponse<T>(res: Response): Promise<T> {
  const contentType = res.headers.get('Content-Type') || '';
  let body: unknown;
  
  if (contentType.includes('application/json')) {
    body = await res.json();
  } else {
    body = await res.text();
  }

  if (!res.ok) {
    const error = body as { ok?: boolean; error?: { code: string; message: string; details?: unknown } };
    const code = error?.error?.code || 'UNKNOWN_ERROR';
    const message = error?.error?.message || `HTTP ${res.status}`;
    const details = error?.error?.details;
    throw new ApiError(res.status, code, message, details);
  }

  if (typeof body === 'object' && body !== null && 'ok' in body) {
    const envelope = body as { ok: boolean; data?: T };
    if (!envelope.ok || envelope.data === undefined) {
      throw new ApiError(res.status, 'INVALID_RESPONSE', 'Bad response from server');
    }
    return envelope.data;
  }

  return body as T;
}

export async function getJson<T>(path: string): Promise<T> {
  const res = await fetch(`${base}${API_V1_PREFIX}${path}`, {
    method: 'GET',
    headers: getHeaders(),
    credentials: 'include',
  });
  return handleResponse<T>(res);
}

export async function postJson<T>(path: string, payload: unknown): Promise<T> {
  const res = await fetch(`${base}${API_V1_PREFIX}${path}`, {
    method: 'POST',
    headers: getHeaders(),
    credentials: 'include',
    body: JSON.stringify(payload),
  });
  return handleResponse<T>(res);
}

export async function putJson<T>(path: string, payload: unknown): Promise<T> {
  const res = await fetch(`${base}${API_V1_PREFIX}${path}`, {
    method: 'PUT',
    headers: getHeaders(),
    credentials: 'include',
    body: JSON.stringify(payload),
  });
  return handleResponse<T>(res);
}

export async function patchJson<T>(path: string, payload: unknown): Promise<T> {
  const res = await fetch(`${base}${API_V1_PREFIX}${path}`, {
    method: 'PATCH',
    headers: getHeaders(),
    credentials: 'include',
    body: JSON.stringify(payload),
  });
  return handleResponse<T>(res);
}

export async function deleteJson<T>(path: string): Promise<T> {
  const res = await fetch(`${base}${API_V1_PREFIX}${path}`, {
    method: 'DELETE',
    headers: getHeaders(),
    credentials: 'include',
  });
  return handleResponse<T>(res);
}
