img = ""
status1 = ""
objects = []
img1=""
p=""
function preload() {
    //img = loadImage("dog_cat.jpg")
    //img = loadImage("fruit.jpeg")
    p=sessionStorage.getItem('page');
    if (p=="fruit")
    {
        img=loadImage("fruit.jpeg")
    }
    if (p=="room") {
        img=loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAgFKtD_-EEZNfuOuOyZzCFXIG7ZR23aILbYavF09kiJTmv3fjYlci7-A_eewjoEWzY9c&usqp=CAU")

    }
    if (p=="farm")
    {
        img=loadImage("farm.jpeg")
    
    }
    if (p=="city")
    {
        img=loadImage("city.jpeg")
    }
}

function setup() {
    canvas = createCanvas(650, 450)
    canvas.center()
    objDetector = ml5.objectDetector("cocossd", model_loaded)
    document.getElementById("status").innerHTML = "status= detecting objects"
}

function draw() {
   
    image(img, 0, 0)
    if (status1 != "") {
        for (let index = 0; index < objects.length; index++) {
            document.getElementById("status").innerHTML = "status= object detecting"
            fill("white")
            percent = floor(objects[index].confidence * 100)
            text(objects[index].label + " " + percent + "%", objects[index].x, objects[index].y)
            noFill()
            stroke("red")
            rect(objects[index].x, objects[index].y, objects[index].width, objects[index].height)
        }
    }
}

function gotof() {
    p="fruit"
    window.location.href = "fruits.html"
    img1=loadImage("fruit.jpeg")
    sessionStorage.setItem('page','fruit');

   // preload()
}

function gotoc() {
    p="city"
    window.location.href = "city.html"
    sessionStorage.setItem('page','city');
    //img1=loadImage("city.jpeg")
   // preload()
}
function gotofarm() {
    p="farm"
    window.location.href = "farm.html"
    img1=loadImage("https://grist.org/wp-content/uploads/2022/02/USDA-CRP-cows-farm-e1644361600714.jpg")
    sessionStorage.setItem('page','farm');
}
function gotor() {
    p="room"
    window.location.href = "room.html"
    img1=loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAgFKtD_-EEZNfuOuOyZzCFXIG7ZR23aILbYavF09kiJTmv3fjYlci7-A_eewjoEWzY9c&usqp=CAU")
    sessionStorage.setItem('page','room');
}

function model_loaded() {
    console.log("Model Is Loaded")
    status1 = true;
    objDetector.detect(img, got_results)
}

function got_results(error, results) {
    if (error) {
        console.log(error)
    } else {
        console.log(results)
        objects = results
    }

}