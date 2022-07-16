import deletaHabito from '../models/excluirHabitos.model.js'
import Habits from '../controller/Api.habits.controller.js'

const body = document.querySelector('body');

export default class editarHabito {
    static criarEdit(habitId) {
        const fundoPreto = document.createElement('div');
        fundoPreto.classList.add('fundo__preto')

        const form = document.createElement('form');
        form.classList.add('form__modal')

        fundoPreto.append(form)

        const modalHeader = document.createElement('div');
        modalHeader.classList.add('form__modal__header')

        const modalName  = document.createElement('h2')
        modalName.classList.add('form__modal__name')
        modalName.innerText = 'Editar hábito'

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

        const modalBody4 = document.createElement('div')
        modalBody4.classList.add('form__modal__body', 'status__checkbox')

        const span     = document.createElement('span')
        span.innerText = 'Status'
        const input    = document.createElement('input')
        input.type     = 'checkbox'
        modalBody4.append(span, input)
        form.appendChild(modalBody4)

        const divEdicao    = document.createElement('div')
        divEdicao.classList.add('btn__editar')

        const botaoExcluir = document.createElement('button')
        botaoExcluir.classList.add('btn', 'btn--cinza-claro')
        botaoExcluir.innerText = 'Excluir'

        botaoExcluir.addEventListener('click', (e) => {
            e.preventDefault();
            fundoPreto.style.display = 'none';
            deletaHabito.excluirHabito()
        })

        const botaoSalvar  = document.createElement('button')
        botaoSalvar.classList.add('btn', 'btn--disabled')
        botaoSalvar.innerText = 'Salvar alterações'

        botaoSalvar.addEventListener('click', async (e) => {
            e.preventDefault()
            const titulo = document.getElementById('formTitle').value
            const textField = document.getElementById('textField').value
            const select = document.getElementById('categoria').value

            await Habits.updateHabit({
                    "habit_title": titulo,
                    "habit_description": textField,
                    "habit_category": select}, JSON.parse(localStorage.getItem('@capstone:habitId')))

            fundoPreto.style.display = 'none';
            window.location.reload()
        })

        form.addEventListener('keyup', () => {
            botaoSalvar.classList.remove('btn--disabled')
            botaoSalvar.classList.add('btn--azul')
        })

        divEdicao.append(botaoExcluir, botaoSalvar)
        form.appendChild(divEdicao)

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