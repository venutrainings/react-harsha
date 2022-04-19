const getData = () => {
	var data = new XMLHttpRequest();
	data.open("get","https://gorest.co.in/public/v2/users",true);
	data.onload  = function(){
		// console.log(data)
		var dataResponse = data.responseText
		var result = JSON.parse(dataResponse)
		for (let eachData of result) {
			console.log(eachData)
		}
		// console.log(result)
	}
	data.send()
}

const postData = () =>{
var data= new XMLHttpRequest()
data.open('post','https://gorest.co.in/public/v2/users',true)
data.setRequestHeader("Content-type","application/x-www-form-urlencoded")
data.setRequestHeader("Authorization","Bearer eec40129af411a75e1b240f33bff95f6661f6f51a07e7b730b2b41851b43cd7c")
data.onload= function (){
console.log(this.responseText)
}
data.getreadystatechange= function(){
if (readyState==4 & this.status==200){
document.getElementById("post").innerHtml= this.responseText
}
}
data.send("name=Harsha&email=harsha1234@gmail.com&gender=male&status=active")
}


const putData = () =>{
var data1 ={}
data1.name="Harsha Ch"
data1.email="harsha12@gamil.com"
data1.gender='male'
data1.status='inactive'
var finalData = JSON.stringify(data1)
console.log(finalData)
var data = new XMLHttpRequest()
data.open('put','https://gorest.co.in/public/v2/users/4579',true)
data.setRequestHeader('Content-type','/application/json ; charset=utf-8')
data.setRequestHeader("Authorization","Bearer eec40129af411a75e1b240f33bff95f6661f6f51a07e7b730b2b41851b43cd7c")
data.onload = function (){
var users= JSON.parse(data.responseText)
if (data.readyState == 4 && data.status == '200'){
console.table(users)
}else{
console.error(users)
}
}
data.send(finalData)
}


const delData = () =>{
var data = new XMLHttpRequest()
data.open('delete','https://gorest.co.in/public/v2/users/3849',true)

data.setRequestHeader('Content-type','application/x-www-form-urlencoded')
data.setRequestHeader("Authorization","Bearer eec40129af411a75e1b240f33bff95f6661f6f51a07e7b730b2b41851b43cd7c")
data.onload = function (){
var users = JSON.parse(data.responseText)
if (data.readyState == 4 && data.status== "200" ){
console.table(users)
console.log("Deleted the Record Successfully")
}else{
console.error(users)
}
}

data.send(null)
}

