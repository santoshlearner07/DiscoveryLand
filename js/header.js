// class MyHeader extends HTMLElements {
//     connectedCallback(){
//         this.innerHTML = `<header class="header-content">
//         <div class="logo-content">
//             <img src="../Assests/shortcutIcon.png" alt="logo">
//             <div>
//                 <span class="dlc-text"> Discovery </span> <br>
//                 <span class="lc-text"> Land Company </span>
//             </div>
//         </div>
//         <nav>
//             <ul>
//                 <li><a href="#"> About DLC </a></li>
//                 <li><a href="#"> Our Worlds </a></li>
//                 <li><a href="#"> Experiences </a></li>
//                 <li><a href="#"> Gallery </a></li>
//                 <li><a href="#"> Press </a></li>
//             </ul>
//         </nav>
//     </header>`
//     }
// }

// customElements.define('my-header',MyHeader)












document.querySelector('#header').innerHTML = `
<div class="header">
<div class="logo">
    <div class="logo-name">
        <span class="logo-text1">Discovery </span>
        <span class="logo-text2">land company</span> 
    </div>
</div>
    <div class="options">
        <div>About DLC</div>
        <div>Our Worlds</div>
        <div>Experiences</div>
        <div>Gallery</div>
        <div>Press</div>  
</div>
</div>`;