'use client';

export default function RevokeConsentButton() {
  function handleRevoke() {
    localStorage.removeItem('analytics_consent');
    window.location.reload();
  }

  return (
    <button
      onClick={handleRevoke}
      className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-colors cursor-pointer"
    >
      Revocar consentimiento de cookies
    </button>
  );
}
