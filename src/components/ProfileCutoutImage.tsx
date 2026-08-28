import React, { useState } from 'react';

interface ProfileCutoutImageProps {
  className?: string;
}

export const ProfileCutoutImage: React.FC<ProfileCutoutImageProps> = ({
  className = '',
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={`relative flex flex-col items-center justify-center select-none ${className}`}
    >
      {/* ================================
          BACKGROUND RADIAL GLOW
          ================================ */}
      <div
        className="
          absolute
          w-72 h-72
          sm:w-80 sm:h-80
          rounded-full
          bg-cyan-500/15
          blur-[60px]
          pointer-events-none
          -z-10
        "
      />

      {/* ================================
          OUTER NEON CIRCULAR FRAME
          ================================ */}
      <div
        className="
          relative
          p-1
          rounded-full
          bg-gradient-to-tr
          from-cyan-400
          via-sky-500
          to-blue-600
          shadow-[0_0_35px_rgba(6,182,212,0.25)]
          hover:shadow-[0_0_50px_rgba(6,182,212,0.4)]
          transition-all
          duration-500
        "
      >
        {/* ================================
            PROFILE IMAGE CONTAINER
            ================================ */}
        <div
          className="
            relative
            w-64 h-64
            sm:w-76 sm:h-76
            md:w-84 md:h-84
            rounded-full
            overflow-hidden
            bg-gradient-to-b
            from-slate-900
            via-slate-950
            to-[#020617]
            border-2
            border-slate-900
            flex
            items-center
            justify-center
            group
          "
        >
          {/* ================================
              PROFILE IMAGE
              ================================ */}

          {!imageError ? (
            <img
              src="/rinas-profile.png"
              alt="Rinas Aboothalib"
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
              className="
                w-full
                h-full
                object-cover
                object-top
                transition-transform
                duration-500
                group-hover:scale-105
              "
            />
          ) : (
            /* ================================
               IMAGE ERROR FALLBACK
               ================================ */
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-slate-950">
              <div className="text-cyan-400 text-sm font-semibold">
                Profile image not found
              </div>

              <div className="text-slate-500 text-xs mt-2">
                Please add:
              </div>

              <div className="text-slate-300 text-xs mt-1 font-mono">
                public/rinas-profile.png
              </div>
            </div>
          )}

          {/* ================================
              IMAGE LOADING INDICATOR
              ================================ */}

          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-950">
              <div
                className="
                  w-8
                  h-8
                  border-2
                  border-cyan-400/30
                  border-t-cyan-400
                  rounded-full
                  animate-spin
                "
              />
            </div>
          )}

          {/* ================================
              BOTTOM VIGNETTE
              ================================ */}

          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-12
              bg-gradient-to-t
              from-[#020617]/50
              to-transparent
              pointer-events-none
            "
          />
        </div>
      </div>
    </div>
  );
};