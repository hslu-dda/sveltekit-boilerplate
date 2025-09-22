<script>
    import { onMount, onDestroy } from "svelte";

    // import the p5 sketch sketch
    import mySketch from "../../lib/p5/p5sketch.js";

    let container;
    let p5Instance;

    // a variable that gets passed to the sketch below
    let myColor = "blue";

    // Don't prerender this but load it dinamically to the frontend in the browser
    onMount(async () => {
        // dynamically import p5 in the browser only
        const p5Module = await import("p5");
        const p5 = p5Module.default;

        // create a new p5 instance
        p5Instance = new p5(mySketch, container);
        // p5Instance?.setVariable("bgColor", myColor);
    });

    // In case the svelte frontend is destoyed
    onDestroy(() => {
        p5Instance?.remove();
    });

    // function to send data to the p5sketch
    const updateP5 = () => {
        // use the setVariables function defined in p5sketch.js
        p5Instance?.setVariables("bgColor", myColor);
    };
</script>

<!-- Were your sketch lives in the HTML, you can use the ID to place the sketch via app.css -->
<div id="p5-container" bind:this={container}></div>

<a class="p-2 underline" href="/">back</a>

<!-- Trigger the p5 sketch update -->
<button on:click={updateP5} >Blue Background</button>
