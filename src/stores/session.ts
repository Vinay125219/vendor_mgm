import { atom } from 'nanostores';
import type { UserRole } from '@/types';

export type SessionPreview = {
  role: UserRole;
  displayName: string;
};

export const sessionPreview = atom<SessionPreview | null>(null);
