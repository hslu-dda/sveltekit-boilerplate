<!-- 
This is an example that shows how D3 can be used with Svelte
Based on the official D3 Documentation: https://d3js.org/getting-started#d3-in-svelte 
Note: This runs in legacy mode as it uses $: reactive statements from Svelte4, see here: https://svelte.dev/blog/runes
-->
<script>
    // import the d3 library
    import * as d3 from "d3";

    // get the data from +page.js
    export let data;

    // size variables
    let width = 800;
    let height = 400;
    let marginTop = 5;
    let marginRight = 120;
    let marginBottom = 20;
    let marginLeft = 20;

    // Sort the data from small to big
    let vizData = d3.sort(data.data, (d) => d.value);

    // define the static x-pos and bar height
    let x = 0;
    let h = 6;

    // define the dynamic y-pos with a d3 scale
    $: y = d3.scaleLinear(
        [0, vizData.length - 1],
        [marginTop, height - marginBottom]
    );

    // define the dynamic width of the bars based on minMax
    let minMax = d3.extent(vizData, (d) => d.value);
    $: w = d3.scaleLinear(minMax, [marginLeft, width - marginRight]);
</script>

<div class="p-2">
    <svg {width} {height}>
        <g fill="white" stroke="black" stroke-width="1.5">
            <!-- Iterate over the data and draw the svg elements -->
            {#each vizData as d, i}
                <rect
                    key={i}
                    width={w(d.value)}
                    height={h}
                    {x}
                    y={y(i)}
                    fill="blue"
                    stroke="none"
                ></rect>
                <!-- Add a text label -->
                <text
                    x={w(d.value) + 5}
                    y={y(i) + 6}
                    fill="black"
                    stroke="none"
                    font-size="10">{d.label}, {d.value}</text
                >
            {/each}
        </g>
    </svg>
</div>
<a class="p-2 underline" href="/">back</a>
