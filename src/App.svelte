<script>
  import InputBox from "./lib/InputBox.svelte";
  import TodoList from "./lib/TodoList.svelte";
</script>

<main class="has-background-info is-flex is-flex-direction-column is-align-items-center">
  <h1 class="is-size-1 has-text-weight-bold has-text-white my-3">TODO APP</h1>
  <InputBox />
  <TodoList />
</main>

<style>
  main {
    height: 100vh;
    padding: 1.5rem;
  }

  @media (min-width: 1024px) {
    main {
      padding: 0 16rem;
    }
  }
</style>
