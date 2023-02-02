import React from 'react'
import { Header } from '../Header/Header'

// Wrapped all children component to this to include header
export const Container = (props: any) => {

  return (
    <>
      <div>
        <Header />
        <div>
          {props.children}
        </div>
      </div>
    </>
  )
}
