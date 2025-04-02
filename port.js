function toggleSchool() {
    const image = document.querySelector(".school .image-container");
    const details = document.querySelector(".school-details");

    image.classList.toggle('moved-up'); 
    details.classList.toggle('show-details');
}

function toggleInter() {
    const image = document.querySelector(".inter .image-container");
    const details = document.querySelector(".inter-details");

    image.classList.toggle('moved-up');
    details.classList.toggle('show-details');
}

function toggleTech() {
    const image = document.querySelector(".tech .image-container");
    const details = document.querySelector(".ug-details");

    image.classList.toggle('moved-up');
    details.classList.toggle('show-details');
}