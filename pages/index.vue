<template>
  <div>
    <Header/>
    <EffectGrid v-on:inspect="inspect"/>
    <InspectModal v-if="inspecting" v-bind:src="inspectSrc" v-on:close="closeInspect"/>
  </div>
</template>

<script>
import Header from "~/components/Header";
import EffectGrid from "~/components/EffectGrid";
import InspectModal from "~/components/InspectModal";
import { effects } from "~/assets/effects.js";

export default {
  components: { Header, EffectGrid, InspectModal },
  data() {
    return {
      effects,
      inspecting: false,
      inspectSrc: {}
    };
  },
  methods: {
    inspect(effectName) {
      this.inspecting = true;
      this.inspectSrc = this.effects[effectName];
    },
    closeInspect() {
      this.inspecting = false;
      this.inspectSrc = {};
    }
  },

  head() {
    return {
      bodyAttrs: {
        class: this.inspecting ? "inspecting" : ""
      }
    };
  }
};
</script>
