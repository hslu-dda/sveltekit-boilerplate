export async function load({fetch}) {
    // Load a static file inside 'static/data/' in the client (browser) 
    const res = await fetch('/data/manga.json');
    const data = await res.json();
  
    return {
      data
    };
  }