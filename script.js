document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');

    const photos = [
        { src: 'assets/sophia1.jpg', description: '학교숙제 - 우표그리기' },
        { src: 'assets/sophia2.jpg', description: '미술대회 대상작품' },
        { src: 'assets/sophia3.jpg', description: '미술대회 대상 상장' },
        // 더 많은 사진 데이터를 여기에 추가하세요
    ];

    let loadedPhotos = 0;
    const photosPerLoad = 3;

    function createLoadingIndicator() {
        const loading = document.createElement('div');
        loading.className = 'loading';
        loading.innerHTML = 'Loading...';
        return loading;
    }

    function loadPhotos() {
        const loadingIndicator = createLoadingIndicator();
        gallery.appendChild(loadingIndicator);

        setTimeout(() => {
            gallery.removeChild(loadingIndicator);
            for (let i = 0; i < photosPerLoad; i++) {
                if (loadedPhotos >= photos.length) return;

                const photo = photos[loadedPhotos];
                const item = document.createElement('div');
                item.className = 'gallery-item';

                const img = document.createElement('img');
                img.src = photo.src;
                item.appendChild(img);

                const description = document.createElement('div');
                description.className = 'description';
                description.textContent = photo.description;
                item.appendChild(description);

                gallery.appendChild(item);
                loadedPhotos++;
            }
        }, 1000); // 1초 후에 사진 로드
    }

    function handleScroll() {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
            loadPhotos();
        }
    }

    window.addEventListener('scroll', handleScroll);

    // 초기 로드
    loadPhotos();
});
