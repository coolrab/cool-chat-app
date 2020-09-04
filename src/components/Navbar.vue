<template>
    <nav>
        <v-app-bar flat app height="90">
            <v-app-bar-nav-icon class="grey--text"></v-app-bar-nav-icon>
            <v-badge size="40" icon="mdi-wechat" color="deep-purple accent-4" overlap bordered offset-x="60" offset-y="5">
            <v-toolbar-title class="text-uppercase grey--text" @click="goHome">
                <span class="font-weight-light">Cool</span>
                <span>Chat</span> 
            </v-toolbar-title>
            </v-badge>
            <v-spacer></v-spacer>
            <v-btn text color="grey">
                <span>Sign Out</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>
    </nav>
</template>

<script>
    export default {
       name: 'Navbar',
       data: ()=> ({

       }),
       methods: {
           goHome() {
               this.$router.push('/')
           }
       } 
    }
</script>

<style scoped>

</style>