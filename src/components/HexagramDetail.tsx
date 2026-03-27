import React from 'react';
import { Hexagram } from '@/data/zhouyi';
import { motion } from 'framer-motion';
import HexagramSymbol from './HexagramSymbol';

interface HexagramDetailProps {
  hexagram: Hexagram | null;
}

const HexagramDetail: React.FC<HexagramDetailProps> = ({ hexagram }) => {
  if (!hexagram) {
    return (
      <motion.div 
        className="flex flex-col items-center justify-center h-full p-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="text-6xl mb-4 text-gray-300 dark:text-gray-600">☯</div>
        <h2 className="text-xl font-semibold text-gray-600 dark:text-gray-300 mb-2">请选择一个卦象</h2>
        <p className="text-gray-500 dark:text-gray-400">从左侧列表中选择一个卦象，查看其详细解读</p>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        {/* 左侧：卦象和图片 */}
        <div className="w-full md:w-1/3">
          <div className="mb-4 rounded-lg overflow-hidden">
            <img 
              src={hexagram.imageUrl} 
              alt={hexagram.name} 
              className="w-full h-48 object-cover"
            />
          </div>
          
          <div className="flex flex-col items-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
            <HexagramSymbol binary={hexagram.binary} className="mb-3" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-1">{hexagram.name}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-3">{hexagram.pinyin}</p>
            <div className="flex items-center justify-center gap-1">
              {hexagram.binary.split('').map((bit, index) => (
                <div 
                  key={index}
                  className={`h-2 w-6 rounded-sm ${bit === '1' ? 'bg-blue-600 dark:bg-blue-400' : 'bg-gray-300 dark:bg-gray-600'}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* 右侧：详细解读 */}
        <div className="w-full md:w-2/3">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              <i className="fa-solid fa-leaf mr-2 text-green-500"></i>自然象征
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{hexagram.nature}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              <i className="fa-solid fa-book-open mr-2 text-blue-500"></i>基本描述
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{hexagram.description}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              <i className="fa-solid fa-sitemap mr-2 text-purple-500"></i>代表情景
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{hexagram.scenario}</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              <i className="fa-solid fa-lightbulb mr-2 text-yellow-500"></i>建议
            </h3>
            <p className="text-gray-600 dark:text-gray-400">{hexagram.advice}</p>
           </div>
           
           <div className="mb-6">
             <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
               <i className="fa-solid fa-globe-asia mr-2 text-green-500"></i>现代情景应用
             </h3>
             <p className="text-gray-600 dark:text-gray-400">{hexagram.modernScenario}</p>
           </div>
           
           {/* 互动元素 */}
           <div className="flex gap-3">
             <button className="flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
               <i className="fa-solid fa-heart mr-2"></i>收藏
             </button>
             <button className="flex items-center px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
               <i className="fa-solid fa-share-alt mr-2"></i>分享
             </button>
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HexagramDetail;