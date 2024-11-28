import { observer } from 'mobx-react-lite'
import { Suspense } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router'

import Home from '@/pages/home'

const App = observer(() => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
      </>
    )
  )
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  )
})

export default App
