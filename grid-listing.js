(() => {
	const POSTS_NUMBER = 60;
	const RANDOM_IMAGE_BASE_SRC = "https://picsum.photos/id";
	const IMAGE_PREVIEW_SIZE = 600;
	
	var grid = document.getElementById('container');

	for (let i = 0; i < POSTS_NUMBER; i++) {
		const gridItem = document.createElement('div');
		gridItem.className = 'child';

		const content = document.createElement('div');
		const displayAsVideoPreview = (i - 1) % 15 === 0;
		content.className = `content${displayAsVideoPreview ? ' video' : ''}`;
		
		const postPreview = new Image();
		postPreview.src = `${RANDOM_IMAGE_BASE_SRC}/${i + 1}/${IMAGE_PREVIEW_SIZE}`;
		postPreview.loading = "lazy";
		
		content.appendChild(postPreview);
		gridItem.appendChild(content);
		
		grid.appendChild(gridItem);
	}
})();