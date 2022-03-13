<script>
  import { todos } from "../store";
  import { afterUpdate } from 'svelte'
  import Todo from "./Todo.svelte";

  afterUpdate(() => {
    localStorage.setItem('todos', JSON.stringify($todos))
  })
</script>

<div class="list">
  {#each $todos as { done, value }, key}
    <Todo {done} {value} {key} />
  {/each}
</div>

<style>
  .list {
    max-height: 38rem;
    overflow: auto;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(109, 109, 109, 0.5);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
</style>
