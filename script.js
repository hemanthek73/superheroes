const searchInput=document.getElementById('searchInput')
const searchButton=document.getElementById('searchbutton')
const heroImageDiv=document.getElementById('HeroImage')
const newHero=document.getElementById('newHero')
const token=1329616691245515
const Base_url=`https://superheroapi.com/api.php/1329616691245515`

const getRandomHero=(id,name)=>{
  fetch(`${Base_url}/${id}`)
  .then(response=>response.json())
  .then(json=>{
    console.log(json)
    const hii=json.name
    console.log(hii)

    heroImageDiv.innerHTML=`<h2>Name:${json.name}</h2><img src="${json.image.url}" height=200 width=200/>`
  })
}
const randomHero=()=>{
  const numberofHero=731
  id=Math.floor(Math.random()*numberofHero)+1
  return id
}
newHero.onclick=()=>getRandomHero(randomHero())

const getsearchSuperHero=()=>{
  const search=searchInput.value
  fetch(`${Base_url}/search/${search}`)
  .then(response=>response.json())
  .then(json=>{
    const Hero=json.results[0]
    console.log(Hero)
    heroImageDiv.innerHTML=`<h2>Name:${json.results[0].name}</h2><img src= "${Hero.image.url}" height=200 width=200/>`
  })
}
searchButton.onclick=()=>getsearchSuperHero(searchInput.value)