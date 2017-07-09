import { Component } from '@angular/core';
import { Employee } from './Models/employee';

@Component({
    selector: 'employee-root',
    templateUrl: './Views/employee-app.component.html'
})

export class EmployeeComponent {
    // binding logic
    empObj: Employee = new Employee();
    // employee collection
    employees: Array<Employee> = new Array<Employee>();
    // Add Employee
    AddEmployee() {
        this.employees.push(this.empObj);
        this.empObj = new Employee();
    }
}
It is an appointment booking application for Hospitals,