import { defineStore } from 'pinia';

export const useStore = defineStore({
  id: 'items',
  state: () => ({
    "items": [
      {
        "name": "Plumbing",
        "id": "1",
        "description": "I fix toilets, sinks, leaks, anything.",
      },
      {
        "name": "Carpentry ",
        "id": "2",
        "description": "Need a step fixd? I'm your guy."
      },
      {
        "name": "Electrical",
        "id": "3",
        "description": "Sockets, switches, lights, I do it all.",
      }, 
      {
        "name": "Furniture Assembly",
        "id": "3",
        "description": "I'll put it together so it won't fall apart.",
      }, 
      {
        "name": "Painting",
        "id": "4",
        "description": "From touchups to full rooms, I'll paint it right.",
      }
    ]
  })
})