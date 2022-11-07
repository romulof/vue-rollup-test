<template>
    <div>
        <head>
            <h1>ADL Test project</h1>
        </head>
        <article>
            <ds-switch />
        </article>
    </div>
</template>

<script>
import { DsSwitch } from '@drivera/lib'

export default {
    name: "App",
    components: {
        DsSwitch
    },
    methods: {
        clickedButtonAction() {
            /*const numbers = multi(2*4);*/
            /*console.log(this, { numbers })*/
            console.log(this)
            // this.count += 1;
        }
    }
};
</script>

<style scoped>
</style>
