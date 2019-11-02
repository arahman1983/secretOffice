let labelDataUrl = "/json/ar.json";


$( document ).ready(()=>{
    // --------------------------- lables data ----------------------------------
if($("html").attr("lang") === "en"){
    labelDataUrl = "/json/en.json";
    $("root").css("--direction", "ltr")
}else{
    labelDataUrl = "/json/ar.json";
    $("root").css("--direction", "rtl")
}

    fetch(labelDataUrl)
    .then(res=>res.json())
    .then(data=> {
        $("#welcome").text(data.welcome);
        $("#signOut").text(data.signOut);
        $("#systemLog").attr("title",data.systemLog);
        $("#users").attr("title",data.users);
        $("#myFiles").attr("title",data.myFiles);
        $("#settings").attr("title",data.settings);
        $("#logTitle").text(data.systemLog)
        $("#usersTitle").text(data.users)
        $("#addUser").text(data.addUser)
        let tableHead = data.usersTable;

        for(let i=0; i < tableHead.length; i++){
            let j = i+1
            $("#userTableHead th:nth-child("+j+")").text(tableHead[i].name)
        }

        let filesData = data.filesTable
        for(let i=0; i < filesData.length; i++){
            let j = i+1
            $("#myfilesHeader th:nth-child("+j+")").text(filesData[i].name)
        }



        $("myfilesHeader")
        let footerLinks = data.footerLinks;
        $("#footerLinks").html(
            footerLinks.map((link) => " <li><a href='"+ link.link +"'>"+ link.name +"</a></li>")
        )
       
    }
        )



})



function deleteUploaded(file){
    let inputId = $(file).parent().siblings("label").find("input:file")[0];
    inputId.value = ""
    $("#Uploadedfile").text("")
}


$("#certAdd").change(function(e){
    certFile = e.target.files[0];
    let fileNme = e.target.files[0].name
    let filexte = (/[.]/.exec(fileNme)) ? /[^.]+$/.exec(fileNme)[0] : undefined;
    fileNme = fileNme.replace(`.${filexte}`, " ");

    if(filexte != "cert"){
        $(this).parent().siblings(".validateMess").removeClass("d-none");
        return false
    }

    $("#Uploadedfile").append(
            `
            ${fileNme}
            <i onclick="deleteUploaded(this)" class=" btn btn-link fas fa-minus-circle text-danger p-3"></i>
            `
        )
    })




    
function deleteImported(file){
    let inputId = $(file).parent().siblings("label").find("input:file")[0];
    inputId.value = ""
    $("#importedfile").text("")
}


$("#userImport").change(function(e){
    let fileNme = e.target.files[0].name
    let filexte = (/[.]/.exec(fileNme)) ? /[^.]+$/.exec(fileNme)[0] : undefined;
    fileNme = fileNme.replace(`.${filexte}`, " ");
    console.log(filexte)
    if(filexte != "xlsx" && filexte != "xls"){
        $(this).parent().siblings(".validateMess").removeClass("d-none");
        return false
    }

    $("#importedfile").append(
            `
            ${fileNme}
            <i onclick="deleteImported(this)" class=" btn btn-link fas fa-minus-circle text-danger p-3"></i>
            `
        )
    })

