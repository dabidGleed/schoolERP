angular.module('school_erp').config(function($stateProvider, $urlRouterProvider, $locationProvider) { 
    $stateProvider
        .state('login', { // login Page
            url: "/login",
            templateUrl: "app/components/login/login.html",
            controller: "loginController"   
        })
        .state('main', {
            url: "/",
            views: {
                '': { templateUrl: "app/components/shared/main.html" },
                'header@main': { templateUrl: "app/components/shared/header.html" },
                'sidebar@main': { templateUrl: "app/components/shared/sidebar.html" },
                'footer@main': { templateUrl: "app/components/shared/footer.html" }
            }
        })
        .state('main.dashboard', { // login Page
            url: "dashboard",
            templateUrl: "app/components/dashboard/dashboard.html"          
        })
        .state('main.studentAdmission', { // login Page
            url: "studentInfo/studentAdmission",
            templateUrl: "app/components/studentAdmission/studentAdmission.html",
            controller:"studentAdmissionController"        
        })
        .state('main.student', { // login Page
            url: "studentInfo/student",
            templateUrl: "app/components/student/student.html",
            controller: "studentController"       
        })
        // .state('main.studentDetails', { // login Page
        //     url: "studentInfo/studentDetails",
        //     templateUrl: "app/components/studentDetails/studentDetails.html"          
        // })
         .state('main.employee', { // login Page
            url: "employeeInfo/employee",
            templateUrl: "app/components/employee/employee.html",
            controller: "employeeController"        
        })
        .state('main.employeeDetails', { // login Page
            url: "employeeInfo/employeeDetails",
            templateUrl: "app/components/employeeDetails/employeeDetails.html",
            controller:"employeeDetailsController" 
        })
        .state('main.employeeAttendance', { // login Page
            url: "employeeInfo/employeeAttendance",
            templateUrl: "app/components/employeeAttendance/employeeAttendance.html",
            controller:"employeeAttendanceController"          
        })
         .state('main.studentAttendance', { // login Page
            url: "attendance/studentAttendance",
            templateUrl: "app/components/studentAttendance/studentAttendance.html",
            controller:"studentAttendanceController"
        })
        .state('main.subjects', { // login Page
            url: "academics/subjects",
            templateUrl: "app/components/subjects/subjects.html",
            controller:"subjectsController"         
        })
        .state('main.chapters', { // login Page
            url: "academics/chapters",
            templateUrl: "app/components/chapters/chapters.html",
            controller:"chaptersController"          
        })
        .state('main.assignSubjects', { // login Page
            url: "academics/assignSubjects",
            templateUrl: "app/components/assignSubjects/assignSubjects.html"          
        })
         .state('main.assignments', { // login Page
            url: "academics/assignments",
            templateUrl: "app/components/assignments/assignments.html",
            controller:"assignmentsController"        
        })
         .state('main.examSchedules', { // login Page
            url: "examination/examSchedules",
            templateUrl: "app/components/examSchedules/examSchedules.html", 
            controller: "examSchedulesController"       
        })
        .state('main.examPapers', { // login Page
            url: "examination/examPapers",
            templateUrl: "app/components/examPapers/examPapers.html",
            controller:"examPapersController"         
        })
        .state('main.evaluations', { // login Page
            url: "examination/evaluations",
            templateUrl: "app/components/evaluations/evaluations.html"          
        })
        .state('main.classWise', { // login Page
            url: "timetable/classWise",
            templateUrl: "app/components/classWise/classWise.html"          
        })
         .state('main.teacherWise', { // login Page
            url: "timetable/teacherWise",
            templateUrl: "app/components/teacherWise/teacherWise.html"          
        })
         .state('main.schoolEvents', { // login Page
            url: "timetable/schoolEvents",
            templateUrl: "app/components/schoolEvents/schoolEvents.html"          
        })
         .state('main.onlineNoticeBoard', { // login Page
            url: "timetable/onlineNoticeBoard",
            templateUrl: "app/components/onlineNoticeBoard/onlineNoticeBoard.html"          
        })
         .state('main.libraryRules', { // login Page
            url: "library/libraryRules",
            templateUrl: "app/components/libraryRules/libraryRules.html"          
        })
        .state('main.addBook', { // login Page
            url: "library/addBook",
            templateUrl: "app/components/addBook/addBook.html",
             controller:"addBookController"
        })
         .state('main.bookList', { // login Page
            url: "library/bookList",
            templateUrl: "app/components/bookList/bookList.html",
             controller:"bookListController"          
        })
          .state('main.addStation', { // login Page
            url: "transport/addStation",
            templateUrl: "app/components/addStation/addStation.html",
            controller:"addStationController"         
        })
         .state('main.addBusRoute', { // login Page
            url: "transport/addBusRoute",
            templateUrl: "app/components/addBusRoute/addBusRoute.html",
            controller:"BusRouteController"          
        })
         .state('main.routeGeolocation', { // login Page
            url: "transport/routeGeolocation",
            templateUrl: "app/components/routeGeolocation/routeGeolocation.html"          
        });
        $urlRouterProvider.otherwise("/login");
        
});