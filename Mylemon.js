(function() {
const cartInfo= document.getElementById("cart-info");
const cart= document.getElementById("cart");
cartInfo.addEventListener("click",function(){
   cart.classList.toggle("show-cart")

});
})();

if(document.readyState=="loading"){
document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

function ready(){
    var addToCartButtons= document.getElementsByClassName("ADD-TO-CART");
    for ( var i=0; i< addToCartButtons.length;i++){
        var button= addToCartButtons[i];
        button.addEventListener("click", addToCartClicked);
    }

    document
    .getElementsByClassName("btn-purchase")[0]
    .addEventListener("click",purchaseClicked);
    }
    
    function addToCartClicked(event){
        var button= event.target;
        var product= button.parentElement.parentElement;
        var title= product.getElementsByClassName("product-title")[0] .innerText;
        var price= product.getElementsByClassName("product__price")[0] .innerText;
        var ImageSrc= product.getElementsByClassName("product__image")[0].src;
    addItemToCart(title,price,ImageSrc);
    
    }
    

    
    function addItemToCart (title,price,ImageSrc){
        var cartRow=document.createElement("div");
        cartRow.classList.add("cart-row");
        var cartItems= document.getElementsByClassName("cart-items")[0];
        var cartItemsTitles= cartItems.getElementsByClassName("cart-total-title");
    for( var i=0; i< cartItemsTitles.length;i++){
        if (cartItemsTitles[i].innerText == title){
            alert("This item is already added to the cart");
            return;
    
        }
    }

    var carRowContents = `
    <div class="cart-item cart-column">
      <img class="cart-item-image" src="${imageSrc}">
      <span class="cart-item-title">${title}</span>
      <span class="cart-price cart">${price}</span>
      <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn btn-danger" type="button">REMOVE</button>
      </div>
    </div>
  `;
  
  var cartRow = document.createElement('div');
  cartRow.innerHTML = carRowContents;
  var cartItems = document.getElementsByClassName('cart-items')[0];
  cartItems.append(cartRow);
  
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
  
}