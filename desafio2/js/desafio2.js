const form = document.getElementById('form')


form.addEventListener('submit', (e) => {
  e.preventDefault();
    let campo1 = document.getElementById('campo1').value;
    let campo2 = document.getElementById('campo2').value;
  let data = {
    campo1, campo2
  }
  let convertData = JSON.stringify(data);

  var r = Math.ceil(Math.random() * Math.pow(10,6));
  console.log(r)
  localStorage.setItem(r, convertData)

  let content = document.getElementById('content')

  let carregando = `<p>Cadastrando...</p>`

  let pronto = `<p>Concluído.</p>`

  content.innerHTML = carregando

  setTimeout(() => {
    content.innerHTML = pronto
  }, 1000)

})