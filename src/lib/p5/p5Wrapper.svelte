<script>
    import { onMount, onDestroy } from 'svelte';
  
    // import the sketch from `p5sketch.js`
    export let sketch;
  
    let container;
    let p5Instance;
  
    // Don't prerender this but load it dinamically to the frontend in the browser
    onMount(async () => {
      // dynamically import p5 in the browser only
      const p5Module = await import('p5');
      const p5 = p5Module.default;
      
      // create a new p5 instance
      p5Instance = new p5(sketch, container);
    });
  
    // In case the svelte frontend is destoyed
    onDestroy(() => {
      p5Instance?.remove();
    });
  </script>
  
  <!-- Were your sketch lives in the HTML, you can use the ID to place the sketch via app.css -->
  <div id="p5-container" bind:this={container}></div>