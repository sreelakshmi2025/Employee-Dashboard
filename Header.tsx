
import React from 'react';
import { PlusIcon } from './icons/PlusIcon';
import { UserGroupIcon } from './icons/UserGroupIcon';

interface HeaderProps {
  onAddEmployee: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddEmployee }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <UserGroupIcon className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-neutral-dark ml-3">
              Employee Dashboard
            </h1>
          </div>
          <button
            onClick={onAddEmployee}
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
          >
            <PlusIcon className="h-5 w-5 mr-2 -ml-1" />
            Add Employee
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
