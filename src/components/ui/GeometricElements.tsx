import React from 'react';

interface HexagonProps {
  className?: string;
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  rotate?: boolean;
}

const Hexagon: React.FC<HexagonProps> = ({ 
  className = '', 
  children, 
  size = 'md',
  color = '#3CAEA3',
  rotate = false
}) => {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };
  
  return (
    <div 
      className={`relative ${sizeClasses[size]} ${className} ${rotate ? 'rotate-90' : ''}`}
      style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
    >
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        {children}
      </div>
    </div>
  );
};

interface GeometricBackgroundProps {
  className?: string;
}

const GeometricBackground: React.FC<GeometricBackgroundProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Large hexagons */}
      <Hexagon 
        size="lg" 
        className="absolute -top-16 -left-16 opacity-10" 
        color="#6B46C1"
      />
      <Hexagon 
        size="lg" 
        className="absolute top-1/4 -right-16 opacity-10" 
        color="#3CAEA3"
        rotate
      />
      <Hexagon 
        size="lg" 
        className="absolute bottom-1/4 -left-16 opacity-10" 
        color="#F6E05E"
      />
      
      {/* Medium hexagons */}
      <Hexagon 
        size="md" 
        className="absolute top-1/3 left-1/4 opacity-10" 
        color="#3CAEA3"
      />
      <Hexagon 
        size="md" 
        className="absolute bottom-1/3 right-1/4 opacity-10" 
        color="#6B46C1"
        rotate
      />
      
      {/* Small hexagons */}
      <Hexagon 
        size="sm" 
        className="absolute top-2/3 left-1/3 opacity-10" 
        color="#F6E05E"
      />
      <Hexagon 
        size="sm" 
        className="absolute top-1/2 right-1/3 opacity-10" 
        color="#3CAEA3"
        rotate
      />
      
      {/* Grid lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-px bg-white absolute left-1/4"></div>
        <div className="h-full w-px bg-white absolute left-2/4"></div>
        <div className="h-full w-px bg-white absolute left-3/4"></div>
        <div className="h-px w-full bg-white absolute top-1/4"></div>
        <div className="h-px w-full bg-white absolute top-2/4"></div>
        <div className="h-px w-full bg-white absolute top-3/4"></div>
      </div>
    </div>
  );
};

export { Hexagon, GeometricBackground };
