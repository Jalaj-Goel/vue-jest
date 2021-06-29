<template>
  <div class="hello">
<pre>{{JSON.stringify(formValues)}}</pre>
<!-- <h1>Form</h1> -->
<form @click="submitForm">
    <label for="u-name"> User Name</label>
    <input type="text" id ="u-name" v-model="formValues.uname"/>
     <label for="password"> Password</label>
    <input type="password" id ="password" v-model="formValues.password"/>
    <label for="address"> Address</label>
    <textarea id ="address" v-model="formValues.address"/>
    <label for="pin"> Pin</label>
    <input type="number" id ="pin" v-model="formValues.pin"/>
    <button id="submit"> Submit</button>
    </form>
    <UserTable />
    </div>
</template>

<script>
import UserTable from './UserTable.vue'
export default {
  components: { UserTable },
  name: 'HelloWorld',
  data(){
    return{
      formValues:{
        uname:'q',
        password:'',
        address:"",
        pin:null
      }
    }
  },
  methods:{
    submitForm(event){
      event.preventDefault()
      console.log("formValues",this.formValues)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  button {
    margin-left: 7px;
  }
  input, label, textarea {
    margin-left: 1%;
  }
</style>
