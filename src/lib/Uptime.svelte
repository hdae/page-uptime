<script lang="ts">
    import { intervalToDuration } from "date-fns";
    import { onMount } from "svelte";
    import { getCode, getLatest, getToken } from "./fitness";

    let data = "";
    let sleep = false;
    let nosig = false;

    onMount(async () => {
        const token = (await getToken()) ?? (await getCode());
        if (token === undefined) throw new Error("Something wrong!");

        let base: Date;
        const [start, end] = await getLatest(token);
        if (!isNaN(end)) {
            sleep = false;
            base = new Date(end);
        } else if (!isNaN(start)) {
            sleep = true;
            base = new Date(start);
        } else {
            data = "NO SIGNAL";
            nosig = true;
            return;
        }

        const update = () => {
            const duration = intervalToDuration({
                start: base,
                end: new Date(),
            });

            const _hours = duration.hours + duration.days * 24;
            const hours = `${_hours}`.padStart(2, "0");
            const minutes = `${duration.minutes}`.padStart(2, "0");
            const seconds = `${duration.seconds}`.padStart(2, "0");

            data = `${hours}:${minutes}:${seconds}`;
        };

        setTimeout(() => {
            update();
            setInterval(update, 1000);
        }, new Date().getTime() % 1000);

        setTimeout(() => location.reload(), 60 * 1000 * 10);
    });
</script>

<div class="data" class:sleep class:nosig>
    {data}
</div>

<style lang="scss">
    .data {
        color: white;

        &.sleep {
            color: #aaf;
        }

        &.nosig {
            color: #faa;
        }
    }
</style>
