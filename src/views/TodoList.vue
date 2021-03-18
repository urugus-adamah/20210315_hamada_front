<template>
  <div class="container">
    <div class="card">
      <p class="title">Todo List</p>
      <div class="list">
        <div class="add-list flex">
          <input class="inp-add" type="text" v-model="todo">
          <button class="btn-add" @click="addTodo">追加</button>
        </div>
        <div class="update-list flex" v-for="item in todoLists" :key="item.id">
          <input type="text" class="inp-update" v-model="item.todo">
          <div class="btn-up-del"> 
            <button class="btn-update" @click="updataTodo(item.id,item.todo)">更新</button>
            <button class="btn-delete" @click="deleteTodo(item.id)">削除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
data(){
  return {
    todo:"",
    todoLists:[],
  };
},
methods:{
  async getList(){
    const resData = await axios.get("https://quiet-headland-16596.herokuapp.com/api/todo/");
    // const resData = await axios.get("http://127.0.0.1:8000/api/todo/");
    this.todoLists = resData.data.data;
  },
  async addTodo(){
    const sendData = {
      todo:this.todo,
    };
    await axios.post("https://quiet-headland-16596.herokuapp.com/api/todo/",sendData)
    // await axios.post("http://127.0.0.1:8000/api/todo/",sendData);
    await this.getList();
  },
  async updataTodo(id,todo){
    
    const sendData = {
      todo:todo,
    };
    await axios.put("https://quiet-headland-16596.herokuapp.com/api/todo/"+id,sendData);
    // await axios.put("http://127.0.0.1:8000/api/todo/"+id,sendData);
    await this.getList();
  },
  async deleteTodo(id){
    await axios.delete("https://quiet-headland-16596.herokuapp.com/api/todo/"+id);
    // await axios.delete("http://127.0.0.1:8000/api/todo/"+id);
    await this.getList();
  },
},
created(){
  this.getList();
},

};
</script>


<style scoped>

  p{
    font-weight: bold;
    font-size: 28px;
  }
  .container{
    height: 100vh;
    width: 100vw;
    position: relative;
    background-color: #2D197C;
  }

  .card{
    border-radius: 10px;
    width: 50%;
    position:absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
    padding: 30px;
    background-color: white;
  }
  .flex{
    display: flex;
  }

  .list{
    width: 100%;
  }
  .add-list {
    margin: 15px 0;
    justify-content: space-between;
  }
  .update-list{
    justify-content: space-between;
    margin-bottom: 10px;
  }
  input{
    font-size: 18px;
    border: #DAD7D7 solid 1px;
    padding: 8px 5px;
    border-radius: 5px;
    outline: none;
  }
  .inp-add{
    width: 80%;
  }
  .inp-update{
    width: 30%;
  }

  button{
    padding: 8px 15px;
    background-color: transparent;
    border: 2px solid;
    border-radius: 5px;
    font-size: 12px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.5s;
    outline: none;    
  }
  
  .btn-add{
    color: violet;
  }
  .btn-add:hover{
    background-color:violet ;
    color: white;
  }
  .btn-update{
    color: orange;
  }
  .btn-update:hover{
    background-color: orange;
    color: white;
  }
  .btn-delete{
    color: turquoise;
  }
  .btn-delete:hover{
    background-color: turquoise;
    color: white;
  }

  .btn-delete{
    margin-left: 5px;
  }

  </style>
