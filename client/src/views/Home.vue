<template>
  <v-container class="py-8 px-6" fluid>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-subheader>selami</v-subheader>
           <v-quagga :onDetected="logIt" :readerSize="readerSize" :readerTypes="['ean_reader']"></v-quagga>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";




export default {
 
  beforeMount() {
    if (!this.isLogin) this.$router.push("/login");
  },
  data(){
    return {
       readerSize: {
        width: 640,
        height: 480
      },
      detecteds: []
    }
  },
  methods:{
    logIt(data){
      this.axios.get( `/product/barcode/${data.codeResult.code}`).then(res=>{
        console.log(res);
      })
    }
  },
  computed: {
    ...mapGetters(["isLogin"]),
  },
};
</script>

<style>
</style>