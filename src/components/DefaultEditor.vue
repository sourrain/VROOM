<template>
  <div v-if="editor" class="p-3">
    <menu-bar :editor="editor" />
    <editor-content :editor="editor" class="mt-5" />
  </div>
</template>

<script>
import { Editor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";

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
      extensions: [StarterKit],
    });
  },

  beforeUnmount() {
    this.editor.destroy();
  },
};
</script>
