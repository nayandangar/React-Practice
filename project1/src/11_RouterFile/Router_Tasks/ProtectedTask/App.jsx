import React from 'react'
import { CookiesProvider } from 'react-cookie'
import Router from './Router'

export default function App() {
  return (
    <div>
        <CookiesProvider>
            <Router/>
        </CookiesProvider>
    </div>
  )
}
