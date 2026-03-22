interface IconProps {
  className?: string;
  size?: number;
  color?: string;
}

const d = { className: "", size: 20, color: "currentColor" };

export function LicenseIcon({ className = d.className, size = d.size, color = d.color }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h6M7 16h8"/></svg>);
}

export function ComplaintIcon({ className = d.className, size = d.size, color = d.color }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>);
}

export function GlobeIcon({ className = d.className, size = d.size, color = d.color }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" className={className}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z"/></svg>);
}

export function CheckIcon({ className = d.className, size = d.size, color = d.color }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>);
}

export function DocIcon({ className = d.className, size = d.size, color = d.color }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h8"/></svg>);
}

export function ChatIcon({ className = d.className, size = d.size, color = d.color }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>);
}

export function ShieldIcon({ className = d.className, size = d.size, color = d.color }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>);
}

export function SearchIcon({ className = d.className, size = d.size, color = d.color }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" className={className}><circle cx="11" cy="11" r="7"/><path d="M16.5 16.5L21 21"/></svg>);
}

export function UploadIcon({ className = d.className, size = d.size, color = d.color }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>);
}

export function ClockIcon({ className = d.className, size = d.size, color = d.color }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" className={className}><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>);
}

export function FileIcon({ className = d.className, size = d.size, color = d.color }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"/><path d="M13 2v7h7"/></svg>);
}

export function ArrowRightIcon({ className = d.className, size = 16, color = d.color }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14M12 5l7 7-7 7"/></svg>);
}

export function ChevDownIcon({ className = d.className, size = 16, color = d.color }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 9l6 6 6-6"/></svg>);
}

export function PhoneIcon({ className = d.className, size = 16, color = d.color }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.11 2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>);
}

export function MailIcon({ className = d.className, size = 16, color = d.color }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>);
}

export function PinIcon({ className = d.className, size = 16, color = d.color }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" className={className}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>);
}

export function TowerIcon({ className = d.className, size = d.size, color = d.color }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 10h16M6 10v12M18 10v12M9 14h6M9 18h6M12 2v4M8 6l4-4 4 4"/></svg>);
}

export function RadioIcon({ className = d.className, size = d.size, color = d.color }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" className={className}><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 010 8.49M7.76 16.24a6 6 0 010-8.49M19.07 4.93a10 10 0 010 14.14M4.93 19.07a10 10 0 010-14.14"/></svg>);
}

export function MailboxIcon({ className = d.className, size = d.size, color = d.color }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M2 10h20M10 6v4"/></svg>);
}

export function WifiIcon({ className = d.className, size = d.size, color = d.color }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" className={className}><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg>);
}

export function MenuIcon({ className = d.className, size = 22, color = d.color }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" className={className}><path d="M3 12h18M3 6h18M3 18h18"/></svg>);
}

export function XIcon({ className = d.className, size = 22, color = d.color }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" className={className}><path d="M18 6L6 18M6 6l12 12"/></svg>);
}

export function BotIcon({ className = d.className, size = d.size, color = d.color }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="8" width="18" height="12" rx="3"/><path d="M12 8V5M7 13h0M17 13h0M9 17h6"/><circle cx="12" cy="5" r="1.5" fill={color} stroke="none"/></svg>);
}

export function SendIcon({ className = d.className, size = 18, color = d.color }: IconProps) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none" className={className}><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>);
}
