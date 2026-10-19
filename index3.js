const photos = [
  "https://i.pinimg.com/736x/2f/74/84/2f7484bd89dc9ca1b731bbc5dd117e68.jpg",
  "https://i.pinimg.com/736x/13/ae/c5/13aec5abae1a7deece6947c9ca7e22ce.jpg",
  "https://i.pinimg.com/736x/93/6e/46/936e463089ddd2a4c521c01c2c2758a9.jpg",
  "https://i.pinimg.com/webp87/736x/8a/e6/79/8ae679cd3cbcc499cd38926e51110205.webp",
  "https://i.pinimg.com/736x/a8/0a/46/a80a46e9e037f69a9dc3d24eb7513b5c.jpg",
];
const gallery = document.getElementById("gallery");

for (let i = 0; i < photos.length; i++) {
  const photostag = document.createElement("img");
  photostag.src = photos[i];
  photostag.style.width = "200px";
  photostag.style.height = "200px";
  gallery.appendChild(photostag);

  photostag.addEventListener('click', function(){
    
  })
}
