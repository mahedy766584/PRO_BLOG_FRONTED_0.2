import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { Toaster } from 'sonner';
import { PersistGate } from 'redux-persist/integration/react'
import LoadingSpinner from './components/common/LoadingSpinner'
import { proBlogRoute } from './routes/routes'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={<LoadingSpinner fullScreen={true}/>} persistor={persistor}>
      <RouterProvider router={proBlogRoute} />
      <Toaster />
    </PersistGate>
  </Provider>
)
