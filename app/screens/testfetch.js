function start(){
    fetch('http://localhost:3000/data',{
    method:'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    
    body:JSON.stringify({"name":"abc","id":900})
})
}
start();