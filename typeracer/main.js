function TypingText($scope) {
  $scope.texts = ["AngularJS works great with other technologies. Add as much or as little of AngularJS to an existing page as you like. Many other frameworks require full commitment. This page has multiple AngularJS applications embedded in it. Because AngularJS has no global state multiple apps can run on a single page without the use of iframes. We encourage you to view-source and look around.",
                  "Groovy is like a super version of Java. It can leverage Java's enterprise capabilities but also has cool productivity features like closures, builders and dynamic typing. If you are a developer, tester or script guru, you have to love Groovy.",
                  "The Adapter Pattern (sometimes called the wrapper pattern) allows objects satisfying one interface to be used where another type of interface is expected. There are two typical flavours of the pattern: the delegation flavour and the inheritance flavour.",
                  "The Abstract Factory Pattern provides a way to encapsulate a group of individual factories that have a common theme. It embodies the intent of a normal factory, i.e. remove the need for code using an interface to know the concrete implementation behind the interface, but applies to a set of interfaces and selects an entire family of concrete classes which implement those interfaces.",
                  "The Bouncer Pattern describes usage of a method whose sole purpose is to either throw an exception (when particular conditions hold) or do nothing. Such methods are often used to defensively guard pre-conditions of a method."];

  $scope.error = true;

  $scope.textIndex = Math.round(Math.random()*4);

  $scope.startTime = new Date().getTime()/1000;

  $scope.markedTheStartTime = false;

  

  $scope.textTypedSoFar = function() {
    
    if ($scope.text!=undefined)  {
      markeTheStartTimeIfNotMarked();
      var strTextTypedSoFar = $scope.texts[$scope.textIndex].substring(0,$scope.text.length)
      toggleClassesBetweenErrorAndCorrectBasedOnTextEntered(strTextTypedSoFar)
      if (strTextTypedSoFar === $scope.texts[$scope.textIndex]) {
        $scope.text = "";
      }
      return strTextTypedSoFar ;

    } else {
      return $scope.texts[$scope.textIndex];
    }
  }

  $scope.textLeftToType = function() {
    
    if ($scope.text!=undefined)  {
      return  $scope.texts[$scope.textIndex].substring($scope.text.length) ;
    } else {

      return "";
      
    }
  }

  

  $scope.typingSpeed = function () {
    if($scope.text!=undefined) {
      var wordlenght = $scope.text.length/5;
      var minutes = ((new Date().getTime()/1000) - $scope.startTime)/60;
      var speed = parseInt(wordlenght/minutes);
      slider.setValue(speed);
      return speed;
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

