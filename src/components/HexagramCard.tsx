import React from 'react';
import { Hexagram } from '@/data/zhouyi';
import { motion } from 'framer-motion';
import HexagramSymbol from './HexagramSymbol';

interface HexagramCardProps {
  hexagram: Hexagram;
  isSelected: boolean;
  onClick: (hexagram: Hexagram) => void;
}

const HexagramCard: React.FC<HexagramCardProps> = ({ hexagram, isSelected, onClick }) => {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl border p-4 cursor-pointer transition-all duration-300 ${
        isSelected 
          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg' 
          : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md'
      }`}
      onClick={() => onClick(hexagram)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">{hexagram.name}</h3>
        <span className="text-sm text-gray-500 dark:text-gray-400">{hexagram.pinyin}</span>
      </div>
      
      <div className="flex items-center justify-center h-24 mb-3">
        <HexagramSymbol binary={hexagram.binary} className="text-blue-600 dark:text-blue-400" />
      </div>
      
      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{hexagram.description}</p>
      
      {isSelected && (
        <motion.div
          className="absolute top-0 right-0 h-6 w-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full fill-blue-500" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </motion.div>
      )}
    </motion.div>
  );
};

export default HexagramCard;