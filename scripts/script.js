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

        const p = document.createElement("li")
        const btn = document.createElement("button")
        const btn_R = document.createElement("button")

        btn.innerHTML = "✅"
        btn_R.innerHTML = "❌"

        btn.classList.add("class", "btn")
        btn_R.classList.add("class", "btn")

        p.innerHTML = e.getTarefa()
        p.classList.add("class", "time")

        res.appendChild(p)
        res.appendChild(btn)
        res.appendChild(btn_R)

        btn.addEventListener("click", () => {

            tarefaFeitas.push(p)
            res.removeChild(p)
            res.removeChild(btn)
            res.removeChild(btn_R)
            tarefas.splice(index, 1)
            p.classList.remove("class", "time")
            p.classList.add("class", "feita")
            feitas.appendChild(p)
        })

        btn_R.addEventListener("click", () => {

            res.removeChild(p)
            res.removeChild(btn)
            res.removeChild(btn_R)
            tarefas.splice(index, 1)

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