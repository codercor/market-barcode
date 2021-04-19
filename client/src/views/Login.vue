<template>
  <v-container class="py-8 px-6">
    <v-row>
      <v-col cols="6" offset="3">
        <v-alert v-if="hasError" dense outlined type="error">
          Your <strong>email</strong> or <strong>password</strong> wrong
        </v-alert>
        <v-text-field
          label="Email"
          append-icon="mdi-email"
          outlined
          v-model="email"
        ></v-text-field>
        <v-text-field
          label="Password"
          :append-icon="passwordVisibility ? 'mdi-eye' : 'mdi-eye-off'"
          :type="passwordVisibility ? 'text' : 'password'"
          @click:append="togglePassword"
          v-model="password"
          @keydown.enter="login"
          outlined
        ></v-text-field>
        <v-btn color="blue-grey" @click="login" class="ma-2 white--text">
          Login
          <v-icon right dark> mdi-door </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  beforeMount(){
    if (this.isLogin) this.$router.push("/");
  },
  data() {
    return {
      passwordVisibility: false,
      email: "",
      password: "",
      hasError:false
    };
  },
  computed: {
    ...mapGetters(["isLogin"]),
  },
  methods: {
    togglePassword() {
      this.passwordVisibility = !this.passwordVisibility;
    },
    login() {
      const { email, password } = this;
      this.axios
        .post("/user/login", {
          email,
          password,
        })
        .then(({ data }) => {
          if (data.token) {
            this.$store.commit("setToken", data.token);
            this.$store.commit("setLogin", true);
            this.hasError = false;
            this.$router.push("/")
          } else {
            this.hasError = true;
          }
        });
    },
  },
};
</script>

<style>
</style>