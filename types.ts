
export interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  avatarUrl: string;
}

export type EmployeeInput = Omit<Employee, 'id' | 'avatarUrl'>;
