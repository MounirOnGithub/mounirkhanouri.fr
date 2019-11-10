<template>
  <v-layout row text-center>
    <v-flex xs12>
      <v-carousel v-if="!$vuetify.breakpoint.xsOnly" height="750">
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          reverse-transition="fade"
          transition="fade"
          continuous
        >
          <v-layout row>
            <v-flex xs12>
              <v-img :src="item.src" />
            </v-flex>
          </v-layout>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
    <v-flex md6 xs12 px-12 my-md-10>
      <presentation
        :icon="iconExchange"
        :title="$t('presentation.first.title')"
        :description="$t('presentation.first.description')"
      />
    </v-flex>
    <v-flex md6 xs12 px-12 my-md-10>
      <presentation
        :icon="iconHeart"
        :title="$t('presentation.second.title')"
        :description="$t('presentation.second.description')"
      />
    </v-flex>
    <v-flex xs12>
      <v-parallax height="600" :src="require('@/assets/office.jpg')">
        <v-layout row align-center>
          <v-flex py-5 mx-10>
            <contactform />
          </v-flex>
        </v-layout>
      </v-parallax>
    </v-flex>
    <v-flex xs12 my-10>
      <skills />
    </v-flex>
  </v-layout>
</template>

<script>
import Presentation from "@/components/home/Presentation";
import ContactForm from "@/components/shared/ContactForm";
import Skills from "@/components/home/Skills";

export default {
  name: "Home",
  components: {
    presentation: Presentation,
    contactform: ContactForm,
    skills: Skills
  },
  data() {
    return {
      iconHeart: {
        type: "mdi-heart-flash",
        color: "#E57373"
      },
      iconExchange: {
        type: "mdi-autorenew",
        color: "#81C784"
      },
      items: [
        {
          src: require("@/assets/mac.jpg")
        },
        {
          src: require("@/assets/mountain.jpg")
        },
        {
          src: require("@/assets/code-glass.jpg")
        }
      ]
    };
  }
};
</script>
