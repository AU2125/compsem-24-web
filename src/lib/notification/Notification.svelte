<script lang="ts">
    import NotificationItem from "./NotificationItem.svelte";
    interface INotifcation {
        heading: string,
        content: string
    };

    export let notifications: INotifcation[];
</script>

<div class="flex flex-col gap-3 scroll-y overflow-scroll items-center max-h-64 justify-between w-2/3 ">
    {#each notifications as notification}
    <NotificationItem heading={notification.heading} content={notification.content} />
    {/each}
</div>
