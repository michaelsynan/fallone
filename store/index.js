import { defineStore } from 'pinia';

export const useStore = defineStore({
  id: 'items',
  state: () => ({
    "items": [
      {
        "name": "Plumbing",
        "id": "1",
        "description": "Description 1",
      },
      {
        "name": "Carpentry ",
        "id": "2",
        "description": "Description 2",
      },
      {
        "name": "Electrical",
        "id": "3",
        "description": "Description 3",
      }, 
      {
        "name": "Furniture Assembly",
        "id": "3",
        "description": "Description 3",
      }, 
      {
        "name": "Painting",
        "id": "4",
        "description": "Description 4",
      }
    ]
  })
})