import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  
  useEffect(() => {
    // 使用debounce避免频繁搜索
    const timer = setTimeout(() => {
      onSearch(query);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [query, onSearch]);
  
  return (
    <motion.div
      className="relative mb-6"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <input
          type="text"
          placeholder="搜索卦象名称、拼音或描述..."
          className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <i className="fa-solid fa-search"></i>
        </div>
      </div>
      
      {query && (
        <motion.button
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          onClick={() => setQuery('')}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <i className="fa-solid fa-times-circle"></i>
        </motion.button>
      )}
    </motion.div>
  );
};

export default SearchBar;