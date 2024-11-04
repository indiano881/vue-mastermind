const app = Vue.createApp({
    data() {
        return {
            title: "Mastermind",
            messageBtn: "Start game",
            seconds: 30,
            timer: null // to store the timer reference
        }
    },
    methods: {
        startTime() {
            this.timer = setInterval(() => {
                if (this.seconds > 0) {
                    this.seconds -= 1;
                } else {
                    clearInterval(this.timer); // stop the timer when seconds reach 0
                }
            }, 1000);
        },
        stopTime() {
            clearInterval(this.timer); // optional method to stop the timer
        }
    }
})

app.mount("#app");