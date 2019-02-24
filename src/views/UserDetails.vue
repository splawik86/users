<template>
    <div class="container">
        <div class="columns">
            <div class="column col-6">
                <h1>User details</h1>
                <h2>User id: {{ id }}</h2>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserDetails",
        props: {
            id: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>
