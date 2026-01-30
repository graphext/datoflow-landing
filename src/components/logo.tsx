import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  href?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: 'text-xl',
  md: 'text-2xl',
  lg: 'text-3xl',
  xl: 'text-4xl',
};

const iconSizes = {
  sm: 24,
  md: 28,
  lg: 32,
  xl: 38,
};

export function Logo({ href = '/', className = '', size = 'md' }: LogoProps) {
  const logoContent = (
    <span
      className={`inline-flex items-center gap-1.5 transition-all duration-300 ${sizeClasses[size]} ${className}`}
      style={{ fontFamily: '"LINE Seed JP", sans-serif', fontWeight: 700 }}
    >
      <Image
        src="/logo.png"
        alt=""
        width={iconSizes[size]}
        height={iconSizes[size]}
        className="shrink-0"
      />
      Datoflow
    </span>
  );

  if (href) {
    return <Link href={href}>{logoContent}</Link>;
  }

  return logoContent;
}
