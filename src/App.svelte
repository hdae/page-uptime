<script lang="ts">
    // import FontFaceObserver from "fontfaceobserver";
    import Uptime from "./lib/Uptime.svelte";

    // const font = new FontFaceObserver("Rubik Pixels", { weight: 400 }).load();
</script>

<main>
    <div class="wrapper">
        <Uptime />
    </div>
</main>

<style lang="scss">
    main {
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        background-color: black;
        font-feature-settings: "tnum";
        font-family: "Rubik Pixels";
        font-size: 12vw;
    }
</style>
