import React from 'react'
import { Helmet } from 'react-helmet';

export default function MyHelmet(props) 
{
  const
  {
    title,
    content
  }=props

  return (
    <Helmet>
      <title>{title}</title>
      <meta name={title} content={content} />
      <meta
        name="author"
        content="Centro de Capacitación y Desarrollo Global"
      />
      <meta
        name="google-signin-client_id"
        content="740073627785-npq9orne985ob2cs6j5qlb9m2sdsl2lg.apps.googleusercontent.com"
      />
      <meta
        name="google-site-verification"
        content="hWAwX4vVYax5SPwJoWF6AzsqmoKcV1XmuWQgHgqoD44"
      />
      <link
        rel="alternate"
        hreflang="es"
        href="https://aula.desarrolloglobal.pe/"
      />
      
      <meta property="og:site_name" content={title} />
      <meta property="fb:app_id" content="226972427818042" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={content} />
      <meta
        property="article:tag"
        content="Desarrollo global, centro de capacitaciones, cursos, diplomas"
      />
    </Helmet>
  );
}
