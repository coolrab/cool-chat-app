<template>
    <div class="mx-4">
        
                <v-form @submit.prevent.self="addMessage" class="mt-6 align-self-center" ref="form">
                    <v-text-field label="New Message ( press enter to add)" prepend-icon="mdi-pencil-circle" v-model="newMessage" :rules="inputRules"  required> </v-text-field>
                </v-form>
            
    </div>
</template>

<script>
import db from '@/firebase/init.js'
export default {
    name: 'NewMessage',
    props: ['name'],
    components: {
        //
    },
    data: ()=> ({
        newMessage: '',
        inputRules: [
        v => !!v || 'You must enter a message',
        ]
    }),
    methods: {
        addMessage(){
            if(this.$refs.form.validate()) {
                db.collection('message').add({
                    content: this.newMessage,
                    name: this.name,
                    timestamp: Date.now()
                }).catch(err => {
                    console.log(err)
                })
                this.newMessage = '',
                this.$refs.form.reset()
                this.$refs.form.resetValidation() 
            }
            
        }
    },
}
</script>

<style scoped>

</style>