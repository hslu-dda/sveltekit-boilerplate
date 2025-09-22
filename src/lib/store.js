import { writable } from "svelte/store";

// define a variable to be shared across components
// should have default value to not breake the sketch
export const colorString = writable('pink');