<template>
    <div>
        <Timeline :id="'twitterdev'" :sourceType="'profile'"/>
    </div>

    <!-- <a class="twitter-timeline"  href="https://twitter.com/hashtag/NSR2018" data-widget-id="971590766983303169">#NSR2018 Tweets</a>
    <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
    -->
</template>

<script>
import Timeline from 'vue-tweet-embed/timeline'
export default {
    components: {Timeline}

}
</script>

<style>

</style>
