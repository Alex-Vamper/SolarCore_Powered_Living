import { cn } from '@/lib/utils';
import { useResponsive } from '@/hooks/use-mobile-responsive';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '7xl';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const ResponsiveContainer = ({
  children,
  className,
  maxWidth = '7xl',
  padding = 'md'
}: ResponsiveContainerProps) => {
  const { isMobile } = useResponsive();

  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '7xl': 'max-w-7xl'
  };

  const paddingClasses = {
    none: '',
    sm: isMobile ? 'px-3' : 'px-4 sm:px-6',
    md: isMobile ? 'px-4' : 'px-4 sm:px-6 lg:px-8',
    lg: isMobile ? 'px-4' : 'px-6 sm:px-8 lg:px-12'
  };

  return (
    <div className={cn(
      'mx-auto w-full',
      maxWidthClasses[maxWidth],
      paddingClasses[padding],
      className
    )}>
      {children}
    </div>
  );
};