angular.module('school_erp').config(function($stateProvider, $urlRouterProvider, $locationProvider) { 
    $stateProvider
        .state('dashboard', { // login Page
            url: "/dashboard",
            templateUrl: "app/components/dashboard/dashboard.html"          
        })
        .state('studentAdmission', { // login Page
            url: "/studentAdmission",
            templateUrl: "app/components/studentAdmission/studentAdmission.html"          
        })
        .state('student', { // login Page
            url: "/student",
            templateUrl: "app/components/student/student.html"          
        })
        .state('studentDetails', { // login Page
            url: "/studentDetails",
            templateUrl: "app/components/studentDetails/studentDetails.html"          
        })
         .state('employee', { // login Page
            url: "/employee",
            templateUrl: "app/components/employee/employee.html"          
        })
        .state('employeeDetails', { // login Page
            url: "/employeeDetails",
            templateUrl: "app/components/employeeDetails/employeeDetails.html"          
        })
        .state('employeeAttendance', { // login Page
            url: "/employeeAttendance'",
            templateUrl: "app/components/employeeAttendance/employeeAttendance.html"          
        })
         .state('studentAttendance', { // login Page
            url: "/studentAttendance",
            templateUrl: "app/components/studentAttendance/studentAttendance.html"          
        })
        .state('subjects', { // login Page
            url: "/subjects'",
            templateUrl: "app/components/subjects/subjects.html"          
        })
        .state('chapters', { // login Page
            url: "/chapters",
            templateUrl: "app/components/chapters/chapters.html"          
        })
        .state('assignSubjects', { // login Page
            url: "/assignSubjects",
            templateUrl: "app/components/assignSubjects/assignSubjects.html"          
        })
         .state('assignments', { // login Page
            url: "/assignments",
            templateUrl: "app/components/assignments/assignments.html"          
        })
         .state('examSchedules', { // login Page
            url: "/examSchedules",
            templateUrl: "app/components/examSchedules/examSchedules.html"          
        })
        .state('examPapers', { // login Page
            url: "/examPapers",
            templateUrl: "app/components/examPapers/examPapers.html"          
        })
        .state('evaluations', { // login Page
            url: "/evaluations",
            templateUrl: "app/components/evaluations/evaluations.html"          
        })
        .state('classWise', { // login Page
            url: "/classWise",
            templateUrl: "app/components/classWise/classWise.html"          
        })
         .state('teacherWise', { // login Page
            url: "/teacherWise",
            templateUrl: "app/components/teacherWise/teacherWise.html"          
        })
         .state('schoolEvents', { // login Page
            url: "/schoolEvents",
            templateUrl: "app/components/schoolEvents/schoolEvents.html"          
        })
         .state('onlineNoticeBoard', { // login Page
            url: "/onlineNoticeBoard",
            templateUrl: "app/components/onlineNoticeBoard/onlineNoticeBoard.html"          
        })
         .state('libraryRules', { // login Page
            url: "/libraryRules",
            templateUrl: "app/components/libraryRules/libraryRules.html"          
        });
        $urlRouterProvider.otherwise("/dashboard");
        
});