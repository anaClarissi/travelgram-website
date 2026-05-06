const photoGallery = document.querySelector("#photo-gallery");

photoGallery.innerHTML = "";

for (let i = 1; i <= 12; i++) {

    let photo = document.createElement("img");

    if (String(i).length == 1) {
        
        photo.setAttribute("src", `src/images/Image 0${i}.jpg`);

    } else {

        photo.setAttribute("src", `src/images/Image ${i}.jpg`);

    }
    
    photo.classList.add("photo");

    photoGallery.appendChild(photo);

}