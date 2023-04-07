function getSmartphone() {
    $.ajax({
        type: 'GET',
        url:'http://localhost:8080/smartphones',
        success: function (smartPhone) {
            let content = "";
            for (let i = 0; i<smartPhone.length; i++){
                content += `<tr>
                        <td>${smartPhone[i].producer}</td>
                        <td >${smartPhone[i].model}</td>
                        <td >${smartPhone[i].price}</td>
                        <td><button type="submit" onclick="deleteByID(${smartPhone[i].id})">Delete</button></td>
                        </tr>`
            }
            document.getElementById("content").innerHTML = content
        }
    })
}
getSmartphone()

function addNewSmartPhone() {
    event.preventDefault();
    let producer = document.getElementById("producer").value;
    let model =document.getElementById("model").value;
    let price = document.getElementById("price").value;
    let newSmartphone = {
        producer: producer,
        model: model,
        price: price
    };
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        data: JSON.stringify(newSmartphone),
        url: "http://localhost:8080/smartphones/create",
        success: function (){
            getSmartphone();
        }

    })

}


function deleteByID(id) {
    $.ajax({
        type: 'DELETE',
        url: "http://localhost:8080/smartphones/" + id,
        dataType: 'JSON',
        success: function (){
            getSmartphone()
        }
    })
}