<!-- 
This example shows how to load data client and/or server side (a.k.a. in the browser).
It uses `fetch()` inside the `+page.js` file to load a static json file. 
See: https://svelte.dev/docs/kit/load
-->
<script>
    export let data;
    // log the data to the browser
    console.log(data);
</script>

<p class="p-2">See the console for the data that has been loaded (clientside)</p>
<a class="p-2 underline" href="/">back</a>
