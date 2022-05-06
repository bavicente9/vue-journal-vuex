<template>
  <navbar-daybook />

  <div class="d-flex">
      
    <entry-list class="col-4" />

    <div class="col">
      <router-view />
    </div>

  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    NavbarDaybook: defineAsyncComponent(() =>
      import("../components/NavbarDaybook.vue")
    ),
    EntryList: defineAsyncComponent(() =>
      import("../components/EntryList.vue")
    ),
  },
};
</script>