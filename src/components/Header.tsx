import React from 'react';
import { Search, Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function Header({ searchQuery, onSearchChange }: HeaderProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="bg-emerald-700 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              {language === 'bn' ? 'বাজার দর' : 'Market Prices'}
            </h1>
            <p className="text-emerald-100">
              {language === 'bn' 
                ? 'বাংলাদেশের দৈনিক বাজার দর' 
                : 'Daily Market Prices in Bangladesh'}
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setLanguage(language === 'bn' ? 'en' : 'bn')}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 px-3 py-2 rounded-lg transition-colors"
            >
              <Languages className="h-5 w-5" />
              {language === 'bn' ? 'English' : 'বাংলা'}
            </button>
            <div className="relative">
              <input
                type="text"
                placeholder={language === 'bn' ? 'পণ্য খুঁজুন...' : 'Search items...'}
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full md:w-64 px-4 py-2 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}