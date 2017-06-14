angular.module('school_erp')
.controller("evaluationsController",['$http','$scope','globalServices','examServices','subjectsServices','studentServices','ngDialog', function($http, $scope, globalServices, examServices, subjectsServices, studentServices, ngDialog){
        $scope.evalData = [];

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

         examServices.getExamSchedule()
        .success(function(data, status){
            $scope.examSchedule = data.exam_schedules;// Api list-name
            $scope.examScheduleId = $scope.examSchedule[0].exam_sch_id;
        })
        .error(function(data,success){
        })

         
            $scope.getSubjects = function(secId){
            subjectsServices.getSubjects(secId)
            .success(function(data, status){
                $scope.subjectsData = data.subjects;
                $scope.subjectId = $scope.subjectsData[0].subject_id;
                $scope.getExamPapers(  $scope.subjectId, $scope.examScheduleId );
                
                
            })
            .error(function(data,success){
            });
        }

        $scope.getExamPapers = function(examSubject, exSchedule){
          examServices.getExamPapers(examSubject, exSchedule)
        .success(function(data, status){
            $scope.papers = data[exSchedule+'-'+examSubject];// Api list-name
            $scope.paperId = $scope.papers[0].exam_paper_id;
             $scope.getStudentValue($scope.secId);
        })
        .error(function(data,success){
        })   
             }
             
        
        $scope.getStudentValue = function(secValue){                       
            studentServices.getStudent(secValue)
            .success(function(data, status){
                $scope.students = data.students;
                $scope.studentId = $scope.students[0].student_id;
                $scope.getEvaluation($scope.paperId,  $scope.studentId)
            })
            .error(function(data,success){
            })
        }

         $scope.getEvaluation = function(examPaper, student){
        examServices.getEvaluation(examPaper,student)
        .success(function(data, status){
            $scope.evalData = data[examPaper+'-'+student]
        })
        .error(function(data,success){
        })
    }
        // /api/exam_eval/:exam_paper_id/:student_id

          $scope.addEvaluation = function(data){
             var evalDetails = {
                 marks: $scope.data.marks,
                percentage: $scope.data.percentage,
                conduct: $scope.data.conduct,
                comment: $scope.data.comment
             }
            examServices.setEvaluation(evalDetails,$scope.paperId , $scope.studentId )   
            .success(function(data, status){
                ngDialog.open({
                template: '<p>ExamPapers are Added Successfully.</p>',
                plain: true
                });
                $scope.data = [];
                $scope.getEvaluation($scope.paperId , $scope.studentId);
            })
            .error(function(data,success){
                ngDialog.open({
                template: '<p>Some Error Occured!</p>',
                plain: true
                });
            })
           
        }

            $scope.showRole = function(role){            
            return globalServices.fetchRoleAuth(role);
        }
    
}])

