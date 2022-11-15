window.onload = function() {
    var input=document.getElementById("country");
    var lookBtn = document.querySelector('#lookup');
    var lookCBtn = document.getElementById('city');
    var httpReq;
  
    lookBtn.addEventListener('click', function(element) {
      element.preventDefault();
        
  
      httpReq = new XMLHttpRequest();
  
      var url = "http://localhost/info2180-lab5/world.php?country="+input.value+"&context =";;
      console.log(url); 
      httpReq.onreadystatechange = loadResult;
      httpReq.open('GET', url);
      httpReq.send();
    });
  
    function loadResult() {
      if (httpReq.readyState === XMLHttpRequest.DONE) {
        if (httpReq.status === 200) {
          var response = httpReq.responseText;
          var result = document.querySelector('#result');
          result.innerHTML = response;
        } else {
          alert('No result found.');
        }
      }
    }

    lookCBtn.addEventListener('click', function(element) {
      element.preventDefault();
        
  
      httpReq = new XMLHttpRequest();
  
      var url = "http://localhost/info2180-lab5/world.php?country=" + input.value + "&context =cities";
      console.log(url);
      httpReq.onreadystatechange = loadResult;
      httpReq.open('GET', url);
      httpReq.send();
    });
  
    function loadResult() {
      if (httpReq.readyState === XMLHttpRequest.DONE) {
        if (httpReq.status === 200) {
          var response = httpReq.responseText;
          var result = document.querySelector('#result');
          result.innerHTML = response;
        } else {
          alert('No result found.');
        }
      }
    }
  
  }
