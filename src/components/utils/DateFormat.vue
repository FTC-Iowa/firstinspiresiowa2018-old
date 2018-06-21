<template>
    <span>
        {{ date }}
    </span>
</template>

<script>
var dateFormat = require ('dateformat')

export default {
    name: "DateFormat",
    props: ["time"],
    data: () => ({
        //date: ""
    }),
    computed: {
        date: function() {
            return dateFormat(this.time.seconds*1000, "mmmm dS, yyyy")
        }
    }

}
</script>

<style>

</style>
