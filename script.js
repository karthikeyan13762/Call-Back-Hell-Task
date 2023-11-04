let count10to1=document.getElementById("count");
let output=document.getElementById("output");

let count_down = function (count, callback){
    if (count === 0) {
      callback();
    } else {
      setTimeout(() => {

        count10to1.innerHTML= `<h3> ${count}</h3> ` 
        console.log(count);
        count_down (count - 1, callback);
      }, 1000);
    }
  };
  
  count_down(10, () => {
    setTimeout(() => {
        output.innerHTML='<h1 id="blue">Happy Independence Day<h1>';
        document.getElementById("blue").style.color="blue";
        output.style.borderTop="10px solid orange"
        output.style.borderBottom="10px solid green"

    }, 1000);
  });

