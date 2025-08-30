import { cn } from '@/lib/utils';
import { useResponsive } from '@/hooks/use-mobile-responsive';

interface MobileSectionProps {
  children: React.ReactNode;
  className?: string;
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  background?: 'default' | 'muted' | 'card';
}

export const MobileSection = ({
  children,
  className,
  spacing = 'md',
  background = 'default'
}: MobileSectionProps) => {
  const { isMobile } = useResponsive();

  const spacingClasses = {
    none: '',
    sm: isMobile ? 'py-6' : 'py-8',
    md: isMobile ? 'py-8' : 'py-12 lg:py-16',
    lg: isMobile ? 'py-12' : 'py-16 lg:py-20',
    xl: isMobile ? 'py-16' : 'py-20 lg:py-24'
  };

  const backgroundClasses = {
    default: '',
    muted: 'bg-muted/30',
    card: 'bg-card'
  };

  return (
    <section className={cn(
      spacingClasses[spacing],
      backgroundClasses[background],
      className
    )}>
      {children}
    </section>
  );
};