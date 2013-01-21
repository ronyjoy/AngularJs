function TypingText($scope) {
  $scope.texts = ['Text1','Text2'];

  $scope.textTypedSoFar = function() {
    
    if ($scope.text!=undefined)  {
      jQuery('#textTypedSoFar').addClass('error');
      return $scope.texts[0].substring(0,$scope.text.length) ;

    } else {
      return $scope.texts[0];
    }
  }

  $scope.textLeft = function() {
    
    if ($scope.text!=undefined)  {
      return  $scope.texts[0].substring($scope.text.length) ;
    } else {
      return "";
    }
  }
}

