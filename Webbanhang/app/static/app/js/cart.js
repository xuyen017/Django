var updateBtns = document.getElementsByClassName('update-cart')
for (i=0; i<updateBtns.length; i++){
    updateBtns[i].addEventListener('click', function(){
        var productId = this.dataset.product
        var action = this.dataset.action
        console.log('productId', productId,'action', action)
        console.log('user:',user)
        if (user === "AnonymousUser"){
            console.log('user not login')
        }else{
            console.log('user login, success add')
        }
    })
}