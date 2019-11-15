let labelDataUrl = "plugins/json/ar.json";

function changelang(lang){
    localStorage.setItem("secretLangItem",lang);
    $("html").attr("lang",lang)    
    if($("html").attr("lang") === "en"){
        labelDataUrl = "plugins/json/en.json";
        $(":root").css("--direction", "ltr")
        $(":root").css("--left", "left")
        $(":root").css("--right", "right")
        $("#arMessages").attr("src",'')
    }else{
        labelDataUrl = "plugins/json/ar.json";
        $(":root").css("--direction", "rtl")
        $(":root").css("--left", "right")
        $(":root").css("--right", "left")
        $("#arMessages").attr("src",'plugins/ar/messages_ar.min.js')

    }
    readData();
    window.location.reload()
}


function readData(){
    
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
        $("#saveProfile").val(data.saveProfile)
        $("#resetPassTitle").text(data.resetPassTitle)
        $("#reaetEmail").attr("placeholder",data.reaetEmail)
        $("#resetPassBtn").text(data.resetPassBtn)
        $("#userOrPassword").text(data.userOrPassword)
        $("#changePass").text(data.changePass)


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
        $("#btnLang").text(footerLinks.name);
        $("#btnLang").click(function(){
            changelang(footerLinks.link)
        });
        
        $("#langBtn").text(footerLinks.name);
        $("#langBtn").click(function(){
            changelang(footerLinks.link)
        });
       
        
       
    }
        )
}

$( document ).ready(()=>{
    // --------------------------- lables data ----------------------------------
let sitLang = localStorage.getItem("secretLangItem");
$("html").attr("lang",sitLang)
if($("html").attr("lang") === "en"){
    labelDataUrl = "plugins/json/en.json";
    $(":root").css("--direction", "ltr")
    $("h1,h2,h3,h4,label").css("text-align","left")
    $(":root").css("--left", "left")
    $(":root").css("--right", "right")
    $("#arMessages").attr("src",'')
    
}else{
    labelDataUrl = "plugins/json/ar.json";
    $(":root").css("--direction", "rtl")
    $("h1,h2,h3,h4,label").css("text-align","right")
    $(":root").css("--left", "right")
    $(":root").css("--right", "left")
    $("#arMessages").attr("src",'plugins/ar/messages_ar.min.js')
}

readData()    
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


function redirectLinks(link){
    $("#screens").html('');
    $("#screens").load(link);
}



function showMessage(isTrue,message){
    $("#feedBack").removeClass("opacity");
    if(isTrue){
        $("#feedBack i").addClass("far fa-check-circle text-info").removeClass(("fas fa-exclamation-triangle text-danger"))
        $("#feedBack p").addClass("text-info").removeClass("text-danger")
        $("#feedBack p").text(message)
    }else{
        $("#feedBack i").addClass("fas fa-exclamation-triangle text-danger").removeClass("far fa-check-circle text-info")
        $("#feedBack p").addClass("text-danger").removeClass("text-info")
        $("#feedBack p").text(message)
    }
}

function hideMessage(){
    $("#feedBack").addClass("opacity");
}

$(document).mouseup(function(e) 
    {
        var container = $("#feedBack");

        if (!container.is(e.target) && container.has(e.target).length === 0) 
        {
            hideMessage()
        }
    });