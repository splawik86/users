<template>
    <table class="table table-striped table-hover">
        <thead>
        <tr>
            <th>Lp.</th>
            <th>Name</th>
            <th>Age</th>
            <th>Remove user</th>
            <th>Edit data</th>
        </tr>
        </thead>
        <tbody>
            <User v-for="(user, index) in users" :user="user" :key="user.id"/>
        </tbody>
    </table>
</template>

<script>

    import User from "../components/User"
    export default {
        name: "Users",
        data() {
            return {
                users: [
                    {
                        id: 1, imie: 'Jan', nazwisko: 'Kowalski', wiek: 45
                    },
                    {
                        id: 2, imie: 'Tomasz', nazwisko: 'Rybak', wiek: 35
                    },
                    {
                        id: 3, imie: 'Emilia', nazwisko: "Wiosna", wiek: 25
                    },
                    {
                        id: 4, imie: 'Stanisław', nazwisko: 'Marusarz', wiek: 75
                    },
                    {
                        id: 5, imie: 'Krystian', nazwisko: 'Długopolski', wiek: 28
                    }
                ]
            }
        },
        components: {
            User
        }
    }
</script>

<style scoped>

</style>
