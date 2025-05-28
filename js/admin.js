function validateForm(){
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let description = document.getElementById("description").value;
    let price = document.getElementById("price").value;

    if(name == ""){
        alert("Debe ingresar Nombre");
        return false
    }
    if(address == ""){
        alert("Debe ingresar Dirección");
        return false
    }
    if(description == ""){
        alert("Debe ingresar Descripción");
        return false
    }
    if(price == ""){
        alert("Debe ingresar Precio");
        return false
    }
    else if(price<0){
        alert("El precio no puede ser menor que cero")
        return false
    }
    return true
}

function showData(){
    let listaSalones;
    if(localStorage.getItem("listaSalones")== null){
        listaSalones = []
    }
    else{
        listaSalones = JSON.parse(localStorage.getItem("listaSalones"))
    }

    let html="";
    listaSalones.forEach(function(element,index){
        html += "<tr>";
        html += "<td>" + element.name +  "</td>";
        html += "<td>" + element.address +  "</td>";
        html += "<td>" + element.description +  "</td>";
        html += "<td>" + element.price +  "</td>";
        btDelete = '<button onclick ="deleteData(' + index + ')" class="btn btn-danger">Eliminar</button>';
        btEdit =  '<button onclick ="updateData(' + index + ')" class="btn btn-warning">Editar</button>';
        html += '<td>'+ btDelete + btEdit +'</td>'
    });
    document.querySelector("#crudTable tbody").innerHTML = html;
}

document.onload = showData()

function addData(){
    if(validateForm()==true){
        var name = document.getElementById("name").value;
        var address = document.getElementById("address").value;
        var description = document.getElementById("description").value;
        var price = document.getElementById("price").value;
    }

    let listaSalones;
    if(localStorage.getItem("listaSalones")== null){
        listaSalones = []
    }
    else{
        listaSalones = JSON.parse(localStorage.getItem("listaSalones"))
    }

    listaSalones.push(
        {
            name: name,
            address: address,
            description: description,
            price: price
        }
    )
    localStorage.setItem("listaSalones", JSON.stringify(listaSalones));
    showData()
    
    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
    document.getElementById("description").value = "";
    document.getElementById("price").value = "";
}

function deleteData(index){
    let listaSalones;
    if(localStorage.getItem("listaSalones")== null){
        listaSalones = []
    }
    else{
        listaSalones = JSON.parse(localStorage.getItem("listaSalones"))
    }
    listaSalones.splice(index, 1);
    localStorage.setItem("listaSalones", JSON.stringify(listaSalones));
    showData();
};

function updateData(index){
    document.getElementById("Submit").style.display = "none";
    document.getElementById("Update").style.display = "block";

    let listaSalones;
    if(localStorage.getItem("listaSalones")== null){
        listaSalones = []
    }
    else{
        listaSalones = JSON.parse(localStorage.getItem("listaSalones"))
    }
    
    document.getElementById("name").value = listaSalones[index].name;
    document.getElementById("address").value = listaSalones[index].address;
    document.getElementById("description").value = listaSalones[index].description;
    document.getElementById("price").value = listaSalones[index].price;

    document.querySelector("#Update").onclick = function(){
        if(validateForm()==true){
            listaSalones[index].name = document.getElementById("name").value;
            listaSalones[index].address = document.getElementById("address").value;
            listaSalones[index].description = document.getElementById("description").value;
            listaSalones[index].price = document.getElementById("price").value;
        } 
        localStorage.setItem("listaSalones", JSON.stringify(listaSalones));
        showData();
        document.getElementById("name").value = "";
        document.getElementById("address").value = "";
        document.getElementById("description").value = "";
        document.getElementById("price").value = "";

        document.getElementById("Submit").style.display = "block";
        document.getElementById("Update").style.display = "none";
    }
};