//store the products array in localstorage as "products"



document.querySelector("#add_product").addEventListener("click", myf)

function myf()
{
    event.preventDefault()
    var arr=JSON.parse(localStorage.getItem("products")) || []
    var obj={
        type: document.querySelector("#type").value,
        desc: document.querySelector("#desc").value,
        price:document.querySelector("#price").value,
        image: document.querySelector("#image").value
    }
  arr.push(obj)
  
    localStorage.setItem("products", JSON.stringify(arr))
         document.querySelector("#type").innerHTML=null
         document.querySelector("#desc").innerHTML=null
         document.querySelector("#price").innerHTML=null
         document.querySelector("#image").innerHTML=null
         window.location.reload()
}