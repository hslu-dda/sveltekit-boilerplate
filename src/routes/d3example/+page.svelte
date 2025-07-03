<script>
    import * as d3 from "d3";

    export let data;
    let width = 800;
    let height = 400;
    let marginTop = 5;
    let marginRight = 120;
    let marginBottom = 20;
    let marginLeft = 20;


    console.log(data.data);
    console.log(d3.extent(data.data, (d) => d.value));

    let vizData = d3.sort(data.data, (d) => d.value);
    console.log(vizData);

    let x = 0;
    let h = 6;

    $: y = d3.scaleLinear([0, vizData.length - 1], [marginTop, height - marginBottom]);
    let minMax = d3.extent(vizData, (d) => d.value);
    $: w = d3.scaleLinear(minMax, [marginLeft, width - marginRight]);
</script>

<div class="p-2">
    <svg {width} {height}>
        <g fill="white" stroke="black" stroke-width="1.5">
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
                <text x={w(d.value) + 5} y={y(i) + 6} fill="black" stroke="none" font-size="10">{d.label}, {d.value}</text>
            {/each}
        </g>
    </svg>
</div>
<p class="p-2">A D3 Sketch</p>
<a class="p-2 underline" href="/">back</a>
