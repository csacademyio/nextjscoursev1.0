"use client"
import React from 'react'

//Error pages cannot capture errors in our root layout
//Seperate error file for global-error.tsx 
const ErrorPage = () => {
  return (
    <div>An unexpected error has occured</div>
  )
}

export default ErrorPage