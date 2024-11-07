const app = Vue.createApp({
    data() {
        return {
            title: "Mastermind",
            messageBtn: "Start game",
            seconds: 30,
            timer: null, // to store the timer reference,
            numbers: [17, 18, 19, 20, 13, 14, 15, 16, 9, 10, 11, 12, 5, 6, 7, 8, 1, 2, 3, 4],
            colorsArray: ["red","orange","yellow","green","blue","purple","pink","brown","aqua"],
            secretCombination: [],
            choosenCharacter: "wolverine"
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
        },
        generatedSecretCombination () {
            for (let i = 0; i < 4; i++) {
                let randomColourIndex = Math.floor(Math.random() * this.colorsArray.length);
                this.secretCombination.push(this.colorsArray[randomColourIndex])
                console.log(this.secretCombination)
            }
        },
        handleCharacterChange(event){
            console.log('Character selected:', event.target.value);
            this.choosenCharacter=event.target.value
        },
        activatePower(power) {
            if (power==="heart") {
                this.seconds+=5
            }

        }
    },
    computed: {
        timerColorClass() {
            if (this.seconds > 15) {
                return 'green';
            } else if (this.seconds >= 6) {
                return 'yellow';
            } else {
                return 'red';
            }
        }
    }
})

app.mount("#app");