<template>
  <div class="container">
    <div class="card">
      <p class="title">Todo List</p>
      
      
      <div class="list">
        <div class="add-list flex">
          <input class="inp-add" type="text">
          <button class="btn-add">追加</button>
        </div>
        <div class="update-list flex">
          <input type="text" class="inp-update">
          <div class="btn-up-del"> 
            <button class="btn-update">更新</button>
            <button class="btn-delete">削除</button>
          </div>
        </div>
        <div class="update-list flex">
          <input type="text" class="inp-update">
          <div class="btn-up-del"> 
            <button class="btn-update">更新</button>
            <button class="btn-delete">削除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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

  .btn-up-del{
    display: flex;
    width: 31%;
    justify-content: space-between;
  }
  </style>
