const fInput = document.getElementById("f_text")
const btnA = document.getElementById("btnADD")
let res = document.getElementById("res")
let feitas = document.getElementById("feitas")

let tarefas = []
let tarefaFeitas = []

class novaTarefa {
    constructor (tf) {
        this.tarefa = tf
    }

    setTarefa = (tarefa) => {
        this.tarefa = tarefa
    }

    getTarefa = () => {
        return this.tarefa
    }
}

const ADD = () => {
    res.innerHTML = ""
    tarefas.forEach((e, index) => {
        let p = document.createElement("li")
        p.innerHTML = e.getTarefa()
        p.classList.toggle("novo")
        res.appendChild(p)
        p.addEventListener("click", () => {
            tarefaFeitas.push(p)
            res.removeChild(p)
            tarefas.splice(index, 1)
            p.classList.add("feita")
            feitas.appendChild(p)
        })
    })
}

btnA.addEventListener("click", () => {
    if (fInput.value == "") {
        window.alert("ERRO! FALTAM DADOS!")
        return
    } else {
        let t1 = new novaTarefa (fInput.value)
        tarefas.push(t1)
        fInput.value = ""
        fInput.focus()
        ADD()
    }
})