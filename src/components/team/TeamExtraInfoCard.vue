<template>
    <md-card>
        <!-- <md-card-media>
            <img width="100px" src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350" alt="CatPic1">
            <br>
            <img width="100px" src="https://images.pexels.com/photos/259803/pexels-photo-259803.jpeg?auto=compress&cs=tinysrgb&h=350" alt="CatPic2">
        </md-card-media> -->
        <!-- <md-card-media-cover md-solid>
            <md-card-media md-ratio="16:9">
                <img src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350" alt="CatPic1">
                <img src="https://images.pexels.com/photos/259803/pexels-photo-259803.jpeg?auto=compress&cs=tinysrgb&h=350" alt="CatPic2"> -->
            <!-- </md-card-media>

            <md-card-area>
                <md-card-header>
                    
                    <md-card-header-text>
                        <div class="md-title">
                            Team Description
                        </div>
                    </md-card-header-text>

                </md-card-header>
                
            </md-card-area>
        </md-card-media-cover> -->
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