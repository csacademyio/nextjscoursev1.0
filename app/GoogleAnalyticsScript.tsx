import Script from 'next/script';
import React from 'react'

const GoogleAnalyticsScript = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-E720JHXSJ2"
      />
      {/* beforeInteractive means  the script is loaded before 
         nextjs injects any client side code - Hydration*/}
      {/* beforeInteractive is useful for things like cookie consent managers and bot detectors */}
      {/* afterInteractive -  tag managers and analytics*/}
      {/* lazyOnLoad - loads script after all resources have been fetched, good for low priority scripts and background scripts*/}
      <Script id="google-analytics">
        {`window.dataLayer= window.dataLayer || []
        function gtag(){dataLayer.push(arguments)}
        gtag("js", new Date())
        gtag("config", "G-E720JHXSJ1")`}
        {/* the trick to get rid of script errors is to use backticks with curly braces */}
      </Script>
    </>
  );
}

export default GoogleAnalyticsScript