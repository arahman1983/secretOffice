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
        $("#userroles").text(data.userroles)
        $("#adminLabel").text(data.adminLabel)
        $("#userLabel").text(data.userLabel)
        $("#userProfile").text(data.userProfile)
        $("#userData").text(data.userData)
        $("#addUserBtn").val(data.addUserBtn)
        $("#addUserBtn span").text(data.addUserBtn)
        $("#importUser span").text(data.importUser)
        $("#cancelBtn").text(data.cancelBtn)
        $("#userJobLabel").text(data.userJobLabel)
        $("#userPhoneLabel").text(data.userPhoneLabel)
        $("#userFullNameLabel").text(data.userFullNameLabel)
        $("#userEmailLabel").text(data.userEmailLabel)
        $("#userNameLabel").text(data.userNameLabel)
        $("#passWordLabel").text(data.passWordLabel)
        $("#passWordcoLabel").text(data.passWordcoLabel)
        $("#deleteModalLabel").text(data.deleteModalLabel)
        $("#cancelConfirm").text(data.cancelConfirm)
        $("#confirmDele").text(data.confirmDele)
        $("#certModalLabel").text(data.certModalLabel)
        $("#selectCert").text(data.selectCert)
        $("#noteCert").text(data.noteCert)
        $("#validateMess").text(data.validateMess)
        $("#validateMess").text(data.validateMessXls)
        $("#uploadCert").val(data.uploadCert)
        $("#importUSerModalLabel").text(data.importUSerModalLabel)
        $("#selectFile").text(data.selectCert)
        $("#notexls").text(data.notexls)
        $("#uploadfile").val(data.uploadfile)
        $("#signPageTitle").text(data.signPageTitle)
        $("#userNameLog").attr("placeholder",data.userNameLabel)
        $("#passwordLog").attr("placeholder",data.passWordLabel)
        $("#usernameValidate").text(data.usernameValidate)
        $("#passwordValidate").text(data.passwordValidate)
        $("#signInBtn").text(data.signPageTitle)
        $("#remrmberMe").text(data.remrmberMe)
        $("#forgetPass").text(data.forgetPass)
        $("#myFilesTitle").text(data.myFilesTitle)
        $("#encryptMainBtn").text(data.encryptMainBtn)
        $("#encryptFileTitle").text(data.encryptMainBtn)
        $("#signMainBtn").text(data.signMainBtn)
        $("#signFiles").text(data.signMainBtn)
        $("#signFileBtn").text(data.signMainBtn)
        $("#describLable").text(data.describLable)
        $(".required").text(data.requiredValid)
        $(".confirmUserId").text(data.confirmUserId)
        $(".confirmUserDone").text(data.confirmUserDone)
        $("#decryptFiles").text(data.decryptFiles)
        $("#emailLable").text(data.emailLable)
        $("#manyEmails").text(data.manyEmails)
        $("#describLableEnc").text(data.describLable)
        $("#encryptFileBtn").val(data.encryptMainBtn)
        $("#confirmSentData").text(data.confirmSentData)
        $("#confirmSentDataDone").text(data.confirmSentDataDone)
        $("#encrypting").text(data.encrypting)
        $("#encryptingDone").text(data.encryptingDone)


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

        let logheaders = data.systemLogs;
        for(let i=0; i < logheaders.length; i++){
            let j = i+1
            $("#systemLogsHeader th:nth-child("+j+")").text(logheaders[i].name)
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

