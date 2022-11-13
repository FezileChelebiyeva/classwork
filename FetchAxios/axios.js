let thead = document.querySelector('thead')
let tbody = document.querySelector('tbody')

axios.get("https://jsonplaceholder.typicode.com/users")
  .then((data) => {

    for (let i = 0; i < data.data.length; i++) {
              console.log(data.data[i]);
              tbody.innerHTML += `<tr>
                                    <td>${data.data[i].id}</td>
                                    <td>${data.data[i].name}</td>
                                    <td>${data.data[i].username}</td>
                                    <td>${data.data[i].email}</td>
                                    <td>${data.data[i].address.street}</td>
                                    <td>${data.data[i].address.suite}</td>
                                    <td>${data.data[i].address.city}</td>
                                    <td>${data.data[i].address.zipcode}</td>
                                    <td>${data.data[i].address.geo.lat}</td>
                                    <td>${data.data[i].address.geo.lng}</td>
                                    <td>${data.data[i].phone}</td>
                                    <td>${data.data[i].website}</td>
                                    <td>${data.data[i].company.name}</td>
                                    <td>${data.data[i].company.catchPhrase}</td>
                                    <td>${data.data[i].company.bs}</td>
                                </tr>`;
            }
  });