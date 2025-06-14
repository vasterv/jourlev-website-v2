// Footer symbol options for JOURLEV

// Option 1: Stylized "J" Lettermark
export function JLettermark({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      <path d="M30 20 L30 60 Q30 80 50 80 Q70 80 70 60 L70 50 L60 50 L60 60 Q60 70 50 70 Q40 70 40 60 L40 20 Z" />
    </svg>
  );
}

// Option 2A: Empathy Hearts (Connected)
export function EmpathyHearts({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      <path d="M25 35 Q25 25 35 25 Q45 25 45 35 Q45 45 35 55 Q25 45 25 35 Z" />
      <path d="M55 45 Q55 35 65 35 Q75 35 75 45 Q75 55 65 65 Q55 55 55 45 Z" />
      <circle cx="45" cy="45" r="3" />
    </svg>
  );
}

// Option 2B: Connection Circles
export function ConnectionCircles({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      <circle cx="30" cy="50" r="15" opacity="0.8" />
      <circle cx="70" cy="50" r="15" opacity="0.8" />
      <circle cx="50" cy="50" r="8" />
    </svg>
  );
}

// Option 2C: Empathy Wave
export function EmpathyWave({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      <path d="M10 50 Q30 30 50 50 Q70 70 90 50" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
      <circle cx="50" cy="50" r="4" />
    </svg>
  );
}