
const rellenarTabla = () => {
    fetch(`https://meli-nnaykhkakj.now.sh/user/list`)
        .then(res => res.json())
        .then(info => {
            const tabla = document.getElementById("tabla")


            let acumuladoraTabla = ""

            info.users.forEach(usuario => {

                acumuladoraTabla += `
                    
<tr id ="tabla">
<td>${usuario.name}</td>
<td>${usuario.lastname}</td>
<td>${usuario.phone}</td>
<td>${usuario.email}</td>
<td class="list__body--actions">
  <i class="fa fa-edit"></i>
  <i class="fa fa-trash"></i>
</td>
</tr>`




            });

            tabla.innerHTML = acumuladoraTabla



        })

}

rellenarTabla()








