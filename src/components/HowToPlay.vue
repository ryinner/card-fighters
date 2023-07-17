<script lang="ts" setup>
import { ref } from 'vue';
import cardsFactoryFunctional from '../functional/cardsFactory.functional';
import cardsMap from '../maps/cards.map';
import wightModel from '../models/wight.model';
import { Action } from '../types/actionsFormed.type';
import { CardsFighters } from '../types/cardsFighters.types';
import CardFighter from './CardFighter.vue';
import ThePlayerActionsPanel from './ThePlayerActionsPanel.vue';

const [firstTester, secondTester] = cardsMap;

const cardFighterPlayer = ref<CardsFighters>(cardsFactoryFunctional(firstTester));
const cardFighterEnemy = ref<CardsFighters>(cardsFactoryFunctional(secondTester));
const cardFighterEnemyAfterDamage = ref<CardsFighters>(cardsFactoryFunctional(secondTester));
cardFighterEnemyAfterDamage.value.takeDamage(1);
</script>

<template>
    <div class="how-to-play">
        <h2 class="how-to-play__heading">
            First: Pick your deck
        </h2>
        <h2 class="how-to-play__heading">
            Second: Push "Start"
        </h2>
        <h2 class="how-to-play__heading">
            Third: Pick your fighter
        </h2>
        <div class="how-to-play__example">
            <CardFighter
                v-if="(cardFighterPlayer instanceof wightModel)"
                :fighter="cardFighterPlayer"
                :is-player="true"
                :is-selected="false"
                class="how-to-play__card-fighter"
            />
            <div class="how-to-play__tip">
                -> "Click" ->
            </div>
            <CardFighter
                v-if="(cardFighterPlayer instanceof wightModel)"
                :fighter="cardFighterPlayer"
                :is-player="true"
                :is-selected="true"
                class="how-to-play__card-fighter"
            />
        </div>
        <h2 class="how-to-play__heading">
            Third: Pick fighter action
        </h2>
        <div class="how-to-play__example">
            <ThePlayerActionsPanel
                class="how-to-play__action-panel"
                :selected-action="undefined"
                :selected-card-fighter="<CardsFighters> cardFighterPlayer"
            />
            <div class="how-to-play__tip">
                -> "Click" ->
            </div>
            <ThePlayerActionsPanel
                class="how-to-play__action-panel"
                :selected-action="<Action> cardFighterPlayer.actions.attack"
                :selected-card-fighter="<CardsFighters> cardFighterPlayer"
            />
        </div>
        <h2 class="how-to-play__heading">
            Four: Attack enemy fighter or heal your
        </h2>
        <div class="how-to-play__example">
            <CardFighter
                v-if="(cardFighterEnemy instanceof wightModel)"
                :fighter="cardFighterEnemy"
                :is-player="false"
                :is-selected="false"
                class="how-to-play__card-fighter"
            />
            <div class="how-to-play__tip">
                -> "Click" ->
            </div>
            <CardFighter
                v-if="(cardFighterEnemyAfterDamage instanceof wightModel)"
                :fighter="cardFighterEnemyAfterDamage"
                :is-player="false"
                :is-selected="false"
                class="how-to-play__card-fighter"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.how-to-play {
    &__example {
        margin-top: 1rem;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
    }

    &__card-fighter {
        grid-column: 3 span;
    }

    &__tip {
        display: flex;
        grid-column: 3 span;
        justify-content: center;
        align-items: center;
    }

    &__action-panel {
        transform: none !important;
        left: inherit !important;
        position: inherit !important;
        grid-column: 3 span;
    }
}</style>