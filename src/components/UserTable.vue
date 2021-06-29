<template>
    <!-- <h1>employ table</h1> -->
    <table border="1px" >
        <tr> 
            <td>Name</td>
            <td>User name</td>
            <td>email</td>
            <td>Phone number</td>
            <td>Street</td>
            <td>Suite</td>
            <td>City</td>
            <td>Zip code</td>
            <td>Geo location</td>
        </tr>
        <tr v-for="user in users" :key="user.id">
            <td>{{user.name}}</td>
            <td>{{user.username}}</td>
            <td>{{user.email}}</td>
            <!-- <td v-for="add in user.address" :key="add.zipcode">
                {{add}}
                </td> -->
            <td>{{user.phone}}</td>
            <td v-for="add in user.address" :key="add.zipcode">
                {{add}}
                </td> 
            <!-- <td>{{user.address}}</td> -->
        </tr>
    </table>
</template>

<script>
import * as axios from 'axios';

export default{
    name: 'UserTable',
    data() {
        return{
            users:undefined
        }
    },
    async mounted(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            this.users=res.data
            // console.log("data", res.data)
        })
        .catch(err =>
        console.error(err))
    }
}
</script>

<style scoped>
    table {
        margin-top: 17px;
    }
</style>