function TypingText($scope) {
  $scope.texts = "AngularJS works great with other technologies. Add as much or as little of AngularJS to an existing page as you like. Many other frameworks require full commitment. This page has multiple AngularJS applications embedded in it. Because AngularJS has no global state multiple apps can run on a single page without the use of iframes. We encourage you to view-source and look around.";

  $scope.error = true;

  $scope.startTime = new Date().getTime()/1000;

  $scope.markedTheStartTime = false;

  $scope.textTypedSoFar = function() {
    
    if ($scope.text!=undefined)  {
      markeTheStartTimeIfNotMarked();
      var strTextTypedSoFar = $scope.texts.substring(0,$scope.text.length)
      toggleClassesBetweenErrorAndCorrectBasedOnTextEntered(strTextTypedSoFar)
      return strTextTypedSoFar ;

    } else {
      return $scope.texts;
    }
  }

  $scope.textLeftToType = function() {
    
    if ($scope.text!=undefined)  {
      return  $scope.texts.substring($scope.text.length) ;
    } else {

      return "";
      
    }
  }

  $scope.readDataFromTheUrl = function() {
      jQuery.get($scope.url, function(data) {
        $scope.texts =  data;
    });
  }

  $scope.typingSpeed = function () {
    if($scope.text!=undefined) {
      var wordlenght = $scope.text.length/5;
      var minutes = ((new Date().getTime()/1000) - $scope.startTime)/60;
      return parseInt(wordlenght/minutes);
    } else {
      return "0";
    }
    
  }

  toggleClassesBetweenErrorAndCorrectBasedOnTextEntered = function (strTextTypedSoFar) {

    if($scope.text != strTextTypedSoFar) {
        jQuery('#textTypedSoFar').addClass('error');
        jQuery('#textTypedSoFar').removeClass('correct')
      } else {
        jQuery('#textTypedSoFar').addClass('correct');
        jQuery('#textTypedSoFar').removeClass('error')
      }
  }

  markeTheStartTimeIfNotMarked = function() {
      if(!$scope.markedTheStartTime) {
         $scope.markedTheStartTime = true;
         $scope.startTime = parseInt(new Date().getTime()/1000);

      }
  }


}

