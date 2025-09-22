<script>
    import { onMount, onDestroy } from "svelte";
    // import variable from store
    import { colorString } from "$lib/store.js";

    // import the p5 sketch sketch
    import mySketch from "../../lib/p5/p5sketchStore.js";

    let container;
    let p5Instance;

    // to read the current value from the store you need to subscribe.
    // The subscription is saved so it can be destroyed later
    let currentColorString = "";
    let colorStringSubscription = colorString.subscribe((value) => {
        currentColorString = value;
    });

    // define a placeholer for the input field
    let newColorString = "blue";

    // when some input is there & ENTER is pressed, update the store value
    function setNewColorString() {
        colorString.set(newColorString);
    }

    // Don't prerender this but load it dinamically to the frontend in the browser
    onMount(async () => {
        // dynamically import p5 in the browser only
        const p5Module = await import("p5");
        const p5 = p5Module.default;

        // create a new p5 instance
        p5Instance = new p5(mySketch, container);
    });

    // In case the svelte frontend is destoyed
    onDestroy(() => {
        p5Instance?.remove();
        // unsubscribe reading from the store
        colorStringSubscription();
    });
</script>

<!-- Were your sketch lives in the HTML, you can use the ID to place the sketch via app.css -->
<div id="p5-container" bind:this={container}></div>

<a class="p-2 underline" href="/">back</a>

<!-- An input field that overwrites the store -->
<!-- Only use new color string on pressing enter -->
<input
    class="mt-1 p-1 border b-black"
    bind:value={newColorString}
    on:keydown={(e) => {
        if (e.key === "Enter") {
            setNewColorString();
        }
    }}
/>
<p class="inline-block">Store Variable: {currentColorString}</p>
