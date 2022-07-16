import Habits from '../controller/Api.habits.controller.js'

const body = document.querySelector('body');

export default class criarHabito {
    static criaHabito() {
        const fundoPreto = document.createElement('div');
        fundoPreto.classList.add('fundo__preto')

        const form = document.createElement('form');
        form.classList.add('form__modal')
        form.id = 'formModalId'

        fundoPreto.append(form)

        const modalHeader = document.createElement('div');
        modalHeader.classList.add('form__modal__header')

        const modalName  = document.createElement('h2')
        modalName.classList.add('form__modal__name')
        modalName.innerText = 'Criar hábito'

        const buttonClose = document.createElement('button')
        buttonClose.innerText = 'X'
        modalHeader.append(modalName, buttonClose)
        form.appendChild(modalHeader)

        buttonClose.addEventListener('click', (e) => {
            e.preventDefault()
            fundoPreto.style.display = 'none';
        })

        let modalBody = this.modalBody()
        let titulo = this.modalInputName('Título')
        const formTitle = document.createElement('input')
        formTitle.classList.add('campo__titulo')
        formTitle.id = 'formTitle'

        modalBody.append(titulo, formTitle)
        form.appendChild(modalBody)

        let modalBody2 = this.modalBody()
        let descricao = this.modalInputName('Descrição')
        const textField = document.createElement('textarea')
        textField.classList.add('campo__descricao')
        textField.placeholder = 'Digite uma descrição'
        textField.id = 'textField'

        modalBody2.append(descricao, textField)
        form.appendChild(modalBody2)

        let modalBody3 = this.modalBody()
        let categoria = this.modalInputName('Categoria')
        const select = document.createElement('select')
        select.name = 'categoria'
        select.id = 'categoria'
        
        const option = document.createElement('option')
        option.disabled, option.selected, option.hidden
        option.text = 'Selecionar Categoria'

        const opt1 = document.createElement('option')
        opt1.value = 'saude'
        opt1.text = '🧡 Saúde'
        
        const opt2 = document.createElement('option')
        opt2.value = 'casa'
        opt2.text = '🏠 Casa'

        const opt3 = document.createElement('option')
        opt3.value = 'lazer'
        opt3.text = '🏃 Lazer'
        
        const opt4 = document.createElement('option')
        opt4.value = 'estudos'
        opt4.text = '📖 Estudos'

        const opt5 = document.createElement('option')
        opt5.value = 'trabalho'
        opt5.text = '💼 Trabalho'
        
        select.add(option)
        select.add(opt1)
        select.add(opt2)
        select.add(opt3)
        select.add(opt4)
        select.add(opt5)
        modalBody3.append(categoria, select)
        form.appendChild(modalBody3)
        
        const buttonSubmit = document.createElement('button')
        buttonSubmit.classList.add('btn', 'btn--azul')
        buttonSubmit.innerText = 'Inserir'

        buttonSubmit.addEventListener('click', async (e) => {
            e.preventDefault()
            const titulo = document.getElementById('formTitle').value
            const textField = document.getElementById('textField').value
            const select = document.getElementById('categoria').value

            Habits.createHabit({
                "habit_title": titulo,
                "habit_description": textField,
                "habit_category": select
            })
            .then(response => {
                if(response.message != 'habit_title obrigatório' && response.message != 'habit_description obrigatório' && response.message != 'categorias aceitas: saude, estudos, casa, trabalho e lazer'){
                    window.location.reload()
                }
            })
            .catch(err => console.log(err))
        })

        form.appendChild(buttonSubmit)

        body.append(fundoPreto)
    }

    static modalBody() {
        const modalBody = document.createElement('div')
        modalBody.classList.add('form__modal__body')

        return modalBody
    }

    static modalInputName(nome) {
        const h5 = document.createElement('h5')
        h5.classList.add('form__input__name')
        h5.innerText = nome

        return h5
    }
}

//criarHabito.criaHabito()