// This file can only be executed on the server, never the browser!
// Keys can be imported from an .env file in the project root like so: 
// import { API_KEY } from '$env/static/private';

export async function load({fetch}) {
    // Load a static file inside 'static/data/' in the client (browser) 
    const res = await fetch('/data/manga.json');
    const data = await res.json();
  
    return {
      data
    };
  }