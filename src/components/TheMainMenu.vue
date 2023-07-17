<script lang="ts" setup>
import { ref } from 'vue';
import BaseButton from './BaseButton.vue';
import BaseLink from './BaseLink.vue';
import BaseModal from './BaseModal.vue';
import HowToPlay from './HowToPlay.vue';

const isHowToPlayOpen = ref(false);

const onOpenHowToPlay = () => {
    isHowToPlayOpen.value = true;
};

const onCloseHowToPlay = () => {
    isHowToPlayOpen.value = false;
};
</script>

<template>
    <div class="main-menu">
        <h1 class="main-menu__heading">
            Card Fighters
        </h1>
        <BaseLink
            :to="{
                name: 'choose-cards'
            }"
            class="main-menu__link"
        >
            Start
        </BaseLink>
        <BaseButton @click="onOpenHowToPlay">
            How to play?
        </BaseButton>
        <BaseModal
            :is-open="isHowToPlayOpen"
            @close="onCloseHowToPlay"
            @open="onCloseHowToPlay"
        >
            <template #header>
                How to play?
            </template>
            <template #body>
                <HowToPlay />
            </template>
        </BaseModal>
    </div>
</template>

<style lang="scss" scoped>
.main-menu {
    gap: var(--default-gap);
    display: flex;
    flex-direction: column;
}
</style>