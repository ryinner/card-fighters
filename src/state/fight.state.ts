import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { MAX_TOUR_TIME_IN_MINUTES } from '../consts/cardsSettings.consts';
import timeFormatFunctional from '../functional/timeFormat.functional';

export const useFightStore = defineStore('fight', () => {
    const tour = ref({
        number: 0,
        timeLeft: 0,
        minutes: '0',
        seconds: '0'
    });

    const isPlayer = computed(() => tour.value.number % 2 !== 0);

    const startNewTour = () => {
        ++tour.value.number;
        tour.value.timeLeft = MAX_TOUR_TIME_IN_MINUTES * 60;

        const tourTimer = setInterval(() => {
            if (tour.value.timeLeft <= 0) {
                clearInterval(tourTimer);
                startNewTour();
            } else {
                tour.value.minutes = timeFormatFunctional(tour.value.timeLeft / 60);
                tour.value.seconds = timeFormatFunctional(tour.value.timeLeft % 60);
                --tour.value.timeLeft;
            }
        }, 1000);
    };

    const endTour = () => {
        tour.value.timeLeft = 0;
    };

    return {
        tour,
        isPlayer,
        startNewTour,
        endTour
    };
});
