let richestPeoples = [
    {
        name:"Masayoshi Son",
        title:"$22.6 Billion", 
        imgURL:"Masayoshi-Son.jpg",
        readMoreURL:"https://en.wikipedia.org/wiki/Masayoshi_Son",
        quote:"“A person’s life is over in 50, 100 years. But a company lives on through the people it is composed of, and SoftBank Group has to survive even after I’m gone.”"
    },
    {
        name:"Wang Jianlin",
        title:"$29.6 Billion", 
        imgURL:"Wang-Jianlin.jpg",
        readMoreURL:"https://en.wikipedia.org/wiki/Wang_Jianlin",
        quote:"“There are not many companies in China that dare to say in public, We don’t offer bribes, or companies that operate only by market rules.”"
    },
    {
        name:"Li-Ka Shing",
        title:"$33.9 Billion", 
        imgURL:"Li-Ka-shing.jpg",
        readMoreURL:"https://en.wikipedia.org/wiki/Li_Ka-shing",
        quote:"““If you think, then you will be prepared. If you are prepared, then you will have no worries.”.”"       
    },
    {
        name:"Mukesh Ambani",
        title:"$34.9 Billion", 
        imgURL:"Mukesh-Ambani.jpg ",
        readMoreURL:"",
        quote:"““I don’t think that ambition should not be in the dictionary of entrepreneurs. But our ambition should be realistic. You have to realise that you can’t do everything.”"
    },
    {
        name:"Jack Ma",
        title:"$42.2 Billion", 
        imgURL:"Jack-Ma.jpg",
        readMoreURL:"https://en.wikipedia.org/wiki/Jack_Ma",
        quote:"““Help young people. Help small guys. Because small guys will be big. Young people will have the seeds you bury in their minds, and when they grow up, they will change the world.”"
    },
    {
         name:"Ma Hueteng",
        title:"$37.9 Billion", 
        imgURL:"Ma-Hueteng.jpg",
        readMoreURL:"https://en.wikipedia.org/wiki/Ma_Huateng",
        quote:"“You need to have extraordinary wisdom to be the forerunner."
    },
    {
         name:"Hui Ka Yan",
        title:"$38.1 Billion", 
        imgURL:"Hui-Ka-Yan.jpg",
        readMoreURL:"https://en.wikipedia.org/wiki/Xu_Jiayin",
        quote:"“Hui Ka Yan is a Chinese businessman and real estate developer with several years of experience. He has a wide array of projects under his leadership, and many more are yet to come”"
    }
    
]

function initialize(){
    let personsList = document.querySelector("#richpeople-List");
  
    for(let i = 0 ; i < richestPeoples.length; i++){
        personsList.innerHTML += `
            <div class="celeb-img" 
            style="background-image:
            url('images/${richestPeoples[i].imgURL}');" onclick="changeCeleb(${i})">
                <p class="img-txt" >${richestPeoples[i].name}</p>
            </div>
        `
    }
   
}


function changeCeleb(celebIndex){
   document.querySelector("#celeb-name").innerHTML=richestPeoples[celebIndex].name;
   document.querySelector("#celeb-title").innerHTML = richestPeoples[celebIndex].title;
   document.querySelector("#image").style = `background-image:url(images/${richestPeoples[celebIndex].imgURL});`
   document.querySelector("#celeb-quote").innerHTML = richestPeoples[celebIndex].quote;
   document.querySelector("#celeb-link").href = richestPeoples[celebIndex].readMoreURL;

}



