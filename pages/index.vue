<template>
  <div class="flex flex-col h-screen">
    <div class="flex flex-col p-4 text-center fixed top-0 w-full">
      <h1 class="text-6xl font-bold font-cursive">Greg Fallone</h1>
      <h2 class="text-4xl font-bold font-cursive">Handyman Extraordinaire</h2>
    </div>
    <div class="flex-grow flex justify-center items-center">
      <PiniaComponent />
    </div>
    <div class="flex flex-row justify-center items-center pb-10 w-full fixed bottom-0">
      <div class="mx-6">
        <button class="border-2 border-black rounded-full p-4 cursor-pointer bg-white text-black hover:bg-black hover:text-white transition-colors duration-200 shadow-sm">Fix It</button>
      </div>
      <div class="mx-6">
        <button class="border-2 border-black rounded-full p-4 cursor-pointer bg-white text-black hover:bg-black hover:text-white transition-colors duration-200 shadow-sm">About</button>
      </div>
    </div>
  </div>
</template>

