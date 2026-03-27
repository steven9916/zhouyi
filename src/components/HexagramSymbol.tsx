import React from 'react';

interface HexagramSymbolProps {
  binary: string; // 六位二进制表示，1代表阳爻，0代表阴爻
  className?: string;
}

const HexagramSymbol: React.FC<HexagramSymbolProps> = ({ binary, className = '' }) => {
  // 确保binary是6位
  const normalizedBinary = binary.padStart(6, '0').slice(-6);
  
  return (
    <div className={`flex flex-col items-center justify-center gap-0.5 ${className}`}>
      {normalizedBinary.split('').map((bit, index) => (
        <div 
          key={index}
          className={`w-12 h-0.5 ${bit === '1' ? 'bg-blue-600 dark:bg-blue-400' : 'bg-gray-300 dark:bg-gray-600'}`}
        >
          {/* 对于阴爻，添加中间的缺口 */}
          {bit === '0' && (
            <>
              <div className="h-full w-1/4 bg-transparent inline-block"></div>
              <div className="h-full w-1/2 bg-transparent inline-block mx-1"></div>
              <div className="h-full w-1/4 bg-transparent inline-block"></div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default HexagramSymbol;