import React, { useState, useEffect } from 'react';
import { Camera, Upload, RotateCcw, Sparkles } from 'lucide-react';

interface ProfileCutoutImageProps {
  className?: string;
  onPhotoUploaded?: (dataUrl: string) => void;
}

export const ProfileCutoutImage: React.FC<ProfileCutoutImageProps> = ({ className = '', onPhotoUploaded }) => {
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);
  const [activeAvatarStyle, setActiveAvatarStyle] = useState<'executive' | 'cyber' | 'minimal'>('executive');
  const [showUploadMenu, setShowUploadMenu] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('rinas_uploaded_profile_photo');
    if (saved) {
      setCustomPhoto(saved);
    }
    const savedStyle = localStorage.getItem('rinas_avatar_style') as 'executive' | 'cyber' | 'minimal' | null;
    if (savedStyle) {
      setActiveAvatarStyle(savedStyle);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setCustomPhoto(result);
          localStorage.setItem('rinas_uploaded_profile_photo', result);
          if (onPhotoUploaded) onPhotoUploaded(result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetPhoto = () => {
    localStorage.removeItem('rinas_uploaded_profile_photo');
    setCustomPhoto(null);
  };

  const handleStyleChange = (style: 'executive' | 'cyber' | 'minimal') => {
    setActiveAvatarStyle(style);
    localStorage.setItem('rinas_avatar_style', style);
  };

  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      
      {/* Subtle Background Radial Glow */}
      <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-cyan-500/15 blur-[60px] pointer-events-none -z-10" />

      {/* Clean Circular Frame with Refined Gradient Border */}
      <div className="relative p-1 rounded-full bg-gradient-to-tr from-cyan-400 via-sky-500 to-blue-600 shadow-[0_0_35px_rgba(6,182,212,0.25)] hover:shadow-[0_0_50px_rgba(6,182,212,0.4)] transition-all duration-500">
        
        {/* Inner Circular Avatar Stage */}
        <div className="relative w-64 h-64 sm:w-76 sm:h-76 md:w-84 md:h-84 rounded-full overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-[#020617] border-2 border-slate-900 flex items-center justify-center group">
          
          {/* Portrait Headshot / Custom Photo */}
          <div className="relative w-full h-full flex items-end justify-center pt-2 overflow-hidden">
            {customPhoto ? (
              <img
                src={customPhoto}
                alt="Rinas Aboothalib Profile"
                onLoad={() => setImageLoaded(true)}
                className="w-full h-full object-cover object-top filter brightness-[1.02] contrast-[1.02] transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="relative w-full h-full flex flex-col items-center justify-end">
                <img
                  src="/rinas-profile.png"
                  alt="Rinas Aboothalib Profile"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = document.getElementById('rinas-circle-avatar-svg');
                    if (fallback) fallback.style.display = 'block';
                  }}
                  onLoad={() => setImageLoaded(true)}
                  className="w-full h-full object-contain object-bottom drop-shadow-[0_10px_25px_rgba(6,182,212,0.35)] transition-transform duration-500 group-hover:scale-105"
                />

                {/* High Fidelity Vector Avatar Fallback */}
                <svg
                  id="rinas-circle-avatar-svg"
                  viewBox="0 0 500 500"
                  className="w-full h-full object-contain object-bottom drop-shadow-[0_10px_25px_rgba(6,182,212,0.4)] hidden"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="circleSuit" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={activeAvatarStyle === 'cyber' ? '#0f172a' : '#1e293b'} />
                      <stop offset="50%" stopColor={activeAvatarStyle === 'cyber' ? '#082f49' : '#0f172a'} />
                      <stop offset="100%" stopColor="#020617" />
                    </linearGradient>
                    <linearGradient id="circleShirt" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#cbd5e1" />
                    </linearGradient>
                    <linearGradient id="circleSkin" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a3765e" />
                      <stop offset="100%" stopColor="#815743" />
                    </linearGradient>
                    <linearGradient id="circleNeon" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>

                  {/* Torso & Suit */}
                  <path d="M 120 320 Q 250 270 380 320 L 430 500 L 70 500 Z" fill="url(#circleSuit)" stroke="url(#circleNeon)" strokeWidth="2" />
                  
                  {/* Shirt Collar */}
                  <polygon points="215,300 250,380 285,300" fill="url(#circleShirt)" />
                  <path d="M 230 300 L 250 345 L 270 300" fill="none" stroke="#94a3b8" strokeWidth="2" />

                  {/* Lapels */}
                  <path d="M 160 320 L 230 390 L 210 500 L 120 390 Z" fill="#0f172a" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="1.5" />
                  <path d="M 340 320 L 270 390 L 290 500 L 380 390 Z" fill="#0f172a" stroke="rgba(6, 182, 212, 0.4)" strokeWidth="1.5" />

                  {/* Neck */}
                  <path d="M 225 245 L 225 305 L 275 305 L 275 245 Z" fill="url(#circleSkin)" />

                  {/* Face & Head */}
                  <path d="M 195 160 Q 250 100 305 160 Q 310 230 250 260 Q 190 230 195 160 Z" fill="url(#circleSkin)" />

                  {/* Hair */}
                  <path d="M 185 155 Q 250 80 315 155 Q 295 110 250 115 Q 205 110 185 155 Z" fill="#1e1b18" />

                  {/* Beard */}
                  <path d="M 205 210 Q 250 220 295 210 Q 285 255 250 258 Q 215 255 205 210 Z" fill="#1e1b18" opacity="0.85" />
                  
                  {/* Cyber HUD Visor if Cyber style */}
                  {activeAvatarStyle === 'cyber' && (
                    <path d="M 200 175 L 300 175 L 295 190 L 205 190 Z" fill="rgba(6, 182, 212, 0.35)" stroke="#22d3ee" strokeWidth="1.5" />
                  )}
                </svg>
              </div>
            )}
          </div>

          {/* Subtle Bottom Vignette */}
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#020617]/90 to-transparent pointer-events-none" />

        </div>
      </div>

      {/* Floating Avatar Customizer Pill */}
      <div className="relative mt-5 flex items-center gap-2 z-20">
        <button
          onClick={() => setShowUploadMenu(!showUploadMenu)}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium bg-slate-900/80 text-cyan-400 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 transition-all cursor-pointer backdrop-blur-sm"
          title="Customize Profile Avatar"
        >
          <Camera className="w-3.5 h-3.5 text-cyan-400" />
          <span>{customPhoto ? 'Custom Photo' : 'Avatar Options'}</span>
        </button>

        {showUploadMenu && (
          <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-64 p-3.5 rounded-2xl bg-slate-950/95 border border-cyan-500/40 shadow-2xl backdrop-blur-2xl text-xs space-y-3 z-30 animate-in fade-in zoom-in-95">
            <div className="text-[11px] text-cyan-400 px-1 font-bold uppercase tracking-wider border-b border-slate-800 pb-1.5 flex items-center justify-between">
              <span>Avatar Customizer</span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            </div>

            {/* Avatar Style Presets */}
            <div className="space-y-1">
              <span className="text-[10px] text-slate-400">Render Style:</span>
              <div className="grid grid-cols-3 gap-1">
                <button
                  onClick={() => handleStyleChange('executive')}
                  className={`px-2 py-1 rounded-lg text-[10px] font-semibold transition-colors ${
                    activeAvatarStyle === 'executive' 
                      ? 'bg-cyan-500 text-slate-950 font-bold' 
                      : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  Executive
                </button>
                <button
                  onClick={() => handleStyleChange('cyber')}
                  className={`px-2 py-1 rounded-lg text-[10px] font-semibold transition-colors ${
                    activeAvatarStyle === 'cyber' 
                      ? 'bg-cyan-500 text-slate-950 font-bold' 
                      : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  Cyber HUD
                </button>
                <button
                  onClick={() => handleStyleChange('minimal')}
                  className={`px-2 py-1 rounded-lg text-[10px] font-semibold transition-colors ${
                    activeAvatarStyle === 'minimal' 
                      ? 'bg-cyan-500 text-slate-950 font-bold' 
                      : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  Minimal
                </button>
              </div>
            </div>

            {/* Upload Custom Photo */}
            <div className="pt-2 border-t border-slate-800/80 space-y-1.5">
              <label className="flex items-center justify-center gap-2 w-full py-2 px-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-semibold cursor-pointer hover:bg-cyan-500/20 transition-all text-center">
                <Upload className="w-3.5 h-3.5 text-cyan-400" />
                <span>Upload Custom Photo</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>

              {customPhoto && (
                <button
                  onClick={handleResetPhoto}
                  className="w-full flex items-center justify-center gap-1.5 py-1.5 rounded-xl bg-slate-900 border border-amber-500/30 text-amber-300 hover:bg-slate-800 transition-colors"
                >
                  <RotateCcw className="w-3 h-3 text-amber-400" />
                  <span>Restore Default Avatar</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>

    </div>
  );
};
