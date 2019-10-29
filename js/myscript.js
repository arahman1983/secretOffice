let labelDataUrl = "/json/ar.json";

$( document ).ready(()=>{
    // --------------------------- lables data ----------------------------------
    fetch(labelDataUrl)
    .then(res=>res.json())
    .then(data=> {
        $("#welcome").text(data.welcome);
        $("#signOut").text(data.signOut);
        $("#systemLog").attr("title",data.systemLog);
        $("#users").attr("title",data.users);
        $("#myFiles").attr("title",data.myFiles);
        $("#settings").attr("title",data.settings);

        let footerLinks = data.footerLinks;
        $("#footerLinks").html(
            footerLinks.map(link=> " <li><a href='"+ link.link +"'>"+ link.name +"</a></li>")
        )
       
    }
        )


    //-------------------------- include in Index ------------------
    $('#screens').load('logsDataTable.html');

})

