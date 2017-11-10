<template>
    <md-layout md-column>
        <md-layout md-column md-flex>
            <h1>Home Page</h1>
            <my-component></my-component>
        </md-layout>
        <md-bottom-bar>
            <md-bottom-bar-item md-icon="ondemand_video">Movies</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="music_note">Music</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="books" md-active>Books</md-bottom-bar-item>
            <md-bottom-bar-item md-icon="photo">Pictures</md-bottom-bar-item>
        </md-bottom-bar>
    </md-layout>
</template>
<script>
    export default {};
</script>
