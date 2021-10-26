function navbar(){
    return ` <div id = "navbar">
    <div id ="searchbox">
        <input type="text" autocomplete="off" name="" placeholder ="search food" id="input">
        <span onclick = "search()" class="material-icons">
            search
        </span>
        <span class="material-icons">
            mic
        </span>
    </div>
   <div id = "redirect">
    <a href="./index.html">Home</a>
    <a href="./random.html">RandomMeals</a>
    <a href="./latest.html">LatestMeals</a>
   </div>
</div>`
}

function links(){
    return `<link rel="stylesheet" href="./styles/styles.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
    <style>
        .material-icons{ font-size: 34px; }
        .material-icons:hover{
            cursor:pointer
        }
    </style>`
}

export  {navbar,links}