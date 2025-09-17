// This file can be executed in the browser, use only public keys!
// They can be imported from an .env file in the project root like so: 
// must be prefixed with PUBLIC_
// import { PUBLIC_API_KEY } from '$env/static/public';

export async function load({fetch}) {
    // Load a static file inside 'static/data/' in the client (browser) 
    const res = await fetch('/data/manga.json');
    const data = await res.json();
  
    return {
      data
    };
  }