const app = Vue.createApp({});

app.component("friend-contact", {
  template: `
  <li class="list_items box">
            <div class="name">{{friend.name}}</div>
            <button v-on:click="toggleButton()" class="btn">
              {{detaisIsShowed? 'Hide':'Show'}} details
            </button>
            <ul v-if="detaisIsShowed">
              <div class="text box">Phone: {{friend.phone}}</div>
              <div class="text box">Email: {{friend.email}}</div>
            </ul>
          </li>
  `,
  data() {
    return {
      detaisIsShowed: false,
      friend: {
        id: "willi",
        name: "William Borman",
        phone: "0 123 654 987",
        email: "bormanWM@gmail.com",
      },
    };
  },
  methods: {
    toggleButton() {
      this.detaisIsShowed = !this.detaisIsShowed;
    },
  },
});
app.mount(".container");
