import editarPerfil from "../models/editarPerfil.models.js"
import Habits from '../controller/Api.habits.controller.js'
import criarHabito from '../models/criarHabitos.models.js'
import editarHabito from '../models/editarHabitos.models.js'



class Header {
    static renderizarHeader() {

        const nomeUser = document.querySelector(".header-nav-h2")
        const fotoUser2 = document.querySelector(".header-nav-img")

        fotoUser2.src = JSON.parse(localStorage.getItem("@capstone:usr_img"))
        nomeUser.innerHTML = JSON.parse(localStorage.getItem("@capstone:username"))
    }
}
Header.renderizarHeader()



let imgCabecalho = document.getElementById('headerDivImg')
let dropdownContent = document.getElementById('dropdownContent')
let editrPerfil = document.getElementById('editarPerfil')
let sairDoApp = document.getElementById('sairDoApp')

imgCabecalho.src = JSON.parse(localStorage.getItem('@capstone:usr_img'))
imgCabecalho.addEventListener('click', () => {

    if (dropdownContent.className == 'dropdown-content sumir') {
        dropdownContent.className = 'dropdown-content'
    } else {
        dropdownContent.className = 'dropdown-content sumir'
    }
})


sairDoApp.addEventListener('click', () => {
    window.history.back()

    localStorage.clear()
})

editrPerfil.addEventListener('click', () => {
    editarPerfil.criarEdit()

    const inputNome = document.querySelector(".campo__titulo")
    inputNome.value = JSON.parse(localStorage.getItem("@capstone:username"))
})




async function listarHabitos() {
    let tabela = document.getElementById('tabela')
    let habitos = await Habits.readAllHabits()
    for(let i = 0; i < 10; i++){
        let row = document.createElement('tr')
        let status = document.createElement('td')
        let titulo = document.createElement('td')
        let descricao = document.createElement('td')
        let categoria = document.createElement('td')
        let editar = document.createElement('td')
        let tituloReducer = document.createElement('div')
        let categoriaColor = document.createElement('div')

        tituloReducer.className = 'titulo-reducer'
        tituloReducer.innerText = habitos[i].habit_title
        categoriaColor.className = 'categoria-color'
        categoriaColor.innerText = habitos[i].habit_category
        status.className = 'status-conteudo'
        if(habitos[i].habit_status == true){
            status.innerHTML = '<input class="checkbox-estilizado" type="checkbox" checked>'
        }else{
            status.innerHTML = '<input class="checkbox-estilizado" type="checkbox">'
        }

        titulo.className = 'titulo-conteudo'
        descricao.className = 'descricao-conteudo'
        descricao.innerText = habitos[i].habit_description
        categoria.className = 'categoria-conteudo'
        editar.className = 'editar-conteudo'
        editar.id = habitos[i].habit_id
        editar.innerHTML = '<svg width="27" height="7" viewBox="0 0 27 7" fill="none"xmlns="http://www.w3.org/2000/svg"><circle cx="3.8877" cy="3.5" r="3" fill="#ADB5BD" /><circle cx="13.8877" cy="3.5" r="3" fill="#ADB5BD" /><circle cx="23.8877" cy="3.5" r="3" fill="#ADB5BD" /></svg>'

        titulo.appendChild(tituloReducer)
        categoria.appendChild(categoriaColor)
        row.appendChild(status)
        row.appendChild(titulo)
        row.appendChild(descricao)
        row.appendChild(categoria)
        row.appendChild(editar)
        tabela.appendChild(row)

        editar.addEventListener('click', () => {
            editarHabito.criarEdit()
            localStorage.setItem('@capstone:habitId', editar.id)
        })
        status.addEventListener('click', () => {
            Habits.completeHabit(editar.id).then(res => console.log(res))
        })
    };
}

async function listarHabitosFiltrados(){
    let tabela = document.getElementById('tabela')
    let habitos = await Habits.readAllHabits()
    habitos.forEach(elem => {
        if(elem.habit_status == true){
        let row = document.createElement('tr')
        let status = document.createElement('td')
        let titulo = document.createElement('td')
        let descricao = document.createElement('td')
        let categoria = document.createElement('td')
        let editar = document.createElement('td')
        let tituloReducer = document.createElement('div')
        let categoriaColor = document.createElement('div')
        let svgHugger = document.createElement('div')

        tituloReducer.className = 'titulo-reducer'
        tituloReducer.innerText = elem.habit_title
        categoriaColor.className = 'categoria-color'
        categoriaColor.innerText = elem.habit_category
        status.className = 'status-conteudo'
        if(elem.habit_status == true){
            status.innerHTML = '<input class="checkbox-estilizado" type="checkbox" checked>'
        }else{
            status.innerHTML = '<input class="checkbox-estilizado" type="checkbox">'
        }

        titulo.className = 'titulo-conteudo'
        descricao.className = 'descricao-conteudo'
        descricao.innerText = elem.habit_description
        categoria.className = 'categoria-conteudo'
        editar.className = 'editar-conteudo'
        editar.id = elem.habit_id
        editar.innerHTML = '<svg width="27" height="7" viewBox="0 0 27 7" fill="none"xmlns="http://www.w3.org/2000/svg"><circle cx="3.8877" cy="3.5" r="3" fill="#ADB5BD" /><circle cx="13.8877" cy="3.5" r="3" fill="#ADB5BD" /><circle cx="23.8877" cy="3.5" r="3" fill="#ADB5BD" /></svg>'

        svgHugger.appendChild(editar)
        titulo.appendChild(tituloReducer)
        categoria.appendChild(categoriaColor)
        row.appendChild(status)
        row.appendChild(titulo)
        row.appendChild(descricao)
        row.appendChild(categoria)
        row.appendChild(svgHugger)
        tabela.appendChild(row)

        editar.addEventListener('click', () => {
            editarHabito.criarEdit()
            localStorage.setItem('@capstone:habitId', editar.id)
        })
        status.addEventListener('click', () => {
            Habits.completeHabit(editar.id).then(res => console.log(res))
        })
    }
    });
}

async function listarMaisHabitos(contador) {
    let tabela = document.getElementById('tabela')
    let habitos = await Habits.readAllHabits()
    for(let i = 0; i < contador; i++){

        let row = document.createElement('tr')
        let status = document.createElement('td')
        let titulo = document.createElement('td')
        let descricao = document.createElement('td')
        let categoria = document.createElement('td')
        let editar = document.createElement('td')
        let tituloReducer = document.createElement('div')
        let categoriaColor = document.createElement('div')

        tituloReducer.className = 'titulo-reducer'
        tituloReducer.innerText = habitos[i].habit_title
        categoriaColor.className = 'categoria-color'
        categoriaColor.innerText = habitos[i].habit_category
        status.className = 'status-conteudo'
        if(habitos[i].habit_status == true){
            status.innerHTML = '<input class="checkbox-estilizado" type="checkbox" checked>'
        }else{
            status.innerHTML = '<input class="checkbox-estilizado" type="checkbox">'
        }

        titulo.className = 'titulo-conteudo'
        descricao.className = 'descricao-conteudo'
        descricao.innerText = habitos[i].habit_description
        categoria.className = 'categoria-conteudo'
        editar.className = 'editar-conteudo'
        editar.id = habitos[i].habit_id
        editar.innerHTML = '<svg width="27" height="7" viewBox="0 0 27 7" fill="none"xmlns="http://www.w3.org/2000/svg"><circle cx="3.8877" cy="3.5" r="3" fill="#ADB5BD" /><circle cx="13.8877" cy="3.5" r="3" fill="#ADB5BD" /><circle cx="23.8877" cy="3.5" r="3" fill="#ADB5BD" /></svg>'

        titulo.appendChild(tituloReducer)
        categoria.appendChild(categoriaColor)
        row.appendChild(status)
        row.appendChild(titulo)
        row.appendChild(descricao)
        row.appendChild(categoria)
        row.appendChild(editar)
        tabela.appendChild(row)

        editar.addEventListener('click', () => {
            editarHabito.criarEdit()
            localStorage.setItem('@capstone:habitId', editar.id)
        })
        status.addEventListener('click', () => {
            Habits.completeHabit(editar.id).then(res => console.log(res))
        })
    }
}

listarHabitos()

let buttonCriar = document.getElementById('buttonCriar')

buttonCriar.addEventListener('click', async () =>{
   await criarHabito.criaHabito()
   
})

let todos = document.getElementById('todos')
let concluidos = document.getElementById('concluidos')

todos.addEventListener('click', (event) => {
    tabela.innerHTML = '<tr><th class="status" scope="col">Status</th><th class="titulo" scope="col">Título</th><th class="descricao" scope="col">Descrição</th><th class="categoria" scope="col">Categoria</th><th class="editar" scope="col">Editar</th></tr>'
    listarHabitos()
})

concluidos.addEventListener('click', (event) => {
    tabela.innerHTML = '<tr><th class="status" scope="col">Status</th><th class="titulo" scope="col">Título</th><th class="descricao" scope="col">Descrição</th><th class="categoria" scope="col">Categoria</th><th class="editar" scope="col">Editar</th></tr>'
    listarHabitosFiltrados()
})

let btnCarregarMais = document.getElementById('btnCarregarMais')

btnCarregarMais.addEventListener('click', (event) => {
    tabela.innerHTML = '<tr><th class="status" scope="col">Status</th><th class="titulo" scope="col">Título</th><th class="descricao" scope="col">Descrição</th><th class="categoria" scope="col">Categoria</th><th class="editar" scope="col">Editar</th></tr>'
    let contador = 10
    contador += 10
    listarMaisHabitos(contador)
})