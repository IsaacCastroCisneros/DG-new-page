import React from 'react'
import { Helmet } from 'react-helmet'

export default function MyHelmetProduct(props) 
{
    const
    {
      titulo,
      descripcion,
      imagen,
      seo
    }=props
    
    return (
      <Helmet>
        <title>{`▷ ${titulo}`}</title>

        <meta name={titulo} content={descripcion} />

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

        <meta
          property="og:site_name"
          content="Centro de Capacitación y Desarrollo Global"
        />
        <meta property="fb:app_id" content="226972427818042" />

        <meta property="og:title" content={titulo} />
        <meta property="og:description" content={descripcion} />

        <meta property="og:image" content={imagen} />
        <meta property="og:image:secure_url" content={imagen} />

        <meta property="article:tag" content={seo} />
      </Helmet>
    );
}
