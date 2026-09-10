
const employees =
 [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
      //... More employee records can be added here
    ];

    let details = " ";
    let displayCount = 0;
    function myDisplay(employee){
        details += ` ${employee.id} ${employee.name}  ${employee.age}  ${employee.department}  ${employee.salary} `;
        details +=  "\n";
    }

    /*
    function addElement()
    {
       const newDiv = document.createElement("div");

       const newContent = document.createTextNode(details);

       // add the text node to the newly created div
       
       newDiv.appendChild(newContent);

    const currDiv = document.getElementById("div2");
    document.body.insertBefore(currDiv, newDiv);


    }
    */
    
    function displayEmployees() {
        //let details = " ";
        employees.forEach(myDisplay);
       if (displayCount % 2 === 0) {
        
        //only write to DOM if clicked the first time

        document.getElementById('div2').innerHTML = details;
        alert("The Employees:")
        alert(details);
        displayCount += 1;
       }
     
    }

    //const targetElement = document.querySelector('#title');
    //targetElement.textContent = details;
 
    //const fullName = `Hello, my name is ${firstName} ${lastName}.`;

    function calculateTotalSalaries() {
        
    }

    function displayHREmployees() {


    }

    function findEmployeeById(id) {


    }
