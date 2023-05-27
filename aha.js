function Add(){
    let a = Number(document.getElementById('num1').value);
    let b = Number(document.getElementById('num2').value);
    let c = a + b;
   document.getElementById('result').value = c;
  }

  function Sub(){
    let a = Number(document.getElementById('num3').value);
    let b = Number(document.getElementById('num4').value);
    let c = a - b;
   document.getElementById('RESULT').value = c;
  }

  function multiply(){
    let a = Number(document.getElementById('num5').value);
    let b = Number(document.getElementById('num6').value);
    let c = a * b;
   document.getElementById('RESult').value = c;
  }

  function divide(){
    let a = Number(document.getElementById('num7').value);
    let b = Number(document.getElementById('num8').value);
    let c = a / b;
   document.getElementById('resULT').value = c;
  }

  var me, temp;
        function oddeven()
        {
          me = parseInt(document.getElementById("huh").value);
          if(me)
          {
            temp = document.getElementById("hah");
            temp.style.display = "block";
            if(me%2==0)
              document.getElementById("lol").innerHTML = "The number is Even!";
            else
              document.getElementById("lol").innerHTML = "The number is Odd!";
          }
        }