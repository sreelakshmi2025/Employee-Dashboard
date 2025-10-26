
import { Employee, EmployeeInput } from '../types';

let employees: Employee[] = [
  { id: '1', name: 'Alice Johnson', position: 'Senior Frontend Developer', department: 'Engineering', email: 'alice.j@example.com', phone: '123-456-7890', avatarUrl: 'https://picsum.photos/seed/1/200' },
  { id: '2', name: 'Bob Smith', position: 'Product Manager', department: 'Product', email: 'bob.s@example.com', phone: '234-567-8901', avatarUrl: 'https://picsum.photos/seed/2/200' },
  { id: '3', name: 'Charlie Brown', position: 'UI/UX Designer', department: 'Design', email: 'charlie.b@example.com', phone: '345-678-9012', avatarUrl: 'https://picsum.photos/seed/3/200' },
  { id: '4', name: 'Diana Prince', position: 'Backend Engineer', department: 'Engineering', email: 'diana.p@example.com', phone: '456-789-0123', avatarUrl: 'https://picsum.photos/seed/4/200' },
  { id: '5', name: 'Ethan Hunt', position: 'DevOps Specialist', department: 'Operations', email: 'ethan.h@example.com', phone: '567-890-1234', avatarUrl: 'https://picsum.photos/seed/5/200' },
  { id: '6', name: 'Fiona Glenanne', position: 'QA Engineer', department: 'Engineering', email: 'fiona.g@example.com', phone: '678-901-2345', avatarUrl: 'https://picsum.photos/seed/6/200' },
];

const simulateDelay = (ms: number) => new Promise(res => setTimeout(res, ms));

export const getEmployees = async (): Promise<Employee[]> => {
  await simulateDelay(500);
  return [...employees];
};

export const addEmployee = async (employeeData: EmployeeInput): Promise<Employee> => {
  await simulateDelay(300);
  const newEmployee: Employee = {
    ...employeeData,
    id: String(Date.now()),
    avatarUrl: `https://picsum.photos/seed/${Date.now()}/200`,
  };
  employees.push(newEmployee);
  return newEmployee;
};

export const updateEmployee = async (id: string, employeeData: Partial<EmployeeInput>): Promise<Employee> => {
  await simulateDelay(300);
  const index = employees.findIndex(e => e.id === id);
  if (index === -1) {
    throw new Error('Employee not found');
  }
  employees[index] = { ...employees[index], ...employeeData };
  return employees[index];
};

export const deleteEmployee = async (id: string): Promise<void> => {
  await simulateDelay(300);
  const initialLength = employees.length;
  employees = employees.filter(e => e.id !== id);
  if (employees.length === initialLength) {
    throw new Error('Employee not found');
  }
};
