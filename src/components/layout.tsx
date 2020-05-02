import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import "../styles/style.scss"
import CookieConsent from 'react-cookie-consent'
import { CategoryEntries } from "./category-entries"
import { ImportMarkdown } from "./import-markdown"
import { Navbar } from "./navbar"
import { Footer } from "./footer"
import { WishWidget, ShareTripWidget, TripPlannerWidget, WishCounterWidget } from "../wish-to-go-plugin/wtg-widgets"
import { StartWishToGo } from "../wish-to-go-plugin/start-wish-to-go"

export const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <MDXProvider
      components={{
        CategoryEntries, ImportMarkdown, 
        WishWidget, TripPlannerWidget, WishCounterWidget, ShareTripWidget, StartWishToGo
      }}
    >

      <Navbar/>
      
      <main>
        <section>
          <div className="content">
              {children}
          </div>
        </section>
      </main>

      <Footer />
    
      <CookieConsent acceptOnScroll={true}>
        We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.
      </CookieConsent>

    </MDXProvider>
  )
}
