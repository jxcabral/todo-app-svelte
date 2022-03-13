<script>
  import { todos } from "../store";
  
  let value = "";

  const addTodo = () => {
    const newTodo = { value, done: false }
    
    $todos = [newTodo,...$todos]
    value = ''
  }

  const addOnEnter = (evt) => {
    if(evt.key === 'Enter') {
      evt.preventDefault()
      addTodo()
    }
  }
  
</script>

<div class="box mb-6">
  <textarea id="todo-text" bind:value class="textarea has-fixed-size" placeholder="My awesome todo" rows="2" on:keydown={addOnEnter} />
  <button disabled={value === ""} on:click={addTodo} class="button is-success is-medium is-fullwidth mt-3">Create</button>
</div>

<style>
  div {
    width: 100%;
  }

  /* @media screen and (max-width: 414px) {
    textarea {
      width: 20rem;
    }
  } */
</style>
