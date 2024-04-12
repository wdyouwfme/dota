document.addEventListener('DOMContentLoaded', function () {
    const gridContainer = document.querySelector('.grid-container');
    const enemyImageContainer = document.getElementById('enemyImageContainer');
    const myImageContainer = document.getElementById('myImageContainer');
    const enemyImageForm = document.getElementById('enemyImageForm');
    const myImageForm = document.getElementById('myImageForm');
    let sendButton = document.querySelector('.sent');
    let activeTeam = 'myTeam'; // Инициализация активной команды

    let selectedImages = {
        myTeam: [],
        enemyTeam: []
    };

    gridContainer.addEventListener('click', function (event) {
        if (event.target.tagName === 'IMG' && !event.target.hasAttribute('aria-disabled')) {
            const imageId = event.target.parentNode.id;
            handleSelection(imageId, event.target);
        }
    });

    function handleSelection(imageId, target) {
        const isSelected = selectedImages[activeTeam].includes(imageId);

        if (!isSelected && selectedImages[activeTeam].length < 4) {
            selectedImages[activeTeam].push(imageId);
            console.log(selectedImages[activeTeam]);
            const clonedImage = target.cloneNode(true);
            const imageItem = document.createElement('div');
            imageItem.classList.add('image-item');
            imageItem.appendChild(clonedImage);
            activeTeam === 'myTeam' ? myImageContainer.appendChild(imageItem) : enemyImageContainer.appendChild(imageItem);
        } else if (isSelected) {
            const index = selectedImages[activeTeam].indexOf(imageId);
            if (index !== -1) {
                selectedImages[activeTeam].splice(index, 1);
            }
            console.log(selectedImages[activeTeam]);
            const selectedImageItem = document.querySelector(`.image-item img[src="${target.src}"]`);
            if (selectedImageItem) {
                selectedImageItem.parentNode.remove();
            }
        }

        if (selectedImages[activeTeam].length === 4) {
            switchTeam();
        }
    }

    function switchTeam() {
        activeTeam = activeTeam === 'myTeam' ? 'enemyTeam' : 'myTeam';
        console.log('Switched to', activeTeam, 'team');

        // Переключение активной формы
        if (activeTeam === 'myTeam') {
            myImageForm.style.display = 'block';
            enemyImageForm.style.display = 'none';
        } else {
            myImageForm.style.display = 'none';
            enemyImageForm.style.display = 'block';
        }
    }

    enemyImageForm.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log('Enemy Team Selected Images:', selectedImages.enemyTeam);
    });

    myImageForm.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log('My Team Selected Images:', selectedImages.myTeam);
    });
    //конопка
    sendButton.addEventListener('click', function() {
        let dataToSend = {
            myTeam: selectedImages.myTeam,
            enemyTeam: selectedImages.enemyTeam
        };
        fetch('http://localhost:8080/choose', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        })
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(function(data) {
            
            const imageElement = document.createElement('img');
            imageElement.src = data.imageLink; // Предположим, что imageUrl содержит ссылку на изображение
            imageElement.alt = 'image ' + data.imageAlt; // Предположим, что imageAlt содержит альтернативный текст для изображения
            document.body.appendChild(imageElement); 
    
            // Добавляем название изображения в параграф
            const paragraph = document.createElement('p');
            paragraph.textContent = data.name; // Предположим, что imageName содержит название изображения
            document.body.appendChild(paragraph); // Добавляем параграф в тело документа
        })
        .catch(function(error) {
            console.error('ошибка:', error);
        });
    });
});
