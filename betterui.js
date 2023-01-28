function cc(){
    const oc = document.getElementById('oc').value;
    const nc = document.getElementById('nc').value;
    const amt = document.getElementById('amt').value;
    
    if(oc=='AUD' && nc=='AUD'){
        document.getElementById('ans').innerHTML = amt;
    }
    
    if(oc=='AUD' && nc=='USD'){
        document = amt*0.67*100.0 / 100.0
    }
    
    if(oc=='AUD' && nc=='YEN'){
        ans = amt*0.09*100.0 / 100.0
    }
    
    // switch(oc, nc){
    //     case('AUD', 'AUD'):{
    //         document.getElementById('ans').innerHTML = amt;
    //     }
    // }
    }