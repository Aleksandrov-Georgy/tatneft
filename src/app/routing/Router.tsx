import { createHashRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from '@/pages/home';

const router = createHashRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
