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


const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(


<Provider store={store} >

<QueryClientProvider client={queryClient}>

<Router>
        <ChakraProvider >

          <PersistGate loading={null} persistor={persistor}>
             <App />
          </PersistGate>
      </ChakraProvider>
</Router>

</QueryClientProvider>

</Provider>





)
