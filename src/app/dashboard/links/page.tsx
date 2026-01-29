'use client';

import { useState } from 'react';
import {
  Link2, Plus, Trash2, GripVertical, ExternalLink, Eye, EyeOff,
  AlertCircle, Edit2, Check, X, Search, Filter, ArrowUpDown, Crown
} from 'lucide-react';
import Link from 'next/link';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { useUserStore } from '@/store/userStore';

export default function LinksPage() {
  const { user, addLink, deleteLink, toggleLink, updateLink } = useUserStore();
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newUrl, setNewUrl] = useState('');
  const [error, setError] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editUrl, setEditUrl] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  if (!user) return null;

  const maxLinks = user.isPro ? Infinity : 5;
  const canAddMore = user.links.length < maxLinks;

  const filteredLinks = user.links.filter(link =>
    link.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    link.url.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAdd = async () => {
    if (!newTitle.trim() || !newUrl.trim()) {
      setError('Completa todos los campos');
      return;
    }

    try {
      new URL(newUrl.startsWith('http') ? newUrl : `https://${newUrl}`);
    } catch {
      setError('URL no válida');
      return;
    }

    const success = await addLink(newTitle, newUrl);
    if (success) {
      setNewTitle('');
      setNewUrl('');
      setShowAddForm(false);
      setError('');
    } else {
      setError('Has alcanzado el límite de links');
    }
  };

  const startEdit = (link: typeof user.links[0]) => {
    setEditingId(link.id);
    setEditTitle(link.title);
    setEditUrl(link.url);
  };

  const saveEdit = () => {
    if (!editingId || !editTitle.trim() || !editUrl.trim()) return;

    try {
      new URL(editUrl);
    } catch {
      return;
    }

    updateLink(editingId, { title: editTitle, url: editUrl });
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditTitle('');
    setEditUrl('');
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white">Mis Links</h1>
            <p className="text-gray-400 mt-1">
              {user.links.length} de {user.isPro ? '∞' : '5'} links utilizados
            </p>
          </div>

          <button
            onClick={() => canAddMore ? setShowAddForm(true) : null}
            disabled={!canAddMore}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition ${
              canAddMore
                ? 'bg-purple-500 text-white hover:bg-purple-600'
                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
            }`}
          >
            <Plus className="w-4 h-4" />
            Añadir Link
          </button>
        </div>

        {/* Limit Warning */}
        {!user.isPro && user.links.length >= 4 && (
          <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-yellow-200 font-medium">
                {user.links.length >= 5 ? 'Has alcanzado el límite' : 'Casi llegas al límite'}
              </p>
              <p className="text-yellow-200/70 text-sm mt-1">
                {user.links.length >= 5
                  ? 'Actualiza a Pro para añadir links ilimitados.'
                  : `Te queda${5 - user.links.length === 1 ? '' : 'n'} ${5 - user.links.length} link${5 - user.links.length === 1 ? '' : 's'} en el plan gratuito.`}
              </p>
              <Link
                href="/dashboard/upgrade"
                className="inline-flex items-center gap-1 text-yellow-400 hover:text-yellow-300 text-sm mt-2"
              >
                <Crown className="w-4 h-4" />
                Actualizar a Pro
              </Link>
            </div>
          </div>
        )}

        {/* Add Form */}
        {showAddForm && (
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-4">Nuevo Link</h3>

            {error && (
              <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400" />
                <p className="text-red-300 text-sm">{error}</p>
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Título
                </label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Mi Canal de YouTube"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  URL
                </label>
                <input
                  type="url"
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  placeholder="https://youtube.com/@tucanal"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500"
                />
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleAdd}
                  className="flex-1 py-3 bg-purple-500 text-white rounded-xl font-medium hover:bg-purple-600 transition"
                >
                  Añadir Link
                </button>
                <button
                  onClick={() => {
                    setShowAddForm(false);
                    setError('');
                    setNewTitle('');
                    setNewUrl('');
                  }}
                  className="px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Search */}
        {user.links.length > 0 && (
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar links..."
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500"
            />
          </div>
        )}

        {/* Links List */}
        <div className="space-y-3">
          {filteredLinks.length === 0 && user.links.length === 0 ? (
            <div className="text-center py-16 rounded-2xl bg-white/5 border border-white/10">
              <Link2 className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No tienes links todavía</h3>
              <p className="text-gray-400 mb-6">Añade tu primer link para empezar</p>
              <button
                onClick={() => setShowAddForm(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition"
              >
                <Plus className="w-5 h-5" />
                Añadir primer link
              </button>
            </div>
          ) : filteredLinks.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400">No se encontraron links que coincidan con tu búsqueda</p>
            </div>
          ) : (
            filteredLinks.map((link) => (
              <div
                key={link.id}
                className={`p-4 rounded-xl bg-white/5 border transition ${
                  link.enabled
                    ? 'border-white/10 hover:border-purple-500/30'
                    : 'border-white/5 opacity-60'
                }`}
              >
                {editingId === link.id ? (
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-lg py-2 px-3 text-white focus:outline-none focus:border-purple-500"
                    />
                    <input
                      type="url"
                      value={editUrl}
                      onChange={(e) => setEditUrl(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-lg py-2 px-3 text-white focus:outline-none focus:border-purple-500"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={saveEdit}
                        className="flex items-center gap-1 px-3 py-1.5 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition"
                      >
                        <Check className="w-4 h-4" />
                        Guardar
                      </button>
                      <button
                        onClick={cancelEdit}
                        className="flex items-center gap-1 px-3 py-1.5 bg-white/10 text-gray-400 rounded-lg hover:bg-white/20 transition"
                      >
                        <X className="w-4 h-4" />
                        Cancelar
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-4">
                    <GripVertical className="w-5 h-5 text-gray-600 cursor-grab flex-shrink-0" />

                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-medium truncate">{link.title}</h4>
                      <p className="text-gray-500 text-sm truncate">{link.url}</p>
                    </div>

                    <div className="flex items-center gap-1">
                      <div className="px-3 py-1 rounded-lg bg-white/5 text-gray-400 text-sm">
                        {link.clicks} clicks
                      </div>

                      <button
                        onClick={() => toggleLink(link.id)}
                        className={`p-2 rounded-lg transition ${
                          link.enabled
                            ? 'text-green-400 hover:bg-green-500/20'
                            : 'text-gray-500 hover:bg-white/10'
                        }`}
                        title={link.enabled ? 'Desactivar' : 'Activar'}
                      >
                        {link.enabled ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                      </button>

                      <button
                        onClick={() => startEdit(link)}
                        className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition"
                        title="Editar"
                      >
                        <Edit2 className="w-5 h-5" />
                      </button>

                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition"
                        title="Abrir link"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>

                      <button
                        onClick={() => deleteLink(link.id)}
                        className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/20 rounded-lg transition"
                        title="Eliminar"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Tips */}
        {user.links.length > 0 && (
          <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
            <h3 className="text-white font-semibold mb-2">💡 Consejos para más clicks</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Usa títulos descriptivos y llamativos</li>
              <li>• Ordena tus links más importantes primero</li>
              <li>• Desactiva temporalmente links que no sean relevantes</li>
              <li>• Revisa tus analytics para ver qué funciona mejor</li>
            </ul>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
