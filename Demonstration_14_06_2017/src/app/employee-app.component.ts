import { Component } from '@angular/core'
import { Employee } from './Models/employee'

@Component({
    selector: 'employee-root',
    templateUrl: './Views/employee-app.component.html'
})

export class EmployeeComponent {
    // Binding Logic
    currentEmployee: Employee = new Employee();
    // Employee Array
    employees: Array<Employee> = new Array<Employee>();

    // Add Employee
    AddEmployee() {
        this.employees.push(this.currentEmployee);
        this.employees = this.employees.slice();
        this.currentEmployee = new Employee();
    }

    // Clear Fields
    ClearFields() {
        this.currentEmployee = new Employee();
    }
    // Select Employee
    SelectEmployee(empSelected: Employee) {
        this.currentEmployee = Object.assign({}, empSelected);
        // this.currentEmployee = empSelected;
    }
    
    // Update Employee
    UpdateEmployee() {
        for(let emp of this.employees) {
            if(emp.empCode == this.currentEmployee.empCode) {
                emp.empName = this.currentEmployee.empName;
                emp.empSalary = this.currentEmployee.empSalary;
            }
        }
        this.currentEmployee = new Employee();
    }
    // Delete Employee
    DeleteEmployee(empIndex: number) {
        this.employees.splice(empIndex,1);
    }
}