<!--
   - Notification Component
   -->
   <script lang="ts">
    export let heading: string;
</script>
<a class="max-w-[24rem]" href="#">
    <div class="group glass h-full p-4 rounded-lg text-white w-[20em] flex-wrap flex flex-col cursor-pointer hover:bg-slate-500/20">
    <div class="flex-1 mt-2 flex flex-col">
        <div class="font-bold text-xl text-wrap uppercase leading-tight flex-1 my-2">{heading}</div>
        <div class="flex justify-evenly overflow-hidden">
            <div class="glass font-thin uppercase rounded-full px-2 py-1 text-xs m-[2px]">Tech</div>
        </div>
    </div>
    </div>
</a> 