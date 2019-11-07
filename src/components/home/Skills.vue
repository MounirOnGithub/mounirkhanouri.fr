<template>
  <div>
    <v-layout row text-center>
      <v-flex my-12>
        <span class="title">{{ $t('skills.title') }}</span>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-flex md3 xs12>
        <img src="@/assets/home-skills/js.png" width="130" height="130" />
        <p>{{ $t('skills.javascript.title') }}</p>
        <p class="text-center mx-10">{{ $t('skills.javascript.description') }}</p>
      </v-flex>
      <v-flex md3 xs12>
        <img src="@/assets/home-skills/nodejs.png" width="130" height="140" />
        <p>{{ $t('skills.nodejs.title') }}</p>
        <p class="text-center mx-10">{{ $t('skills.nodejs.description') }}</p>
      </v-flex>
      <v-flex md3 xs12>
        <img src="@/assets/home-skills/golang.png" width="130" height="130" />
        <p>{{ $t('skills.golang.title') }}</p>
        <p class="text-center mx-10">{{ $t('skills.golang.description') }}</p>
      </v-flex>
      <v-flex md3 xs12>
        <img src="@/assets/home-skills/mongo.png" width="130" height="130" />
        <p>{{ $t('skills.mongo.title') }}</p>
        <p class="text-center mx-10">{{ $t('skills.mongo.description') }}</p>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "Skills"
};
</script>