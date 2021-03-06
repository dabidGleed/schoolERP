angular.module('school_erp').config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
    // .state('login', { // login Page
    //     url: "/login",
    //     templateUrl: "app/components/login/login.html",
    //     controller: "loginController",
    //     data: {
    //         requireLogin: false
    //     }
    // })
        .state('main', {
            url: "/",
            views: {
                '': { templateUrl: "app/components/shared/main.html" },
                'header@main': { templateUrl: "app/components/shared/header.html", controller: 'headController' },
                'sidebar@main': { templateUrl: "app/components/shared/sidebar.html", controller: 'sideController' },
                'footer@main': { templateUrl: "app/components/shared/footer.html" }
            },
            data: {
                requireLogin: true
            }
        })
        .state('main.dashboard', { // login Page
            url: "dashboard",
            templateUrl: "app/components/dashboard/dashboard.html",
            data: {
                requireLogin: true
            }
        })
        .state('main.studentAdmission', { // login Page
            url: "studentInfo/studentAdmission",
            templateUrl: "app/components/studentAdmission/studentAdmission.html",
            controller: "studentAdmissionController",
            data: {
                requireLogin: true
            }
        })
        .state('main.student', { // login Page
            url: "studentInfo/student",
            templateUrl: "app/components/student/student.html",
            controller: "studentController",
            data: {
                requireLogin: true
            }
        })
        // .state('main.studentDetails', { // login Page
        //     url: "studentInfo/studentDetails",
        //     templateUrl: "app/components/studentDetails/studentDetails.html"          
        // })
        .state('main.employee', { // login Page
            url: "employeeInfo/employee",
            templateUrl: "app/components/employee/employee.html",
            controller: "employeeController",
            data: {
                requireLogin: true
            }
        })
        .state('main.employeeDetails', { // login Page
            url: "employeeInfo/employeeDetails",
            templateUrl: "app/components/employeeDetails/employeeDetails.html",
            controller: "employeeDetailsController",
            data: {
                requireLogin: true
            }
        })
        .state('main.employeeAttendance', { // login Page
            url: "employeeInfo/employeeAttendance",
            templateUrl: "app/components/employeeAttendance/employeeAttendance.html",
            controller: "employeeAttendanceController",
            data: {
                requireLogin: true
            }
        })
        .state('main.studentAttendance', { // login Page
            url: "attendance/studentAttendance",
            templateUrl: "app/components/studentAttendance/studentAttendance.html",
            controller: "studentAttendanceController",
            data: {
                requireLogin: true
            }
        })
        .state('main.subjects', { // login Page
            url: "academics/subjects",
            templateUrl: "app/components/subjects/subjects.html",
            controller: "subjectsController",
            data: {
                requireLogin: true
            }
        })
        .state('main.chapters', { // login Page
            url: "academics/chapters",
            templateUrl: "app/components/chapters/chapters.html",
            controller: "chaptersController",
            data: {
                requireLogin: true
            }
        })
        .state('main.assignSubjects', { // login Page
            url: "academics/assignSubjects",
            templateUrl: "app/components/assignSubjects/assignSubjects.html",
            controller: "assignSbjectsController",
            data: {
                requireLogin: true
            }
        })
        .state('main.assignments', { // login Page
            url: "academics/assignments",
            templateUrl: "app/components/assignments/Assignments.html",
            controller: "assignmentsController",
            data: {
                requireLogin: true
            }
        })
        .state('main.examSchedules', { // login Page
            url: "examination/examSchedules",
            templateUrl: "app/components/examSchedules/examSchedules.html",
            controller: "examSchedulesController",
            data: {
                requireLogin: true
            }
        })
        .state('main.examPapers', { // login Page
            url: "examination/examPapers",
            templateUrl: "app/components/examPapers/examPapers.html",
            controller: "examPapersController",
            data: {
                requireLogin: true
            }
        })
        .state('main.evaluations', { // login Page
            url: "examination/evaluations",
            templateUrl: "app/components/evaluations/evaluations.html",
            controller: "evaluationsController",
            data: {
                requireLogin: true
            }
        })
        .state('main.classWise', { // login Page
            url: "timetable/classWise",
            templateUrl: "app/components/classWise/classWise.html",
            controller: "classWiseController",
            data: {
                requireLogin: true
            }
        })
        .state('main.teacherWise', { // login Page
            url: "timetable/teacherWise",
            templateUrl: "app/components/teacherWise/teacherWise.html",
            data: {
                requireLogin: true
            }
        })
        .state('main.schoolEvents', { // login Page
            url: "timetable/schoolEvents",
            templateUrl: "app/components/schoolEvents/schoolEvents.html",
            data: {
                requireLogin: true
            }
        })
        .state('main.onlineNoticeBoard', { // login Page
            url: "timetable/onlineNoticeBoard",
            templateUrl: "app/components/onlineNoticeBoard/onlineNoticeBoard.html",
            data: {
                requireLogin: true
            }
        })
        .state('main.libraryRules', { // login Page
            url: "library/libraryRules",
            templateUrl: "app/components/libraryRules/libraryRules.html",
            data: {
                requireLogin: true
            }
        })
        .state('main.addBook', { // login Page
            url: "library/addBook",
            templateUrl: "app/components/addBook/addBook.html",
            controller: "addBookController",
            data: {
                requireLogin: true
            }
        })
        .state('main.bookList', { // login Page
            url: "library/bookList",
            templateUrl: "app/components/bookList/bookList.html",
            controller: "bookListController",
            data: {
                requireLogin: true
            }
        })
        .state('main.addStation', { // login Page
            url: "transport/addStation",
            templateUrl: "app/components/addStation/addStation.html",
            controller: "addStationController",
            data: {
                requireLogin: true
            }
        })
        .state('main.addBusRoute', { // login Page
            url: "transport/addBusRoute",
            templateUrl: "app/components/addBusRoute/addBusRoute.html",
            controller: "BusRouteController",
            data: {
                requireLogin: true
            }
        })
        .state('main.routeGeolocation', { // login Page
            url: "transport/routeGeolocation",
            templateUrl: "app/components/routeGeolocation/routeGeolocation.html",
            controller: "routeGeoLocationController",
            data: {
                requireLogin: true
            }
        })

    .state('main.addVehicle', {
            url: "transport/addVehicle",
            templateUrl: "app/components/addVehicle/addVehicle.html",
            controller: "addVehicleController",
            data: {
                requireLogin: true
            }
        })
        .state('first_page', { // login Page
            url: "/first_page",
            templateUrl: "app/components/first_page/firstPage.html",
            data: {
                requireLogin: false
            }
        })
        .state('login_page', { // login Page

            url: "/login_page",
            templateUrl: "app/components/login_page/loginPage.html",
            controller: "loginController",
            data: {
                requireLogin: false
            }
        });
    $urlRouterProvider.otherwise("/login_page");

});