import React,{useState, useEffect} from "react";
import {Helmet} from "react-helmet";

function Header(){

    const [ manifest, setManifest ] = useState('')
  useEffect(()=>{
    var myDynamicManifest = {
        "name": "PWA de Estudo",
        "short_name": "PWA ESTUDO",
        "description": "Alguma descrição",
        "start_url": "https://fastidious-cascaron-86acd1.netlify.app",
        "background_color": "#000000",
        "theme_color": "#0f4a73",
        "icons": [
            {
              "src": "favicon.ico",
              "sizes": "64x64 32x32 24x24 16x16",
              "type": "image/x-icon"
            },
            {
              "src": "logo192.png",
              "type": "image/png",
              "sizes": "192x192"
            },
            {
              "src": "logo512.png",
              "type": "image/png",
              "sizes": "512x512"
            }
          ],
        }
        const stringManifest = JSON.stringify(myDynamicManifest);
        setManifest('data:application/json;charset=utf-8,' + encodeURIComponent(stringManifest))

      //  const link = document.createElement("link");
     //   link.rel = "manifest";    
      //  const stringManifest = JSON.stringify(myDynamicManifest);
      //  link.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(stringManifest))
       // document.head.appendChild(link);
  },[setManifest])
    return (
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Título dinamico</title>
                <link rel="manifest" href={manifest} />
            </Helmet>

        </div>
    );
  }
;

export default Header;