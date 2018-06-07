<template>
    <div>The home page for Event # {{ $route.params.id }}<br>name: {{ name }}, email: {{ email }}.</div>
</template>

<script>
export default {
    name: "EventHome",
    data () {
        return {
            name: "world",
            email: "",
            mark: {}
        }
    },
    mounted () {
        
    }

}
</script>

<style>

</style>
