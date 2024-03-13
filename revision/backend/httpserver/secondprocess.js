function callback2(data){
    console.log(data);
}

function callback1(res) {
    res.json().then(callback2)
}
fetch("http://localhost:3000/handlesum?counter=90",{
    method:"GET"
}).then(callback1)