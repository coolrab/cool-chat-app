<template>
  <div class="welcome ma-6">
   <h1 class="subheading grey--text">Welcome</h1>
   <v-card max-width="600" class="mx-auto pb-6">
     <v-card-title class="mx-6 pb-6  justify-center" >
       <h2 class="grey--text">Welcome</h2>
     </v-card-title>
     <v-card-text>
       <v-form class="mt-6 align-self-center" ref="form">
         <v-text-field label="Enter Your Name" prepend-icon="mdi-account-circle" v-model="name" :rules="nameRules" required></v-text-field>
       </v-form>
     </v-card-text>
     <!-- <v-card-action class=" d-flex justify-center"> -->
       <v-btn @click="submit" x-large="" text class="ma-auto pink white--text d-flex ">
         Enter Chat
       </v-btn>
     <!-- </v-card-action> -->
   </v-card>
    
  </div>
</template>

<script>
// @ is an alias to /src
// import Welcome from '@/components/Welcome.vue'

export default {
  name: 'Home',
  components: {
    // Welcome
  },
  data: ()=> ({
    name: '',
    nameRules: [
      // v => !!v || 'Name is required',
      // v => (v.length >= 3) || 'Minimum length is 3 characters',
      // v => (v && v.length <= 30) || 'Name must be less than 30 characters',
      v => !!v || 'You must enter a name to join',
      v => (v && v.length <= 20) || 'Name must be less than 20 characters',
      v => v.length >= 3 || 'Minimum length is 3 characters',
    ]
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$router.push({ name:'Chat', params: { name: this.name } })
      }
    }
  }
}
</script>
