const profileImg = document.querySelector('.profile-img');
const galleryImages =document.querySelectorAll('.gallery-img');

profileImg.addEventListener('click', function() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    document.body.append(modal);

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    modal.appendChild(modalContent);

    const img = document.createElement('img');
    img.src = profileImg.src;
    img.alt = '赖瑜头像';
    img.style.width = '300px';
    img.style.height = '300px';
    
    modalContent.appendChild(img);
    
    const closeButton = document.createElement('button')
    closeButton.className = 'modal-clos-button';
    closeButton.innerHTML = 'x';
    modalContent.appendChild(closeButton);

    closeButton.addEventListener('click',function(){modal.style.display = 'none';});});

    galleryImages.forEach((image, index) => {
        image.addEventListener('click', function() {
            const modal = document.createElement('div');
            modal.className = 'modal';
            document.body.append(modal);

    const modalContent = document.createElement('div');
       modalContent.className = 'modal-content';
        modal.appendChild(modalContent);

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = '照片预览';
        modalContent.appendChild(img);

        const closeButton = document.createElement('button');
        closeButton.className = 'modal-close-button';
        closeButton.innerHTML = '×';
        modalContent.appendChild(closeButton);

        closeButton.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    });
});