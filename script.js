const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "anna",
          name: "Anna Mull",
          phone: "0 123 456 789",
          email: "annaM@gmail.com",
        },
        {
          id: "john",
          name: "John Scwarzkopf",
          phone: "0 987 654 321",
          email: "scwarzkopf@gmail.com",
        },
        {
          id: "willi",
          name: "William Borman",
          phone: "0 123 654 987",
          email: "bormanWM@gmail.com",
        },
      ],
      detaisIsShowed: false,
    };
  },

  methods: {
    toggleButton() {
      this.detaisIsShowed = !this.detaisIsShowed;
    },
  },
});
app.mount(".container");
