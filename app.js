let url = "https://randomuser.me/api/?results=10";
// let  btn = document.querySelector(".getNames");
let reload = document.querySelector(".reload")
let output = document.querySelector(".output");


reload.addEventListener("click", function (){
location.reload();
})
getdata()

// btn.addEventListener("click" ,getdata);


function getdata(){
  fetch(url).then(function (res){
    return res.json()
  }).then(function (data){
    // console.log(data)
    data.results.forEach(function (item){
      // console.log(item)
        let div = document.createElement("div");
        let prag = document.createElement("p");
        prag.textContent = `${item.name.title} ${item.name.first} ${item.name.last}`
        let img = document.createElement("img");
        img.setAttribute("src", item.picture.thumbnail );
        img.style.color = "red"
        img.className = "images";
        div.appendChild(prag);
        div.appendChild(img)
        output.appendChild(div);
    })
  })
}
