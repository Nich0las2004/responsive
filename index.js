const menuList = document.getElementById("menuList")

menuList.style.maxHeight = '0px'

const togglemenu = () => {
    if(menuList.style.maxHeight == '0px'){
        menuList.style.maxHeight = '130px'
    }else{
        menuList.style.maxHeight = '0px'
    }
}