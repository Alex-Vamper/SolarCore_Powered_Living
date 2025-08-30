import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface TouchFriendlyCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  whileTap?: any;
  whileHover?: any;
}

export const TouchFriendlyCard = ({
  children,
  className,
  onClick,
  href,
  whileTap = { scale: 0.98 },
  whileHover = { scale: 1.02 },
  ...props
}: TouchFriendlyCardProps) => {
  const Component = href ? motion.a : motion.div;

  return (
    <Component
      className={cn(
        'block touch-manipulation cursor-pointer',
        className
      )}
      whileTap={whileTap}
      whileHover={whileHover}
      transition={{ type: 'spring' as const, stiffness: 400, damping: 30 }}
      onClick={onClick}
      href={href}
      {...props}
    >
      <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-4 sm:p-6">
          {children}
        </CardContent>
      </Card>
    </Component>
  );
};