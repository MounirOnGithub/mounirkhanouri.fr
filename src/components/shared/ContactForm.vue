<template>
  <v-form v-model="valid">
    <v-container>
      <v-layout row>
        <v-flex xs12 my-12>
          <span class="title">{{ $t('home.form.title') }}</span>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 md4 px-2>
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="15"
            label="First name"
            required
          ></v-text-field>
        </v-flex>

        <v-flex xs12 md4 px-2>
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="15"
            label="Last name"
            required
          ></v-text-field>
        </v-flex>

        <v-flex xs12 md4 px-2>
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex>
          <v-textarea name="input-7-1" :label="$t('hints.form.message')" v-model="message" hint></v-textarea>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex>
          <v-btn color="primary">{{ $t('hints.form.send') }}</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>
<script>
export default {
  name: "ContactForm",
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      v => !!v || this.$t("errors.contactForm.name.required"),
      v => v.length <= 10 || this.$t("errors.contactForm.name.atLeastCharac")
    ],
    email: "",
    emailRules: [
      v => !!v || this.$t("errors.contactForm.email.required"),
      v => /.+@.+/.test(v) || this.$t("errors.contactForm.email.valid")
    ],
    message: ""
  })
};
</script>