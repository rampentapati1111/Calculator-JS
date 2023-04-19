// Todo:
// Add a functionality to accept input from keyboard and evaluate the expression
// Display error message when illegal syntax being used using try and catch method
// Displaying the history
// add ability to evaluate ()

let string = "";

let buttons = document.getElementsByClassName("button-design")
let buttonsArray = Array.from(buttons)

buttonsArray.forEach((item)=>{
  item.addEventListener('click', (e) => {
    if(e.target.innerHTML == "="){
      // To remove previous expressions display
      let prevExpressionRemove = document.querySelectorAll(".class")
      Array.from(prevExpressionRemove).forEach((item) => {
        item.remove();
      })
      // To display current expression being evaluated
      const currentExpression = document.createElement("div");
      currentExpression.className = "class"
      let string1 = string + "="
      currentExpression.innerHTML = string1
      document.querySelector('body').insertBefore(currentExpression, document.querySelector(".container"))
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == "C"){
      let prevExpressionRemove = document.querySelectorAll(".class")
      Array.from(prevExpressionRemove).forEach((item) => {
        item.remove();
      })
      string = "";
      document.querySelector('input').value = string;
    }
    // else if(string[(string.length)-1] == '+' || string[(string.length)-1] ==  ')' || string[(string.length)-1] == '(' || string[(string.length)-1] == '+' || string[(string.length)-1] == '*' || string[(string.length)-1] == '-' || string[(string.length)-1] == '/' || string[(string.length)-1] == '%' || string[(string.length)-1] == '.' || string[(string.length)-1] == '%'){
    //   document.querySelector('input').value = string
    // }
    else{
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
    }
  })
})
