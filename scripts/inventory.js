var data=JSON.parse(localStorage.getItem("products"))
display(data)
function display(data) {
    data.forEach(function(elem,index){
        var a=document.createElement("img")
        a.setAttribute("src",elem.image)
        var b=document.createElement("h2")
        b.innerText = elem.type
        var c=document.createElement("p")
        c.innerText = elem.desc
        var d=document.createElement("p")
        d.innerText = elem.price
        var e=document.createElement("button")
        e.setAttribute("id","remove_product")
        e.innerText="Remove Product"
        e.addEventListener("click", function(){
            data.splice(index,1)
            localStorage.setItem("products",JSON.stringify(data))
            window.location.reload()
        })
         var inner=document.createElement("div")
         inner.setAttribute("id", "inner")
         inner.append(a,b,c,d,e)
         var outer=document.querySelector("#all_products")
         outer.append(inner)
    })
}
