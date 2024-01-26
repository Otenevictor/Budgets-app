import { Route, Routes } from 'react-router-dom';
import Qrcode from '../pages/QrcodePage';
import UrlPage from '../pages/UrlPage';
import HomePage from '../pages/HomePage';
import ImageSearch from '../pages/ImageSearch';
import TodoList from '../pages/ToDoListPage';
import Login from '../pages/LoginPage';
import SignIn from '../pages/SignupPage';
import NotFound from '../pages/404Page';
import Dashboard from '../pages/Dashboard'
import Payout from '../pages/Payouts'

function RouteApp() {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="*" element={<NotFound />} />
      <Route path="/qrcode" element={<Qrcode/>} />
      <Route path="/urlpage" element={<UrlPage/>} />
      <Route path="/imagesearch" element={<ImageSearch/>} />
      <Route path="/todolist" element={<TodoList/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignIn/>} />
      <Route path="/payout" element={<Payout/>} />

    </Routes>
  </>
  )
}

export default RouteApp;