'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Link2, ExternalLink, Loader2 } from 'lucide-react';
import { getPublicProfile, recordLinkClick } from '@/store/userStore';
import { getTheme } from '@/lib/themes';
import { ThemeId } from '@/types';

interface PublicProfile {
  username: string;
  displayName: string;
  bio: string;
  avatar: string;
  theme: string;
  isPro: boolean;
  links: Array<{
    id: string;
    title: string;
    url: string;
    enabled: boolean;
  }>;
}

export default function ProfilePage() {
  const params = useParams();
  const username = params.username as string;
  const [profile, setProfile] = useState<PublicProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      const userProfile = await getPublicProfile(username);
      if (userProfile) {
        setProfile(userProfile);
      } else {
        setNotFound(true);
      }
      setLoading(false);
    };

    loadProfile();
  }, [username]);

  const handleLinkClick = (linkId: string) => {
    recordLinkClick(username, linkId);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
      </div>
    );
  }

  if (notFound || !profile) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 px-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
          <Link2 className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">Usuario no encontrado</h1>
        <p className="text-gray-400 mb-6">
          El perfil @{username} no existe o ha sido eliminado.
        </p>
        <Link
          href="/"
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition"
        >
          Crear mi página gratis
        </Link>
      </div>
    );
  }

  const theme = getTheme(profile.theme as ThemeId);
  const enabledLinks = profile.links.filter((link) => link.enabled);

  return (
    <div className={`min-h-screen ${theme.background} py-12 px-4`}>
      <div className="max-w-lg mx-auto">
        {/* Profile Header */}
        <div className="text-center mb-8">
          {profile.avatar ? (
            <img
              src={profile.avatar}
              alt={profile.displayName}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white/20"
            />
          ) : (
            <div className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white/20 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-3xl font-bold text-white">
                {profile.displayName.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
          <h1 className={`text-2xl font-bold ${theme.textColor} mb-1`}>
            {profile.displayName}
          </h1>
          <p className={`${theme.accentColor} mb-3`}>@{profile.username}</p>
          {profile.bio && (
            <p className={`${theme.accentColor} max-w-md mx-auto`}>{profile.bio}</p>
          )}
        </div>

        {/* Links */}
        <div className="space-y-3">
          {enabledLinks.length === 0 ? (
            <div className={`text-center ${theme.accentColor} py-8`}>
              <p>Este usuario aún no ha añadido links.</p>
            </div>
          ) : (
            enabledLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleLinkClick(link.id)}
                className={`block link-card ${theme.cardBg} ${theme.buttonText} rounded-xl py-4 px-6 font-medium text-center transition hover:scale-[1.02] active:scale-[0.98]`}
              >
                <span className="flex items-center justify-center gap-2">
                  {link.title}
                  <ExternalLink className="w-4 h-4 opacity-50" />
                </span>
              </a>
            ))
          )}
        </div>

        {/* Footer */}
        {!profile.isPro && (
          <div className="mt-12 text-center">
            <Link
              href="/"
              className={`inline-flex items-center gap-2 ${theme.accentColor} hover:opacity-80 transition text-sm`}
            >
              <div className="w-5 h-5 rounded bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Link2 className="w-3 h-3 text-white" />
              </div>
              Crear mi página con LinkForge
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
