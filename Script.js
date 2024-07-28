let Parent = document.querySelector(".parent")
let Object1 = [["1", "2", "3", "+"], ["4", "5", "6", "-"], ["7", "8", "9", "*"], ["C", "0", "=", "/"]]
let Operator = ["+", "-", "*", "/"];
let outPut;

let FirstDiv
document.addEventListener("DOMContentLoaded", function () {
    FirstDiv = document.createElement("div")
    FirstDiv.classList.add("output")
    FirstDiv.innerText = "0"
    Parent.appendChild(FirstDiv)

    for (let s = 0; s < Object1.length; s++) {
        let Div = document.createElement("div")
        Div.classList.add("add")
        Parent.appendChild(Div)
        for (let L = 0; L < Object1.length; L++) {
            // console.log(L);
            let Btn = document.createElement("div")
            Btn.classList.add("btn_div")
            Btn.innerHTML = Object1[s][L]
            Div.appendChild(Btn)
            Btn.addEventListener("click", Update)
        }
    }
})

function Update() {
    let ClickValue = this.innerText
    // console.log(ClickValue);
    let Value = FirstDiv.innerText
    if (Value == "0") {
        Value = ""
    }
    if (ClickValue == "=") {
        Value = eval(Value)
    }
    else {
        let secondLast = Value.substring(Value.length -1)  //   arslan  // 5 - 1
        console.log("secondLast: ", secondLast);
        if (Operator.includes(ClickValue)) {
            if (Operator.includes(secondLast)) {
                Value = Value.substring(0, Value.length - 1)
                console.log(Value);
            }
            else{
                Value = eval(Value)
                // console.log("sgsh");
            }
        }

        Value = Value + ClickValue
    }
    FirstDiv.innerText = Value
}