import React, { ReactNode } from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import icon from "../images/icon.png"

interface SEOParams {
  title?: string;
  description?: string;
  pathname?: string;
  children?: ReactNode;
}

export const SEO = ({ title, description, pathname, children }: SEOParams) => {
  const { title: defaultTitle, description: defaultDescription, siteUrl, twitterUsername } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <link rel="icon" href={icon} />
      {children}
    </>
  )
}
