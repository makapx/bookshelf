'use client'

import { Provider } from 'react-redux'
import { store } from '../lib/store'
import { BookView } from './components/BookView/BookView'

export default function Home() {
  return (
    <Provider store={store}>
      <main className='p-24 bg-base-100'>
        <BookView />
      </main>
    </Provider>
  )
}
