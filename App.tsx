
import React, { useState, useEffect, useCallback } from 'react';
import { Employee, EmployeeInput } from './types';
import * as employeeService from './services/employeeService';
import Header from './components/Header';
import EmployeeListItem from './components/EmployeeListItem';
import Modal from './components/Modal';
import EmployeeForm from './components/EmployeeForm';
import ConfirmationDialog from './components/ConfirmationDialog';
import { PlusIcon } from './components/icons/PlusIcon';
import { UserGroupIcon } from './components/icons/UserGroupIcon';

const App: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isFormModalOpen, setIsFormModalOpen] = useState<boolean>(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState<boolean>(false);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);
  const [employeeToDelete, setEmployeeToDelete] = useState<Employee | null>(null);

  const fetchEmployees = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await employeeService.getEmployees();
      setEmployees(data);
    } catch (err) {
      setError('Failed to fetch employees.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  const handleAdd = () => {
    setSelectedEmployee(null);
    setIsFormModalOpen(true);
  };

  const handleEdit = (employee: Employee) => {
    setSelectedEmployee(employee);
    setIsFormModalOpen(true);
  };

  const handleDelete = (employee: Employee) => {
    setEmployeeToDelete(employee);
    setIsConfirmModalOpen(true);
  };

  const handleSave = async (employeeData: EmployeeInput) => {
    try {
      if (selectedEmployee) {
        await employeeService.updateEmployee(selectedEmployee.id, employeeData);
      } else {
        await employeeService.addEmployee(employeeData);
      }
      setIsFormModalOpen(false);
      fetchEmployees();
    } catch (err) {
      setError('Failed to save employee.');
      console.error(err);
    }
  };
  
  const handleDeleteConfirm = async () => {
    if (employeeToDelete) {
      try {
        await employeeService.deleteEmployee(employeeToDelete.id);
        setIsConfirmModalOpen(false);
        setEmployeeToDelete(null);
        fetchEmployees();
      } catch (err) {
        setError('Failed to delete employee.');
        console.error(err);
      }
    }
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="text-center p-10">
          <p className="text-lg text-neutral">Loading employees...</p>
        </div>
      );
    }
    if (error) {
      return (
        <div className="text-center p-10 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          <p className="font-bold">Error</p>
          <p>{error}</p>
        </div>
      );
    }
    if (employees.length === 0) {
      return (
        <div className="text-center p-10 border-2 border-dashed border-gray-300 rounded-lg">
           <UserGroupIcon className="mx-auto h-12 w-12 text-gray-400" />
           <h3 className="mt-2 text-sm font-medium text-gray-900">No employees</h3>
           <p className="mt-1 text-sm text-gray-500">Get started by adding a new employee.</p>
           <div className="mt-6">
              <button
                onClick={handleAdd}
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                <PlusIcon className="-ml-1 mr-2 h-5 w-5" />
                New Employee
              </button>
           </div>
        </div>
      );
    }
    return (
      <div className="space-y-4">
        {employees.map(employee => (
          <EmployeeListItem
            key={employee.id}
            employee={employee}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-neutral-light font-sans">
      <Header onAddEmployee={handleAdd} />
      <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {renderContent()}
      </main>

      {isFormModalOpen && (
        <Modal
          title={selectedEmployee ? 'Edit Employee' : 'Add New Employee'}
          onClose={() => setIsFormModalOpen(false)}
        >
          <EmployeeForm
            employee={selectedEmployee}
            onSave={handleSave}
            onCancel={() => setIsFormModalOpen(false)}
          />
        </Modal>
      )}

      {isConfirmModalOpen && employeeToDelete && (
        <ConfirmationDialog
          title="Delete Employee"
          message={`Are you sure you want to delete ${employeeToDelete.name}? This action cannot be undone.`}
          onConfirm={handleDeleteConfirm}
          onCancel={() => setIsConfirmModalOpen(false)}
        />
      )}
    </div>
  );
};

export default App;
