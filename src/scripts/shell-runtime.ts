import { can, ROLE_LABELS, type Permission } from '@/lib/rbac';
import { getSessionEmail, getSessionRole, isElevatedSession, logout } from '@/lib/client-auth';
import { loadState } from '@/lib/client-store';

export function initVendorShell(): void {
  const role = getSessionRole();

  document.querySelectorAll<HTMLElement>('[data-req-perm]').forEach((el) => {
    const perm = el.getAttribute('data-req-perm') as Permission | null;
    if (perm && !can(role, perm)) el.style.display = 'none';
  });

  const emailEl = document.querySelector('[data-vs-header-email]');
  const email = getSessionEmail();
  if (emailEl) {
    if (email) {
      emailEl.textContent = email;
      emailEl.setAttribute('title', email);
    }
    emailEl.classList.toggle('hidden', !email);
  }

  const roleEl = document.querySelector('[data-vs-header-role]');
  if (roleEl) {
    roleEl.textContent = ROLE_LABELS[role];
    roleEl.classList.remove('hidden');
  }

  document.querySelectorAll<HTMLElement>('[data-vs-sa-switch-wrap]').forEach((wrap) => {
    if (isElevatedSession()) wrap.classList.remove('hidden');
    else wrap.classList.add('hidden');
  });

  const state = loadState();
  const unread = state.notifications.filter((n) => !n.read).length;
  document.querySelectorAll<HTMLElement>('[data-vs-notify-dot]').forEach((dot) => {
    dot.classList.toggle('hidden', unread === 0);
  });

  document.querySelectorAll('[data-vs-logout]').forEach((btn) => {
    btn.addEventListener('click', () => {
      logout();
      window.location.href = '/login';
    });
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initVendorShell());
  } else {
    initVendorShell();
  }
}
