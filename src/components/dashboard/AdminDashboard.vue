<template>
    <div class='card-holder'>
        <md-card>
            <md-card-header>
                <div class="md-title">Users</div>
                <div class="md-subhead"></div>
            </md-card-header>
        </md-card>

        <md-card>
            <md-card-header>
                <div class="md-title">Leagues</div>
                <div class="md-subhead"></div>
            </md-card-header>
        </md-card>

        <md-card>
            <md-card-header>
                <div class='md-title'>Teams</div>
                <div class='md-subhead'></div>
            </md-card-header>
        </md-card>

        <md-card>
            <md-card-header>
                <div class='md-title'>Events</div>
                <div class='md-subhead'></div>
            </md-card-header>
        </md-card>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.card-holder {
    .md-card {
        width: 270px;
        margin: 6px;
        display: inline-block;
        vertical-align: top;    
        .md-title {
            font-size: large;
        }
    }
}

</style>
