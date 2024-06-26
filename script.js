// get the data
let users = [
    {
        profilePic: "https://images.unsplash.com/photo-1719124627446-22102efda889?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1585600255897-eb44d312c178?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
        pendingMsg: 5,
        location: "Mumbai,India",
        name: "Rebecca",
        age: 21,
        interests: [
            {
                icon: `<i class="text-sm ri-music-2-fill"></i>`,
                interest: "Music"
            },
            {
                icon: `<i class="ri-ping-pong-line"></i>`,
                interest: "Ping Pong"
            }
    ],
        bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia illum perspiciatis officiis eveniet ipsum."
    },
    {
        profilePic: "https://images.unsplash.com/photo-1588343509724-a1d657a78a70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYxfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
        displayPic: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
        pendingMsg: 3,
        location: "Navi Mumbai,India",
        name: "Tani",
        age: 20,
        interests: [
            {
                icon: `<i class="text-sm ri-music-2-fill"></i>`,
                interest: "Music"
            },
            {
                icon: `<i class="ri-ping-pong-line"></i>`,
                interest: "Ping Pong"
            }
        ],
        bio: "Consectetur adipisicing elit. Mollitia illum perspiciatis officiis eveniet ipsum."
    },
    {
        profilePic: "https://images.unsplash.com/photo-1525571663808-f7ae24a5eb90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
        displayPic:"https://images.unsplash.com/photo-1511590895197-7b1da5737705?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMsg: 2,
        location: "Navi Mumbai,India",
        name: "Tanya",
        age: 19,
        interests: [
            {
                icon: `<i class="text-sm ri-music-2-fill"></i>`,
                interest: "Music"
            },
            {
                icon: `<i class="ri-ping-pong-line"></i>`,
                interest: "Ping Pong"
            }
        ],
        bio: "Consectetur adipisicing elit. Mollitia illum perspiciatis officiis eveniet ipsum."
    },
    {
        profilePic: "https://images.unsplash.com/photo-1717248320375-7b85fa14f701?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
        displayPic:"https://images.unsplash.com/photo-1717248320480-513d02b13ddc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMsg: 2,
        location: "Navi Mumbai,India",
        name: "Humsa",
        age: 19,
        interests: [
            {
                icon: `<i class="text-sm ri-music-2-fill"></i>`,
                interest: "Music"
            },
            {
                icon: `<i class="ri-ping-pong-line"></i>`,
                interest: "Ping Pong"
            }
        ],
        bio: "Consectetur adipisicing elit. Mollitia illum perspiciatis officiis eveniet ipsum."
    },
];

function select(elem){
    return document.querySelector(elem);
}

let curr = 0;
let isAnimating = false;

function setData(index){
    select(".profileImg img").src = users[index].profilePic;
    select(".badge h5").textContent = users[index].pendingMsg;
    select(".location h3").textContent = users[index].location;
    select(".personalInfo .name").textContent = users[index].name;
    select(".personalInfo .age").textContent = users[index].age;
    select(".bio p").textContent = users[index].bio;

    let clutter = "";
    users[index].interests.forEach(function(interest){
        clutter += `<div class="tag flex gap-2 items-center py-1 px-3 rounded-full bg-white/30">
                            ${interest.icon}
                            <h3 class="text-sm tracking-tight">${interest.interest}</h3>
                        </div>`
    }) 
    select(".tags").innerHTML = clutter;
}

(function setInitial(){
    select(".maincard img").src = users[curr].displayPic;
    select(".incomingCard img").src = users[curr + 1]?.displayPic;
    setData(curr);

    curr = 2;
})();

function imageChange(){
    if(!isAnimating){
        isAnimating = true;
        let tl = gsap.timeline({
            onComplete: function(){
                isAnimating = false;
                let main = select(".maincard");
                let incoming = select(".incomingCard");
                
                incoming.classList.remove("z-[2]");
                incoming.classList.add("z-[3]");
                incoming.classList.remove("incomingCard");
    
                main.classList.remove("z-[3]");
                main.classList.add("z-[2]");
                gsap.set(main,{
                    scale: 1,
                    opacity: 1
                })
                if(curr === users.length) curr = 0;
                select(".maincard img").src = users[curr].displayPic;
                curr++;
                main.classList.remove("maincard");
                incoming.classList.add("maincard");
                main.classList.add("incomingCard");
            }
        });
        tl.to(".maincard",{
            scale: 1.1,
            duration: .9,
            ease: Circ,
            opacity: 0
        },"a")
        .from(".incomingCard",{
            scale: .9,
            duration: 1.1,
            ease: Circ,
            opacity: 0
        },"a")
    }  
}

let deny = select(".deny");
let accept = select(".accept");
deny.addEventListener("click",function(){
    imageChange();
    setData(curr-1);
    gsap.from(".details .element",{
        y: "100%",
        opacity: 0,
        stagger: .1,
        duration: .7,
        ease: Power4.easeInOut
    })
})
accept.addEventListener("click",function(){
    imageChange();
    setData(curr-1);
    gsap.from(".details .element",{
        y: "100%",
        opacity: 0,
        stagger: .1,
        duration: .7,
        ease: Power4.easeInOut
    })
})

function containerCreator(){
    document.querySelectorAll(".element")
    .forEach(function(element){
        let div = document.createElement("div");
        div.classList.add(`${element.classList[1]}container`, 'overflow-hidden');
        div.appendChild(element);
        select(".details").appendChild(div);
    })
}
containerCreator();