users = JSON.parse(localStorage.getItem("user") )||[];
updatedIndex = 0;
document.getElementById('btnmodif').style.visibility = 'hidden';
test(users);
function registerSociété(){
    CompanyName= document.getElementById('CompanyName').value;
    email= document.getElementById('email').value;
    address= document.getElementById('address').value;
    Employees= document.getElementById('Employees').value;
    if(CompanyName!="" && email!="" &&  address!="" && Employees!=""){
users.push({
    CompanyName:CompanyName,
    email: email,
    address:address,
    Employees:Employees
})
localStorage.setItem("user",JSON.stringify(users))
    document.getElementById('CompanyName').value = "";
    document.getElementById('email').value = "";
    document.getElementById('address').value = "";
    document.getElementById('Employees').value = "";
    }
    test(users);
}

function test(tab) {
    table = document.getElementById('crud')
    table.innerHTML = '';
    tab.forEach((element, index) => {
        table.innerHTML += `<tr>
     <th>${element.CompanyName}</th>
     <th>${element.email}</th>
     <th>${element.address}</th>
     <th>${element.Employees}</th>
    <th><button onclick="Delete(${index})">delete</button></th>
    <th><button onclick="Edit(${index})">edit</button></th>
     </tr>`;
    });
    }

    function Delete(index){
        if (confirm('Are you sure to delete this record ???')) {
            users.splice(index, 1);
               localStorage.setItem("user",JSON.stringify(users))
        }
        test(users);
        }
    
       
            function Edit(index) {
                updatedIndex = index
                document.getElementById('btnmodif').style.visibility = 'visible';
                document.getElementById('btncreate').style.visibility = 'hidden';
                const user = users[index]
                document.getElementById('CompanyName').value = user.CompanyName,
                    document.getElementById('email').value = user.email,
                    document.getElementById('address').value = user.address,
                    document.getElementById('Employees').value = user.Employees;
                
                }
        

        function update() {
           
            document.getElementById('btnmodif').style.visibility = 'hidden';
            document.getElementById('btncreate').style.visibility = 'visible';
            
            CompanyName = document.getElementById('CompanyName').value;
            email = document.getElementById('email').value;
            address = document.getElementById('address').value;
            Employees = document.getElementById('Employees').value;
            
            var item = {
                CompanyName: CompanyName,
                email: email,
                address: address,
                Employees: Employees
            
            };
            document.getElementById('CompanyName').value = "";
            document.getElementById('email').value = "";
            document.getElementById('address').value = "";
            document.getElementById('Employees').value = "";
            
            this.users.splice(updatedIndex, 1, item);
            localStorage.setItem("user",JSON.stringify(users))
            test(users);
            
            
            }