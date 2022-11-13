let thead = document.querySelector('thead')
let tbody = document.querySelector('tbody')

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => response.json())
.then((data) => {
            console.log(data)
            for(let i = 0; i < data.length; i++){
                console.log(data[i]);
                tbody.innerHTML += `<tr>
                                        <td>${data[i].id}</td>
                                        <td>${data[i].name}</td>
                                        <td>${data[i].username}</td>
                                        <td>${data[i].email}</td>
                                        <td>${data[i].address.street}</td>
                                        <td>${data[i].address.suite}</td>
                                        <td>${data[i].address.city}</td>
                                        <td>${data[i].address.zipcode}</td>
                                        <td>${data[i].address.geo.lat}</td>
                                        <td>${data[i].address.geo.lng}</td>
                                        <td>${data[i].phone}</td>
                                        <td>${data[i].website}</td>
                                        <td>${data[i].company.name}</td>
                                        <td>${data[i].company.catchPhrase}</td>
                                        <td>${data[i].company.bs}</td>
                                    </tr>`
            }         
})
