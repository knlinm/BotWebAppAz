document.querySelector(".social").addEventListener("click", function () {
    window.location.href = "https://t.me/raufaxundov";
})

document.querySelector(".tntCount").addEventListener("click", function () {
    if (document.querySelector(".tntCount img").classList.contains("1")) {
        document.querySelector(".tntCount img").src = src = "assets/img/2-removebg-preview.png"
        document.querySelector(".tntCount img").classList.remove("1")
        document.querySelector(".tntCount img").classList.add("2")
    }
    else if (document.querySelector(".tntCount img").classList.contains("2")) {
        document.querySelector(".tntCount img").src = src = "assets/img/1-removebg-preview.png"
        document.querySelector(".tntCount img").classList.remove("2")
        document.querySelector(".tntCount img").classList.add("1")
    }

})
document.querySelector(".buttonWrapper").addEventListener("click", function () {
    if (document.querySelector("p.counter").innerText == "Başlat") {
        allitems = document.querySelectorAll("div.item");
        countOfGold = [3, 4, 5];
        chance = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
        places = [];
        count = Math.floor(Math.random() * 3) + 3;;

        if (count == 3) {
            while (places.length < 3) {
                element = chance[Math.floor(Math.random() * 25)]
                if (!places.includes(element)) {
                    places.push(element)
                }
            }
            allitems[places[0]].classList.add("opened")
            allitems[places[1]].classList.add("opened")
            allitems[places[2]].classList.add("opened")
        }
        else if (count == 4) {
            while (places.length < 4) {
                element = chance[Math.floor(Math.random() * 25)]
                if (!places.includes(element)) {
                    places.push(element)
                }
            }
            allitems[places[0]].classList.add("opened")
            allitems[places[1]].classList.add("opened")
            allitems[places[2]].classList.add("opened")
            allitems[places[3]].classList.add("opened")
        }
        else if (count == 5) {
            while (places.length < 5) {
                element = chance[Math.floor(Math.random() * 25)]
                if (!places.includes(element)) {
                    places.push(element)
                }
            }
            allitems[places[0]].classList.add("opened")
            allitems[places[1]].classList.add("opened")
            allitems[places[2]].classList.add("opened")
            allitems[places[3]].classList.add("opened")
            allitems[places[4]].classList.add("opened")
        }
        document.querySelector("p.counter").innerText = "Sıfırla"
    }
    else if (document.querySelector("p.counter").innerText == "Sıfırla") {
        var timer = 59
        var myTimer = setInterval(() => {
            timer--
            if (timer >= 10) {
                document.querySelector("p.counter").innerText = "00:" + timer + ""
            }
            else {
                document.querySelector("p.counter").innerText = "00:0" + timer + ""

            }
            if (timer == 0) {
                document.querySelector("p.counter").innerText = "Başlat"
                clearInterval(myTimer)
            }
        }, 1000);
        openedItems = document.querySelectorAll(".item.opened")
        for (let i = 0; i < openedItems.length; i++) {
            openedItems[i].classList.remove("opened")
        }
    }
})










document.querySelector(".icon.next").addEventListener("click",function(){
    if (document.getElementById("pin").value == "080702"){
        document.querySelector(".center").classList.add("hidden")
    }
    else{
        alert("Şifre yanlış!")
    }
})