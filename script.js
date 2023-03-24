
 const menu = [{
    id:1,
    title: `chocolate` ,
    category: `dinner`,
    price: 90,
    img: `./choco.jpg` ,
    desc:`Vivamus at neque ut urna scelerisque aliquam sed vitae velit. Nullam laoreet malesuada eros, sollicitudin varius sem placerat id. Nulla.`
},{
    id:2 ,
    title: `mix` ,
    category: `lunch`,
    price: 45,
    img:`./1.jpg` ,
    desc:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a eros sodales, congue sem sed, venenatis ligula. Curabitur efficitur egestas.`
},{
    id:3 ,
    title: `biscuit`,
    category: `breakfast`,
    price: 20,
    img: `./biscuit.jpg` ,
    desc:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo ipsum vel imperdiet molestie. Ut sit amet consectetur leo. Vestibulum.`
},{
    id:4,
    title: `paneer`,
    category: `breakfast`,
    price: 250,
    img: `./paneer.jpg` ,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing Contrary to popular belief, Lorem Ipsum ` ,
},{
    id:5 ,
    title: `tandoori` ,
    category: `dinner`,
    price: 400,
    img: `./tandoori.jpg` ,
    desc:`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45`
},{
    id:6 ,
    title: `burger` ,
    category: `lunch`,
    price: 150,
    img: `./burger.jpg` ,
    desc:`Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`
},{
    id:7 ,
    title: `sandwich` ,
    category: `breakfast`,
    price: 200,
    img: `./sandwich.jpg` ,
    desc:`survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised i`
},{
    id:8 ,
    title: `coca-cola` ,
    category: `lunch`,
    price: 100,
    img: `./cocacola.jpg` ,
    desc:`sing Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English`
},{
    id:9 ,
    title: `pani puri` ,
    category: `dinner`,
    price: 100,
    img: `./panipuri.jpg` ,
    desc:`many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`
},
{
    id:10,
    title: `chai`,
    category: `breakfast`,
    price: 25,
    img: `./chai.jpg` ,
    desc:`ut the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If `
}] ;

const sectionCenter = document.querySelector('.section-center') ;
const filterBtn = document.querySelectorAll('.filter-btn') ;

window.addEventListener('DOMContentLoaded', function(){
   displayMenuItems(menu) ;

}) ;
filterBtn.forEach(function (btn){
    btn.addEventListener('click',function(e){
    const category = e.currentTarget.dataset.id ; 
    const menuCategory = menu.filter(function(menuItem){
        if(menuItem.category=== category){
            return menuItem ;
        }
    }) ;
     if(category === 'all'){
        displayMenuItems(menu) ;
     }
     else{
        displayMenuItems(menuCategory) ;
     }
    }) ;
}) ;


function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function A(item){
        //console.log(item) ;

        return `<article class="menu-item">
        <img src="${item.img}">
        <div class="menu-info">
            <header>
        <h4>${item.title}</h4>
        <h4 class="price">${item.price}</h4>
            </header>
<p class="item-text">${item.desc}</p>
        </div>
    </article>` ;
    }) ;
    displayMenu= displayMenu.join('') ;
    sectionCenter.innerHTML = displayMenu ;
}
