var data = {location: document.location, something: 'Some Value'};

request = new XMLHttpRequest();
console.log(request);
request.open('GET', '/loader', true);

request.onreadystatechange = function() {
  if (this.readyState === 4){
    if (this.status >= 200 && this.status < 400){
      // Success!
      res = JSON.parse(this.responseText);
      console.log(res);
      for(var i = 0, j = res.length; i < j; i++){
        loadjs(res[i]);
      }
    } else {
      // Error :(
        console.log(this);
    }
  }
};

request.send(data);
request = null;

function loadjs(file){
  var type = file.slice(file.indexOf('.'));
  if (type == ".js"){
    var _file = document.createElement('script');
    _file.setAttribute("type","text/javascript");
    _file.setAttribute("src", file);
    document.getElementsByTagName("head")[0].appendChild(_file);
  }
};