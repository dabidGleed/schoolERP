angular.module('school_erp')
.controller("examPapersController",['$http','$scope','examServices', 'ngDialog' , 'globalServices' ,'subjectsServices' ,function($http, $scope, examServices, ngDialog, globalServices, subjectsServices){
        $scope.examData = [];


          globalServices.getClass()
        .success(function(data, status){
            $scope.classDatanew = data.school_classes;// Api list-name
            $scope.classId = $scope.classDatanew[0].class_id;
            $scope.populateSections($scope.classId);            
        })
        .error(function(data,success){
        })

         $scope.populateSections = function(classId){
            globalServices.getSections(classId)
            .success(function(data, status){
                $scope.secData = data.class_sections;// Api list-name
                $scope.secId = $scope.secData[0].section_id;
                $scope.getSubjects($scope.secId);
                
            })
            .error(function(data,success){
            })
        }

        $scope.populateExams= function() {
            $scope.getExamPapers($scope.subjectId, $scope.examScheduleId);
        }
        examServices.getExamSchedule()
        .success(function(data, status){
            $scope.examSchedule = data.exam_schedules;// Api list-name
            $scope.examScheduleId = $scope.examSchedule[0].exam_sch_id;
        })
        .error(function(data,success){
        })


        $scope.getExamPapers = function(examSubject, exSchedule){
         examServices.getExamPapers(examSubject, exSchedule)
        .success(function(data, status){
            $scope.examData = data[exSchedule+'-'+examSubject];
        })
        .error(function(data,success){
        });
        }
         $scope.addExamPapers = function(data){
             var examDetails = {
               exam_paper_title: $scope.data.exam_paper_title,
               date: $scope.data.date,
               time_from: $scope.data.time_from,
               time_to:$scope.data.time_to
             }
            examServices.setExamPapers(examDetails, $scope.subjectId, $scope.examScheduleId)   
            .success(function(data, status){
                ngDialog.open({
                template: '<p>ExamPapers are Added Successfully.</p>',
                plain: true
                });
                $scope.data = [];
                $scope.getExamPapers($scope.subjectId, $scope.examScheduleId);
            })
            .error(function(data,success){
                ngDialog.open({
                template: '<p>Some Error Occured!</p>',
                plain: true
                });
            })
           
        }

         $scope.getSubjects = function(secId){
            subjectsServices.getSubjects(secId)
            .success(function(data, status){
                $scope.subjectsData = data.subjects;
                $scope.subjectId = $scope.subjectsData[0].subject_id;
                $scope.getExamPapers($scope.subjectId, $scope.examScheduleId);
            })
            .error(function(data,success){
            });
        }

              
       
}])


