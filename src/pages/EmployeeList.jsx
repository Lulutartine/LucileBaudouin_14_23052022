import { EmployeeTable } from '../components/EmployeeTable';
import { Layout } from '../components/Layout';

/**
 * Render Employee List Page
 * @returns {JSX}
 */
export const EmployeeList = () => {
  return (
<Layout title="Employee List">
      <EmployeeTable />
    </Layout>
  );
};