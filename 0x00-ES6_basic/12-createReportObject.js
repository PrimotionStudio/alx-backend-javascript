#!/usr/bin/node
export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments: (employeesList) => {
      const dept = [];
      for (const dep in employeesList) {
        if (dep) dept.push(dep);
      }
      return dept.length;
    },
  };
}
