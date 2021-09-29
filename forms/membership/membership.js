
let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

let name = " "

btnEnter.onclick=function(){
  name = inptName.value 
  if (members.includes(name) == true) {
  lblMessage.value = name + ", you are a member"
  }
else {
  lblMessage.value = name + ", you are not a member"
  members.push(name)
  }
}
