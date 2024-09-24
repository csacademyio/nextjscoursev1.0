"use client"
import React from 'react'

interface Props {
    error: Error
    //Give the user to retry for temporary errors
    reset: () => void
    //next.js will automatically pass the reset function
}

//Use it on a logging services instead of
//Sentry.io
const GlobalError = ({error, reset}: Props) => {
  return (
    <div>
        GlobalError
        <button className="btn" onClick={() => reset()}>Retry</button>
        <h1>{error.message}</h1>
        </div>
  )
}

export default GlobalError