
import React from 'react';
import { Employee } from '../types';
import { PencilIcon } from './icons/PencilIcon';
import { TrashIcon } from './icons/TrashIcon';

interface EmployeeListItemProps {
  employee: Employee;
  onEdit: (employee: Employee) => void;
  onDelete: (employee: Employee) => void;
}

const EmployeeListItem: React.FC<EmployeeListItemProps> = ({ employee, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 hover:shadow-lg transition-shadow duration-300">
      <img
        className="h-24 w-24 rounded-full object-cover"
        src={employee.avatarUrl}
        alt={`${employee.name}'s avatar`}
      />
      <div className="flex-grow text-center sm:text-left">
        <h2 className="text-xl font-bold text-neutral-dark">{employee.name}</h2>
        <p className="text-md text-primary-dark font-semibold">{employee.position}</p>
        <p className="text-sm text-neutral">{employee.department}</p>
        <div className="mt-2 flex flex-col sm:flex-row sm:space-x-4 text-sm text-neutral-dark">
            <span>{employee.email}</span>
            <span>{employee.phone}</span>
        </div>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => onEdit(employee)}
          className="p-2 text-neutral hover:text-primary transition-colors rounded-full hover:bg-primary-light"
          aria-label={`Edit ${employee.name}`}
        >
          <PencilIcon className="h-5 w-5" />
        </button>
        <button
          onClick={() => onDelete(employee)}
          className="p-2 text-neutral hover:text-red-600 transition-colors rounded-full hover:bg-red-100"
          aria-label={`Delete ${employee.name}`}
        >
          <TrashIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default EmployeeListItem;
