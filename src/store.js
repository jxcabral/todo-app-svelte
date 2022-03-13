import { writable } from 'svelte/store'
import { getTodosFromCache } from './utils'

export const todos = writable(getTodosFromCache())