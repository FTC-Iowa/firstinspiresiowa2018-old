<template>
    <div class="search-area" :class="searchButtonClasses">
        <form>
            <input ref="searchBox" v-show="expanded" class="search-input" placeholder="Enter your search term..." type="search" value="" name="search" id="search">
            <!-- <input class="search-submit" type="submit" value=""> -->
            <!-- <span class="icon"> -->
            <md-button class="md-icon-button md-dense search-button" @click="buttonClicked">
                <md-icon>search</md-icon>
            </md-button>
            <!-- </span> -->
        </form>
    </div>
</template>

<script>
export default {
    name: "SearchButton",
    data: () => ({
        expanded: false
    }),
    methods: {
        buttonClicked() {
            console.log("button clicked");
            if(this.expanded){
                this.$emit('SearchExpanded', false);
                if(this.$refs.searchBox.value) {
                    console.log("value=", this.$refs.searchBox.value);
                    this.$router.push({path: "search", query: {q: encodeURIComponent(this.$refs.searchBox.value)}});
                }
                this.expanded = false;
            }else{
                this.$emit('SearchExpanded', true);
                this.expanded = true;
                this.$nextTick( () => {
                    this.$refs.searchBox.focus();
                })
            }
        }
    },
    computed: {
        searchButtonClasses() {
            return {
                'search-expanded': this.expanded
            }
        }
    }

}
</script>

<style lang="scss" scoped>
.search-area {
    height: 32px;
    margin-right: 10px;
    // 
    border-radius: 16px;
    overflow: hidden;
}

.search-input {
    width: 300px - 32px - 10px;
}

.search-expanded {
    background-color: lightgray;
}

.search-button {
    margin-left: 0;
}

.search-input {
    height: 32px;
    border-width: 0;
    padding-left: 10px;
    // margin-top: 5px;
    // margin-bottom: 5px;
}

</style>
