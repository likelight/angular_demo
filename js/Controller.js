/**
 * Created by likelight on 14-8-7.
 */
function SysControl($scope) {
    $scope.name = 'Guy';
    $scope.datas = [];
    $scope.Names = $scope.Age = $scope.Sex = $scope.Grade = "";
    $scope.age_class = $scope.sex_class = $scope.grade_class = "";
    $scope.nameFilter = null;
    $scope.addTotable = function () {
        $scope.datas.push({"names": $scope.Names, "age": $scope.Age, "sex": $scope.Sex, "grade": $scope.Grade});
    };


    $scope.searchFilter = function(data){
        var keyword = new RegExp($scope.nameFilter,'i');
        return !$scope.nameFilter || keyword.test(data.names);
    };

    $scope.delete = function ($index) {
        $scope.datas.splice($index, 1);
    };


    $scope.asendAge = function(){
        if($scope.age_class == 'down_triangle'){
            $scope.age_class = 'up_triangle';
        } else {
            $scope.age_class = 'down_triangle';
        }
    }

    $scope.asendAge = function(){
        if($scope.age_class == 'down_triangle'){
            $scope.age_class = 'up_triangle';
            $scope.order = '-age';
        } else {
            $scope.age_class = 'down_triangle';
            $scope.order = 'age';
        }

    }

    $scope.asendSex = function(){
        if($scope.sex_class == 'down_triangle'){
            $scope.sex_class = 'up_triangle';
            $scope.order = '-sex';
        } else {
            $scope.sex_class = 'down_triangle';
            $scope.order = 'sex';
        }
    };

    $scope.asendGrade = function () {
        if($scope.grade_class == 'down_triangle'){
            $scope.grade_class = 'up_triangle';
            $scope.order = '-grade';
        } else {
            $scope.grade_class = 'down_triangle';
            $scope.order = 'grade';
        }
    };
}

