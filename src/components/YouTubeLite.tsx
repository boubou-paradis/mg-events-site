'use client';

import { useState } from 'react';
import { Play } from 'lucide-react';
import type { AnimaJetVideo } from '@/data/animajetVideos';
import { videoObjectSchema } from '@/data/animajetVideos';

/**
 * Lecteur YouTube léger : miniature statique, l'iframe (youtube-nocookie) n'est chargée qu'au clic.
 * Préserve les perfs (pas de JS YouTube au chargement) et ajoute le schema VideoObject.
 */
export default function YouTubeLite({ video, caption }: { video: AnimaJetVideo; caption?: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure className="my-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoObjectSchema(video)) }}
      />
      <div className="relative aspect-video rounded-lg overflow-hidden border border-[#c9a227]/20 bg-[#141414]">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 w-full h-full"
            aria-label={`Lire la vidéo : ${video.title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-16 h-16 rounded-full bg-[#c9a227] text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play size={28} className="ml-1" fill="currentColor" />
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="text-sm text-[#888] mt-3">{caption ?? video.title}</figcaption>
    </figure>
  );
}
