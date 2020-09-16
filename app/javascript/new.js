window.addEventListener('load', function(){
  console.log("OK")

  const itemPrice = document.getElementById("item-price");

  itemPrice.addEventListener("input", function(){
    let price = document.getElementById("item-price").value;

    
    const addTaxPrice = document.getElementById("add-tax-price");
    const profit = document.getElementById("profit");

    addTaxPrice.innerHTML = Math.floor(price*0.1);
    profit.innerHTML = Math.floor(price - price*0.1);
    }
  )
})