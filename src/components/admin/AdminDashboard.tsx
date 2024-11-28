import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ProductList } from './ProductList';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { LogOut } from 'lucide-react';

export function AdminDashboard() {
  const { language } = useLanguage();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">
            {language === 'bn' ? 'অ্যাডমিন প্যানেল' : 'Admin Panel'}
          </h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            <LogOut className="h-4 w-4" />
            {language === 'bn' ? 'লগআউট' : 'Logout'}
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <ProductList />
      </main>
    </div>
  );
}