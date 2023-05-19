/*Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.*/
const { createApp } = Vue;

createApp({
  data() {
    return {

        immagineAttiva: 0,
        images: [
            {
                img: 'img/01.webp',
                title: "Marvel\\'s Spiderman Miles Morale",
                text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
            }, 
            {
                img: 'img/02.webp',
                title: 'Ratchet & Clank: Rift Apart',
                text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
            }, 
            {
                img: 'img/03.webp',
                title: 'Fortnite',
                text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
            }, 
            {
                img: 'img/04.webp',
                title: 'Stray',
                text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
            }, 
            {
                img: 'img/05.webp',
                title: "Marvel's Avengers",
                text: "Marvel\\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
            }
        ],
    }
    
  },
  methods: {
    topButton() {
        this.immagineAttiva++;
        if (this.immagineAttiva >= this.images.length) {
          this.immagineAttiva = 0;
        } else if (this.immagineAttiva < 0) {
          this.immagineAttiva = this.images.length - 1;
        }
      },
}
}).mount('#app')