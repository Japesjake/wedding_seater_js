import { writable } from "svelte/store"

export const peopleData = writable(localStorage.getItem("userName") || "Default Value")
peopleData.subscribe((val) => localStorage.setItem("userName", val))