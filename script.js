// Se usa 'DOMContentLoaded' para asegurar que el HTML esté completamente cargado antes de ejecutar el script.
document.addEventListener('DOMContentLoaded', function() {

    // Asignar funciones a los botones
    document.getElementById('downloadPdfBtn').addEventListener('click', function() {
        window.print();
    });

    document.getElementById('downloadDocBtn').addEventListener('click', function() {
        downloadDoc();
    });

    // Definir la función para descargar como DOC
    function downloadDoc() {
        // Preparamos el contenido HTML que se va a descargar.
        // Es importante incluir las cabeceras correctas para que Word lo reconozca.
        const header = `
            <html xmlns:o='urn:schemas-microsoft-com:office:office' 
            xmlns:w='urn:schemas-microsoft-com:office:word' 
            xmlns='http://www.w3.org/TR/REC-html40'>
            <head><meta charset='utf-8'><title>Export HTML to Word Document</title></head>
            <body>`;
        
        const footer = "</body></html>";
        
        // Obtenemos solo el contenido de las páginas
        const content = document.getElementById("pageContainer").innerHTML;
        
        const sourceHTML = header + content + footer;

        const source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
        
        const fileDownload = document.createElement("a");
        document.body.appendChild(fileDownload);
        fileDownload.href = source;
        fileDownload.download = 'el_progreso_sl.doc';
        fileDownload.click();
        document.body.removeChild(fileDownload);
    }
});