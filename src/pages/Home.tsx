import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HexagramCard from '@/components/HexagramCard';
import HexagramDetail from '@/components/HexagramDetail';
import SearchBar from '@/components/SearchBar';
import { hexagrams, Hexagram, searchHexagrams } from '@/data/zhouyi';
import { useTheme } from '@/hooks/useTheme';

const Home: React.FC = () => {
  const [selectedHexagram, setSelectedHexagram] = useState<Hexagram | null>(null);
  const [filteredHexagrams, setFilteredHexagrams] = useState<Hexagram[]>(hexagrams);
  const { theme, toggleTheme, isDark } = useTheme();
  
  // 处理搜索
  const handleSearch = (query: string) => {
    const results = searchHexagrams(query);
    setFilteredHexagrams(results);
  };
  
  // 选择卦象
  const handleHexagramSelect = (hexagram: Hexagram) => {
    setSelectedHexagram(hexagram);
    
    // 在移动设备上，自动滚动到详情部分
    if (window.innerWidth < 768) {
      setTimeout(() => {
        const detailElement = document.getElementById('hexagram-detail');
        if (detailElement) {
          detailElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  };
  
  // 初始化页面主题
  useEffect(() => {
    document.documentElement.classList.add(theme);
    return () => {
      document.documentElement.classList.remove(theme);
    };
  }, [theme]);
  
  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'} transition-colors duration-300`}>
      {/* 顶部导航 */}
      <header className={`sticky top-0 z-10 ${isDark ? 'bg-gray-800' : 'bg-white'} border-b ${isDark ? 'border-gray-700' : 'border-gray-200'} shadow-sm`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1 
            className="text-2xl font-bold text-blue-600 dark:text-blue-400"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <i className="fa-solid fa-book-open mr-2"></i>周易64卦解读
          </motion.h1>
          
          <motion.button
            className={`p-2 rounded-full ${isDark ? 'bg-gray-700 text-yellow-300' : 'bg-gray-100 text-gray-700'} hover:opacity-80 transition-opacity`}
            onClick={toggleTheme}
            whileHover={{ rotate: 15 }}
            whileTap={{ scale: 0.9 }}
          >
            {isDark ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
          </motion.button>
        </div>
      </header>
      
      {/* 主内容区 */}
      <main className="container mx-auto px-4 py-8">
        {/* 介绍部分 */}
        <motion.div 
          className={`mb-8 p-6 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-md border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold mb-4 text-center">周易64卦简介</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
            《周易》是中国古代哲学经典，其中64卦象征着宇宙万物的变化规律。
            每卦都代表着特定的情景和人生哲理，蕴含着深邃的智慧。
          </p>
          
          {/* 搜索栏 */}
          <SearchBar onSearch={handleSearch} />
        </motion.div>
        
        {/* 卦象展示区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧：卦象列表 */}
          <div className="lg:col-span-1">
            <div className={`p-4 rounded-xl ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-md border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <i className="fa-solid fa-th-large mr-2 text-blue-500"></i>卦象列表
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">({filteredHexagrams.length})</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[600px] overflow-y-auto pr-2">
                {filteredHexagrams.map((hexagram) => (
                  <HexagramCard
                    key={hexagram.id}
                    hexagram={hexagram}
                    isSelected={selectedHexagram?.id === hexagram.id}
                    onClick={handleHexagramSelect}
                  />
                ))}
              </div>
              
              {filteredHexagrams.length === 0 && (
                <div className="flex flex-col items-center justify-center p-8 text-center">
                  <div className="text-4xl mb-3 text-gray-300 dark:text-gray-600">🔍</div>
                  <p className="text-gray-500 dark:text-gray-400">没有找到匹配的卦象</p>
                  <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">请尝试使用其他关键词搜索</p>
                </div>
              )}
            </div>
          </div>
          
          {/* 右侧：卦象详情 */}
          <div id="hexagram-detail" className="lg:col-span-2">
            <HexagramDetail hexagram={selectedHexagram} />
          </div>
        </div>
      </main>
      
      {/* 底部信息 */}
      <footer className={`mt-12 py-6 border-t ${isDark ? 'border-gray-800 bg-gray-900 text-gray-400' : 'border-gray-200 bg-white text-gray-600'}`}>
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">周易64卦解读 | 探索古老智慧的现代应用</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-500 transition-colors">
              <i className="fa-brands fa-weibo"></i>
            </a>
          </div>
          <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} 周易智慧. 保留所有权利.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;