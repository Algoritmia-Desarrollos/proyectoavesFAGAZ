document.addEventListener('DOMContentLoaded', function() {
    const pdfBtn = document.getElementById('downloadPdfBtn');
    const docBtn = document.getElementById('downloadDocBtn');

    pdfBtn.addEventListener('click', function() {
        const element = document.getElementById('pageContainer');

        // Opciones para la generación de PDF
        const opt = {
            margin:       0,  // <-- EL CAMBIO CLAVE: margen a cero
            filename:     'Fagaz_Presentacion.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2, useCORS: true, logging: true },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        // Genera y descarga el PDF
        html2pdf().set(opt).from(element).save();
    });

    docBtn.addEventListener('click', function() {
        downloadDoc();
    });

    function downloadDoc() {
        const header = `
            <html xmlns:o='urn:schemas-microsoft-com:office:office' 
            xmlns:w='urn:schemas-microsoft-com:office:word' 
            xmlns='http://www.w3.org/TR/REC-html40'>
            <head><meta charset='utf-8'><title>Fagaz - Presentación</title></head>
            <body>`;
        const footer = '</body></html>';
        const content = document.getElementById('pageContainer').innerHTML;
        const sourceHTML = header + content + footer;

        const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
        const fileDownload = document.createElement('a');
        document.body.appendChild(fileDownload);
        fileDownload.href = source;
        fileDownload.download = 'Fagaz_Presentacion.doc';
        fileDownload.click();
        document.body.removeChild(fileDownload);
    }
});