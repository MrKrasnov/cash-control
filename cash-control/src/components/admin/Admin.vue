<template>
    <div>
        <h1>Latest Users</h1>
        <!-- Get Users -->
        <hr>
        <p class="error" v-if="error">
            {{ error }}
        </p>
        <div 
        v-for="(user, index) in users"
        v-bind:item="user"
        v-bind:index="index"
        v-bind:key="user._id"
        >

            <p>{{ user.name }}</p>
            <p>{{ user.email }}</p>
            <p>{{ user._id }}</p>
        </div>
    </div>
</template>
<script>
import UserService from '../../UsersService';

export default {
    name: 'admin',
    data() {
        return{
            users: [],
            error: '',
        }
    },
    // Get Users
    async created() {
        try{
            this.users = await UserService.getUsers();
        } catch(err){
            this.error = err.message;
        }
    }
}
</script>