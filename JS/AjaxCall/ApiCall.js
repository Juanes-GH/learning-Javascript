var contenido= document.querySelector('#contenido')
    function  traer(){
        fetch('https://randomuser.me/api/')
          .then(res => res.json())
            .then(data =>{
                console.log(data.result)
                    contenido.innerHTML = `
                    <img src = "${data.results['0'].picture.large}" width="100px" class="img-fluid rounded-circle">
                    <p class"name"> Name: "${data.results['0'].name.first}"</p>
                    <p class "lastName"> lastNmae: "${data.results['0'].name.last}"</p>
                    <p class"email"> email: ${data.results['0'].email} </p>
                    <p class"age"> Age : ${data.results['0'].dob.age} </p>
                    <p class"number"> Number: ${data.results['0'].phone} </p>`
                    })
               };