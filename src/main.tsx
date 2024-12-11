import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, createRoutesFromElements ,Outlet,Route, RouterProvider} from 'react-router-dom'
import RefTest from './RefTest.tsx'
import TextareaTest from './TextareaTest.tsx'
import SelectTest from './SelectTest.tsx'
import ReadAndWrite from './ReadAndWrite.tsx'
import FieldArrayEx from './FieldArrayEx.tsx'
import FieldArrayCheckboxPage from './FieldArrayCheckboxPage.tsx'


const router = createBrowserRouter(createRoutesFromElements(
<Route path='/' element={<Outlet />}>
  <Route path='' element={<App />} />
  <Route path='ref' element={<RefTest />} />
  <Route path='textarea' element={<TextareaTest />} />
  <Route path='select' element={<SelectTest />} />
  <Route path='read' element={<ReadAndWrite />} />
  <Route path='field-array' element={<FieldArrayEx />} />
  <Route path='field-checkbox' element={<FieldArrayCheckboxPage />} />
</Route>))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
