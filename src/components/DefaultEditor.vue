<template>
  <div v-if="editor" class="p-3 flex-col text-black">
    <menu-bar
      :editor="editor"
      class="p-1 flex-wrap flex justify-items-center"
    />
    <editor-content :editor="editor" class="mt-5" />
    <div class="editor__footer">
      <div :class="`editor__status editor__status--${status}`">
        <template v-if="status === 'connected'">
          {{ users.length }} user{{ users.length === 1 ? "" : "s" }} online in
          {{ room }}
        </template>
        <template v-else> offline </template>
      </div>
      <div class="editor__name">
        <button @click="setName">
          {{ currentUser.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Editor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import MenuBar from "./MenuBar.vue";
import Collaboration from "@tiptap/extension-collaboration";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import CharacterCount from "@tiptap/extension-character-count";
import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";
import { IndexeddbPersistence } from "y-indexeddb";

const getRandomElement = (list) => {
  return list[Math.floor(Math.random() * list.length)];
};

const getRandomRoom = () => {
  return getRandomElement(["rooms.7", "rooms.8", "rooms.9"]);
};

export default {
  components: {
    EditorContent,
    MenuBar,
  },

  data() {
    return {
      currentUser: JSON.parse(localStorage.getItem("currentUser")) || {
        name: this.getRandomName(),
        color: this.getRandomColor(),
      },
      provider: null,
      indexdb: null,
      editor: null,
      users: [],
      status: "connecting",
      room: getRandomRoom(),
    };
  },
  mounted() {
    const ydoc = new Y.Doc();
    this.provider = new WebsocketProvider(
      "ws://10.180.1.164:8080/",
      this.room,
      ydoc
    );
    this.provider.on("status", (event) => {
      this.status = event.status;
    });

    window.ydoc = ydoc;

    this.indexdb = new IndexeddbPersistence(this.room, ydoc);

    this.editor = new Editor({
      extensions: [
        StarterKit.configure({
          history: false,
        }),
        Highlight,
        TaskList,
        TaskItem,
        Collaboration.configure({
          document: ydoc,
        }),
        CollaborationCursor.configure({
          provider: this.provider,
          user: this.currentUser,
          onUpdate: (users) => {
            this.users = users;
          },
        }),
        CharacterCount.configure({
          limit: 10000,
        }),
      ],
    });

    localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
  },

  methods: {
    setName() {
      const name = (window.prompt("Name") || "").trim().substring(0, 32);

      if (name) {
        return this.updateCurrentUser({
          name,
        });
      }
    },

    updateCurrentUser(attributes) {
      this.currentUser = { ...this.currentUser, ...attributes };
      this.editor.chain().focus().user(this.currentUser).run();

      localStorage.setItem("currentUser", JSON.stringify(this.currentUser));
    },

    getRandomColor() {
      return getRandomElement([
        "#958DF1",
        "#F98181",
        "#FBBC88",
        "#FAF594",
        "#70CFF8",
        "#94FADB",
        "#B9F18D",
      ]);
    },

    getRandomName() {
      return getRandomElement([
        "Lea Thompson",
        "Cyndi Lauper",
        "Tom Cruise",
        "Madonna",
        "Jerry Hall",
        "Joan Collins",
        "Winona Ryder",
        "Christina Applegate",
        "Alyssa Milano",
        "Molly Ringwald",
        "Ally Sheedy",
        "Debbie Harry",
        "Olivia Newton-John",
        "Elton John",
        "Michael J. Fox",
        "Axl Rose",
        "Emilio Estevez",
        "Ralph Macchio",
        "Rob Lowe",
        "Jennifer Grey",
        "Mickey Rourke",
        "John Cusack",
        "Matthew Broderick",
        "Justine Bateman",
        "Lisa Bonet",
      ]);
    },
  },

  beforeUnmount() {
    this.editor.destroy();
    this.provider.destroy();
  },
};
</script>
