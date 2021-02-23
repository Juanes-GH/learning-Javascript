var contenido= document.querySelector('#contenido')
    function  traer(){
        fetch('https://randomuser.me/api/')
          .then(res => res.json())
            .then(data =>{
                console.log(data.result)
                    contenido.innerHTML = `
                    <img src = "${data.results['0'].picture.large}" width="100px" class="img-fluid rounded-circle">
                    
                    <i class="fas fa-user-alt"></i><p> Name: ${data.results['0'].name.last}  ${data.results['0'].name.first}</p><br>
                    
                    <i class="fas fa-envelope"></i><p class"email"> Email: ${data.results['0'].email} </p><br>
                    
                    <i class="fas fa-calendar-alt"></i><p class"age"> Age: ${data.results['0'].dob.age} </p><br>
                    
                    <i class="fas fa-phone-square-alt"></i><p class"telefon">Telefon: ${data.results['0'].phone} </p>`
                    })
               };