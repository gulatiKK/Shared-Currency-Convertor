function circleFunction() {
    var x = document.getElementById("Radius");
    document.getElementById('AreaofCircle').innerHTML = 3.14 * x.value * x.value;
  }

    function squareFunction() {
    var x = document.getElementById("Side");
    var area = document.getElementById('area');
    area.value = document.getElementById("area").innerHTML = x.value * x.value ;
    //x.value = x.value.toUpperCase();
    }

    function rectangleFunction() {
            
        // this is very much like scanf 
        // where you was reading the input
        // this one is same in the idea
        // has a different way of taking user input
      var x = document.getElementById("length");
      var y = document.getElementById("bredth");
      var area = document.getElementById("area");
     

      // this one is very to printf
      // you just print the values of some variables
      // in the format that suits your need
      document.getElementById("result").innerHTML = "<br><br>Area = " + x.value * y.value ;
    }