import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { persistor, store } from './app/store.ts'
import { PersistGate } from 'redux-persist/integration/react'
import InternetConnectionsProvider from './Providers/InternetConnections.tsx'


const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(

<ChakraProvider>
    <Provider store={store}>
  <InternetConnectionsProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Router>
      </QueryClientProvider>
  </InternetConnectionsProvider>
    </Provider>
</ChakraProvider>





)
