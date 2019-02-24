<template>
    <tr class="active">
        <td>{{ user.id }}</td>
        <td>{{ fullName }}</td>
        <td>{{ user.wiek }}</td>
        <td>
            <button class="btn btn-error">
                <i class="icon icon-delete"></i>
            </button>
        </td>
        <td>
            <router-link class="btn btn-success" :to="{name: 'user', params: { id: user.id}}">
                <i class="icon icon-edit"></i>
            </router-link>

        </td>

    </tr>
</template>

<script>
    export default {
        name: "User",
        props: {
            user: {
                type: Object,
                required: true
            }
        },
        computed: {
            fullName() {
                return `${this.user.imie} ${this.user.nazwisko}`
            }
        }
    }
</script>

<style scoped>

</style>
