import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from '@/pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
