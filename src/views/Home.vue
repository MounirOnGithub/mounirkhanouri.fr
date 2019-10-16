<template>
  <v-layout row text-center>
    <v-flex xs12>
      <carousel />
    </v-flex>
    <v-flex md6 xs12 px-12>
      <presentation
        :title="$t('presentation.first.title')"
        :description="$t('presentation.first.description')"
      />
    </v-flex>
    <v-flex md6 xs12 px-12>
      <presentation
        :title="$t('presentation.second.title')"
        :description="$t('presentation.second.description')"
      />
    </v-flex>
    <v-flex xs12>
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
    </v-flex>
    <v-flex xs12>
      <contactform />
    </v-flex>
  </v-layout>
</template>

<script>
import Presentation from "@/components/home/Presentation";
import HomeCarousel from "@/components/home/HomeCarousel";
import ContactForm from "@/components/shared/ContactForm";

export default {
  name: "Home",
  components: {
    presentation: Presentation,
    carousel: HomeCarousel,
    contactform: ContactForm,
  }
};
</script>
