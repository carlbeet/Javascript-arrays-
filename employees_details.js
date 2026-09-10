
const employees =
 [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
      { id: 4, name: 'Carson Cheller', age: 38, department: 'HR', salary: 45000 },
      //... More employee records can be added here
    ];

    let details = " ";
    let details2 = " ";
    let displayCount = 0;
    let displayIDCount = 0;
    let calculateCount =0;
    let mapCount = 0;
    let calculateCount2 =0;
    let displayHRCount = 0;
    let findCount = 0;

    function myDisplay(employee){
        details += ` ${employee.id} ${employee.name}  ${employee.age}  ${employee.department}  ${employee.salary}\n `;
        details +=  "\n";
    }

    function myDisplay2(employee2){
        details2 += ` ${employee2.id} ${employee2.name}  ${employee2.age}  ${employee2.department}  ${employee2.salary}\n `;
        details2 +=  "\n";
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
        alert("Employee details: " + details);
        displayCount += 1;
       }
     
    }

    //const targetElement = document.querySelector('#title');
    //targetElement.textContent = details;
 
    //const fullName = `Hello, my name is ${firstName} ${lastName}.`;
    detailsMap = " ";
    function displayEmployeesMap() {
        employees.map((employee) =>  {
        detailsMap += `${employee.id} ${employee.name}  ${employee.age}  ${employee.department}  ${employee.salary}\n
         `;});

        
        if(mapCount === 0) {
        alert(detailsMap);
        document.getElementById('div3').innerHTML =detailsMap ;
        mapCount ++;
        }
        }

        total = 0;
        count = 0;
        message = "Total Salaries: $"


        function myAdd(employee) {
            total += employee.salary;
            // count ++;
            // if (count === employees.size()) {
            // message += total;
            
            // }

        }
    function calculateTotalSalaries2() {
       
       employees.forEach(myAdd);
       if (calculateCount === 0) {
            {
            //only write to DOM if clicked the first time
            document.getElementById('div4').innerHTML = message;
            document.getElementById('div5').innerHTML = total;
            displayCount += 1;
           }
         
       }
    }

    function calculateTotalSalaries() {
         const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
       if (calculateCount2 ===0) {
        document.getElementById('div4').innerHTML = message;
        document.getElementById('div6').innerHTML = totalSalaries;
        calculateCount2 ++;
        }
    }

    let hrMap = " ";
    function displayHREmployees()
    {
        //  const hrEmployees = employees.filter(employee => employee.department === 'HR');

        //  const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - ${employee.salary}</p>`).join('');
        //  document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
       
       
        const hrEmployee = employees.filter((employee) => 
            employee.department === "HR");

        hrEmployee.map((employee) =>  {
                hrMap += `${employee.id} ${employee.name}  ${employee.age}  ${employee.department}  ${employee.salary}\n
                 `;});
        
        
        document.getElementById('div7').innerHTML = hrMap;
        }

    

    function findEmployeeById(employeeId) {
        const foundEmployee = employees.find((employee) => employee.id === employeeId);
        if (foundEmployee) {
            document.getElementById('div8').innerHTML =`${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - ${foundEmployee.salary} `;

        }
        else {
            document.getElementById('div8').innerHTML = 'No employee matches this id';
        }
    }
    

    //bonus - filter function
    let filterMap = " ";
    function filterBySalary(low, high) { 
        filteredEmployees = employees.filter((employee) => employee.salary >= low && employee.salary <= high);
        filteredEmployees.map((employee) =>  {
            filterMap += `${employee.id} ${employee.name}  ${employee.age}  ${employee.department}  ${employee.salary}\n
             `;});

    document.getElementById('div9').innerHTML = filterMap;
    
    }
