
//serch student by name
function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
  
  function myfilter() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("filst");
    filter = input.value
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[3];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
  // add table
  function addRow()
  {
    //get input
    var Stnim = document.getElementById('Stnim').value;
    var fullname = document.getElementById('fullname').value;
    var x =[document.querySelector('.gender'),document.querySelector('.gender2')];
    var j = document.getElementById('faculty').value;
    var k = document.getElementById('programstudi').value;
    var b = document.getElementsByTagName("button").del;
  
    
    var data;
     if(!Stnim || !fullname)
    {
      alert("please  fill all");
      return;
    }
    var g = x.map(values=>{
      if(values.checked){
        return values.value;

      }
    })
    
    var table = document.getElementsByTagName('table')[0];
    
    var newRow = table.insertRow(4);
    
    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3);
    var cel5 = newRow.insertCell(4);
    var cel6 = newRow.insertCell(5);
    
    cel1.innerHTML = Stnim;
    cel2.innerHTML = fullname;
    cel3.innerHTML = g;
    cel4.innerHTML = j ;
    cel5.innerHTML = k;
    cel6.innerHTML = b;
  }
        function myDeleteFunction() {
          document.getElementById("myTable").deleteRow(-1);
          }
  //filter
  function prodi() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("filpr");
    filter = input.value
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[4];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

