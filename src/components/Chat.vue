<template>
    <div>
        <h2 class="grey--text">Cool Chat</h2>
        <v-card class="ma-4">
            <v-card-title class="justify-center">
                <h2 class="grey--text ">Chat with {{ this.name }}</h2>
            </v-card-title>
                <v-list>
                    <v-list-item v-for="message in messages" :key="message.id">
                        <v-card flat class="ma-1">
                            <v-list-item-content>
                            <v-list-item-title class="pink--text">{{ message.name}}</v-list-item-title>
                            <v-list-item-title class="blue--text">{{ message.content}}</v-list-item-title>
                            <v-list-item-subtitle class="grey--text">{{ message.timestamp}}</v-list-item-subtitle>
                            
                    </v-list-item-content>
                        </v-card>
                    </v-list-item>
                </v-list>
        <NewMessage :name="name" /> 
        </v-card>
        <div>
                    
                   
       
         </div>
    </div>
</template>

<script>
import NewMessage from '@/components/NewMessage.vue'
import db from '@/firebase/init.js'
export default {
    name: 'Chat',
    components: {
        NewMessage,
    },
    props: ['name'],
    data: ()=> ({
        messages: [],
    }),
    created() {
        let ref = db.collection('message').orderBy('timestamp')
        ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type == 'added'){
                    let doc = change.doc
                    this.messages.push({
                        id: doc.id,
                        name: doc.data().name,
                        content: doc.data().content,
                        timestamp: doc.data().timestamp,
                    })
                }
            });
        })
    }
}
</script>

<style scoped>

</style>