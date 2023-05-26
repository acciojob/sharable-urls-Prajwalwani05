// your code here
function url(){
	let name = document.getElementById("name").value;
	let year = document.getElementById("year").value;
	var url = "https://localhost:8080/?name=" + encodeURIComponent(name);

      if (year) {
        url += "&year=" + encodeURIComponent(year);
      }

      document.getElementById("url").textContent = url;
}