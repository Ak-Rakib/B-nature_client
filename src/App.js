import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Route/Route';

function App() {
  return (
    <div data-theme="lofi">
       <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
