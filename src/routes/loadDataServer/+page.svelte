<!-- 
This example shows how to load data ONLY server side (a.k.a. NOT in the browser).
It uses `fetch()` inside the `+page.server.js` file to load a static json file. 
This can be used to "pre-render" static sites and to avoid using login credentials in the browser
-->
<script>
    export let data;
    // log the data to the browser
    console.log(data);
</script>

<p class="p-2">See the console for the data that has been loaded (serverside)</p>
<a class="p-2 underline" href="/">back</a>
