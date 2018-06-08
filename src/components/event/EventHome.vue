<template>
    <div>
        <!-- The home page for Event # {{ $route.params.id }}<br>name: {{ name }}, email: {{ email }}, foo: {{ eventData }}. -->
        <h1>{{eventData.name}}</h1>
    
    </div>
</template>

<script>
export default {
    name: "EventHome",
    props: ['eventData'],
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
