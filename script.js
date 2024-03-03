document.addEventListener('DOMContentLoaded', function () {
    const gridContainer = document.querySelector('.grid-container');
    const selectedImageContainerEnemy = document.getElementById('enemyImageContainer');
    gridContainer.addEventListener('click', function (event) {
        if (event.target.tagName === 'IMG') {
            event.target.classList.toggle('grid-itemimg-hover');
            const selectedImagesEnemy = selectedImageContainerEnemy.querySelectorAll('.image-item');
            if (selectedImagesEnemy.length < 4) {
                const clonedImage = event.target.cloneNode(true);
                const imageItem = document.createElement('div');
                imageItem.classList.add('image-item');
                imageItem.appendChild(clonedImage);
                selectedImageContainerEnemy.appendChild(imageItem);
            } else {
                console.log(selectedImageContainerEnemy);
            }
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const gridContainer = document.querySelector('.grid-container');
    const enemyImageContainer = document.getElementById('enemyImageContainer');
    const myImageContainer = document.getElementById('myImageContainer');
    const enemyImageForm = document.getElementById('enemyImageForm');
    const myImageForm = document.getElementById('myImageForm');

    const selectedImages = [];
    gridContainer.addEventListener('click', function (event) {
        if (event.target.tagName === 'IMG') {

            const imageId = event.target.parentNode.id;

            const isSelected = selectedImages.includes(imageId);

            if (!isSelected) {
                selectedImages.push(imageId);
                console.log(selectedImages)
                const clonedImage = event.target.cloneNode(true);
                const imageItem = document.createElement('div');
                imageItem.classList.add('image-item');
                imageItem.appendChild(clonedImage);
                const team = event.target.closest('.section-inner').querySelector('.choise-text-my')
                    ? myImageContainer
                    : enemyImageContainer;
                team.appendChild(imageItem);
            } else {
                const index = selectedImages.indexOf(imageId);
                if (index !== -1) {
                    selectedImages.splice(index, 1);
                }
                console.log(selectedImages)
                const selectedImageItem = document.querySelector(`.image-item img[src="${event.target.src}"]`);
                if (selectedImageItem) {
                    selectedImageItem.parentNode.remove();
                }
            }
        }
    });
    enemyImageForm.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log('Enemy Team Selected Images:', selectedImages);
    });
    myImageForm.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log('My Team Selected Images:', selectedImages);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const gridContainers = document.querySelectorAll('.grid-container');
    const enemyImageContainer = document.getElementById('enemyImageContainer');
    const myImageContainer = document.getElementById('myImageContainer');
    const enemyImageForm = document.getElementById('enemyImageForm');
    const myImageForm = document.getElementById('myImageForm');
    const selectedImages = [];

    gridContainers.forEach(function (gridContainer) {
        gridContainer.addEventListener('click', function (event) {
            if (event.target.tagName === 'IMG') {
                const imageId = event.target.parentNode.id;
                const isSelected = selectedImages.includes(imageId);

                if (!isSelected) {
                    selectedImages.push(imageId);
                    console.log(selectedImages)
                    const clonedImage = event.target.cloneNode(true);
                    const imageItem = document.createElement('div');
                    imageItem.classList.add('image-item');
                    imageItem.appendChild(clonedImage);
                    const team = event.target.closest('.section-inner').querySelector('.choise-text-my')
                        ? myImageContainer
                        : enemyImageContainer;

                    team.appendChild(imageItem);
                } else {
                    const index = selectedImages.indexOf(imageId);
                    if (index !== -1) {
                        selectedImages.splice(index, 1);
                    }
                    console.log(selectedImages)
                    const selectedImageItem = document.querySelector(`.image-item img[src="${event.target.src}"]`);
                    if (selectedImageItem) {
                        selectedImageItem.parentNode.remove();
                    }
                }
            }
        });
    });
    enemyImageForm.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log('Enemy Team Selected Images:', selectedImages);
    });
    myImageForm.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log('My Team Selected Images:', selectedImages);
    });
});
// document.addEventListener('DOMContentLoaded', function () {
//     const gridContainer = document.querySelector('.grid-container');
//     const selectedImageContainerEnemy = document.getElementById('enemyImageContainer');
//     const enemyImageContainer = document.getElementById('enemyImageContainer');
//     const myImageContainer = document.getElementById('myImageContainer');
//     const enemyImageForm = document.getElementById('enemyImageForm');
//     const myImageForm = document.getElementById('myImageForm');
//     const selectedImages = [];

//     gridContainer.addEventListener('click', function (event) {
//         if (event.target.tagName === 'IMG') {
//             const imageId = event.target.parentNode.id;
//             const isSelected = selectedImages.includes(imageId);

//             if (!isSelected) {
//                 selectedImages.push(imageId);
//                 console.log(selectedImages)

//                 const clonedImage = event.target.cloneNode(true);
//                 const imageItem = document.createElement('div');
//                 imageItem.classList.add('image-item');
//                 imageItem.appendChild(clonedImage);

//                 const team = event.target.closest('.section-inner').querySelector('.choise-text-my')
//                     ? myImageContainer
//                     : enemyImageContainer;

//                 team.appendChild(imageItem);
//             } else {
//                 const index = selectedImages.indexOf(imageId);
//                 if (index !== -1) {
//                     selectedImages.splice(index, 1);
//                 }
//                 console.log(selectedImages)

//                 const selectedImageItem = document.querySelector(`.image-item img[src="${event.target.src}"]`);
//                 if (selectedImageItem) {
//                     selectedImageItem.parentNode.remove();
//                 }
//             }
//         }
//     });

//     enemyImageForm.addEventListener('submit', function (event) {
//         event.preventDefault();
//         console.log('Enemy Team Selected Images:', selectedImages);
//     });

//     myImageForm.addEventListener('submit', function (event) {
//         event.preventDefault();
//         console.log('My Team Selected Images:', selectedImages);
//     });
// });
