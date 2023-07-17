<template>
    <button class="button">
        <slot />
    </button>
</template>

<style lang="scss" scoped>
.button {
    transition: 300ms ease;
    color: var(--primary-color);
    font-size: 1.5rem;
    text-decoration: none;
    border: 1px solid var(--primary-color);
    padding: 0.5rem 2rem;
    background-color: transparent;
    cursor: pointer;
}
</style>