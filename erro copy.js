function tratarErroELancar(erro) {
  //throw new Error('...')
  //throw 10
  throw {
    nome: erro.name,
    msg: erro.message,
    date: new Date()
  }
}

function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + '!!!')
  } catch (y) {
    tratarErroELancar(y)
  } finally {
    console.log('final')
  }
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj) //Cannot read properties of undefined (reading 'toUpperCase')
