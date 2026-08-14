// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import AntiDrugForm from './pages/AntiDrugForm.jsx'
// import AntiDrugQR from './pages/AntiDrugQR.jsx'
// import './AntiDrug.css';

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     errorElement:<NotFound/>,
//     children:[
//       {
//         path: '/antidrug/form',
//         element: <AntiDrugForm />
//       },
//       {
//         path: '/antidrug/qr',
//         element: <AntiDrugQR />
//       }
//        ]
//   }
// ])
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )




import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import AntiDrugForm from './pages/AntiDrugForm.jsx';
import AntiDrugQR from './pages/AntiDrugQR.jsx';
import './AntiDrug.css';

import { createHashRouter, RouterProvider } from 'react-router-dom';

const router = createHashRouter([
  {
    path: "/",
    element: <AntiDrugQR />,
  },
  {
    path: "/antidrug/form",
    element: <AntiDrugForm />,
  },
  {
    path: "/antidrug/qr",
    element: <AntiDrugQR />,
  },
  {
    path: "*",
    element: (
      <div style={{ padding: '4rem', textAlign: 'center' }}>
        <h1>404 Not Found</h1>
        <p>The requested page could not be found.</p>
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);