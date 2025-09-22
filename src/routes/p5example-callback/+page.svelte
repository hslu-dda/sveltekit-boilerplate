<script>
    import { onMount, onDestroy } from "svelte";

    // import the p5 sketch sketch
    import mySketch from "../../lib/p5/p5sketchCallback.js";

    let container;
    let p5Instance;

    // a function & object to receive data from the sketch
    let sketchData = { x: 0, y: 0 };
    function getSketchData(payload) {
        // payload = anything your sketch decides to send (numbers, objects, etc.)
        sketchData = payload;
    }

    // Don't prerender this but load it dinamically to the frontend in the browser
    onMount(async () => {
        // dynamically import p5 in the browser only
        const p5Module = await import("p5");
        const p5 = p5Module.default;

        // create a new p5 instance & send the update function
        p5Instance = new p5((p) => mySketch(p, { onUpdate: getSketchData }), container);
    });

    // In case the svelte frontend is destoyed
    onDestroy(() => {
        p5Instance?.remove();
    });
</script>

<!-- Were your sketch lives in the HTML, you can use the ID to place the sketch via app.css -->
<div id="p5-container" bind:this={container}></div>

<a class="p-2 underline" href="/">back</a>
<p class="pl-2"> Ball Position X: {sketchData.x}, Y: {sketchData.y} </p>
