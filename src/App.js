import { Routes, Route } from 'react-router-dom';
import { Error } from './pages/Error';
import { CreateEmployee } from './pages/CreateEmployee';
import { EmployeeList } from './pages/EmployeeList';

function App() {
  return (
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" index element={<CreateEmployee />} />
      <Route path="/employee-list" element={<EmployeeList />} />
    </Routes>
  );
}

export default App;