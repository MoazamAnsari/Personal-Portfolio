let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = " ";
var chk;
let arr = ['+','-','*','%','/'];
for(item of buttons){
    item.addEventListener('click' , (e)=>{
    var buttonText = e.target.innerText;
    if((screen.value.includes('+')|| screen.value.includes('-')||screen.value.includes('*')||screen.value.includes('/')||screen.value.includes('%')))
   {   
    for(let i=0; i<arr.length;i++)
    {
        chk = buttonText.includes(arr[i]);
        if(chk==true)
        {
            break;
        }
    }
}
    if(buttonText=='1'){
          buttonText = '1';
          screenValue += buttonText;
          screen.value = screenValue; 
    }
    else if(buttonText=='C'){
        screenValue = "";
        screen.value = screenValue;
    }
    else if(chk==true)
    {
        alert("Use operator only once");
    }
    else if(buttonText=='='){
        
    // let aa = document.getElementById('screen').innerHTML;

    screen.value = eval(screenValue);
    }
    else if(buttonText == "." && screenValue.endsWith('.'))
    {
        alert("Dot already exists!")
    }
    else{
        if(buttonText == "+" || buttonText == "-" || buttonText == "*" || buttonText == "/" || buttonText == "%"){
            document.getElementById("dot-btn").disabled = false;
        }
        else if(buttonText == ".")
        {
        document.getElementById("dot-btn").disabled = true;
        }
        screenValue += buttonText;
        screen.value = screenValue; 
      }
    })
}




// console.log('JavaScript');
// let st1 = prompt("Please Enter Your Name");
// let marks1 = prompt(`${st1} Enter your marks`);
// let st2 = prompt("Please Enter Your Name");
// let marks2 = prompt(`${st2}Enter your marks`);

// function r(){
//     if(Number(marks1)>Number(marks2)){

//         console.log(`if`);
//         console.log(` ${st1} has greater marks`);

//         console.log(`and ${st2} has less marks`);
//     }
//     else
//     {
//         console.log(`else`);

//         console.log(`${st2} has greater marks`);
//         console.log(`${st1} has less marks`);
//     }
// }
// r();


//    taking size and values from user and print them

// let num = prompt('Enter the size of array');
// let size = Number(num);
// let arr=[size];
// for(let a=0; a<=size; a++)
// {
//     arr[a] = prompt(`enter the value of ${a}`);
// }
// for (let i=0; i<=size;i++){
//     document.write(arr[i]+"<br>")
// }

// let a = document.links;
// // You have to create a variable, which takes a string that contains the text, which is a link you are interested in. 
// // Your task is to fetch all the links from a given page which contains this text.
// for (let i = 0; i < a.length; i++) {
//     if(a[i].href.split("/")[3].includes("h"))
//         console.log(`Link:${i+1} => ${a[i].href.split("/")[3]} => ${a[i].href.split("/")[3].includes("e")}`)
// }






