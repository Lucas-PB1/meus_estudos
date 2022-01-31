window.onload = function () {

    // Variveis
    let photoName;
    let image;
    const reader = new FileReader();
    const loader = document.getElementById('photo-file');
    const cropButton = document.getElementById('crop-image');
    const downloadButton = document.getElementById('download');
    const photoPreview = document.getElementById('photo-preview');

    // Selecionar e visualizar
    document.getElementById('select-image').onclick = function () {
        loader.click();
    }

    loader.addEventListener('change', () => {
        let file = loader.files.item(0);
        photoName = file.name;
        reader.readAsDataURL(file);

        reader.onload = function (event) {
            image = new Image();
            image.src = event.target.result;
            image.onload = onLoadImage;
        }
    })

    // Ferramenta de seleção
    let startX, startY, relativeStartX, relativeStartY;
    let endX, endY, relativeEndX, relativeEndY;
    let startSelection = false;
    const selection = document.getElementById('selection-tool');

    const events = {
        mouseover() {
            this.style.cursor = 'crosshair';
        },
        mousedown() {
            const { clientX, clientY, offsetX, offsetY } = event;
            // console.table({
            //    'Client': [clientX, clientY],
            //    'Offset': [offsetX, offsetY]
            //})

            startX = clientX, startY = clientY;
            relativeStartX = offsetX, relativeStartY = offsetY;
            startSelection = true;
        },
        mousemove() {
            endX = event.clientX;
            endY = event.clientY;

            if (startSelection) {
                selection.style.display = 'initial';
                selection.style.top = startY + 'px';
                selection.style.left = startX + 'px';

                selection.style.width = (endX - startX) + 'px';
                selection.style.height = (endY - startY) + 'px';
            }
        },
        mouseup() {
            startSelection = false;

            relativeEndX = event.layerX;
            relativeEndY = event.layerY;

            cropButton.style.display = 'initial';
        },
    }
    Object.keys(events).forEach(eventName => {
        photoPreview.addEventListener(eventName, events[eventName])
    })

    // Canvas
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');

    function onLoadImage() {
        const { width, height } = image;

        canvas.width = width;
        canvas.height = height;

        // Limpar o contexto
        ctx.clearRect(0, 0, width, height);

        // Desenhar a imagem
        ctx.drawImage(image, 0, 0);

        photoPreview.src = canvas.toDataURL();
    }

    // Crop Button
    cropButton.onclick = () => {
        const { width: imgW, height: imgH } = image;
        const { width: preW, height: preH } = photoPreview;

        const [widthFactor, heightFactor] = [
            +(imgW / preW), +(imgH / preH)
        ];

        const [selectionWidth, selectionHeight] = [
            +selection.style.width.replace('px', ''),
            +selection.style.height.replace('px', '')
        ]

        const [croppedWidth, croppedHeight] = [
            +(selectionWidth * widthFactor),
            +(selectionHeight * heightFactor)
        ]

        const [actualX, actualY] = [
            +(relativeStartX * widthFactor),
            +(relativeStartY * heightFactor),
        ]

        // Pegando o contexto da imagem cortada
        const croppedImage = ctx.getImageData(actualX, actualY, croppedWidth, croppedHeight);

        // Limpando o contexto
        ctx.clearRect(0, 0, ctx.width, ctx.height);

        // Ajuste de proporções
        image.width = canvas.width = croppedWidth;
        image.height = canvas.height = croppedHeight;

        // Adicionar a imagem cortada ao contexto do canvas
        ctx.putImageData(croppedImage, 0, 0);

        // Esconde a ferramenta de seleção
        selection.style.display = 'none';

        // Atualizando o preview
        photoPreview.src = canvas.toDataURL();

        // Mostrar o botão de download
        downloadButton.style.display = 'initial';
        downloadButton.onclick = () => {
            const a = document.createElement('a');
            a.download = photoName + '--cropped.png';
            a.href = canvas.toDataURL();
            a.click();
        }
    }
}

