import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  href?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl',
  xl: 'text-3xl',
};

const iconSizes = {
  sm: 20,
  md: 24,
  lg: 28,
  xl: 32,
};

export function Logo({ href = '/', className = '', size = 'md' }: LogoProps) {
  const logoContent = (
    <span
      className={`inline-flex items-center gap-1.5 ${sizeClasses[size]} ${className}`}
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
