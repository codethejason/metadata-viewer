//make sure document is loaded first
document.addEventListener('DOMContentLoaded', function(){
    //set variables
    var input = document.getElementById('input');
    var basicInfo = document.getElementById("basicInfo");

    //on change in input element execute function
    input.addEventListener("change", printMetaData, false);

    function printMetaData() {
        //set files json equal to the files uploaded
        var files = this.files;        
        basicInfo.innerHTML = files.length; //display number of files
    }
    
});