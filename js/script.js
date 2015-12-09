//make sure document is loaded first
document.addEventListener('DOMContentLoaded', function(){
    //set variables
    var input = document.getElementById('input');
    var basicInfo = document.getElementById("basicInfo");
    var filesDiv = document.getElementById("files");

    //on change in input element execute function
    input.addEventListener("change", printMetaData, false);

    function printMetaData() {
        var template = document.getElementById("fileTemplate");
        //set files json equal to the files uploaded
        var files = this.files;        
        //display number of files
        basicInfo.innerHTML = "You have just uploaded " + files.length + "file(s)."; 
        for(var counter = 0; counter < files.length; counter++) {
            //clone the template inside content into a new div element
            var tmpl = template.content.cloneNode(true);
            //add the information to the appropriate divs
            tmpl.querySelector('.name').innerHTML = files[counter].name;
            tmpl.querySelector('.size').innerHTML = files[counter].size;
            tmpl.querySelector('.type').innerHTML = files[counter].type;
            tmpl.querySelector('.date').innerHTML = files[counter].lastModifiedDate;
            //append the file div
            filesDiv.appendChild(tmpl);
        }
    }
    
});