
    function validation(){
        var prtname = document.getElementById("name").value;
        if(prtname){
            document.getElementById("nameerror").style = "display:none";
        }
        else{
            document.getElementById("nameerror").style = "display:inline-block;color:red";
        }   
       
        
        var des=document.getElementById("des").value;
        if(des){
            document.getElementById("deserror").style = "display:none";
        }
        else{
            document.getElementById("deserror").style = "display:inline-block;color:red";
        } 
        
        var img=document.getElementById("img").value;
        if(img){
            document.getElementById("imgerror").style = "display:none";
        }
        else{
            document.getElementById("imgerror").style = "display:inline-block;color:red";
        } 

        var orgamt=document.getElementById("amt").value;
        if(orgamt){
            document.getElementById("amterror").style = "display:none";
        }
        else{
            document.getElementById("amterror").style = "display:inline-block;color:red";
        } 

        var distype=document.getElementById("distype").value;
        if(distype){
            document.getElementById("distypeerror").style = "display:none";
        }
        else{
            document.getElementById("distypeerror").style = "display:inline-block;color:red";
        } 

        var dis=document.getElementById("dis").value;
        if(dis){
            document.getElementById("diserror").style = "display:none";
        }
        else{
            document.getElementById("diserror").style = "display:inline-block;color:red";
        } 

        var max=document.getElementById("max").value;
        if(max){
            document.getElementById("maxerror").style = "display:none";
        }
        else{
            document.getElementById("maxerror").style = "display:inline-block;color:red";
        } 

        
        if(prtname && des && img && orgamt && distype && dis && max ){
            window.location.href = 'productinfo.html';
        }
        else{
            alert("Please Enter The Given Information");
        }

    }
