import { get_all_dirty_from_scope } from 'svelte/internal'
import { tables } from './stores.js'

export function test() {
    for (let table of getItem("tables"))
}