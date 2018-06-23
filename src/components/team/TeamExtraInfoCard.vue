<template>
    <md-card>
        <md-card-header>
            <md-card-header-text>
                <div class="md-title">
                    Team Information
                </div>
            </md-card-header-text>
            <md-card-expand-trigger>
                    <md-button class="md-icon-button">
                    <md-icon>keyboard_arrow_down</md-icon>
                    </md-button>
                </md-card-expand-trigger>
        </md-card-header>

        <md-card-content>
            City, Ohio
            <br>
            VanSant League
            <br>
            First year: 2015
            
        </md-card-content>

        <md-card-expand>
            <!-- <md-card-actions md-alignment="right">
                <md-card-expand-trigger>
                    <md-button class="md-icon-button">
                    <md-icon>keyboard_arrow_down</md-icon>
                    </md-button>
                </md-card-expand-trigger>
            </md-card-actions> -->

            <md-card-expand-content>
                    <md-card-content>
                        Description entered by team
                </md-card-content>
            </md-card-expand-content>
        </md-card-expand>
    </md-card>
</template>

<script>
export default {
    name: "TeamExtraInfoCard"
}
</script>

<style>
    .md-card{
        margin:8px;
    }
</style>