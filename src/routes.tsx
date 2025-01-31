import { createBrowserRouter } from 'react-router-dom'
import { FirstQuestion } from './pages/firstQuestion'
import { Dashboard } from './pages/dashboard'
import { SecondQuestion } from './pages/secondQuestion'
import { ThirdQuestion } from './pages/thirdQuestion'
import { FourthQuestion } from './pages/fourthQuestion'
import { FifthQuestion } from './pages/fifthQuestion'
import { SixthQuestion } from './pages/sixthQuestion'
import { SeventhQuestion } from './pages/seventhQuestion'

export const router = createBrowserRouter([
  { path: '/', element: <Dashboard />},
  { path: '/firstQuestion', element: <FirstQuestion />},
  { path: '/secondQuestion', element: <SecondQuestion />},
  { path: '/thirdQuestion', element: <ThirdQuestion />},
  { path: '/fourthQuestion', element: <FourthQuestion />},
  { path: '/fifthQuestion', element: <FifthQuestion />},
  { path: '/sixthQuestion', element: <SixthQuestion />},
  { path: '/seventhQuestion', element: <SeventhQuestion />},
])
