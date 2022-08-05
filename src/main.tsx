import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ContainerMain } from './styles/Global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <>
        <ContainerMain />
        <App />
    </>
)
