import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, className = 'w-7 h-7', size = 28 }) => {
  const normalized = name.toLowerCase().trim();

  switch (normalized) {
    case 'java':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <path fill="#5382A1" d="M46.7 101.4c-6.8 1.4-8.8 3.5-3.3 5 15 4 41.5 4.3 54.4 0 5.4-1.8 3.4-3.8-3.4-5.1-13-2.3-34.9-2.1-47.7.1z" />
          <path fill="#E76F00" d="M68.5 73.1c7.7-18.7-4.1-26.6-4.1-26.6s12.5 13-1.6 28.5c-11.7 12.9-2.7 20.3-2.7 20.3s-12.7-8.8 8.4-22.2z" />
          <path fill="#5382A1" d="M96.7 114.7c-21.2 5.1-64.8 5.4-82.6.2-4.1-1.2-2.1-2.9 2.5-3.9 14.3-3.1 36.3-3.5 53.6-2.5 16.5 1 27.2 2.7 26.5 6.2z" />
          <path fill="#E76F00" d="M53.1 53.8c7.1-14.8-3.7-21.2-3.7-21.2s11.5 10.3-1.4 22.6c-10.7 10.2-2.4 16.1-2.4 16.1s-11.5-7 7.5-17.5z" />
          <path fill="#5382A1" d="M89.7 124.6c-27.1 5.9-80.1 6.5-98.3.1-3.2-1.1 1.7-2.6 6.8-3.3 19.3-2.5 50.2-2.7 74.3 0 16.9 1.9 20.6 2.3 17.2 3.2z" />
          <path fill="#E76F00" d="M84.7 96.1s6.9-5.6-7.3-8.8c-17.3-3.9-25.6-3.8-35.8 3.8-4 3 6.9 4.7 11.2 5 21.6 1.4 23.3 5.4 31.9 0z" />
          <path fill="#E76F00" d="M79.4 38.3s16.6-8.7 8.3-20.9c0 0-1.7 9.8-16.1 14.8-12 4.2-11.3 8.3-11.3 8.3s9-3.9 19.1-2.2z" />
          <path fill="#5382A1" d="M87.3 80.6c15.2-12.7 7.8-24.9 7.8-24.9s-2.1 7.1-13.4 13.5c-15.6 9-28.7 13.9-38.3 19.1 0 0 10.7-1.3 22.7-4.1 11.3-2.6 15.6-.9 21.2-3.6z" />
        </svg>
      );

    case 'python':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <path fill="#3776AB" d="M63.6 5.8c-28.2 0-26.4 12.2-26.4 12.2l.1 12.7h26.9v3.8H26.3S5.8 32.2 5.8 60.8c0 28.5 17.9 27.5 17.9 27.5h10.7V73.2s-.6-18 17.7-18h26.7s17.1.3 17.1-16.6V22.2s2.5-16.4-32.3-16.4zm-14.8 9.5c2.9 0 5.3 2.4 5.3 5.3s-2.4 5.3-5.3 5.3-5.3-2.4-5.3-5.3 2.4-5.3 5.3-5.3z" />
          <path fill="#FFD43B" d="M64.4 122.2c28.2 0 26.4-12.2 26.4-12.2l-.1-12.7H63.8v-3.8h37.9s20.5 2.3 20.5-26.3c0-28.5-17.9-27.5-17.9-27.5H113.6v15.1s.6 18-17.7 18H69.2s-17.1-.3-17.1 16.6v16.4s-2.5 16.4 32.3 16.4zm14.8-9.5c-2.9 0-5.3-2.4-5.3-5.3s2.4-5.3 5.3-5.3 5.3 2.4 5.3 5.3-2.4 5.3-5.3 5.3z" />
        </svg>
      );

    case 'html':
    case 'html5':
    case 'html / html5':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <path fill="#E44D26" d="M19.1 11.2l9.1 101.9 35.8 9.9 35.8-9.9 9.1-101.9H19.1z" />
          <path fill="#F16529" d="M64 19.4v94.8l28.6-7.9 7.4-86.9H64z" />
          <path fill="#EBEBEB" d="M64 47.9H46.7l-1.2-13.8H64V20.8H31.3l3.6 40.5H64V47.9zm0 29.4l-.1.1-15.5-4.2-1-11.2H33.9l1.9 22.3 28.2 7.8V77.3z" />
          <path fill="#FFFFFF" d="M64 20.8v13.3h16.2l-1.5 17.2H64v13.4h14.9l-1.4 15.8-13.5 3.6V95l24.4-6.8 3.5-39.7.3-3.9 1.1-12.7 1-11.1H64z" />
        </svg>
      );

    case 'css':
    case 'css3':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <path fill="#1572B6" d="M19.1 11.2l9.1 101.9 35.8 9.9 35.8-9.9 9.1-101.9H19.1z" />
          <path fill="#33A9DC" d="M64 19.4v94.8l28.6-7.9 7.4-86.9H64z" />
          <path fill="#EBEBEB" d="M64 47.9H49.1l-1.2-13.8H64V20.8H31.3l3.6 40.5H64V47.9zm0 29.4l-.1.1-15.5-4.2-1-11.2H33.9l1.9 22.3 28.2 7.8V77.3z" />
          <path fill="#FFFFFF" d="M64 20.8v13.3h29.9l-1.2 13.8H64v13.4h14.9l-1.4 15.8-13.5 3.6V95l24.4-6.8 3.4-38.3 1.1-12.6 1.1-12.7.9-3.8H64z" />
        </svg>
      );

    case 'sql':
    case 'mysql':
    case 'database':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <defs>
            <linearGradient id="sqlCylGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00758F" />
              <stop offset="100%" stopColor="#005B6E" />
            </linearGradient>
            <linearGradient id="sqlOrangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F29111" />
              <stop offset="100%" stopColor="#E97B00" />
            </linearGradient>
          </defs>
          {/* Base Layer */}
          <path fill="url(#sqlCylGrad)" d="M64 116c-28.7 0-52-7.2-52-16V84c0 8.8 23.3 16 52 16s52-7.2 52-16v16c0 8.8-23.3 16-52 16z" />
          {/* Middle Layer */}
          <path fill="#008EA7" d="M64 88c-28.7 0-52-7.2-52-16V56c0 8.8 23.3 16 52 16s52-7.2 52-16v16c0 8.8-23.3 16-52 16z" />
          {/* Top Layer */}
          <path fill="url(#sqlCylGrad)" d="M64 60c-28.7 0-52-7.2-52-16V28c0 8.8 23.3 16 52 16s52-7.2 52-16v16c0 8.8-23.3 16-52 16z" />
          {/* Top Cap */}
          <ellipse cx="64" cy="28" rx="52" ry="16" fill="#00A7C4" />
          {/* SQL Text / Accent */}
          <rect x="42" y="58" width="44" height="24" rx="6" fill="url(#sqlOrangeGrad)" />
          <text x="64" y="75" fill="#ffffff" fontSize="13" fontWeight="900" fontFamily="system-ui, sans-serif" textAnchor="middle" letterSpacing="1">SQL</text>
        </svg>
      );

    case 'react':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <g fill="none" stroke="#61DAFB" strokeWidth="6">
            <ellipse cx="64" cy="64" rx="54" ry="20" transform="rotate(0 64 64)" />
            <ellipse cx="64" cy="64" rx="54" ry="20" transform="rotate(60 64 64)" />
            <ellipse cx="64" cy="64" rx="54" ry="20" transform="rotate(120 64 64)" />
          </g>
          <circle cx="64" cy="64" r="10" fill="#61DAFB" />
        </svg>
      );

    case 'laravel':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <path fill="#FF2D20" d="M117.8 30.7L66.7 1.2c-1.7-1-3.7-1-5.4 0L10.2 30.7c-1.7 1-2.7 2.8-2.7 4.7v58c0 1.9 1 3.7 2.7 4.7l51.1 29.5c1.7 1 3.7 1 5.4 0l51.1-29.5c1.7-1 2.7-2.8 2.7-4.7v-58c0-2-1-3.8-2.7-4.7zM64 12.3l43.2 24.9-19.4 11.2-43.2-24.9L64 12.3zm-5.4 103.4L18.1 93.1V48.7l40.5 23.4v43.6zm5.4-53.6l-38.3-22 19.3-11.1 38.3 22-19.3 11.1zm45.9 31L69.4 115.7V72.1l19.4-11.2v17.4l21.1-12.2v27z" />
        </svg>
      );

    case 'django':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <rect width="128" height="128" rx="28" fill="#092E20" />
          <path fill="#44B78B" d="M60.4 24h13.8v56.8c-3.8 1.4-8.8 2.2-13.8 2.2-16.1 0-25.9-8.4-25.9-24.3 0-15.6 10.4-24.8 25.9-24.8zm0 11.5c-7.6 0-12.1 4.5-12.1 13.2 0 8.6 4.4 13.1 12.1 13.1 3.8 0 7.3-.8 9.7-2.2V35.5h-9.7zM79.8 45.4h13.5v37.6H79.8V45.4zm6.7-9.5c4.7 0 8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5-8.5 3.8-8.5 8.5 3.8 8.5 8.5 8.5z" />
        </svg>
      );

    case 'canva':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <defs>
            <linearGradient id="canvaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00C4CC" />
              <stop offset="50%" stopColor="#7D2AE8" />
              <stop offset="100%" stopColor="#00C4CC" />
            </linearGradient>
          </defs>
          <circle cx="64" cy="64" r="60" fill="url(#canvaGrad)" />
          <path fill="#FFFFFF" d="M64.6 30.5c-19.3 0-33.1 15.6-33.1 34.6 0 18.2 12.8 33.4 31.8 33.4 11.6 0 20.9-5.4 25.7-14.7l-9.8-5.3c-3.1 5.4-8.7 8.5-15.4 8.5-11.4 0-19.5-8.8-20.1-20.2h46.2c.4-2 .7-4.1.7-6.3 0-18.4-11.6-30-26-30zm-17.8 26.6c1.1-9.2 7.8-15.3 17.5-15.3 9.4 0 15.6 6.1 16.5 15.3H46.8z" />
        </svg>
      );

    case 'github':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <path fill="#F0F6FC" d="M64 5.8C29.6 5.8 1.6 33.7 1.6 68.2c0 27.6 17.9 51 42.7 59.2 3.1.6 4.3-1.4 4.3-3 0-1.5-.1-6.5-.1-11.8-17.4 3.8-21-7.4-21-7.4-2.8-7.2-6.9-9.1-6.9-9.1-5.7-3.9.4-3.8.4-3.8 6.3.4 9.6 6.5 9.6 6.5 5.6 9.6 14.6 6.8 18.2 5.2.6-4.1 2.2-6.8 4-8.4-13.9-1.6-28.4-6.9-28.4-30.8 0-6.8 2.4-12.4 6.4-16.7-.6-1.6-2.8-7.9.6-16.5 0 0 5.2-1.7 17.1 6.4 5-1.4 10.3-2.1 15.6-2.1s10.6.7 15.6 2.1c11.9-8.1 17.1-6.4 17.1-6.4 3.4 8.6 1.2 14.9.6 16.5 4 4.4 6.4 10 6.4 16.7 0 24-14.6 29.2-28.5 30.7 2.3 1.9 4.3 5.8 4.3 11.8 0 8.5-.1 15.4-.1 17.5 0 1.7 1.1 3.6 4.3 3 24.8-8.3 42.6-31.7 42.6-59.2 0-34.5-28-62.4-62.4-62.4z" />
        </svg>
      );

    case 'vscode':
    case 'vs code':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <path fill="#0065A9" d="M96.3 123.6c3.4 1.7 7.5.9 10-1.8l17.7-17.1c2.6-2.5 4-6 4-9.6V32.9c0-3.6-1.4-7.1-4-9.6L106.3 6.2c-2.5-2.7-6.6-3.5-10-1.8L40.7 33.7 18.3 16.5c-2.5-1.9-6-1.8-8.4.3L2.4 23.3c-2.8 2.5-3 6.8-.5 9.6l31.8 31.1L1.9 95.1c-2.5 2.8-2.3 7.1.5 9.6l7.5 6.5c2.4 2.1 5.9 2.2 8.4.3l22.4-17.2 55.6 29.3z" />
          <path fill="#007ACC" d="M106.3 6.2c-2.5-2.7-6.6-3.5-10-1.8L40.7 33.7l55.6 29.3 31.7-24.1V32.9c0-3.6-1.4-7.1-4-9.6L106.3 6.2z" />
          <path fill="#1F9CF0" d="M96.3 123.6c3.4 1.7 7.5.9 10-1.8l17.7-17.1c2.6-2.5 4-6 4-9.6V89.1L96.3 65 40.7 94.3l55.6 29.3z" />
          <path fill="#0065A9" d="M40.7 33.7l55.6 31.3-55.6 29.3L18.3 111.5l-8.4-.3-7.5-6.5c-2.8-2.5-3-6.8-.5-9.6l31.8-31.1L1.9 32.9c-2.5-2.8-2.3-7.1.5-9.6l7.5-6.5c2.4-2.1 5.9-2.2 8.4-.3L40.7 33.7z" />
        </svg>
      );

    case 'xampp':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <rect width="128" height="128" rx="28" fill="#FB7A24" />
          <path fill="#FFFFFF" d="M40.5 35.8l-8.9 8.9 14.6 14.6-14.6 14.6 8.9 8.9 14.6-14.6 14.6 14.6 8.9-8.9-14.6-14.6 14.6-14.6-8.9-8.9-14.6 14.6-14.6-14.6zm37.2 43.8h17.8V92H77.7v-12.4zm0-24.8h17.8v12.4H77.7V54.8zm0-24.8h17.8v12.4H77.7V30z" />
        </svg>
      );

    case 'nodejs':
    case 'node.js':
    case 'node':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <path fill="#539E43" d="M64 8.7L13.5 37.8v58.2L64 125.1l50.5-29.1V37.8L64 8.7zm0 17.5l35.3 20.4v40.8L64 107.8 28.7 87.4V46.6L64 26.2z" />
          <path fill="#FFFFFF" d="M64 43.6l18.4 10.6v21.2L64 86 45.6 75.4V54.2L64 43.6z" />
        </svg>
      );

    case 'typescript':
    case 'ts':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <rect width="128" height="128" rx="20" fill="#3178C6" />
          <path fill="#FFFFFF" d="M58.5 73.8h-14v35.8H31.1V73.8h-14V62.4h41.4v11.4zm23.6 20.3c0 4.6 2.3 7 7.2 7 3.5 0 6.6-1.5 8.9-3.9l7.7 7.7c-4.4 4.8-10.4 7.4-17.5 7.4-12.8 0-20.1-7.8-20.1-18.7 0-11.3 7.8-18.9 20.7-18.9 7 0 12.6 2.3 16.5 6.6l-7.2 8c-2.4-2.5-5.2-3.8-8.8-3.8-4.5 0-6.9 2.2-6.9 5.8 0 3.3 2.5 4.8 7.3 6.1 9.4 2.5 16.7 6.1 16.7 15.6z" />
        </svg>
      );

    case 'docker':
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <path fill="#2496ED" d="M125.7 54.8c-2.1-1.6-9-2.3-13.6-.9-.8-4.4-3.7-8.1-7.6-10.8-1-.7-2-1.3-3.1-1.8l-1.9 3.8c.8.4 1.6.8 2.3 1.3 2.9 2 5.1 4.7 5.7 8-4.7 1.4-10.5 4.8-13.2 10.9-10.3-.7-27.4-2.8-38.3 8.3-4.2-1.5-12.6-3.8-23.7.8-5.7 2.4-9.9 6.8-12.7 11.9-2.8 5.1-4 10.7-3.8 16.3.3 7.6 3.1 15.1 7.9 21.2 10.4 13.3 27.5 17.5 44 17.2 18.9-.3 37.1-7 51.5-19.1 7.4-6.2 13-14.2 16.2-23.3 3.5-10.1 2.8-20.4-3.5-23.9zm-86.4-1.2h10.9v10.9H39.3V53.6zm13.1 0h10.9v10.9H52.4V53.6zm13.1 0h10.9v10.9H65.5V53.6zm13.1 0h10.9v10.9H78.6V53.6zm-39.3-13h10.9v10.9H39.3V40.6zm13.1 0h10.9v10.9H52.4V40.6zm13.1 0h10.9v10.9H65.5V40.6zm13.1 0h10.9v10.9H78.6V40.6zm-13.1-13h10.9v10.9H65.5V27.6z" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 128 128" width={size} height={size} className={className}>
          <rect width="128" height="128" rx="24" fill="#0284c7" />
          <text x="64" y="76" fill="#ffffff" fontSize="24" fontWeight="bold" textAnchor="middle">{name.slice(0, 2).toUpperCase()}</text>
        </svg>
      );
  }
};
