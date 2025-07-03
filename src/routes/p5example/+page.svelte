<script>
    // the content of the wrapper could also be inside this page file
    import P5Wrapper from "../../lib/p5/p5Wrapper.svelte";
    import mySketch from "../../lib/p5/p5sketch.js";
</script>

<P5Wrapper sketch={mySketch} />
<a class="p-2 underline" href="/">back</a>