#!/usr/bin/node
export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments: (employeesList) => {
      let dept = [];
      for (const dep in employeesList) {
        dept.push(dep)
      }
      return dept.length;
    },
  };
}
