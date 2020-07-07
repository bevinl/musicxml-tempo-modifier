function dropHandler(ev) {

    console.log('File dropped');
       
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
    
    if (ev.dataTransfer.items) {
        // If dropped items aren't files, reject them
        if (ev.dataTransfer.items[0].kind === 'file') {

            var file = ev.dataTransfer.items[0].getAsFile();
            if (file.extension == '.musicxml') {
                changetempo(file);
            } else {
                console.log('File has wrong format ' + file.name);
            }         
        }
    } else {

        var file = ev.dataTransfer.files[0].getAsFile();
        if (file.extension == '.musicxml') {
            changetempo(file);
        } else {
            console.log('File has wrong format ' + file.name);
        }   
    }

}

function dragOverHandler(ev) {

    console.log('File in drop zone'); 
  
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();

}


function changetempo(file) {


}
