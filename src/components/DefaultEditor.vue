<template>
  <div v-if="editor" class="p-3 flex-col text-black">
    <menu-bar
      :editor="editor"
      class="p-1 flex-wrap flex justify-items-center border-b-4 border-black"
    />
    <editor-content :editor="editor" class="mt-5 prose" />
    <div class="text-gray-400">
      {{ editor.getCharacterCount() }}/{{ limit }} characters
    </div>
    <div
      class="
        flex
        items-center
        justify-between
        flex-wrap
        mt-5
        p-1
        border-t-4 border-black
      "
    >
      <div :class="`editor__status editor__status--${status}`">
        <template v-if="status === 'connected'">
          <div class="text-green-400">
            {{ users.length }} user{{ users.length === 1 ? "" : "s" }} online in
            {{ room }}
          </div>
        </template>
        <template v-else>
          <div class="text-red-400">offline</div>
        </template>
      </div>
      <div class="editor__name">
        <button @click="setName">
          Your Username is:
          <span class="text-green-400"> {{ currentUser.name }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Editor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import MenuBar from "./MenuBar.vue";
import Collaboration from "@tiptap/extension-collaboration";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import CharacterCount from "@tiptap/extension-character-count";
import * as Y from "yjs";
import { WebsocketProvider } from "y-websocket";
import { IndexeddbPersistence } from "y-indexeddb";
import Image from "@tiptap/extension-image";

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
    //debugger

    this.indexdb = new IndexeddbPersistence(this.room, ydoc);

    this.editor = new Editor({
      extensions: [
        StarterKit,
        Highlight,
        TaskList,
        TaskItem,
        Image,
        Collaboration.configure({
          document: ydoc,
        }),
        // Register the collaboration cursor extension
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
      contents: `
      <strong>Hi there,</strong>
      <p>
this is a basic example of VROOM.
Isn’t that great? And all of that is editable.
I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
Wow, that’s amazing. Good Luck! 👏 — VROOM Wizard</p>`,
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

  clearHistory() {
    this.editor.destroy();
    this.provider.destroy();
  },
  clearContent() {
    this.editor.clearContent(true);
    this.editor.focus();
  },
};
</script>
