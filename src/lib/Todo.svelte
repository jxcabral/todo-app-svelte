<script>
  import { todos } from "../store";

  export let value;
  export let done;
  export let key;

  const classList = [
    "box",
    "is-flex",
    "is-clickable",
    "is-align-items-center",
    "has-text-weight-semibold",
    "is-justify-content-space-between",
  ];

  const makeCompleted = (index, event) => {
      if(event.target.tagName !== 'BUTTON') {
        $todos[index].done = !$todos[index].done
      }
  }

  const removeTodo = (value) => {
    $todos = $todos.filter(todo => todo.value !== value)
  }
</script>

<div class={classList.join(" ")} class:done on:click={e => makeCompleted(key, e)}>
  <div class="is-flex is-align-items-center">
    <button class="delete mr-3" on:click={e => removeTodo(value)}></button>
    <p>{value}</p>
  </div>
  <input type="checkbox" class="checkbox" bind:checked={done} />
</div>

<style>
  input {
    transform: scale(1.4);
  }

  div {
    width: 100%;
  }

  p {
    overflow-wrap: break-word;
    max-width: 86%;
  }

  .done {
    opacity: 0.5 !important;
    text-decoration: line-through;
  }

  .delete:hover {
      background: #e57373;
  }
</style>
