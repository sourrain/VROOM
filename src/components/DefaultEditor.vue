<template>
  <div v-if="editor" class="p-3 flex-col text-black">
    <menu-bar
      :editor="editor"
      class="p-1 flex-wrap flex justify-items-center"
    />
    <editor-content :editor="editor" class="mt-5" />
  </div>
</template>

<script>
import { Editor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";

import MenuBar from "./MenuBar.vue";

export default {
  components: {
    EditorContent,
    MenuBar,
  },

  data() {
    return {
      editor: null,
    };
  },

  mounted() {
    this.editor = new Editor({
      content: "<p>Here is the place to write ur thoughts</p>",
      extensions: [StarterKit, Highlight],
    });
  },

  beforeUnmount() {
    this.editor.destroy();
  },
};
</script>
<style scoped>
</style>