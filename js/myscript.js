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
        let tableHead = data.usersTable;

        for(let i=0; i < tableHead.length; i++){
            let j = i+1
            $("#userTableHead th:nth-child("+j+")").text(tableHead[i].name)
        }
       

        let footerLinks = data.footerLinks;
        $("#footerLinks").html(
            footerLinks.map((link) => " <li><a href='"+ link.link +"'>"+ link.name +"</a></li>")
        )
       
    }
        )



})

