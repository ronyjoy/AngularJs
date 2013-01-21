function TypingText($scope) {
  $scope.texts = ['Inspired by the widespread interest in news after the September 11 attacks, we invested in technology to help people search and browse news relevant to them. Google News broke new ground in news aggregation by gathering links in real time, grouping articles by story and ranking stories based on the editorial opinions of publishers worldwide. Linking to a diverse set of sources for any given story enabled readers to easily access different perspectives and genres of content. By featuring opposing viewpoints in the same display block, people were encouraged to hear arguments on both sides of an issue and gain a more balanced perspective','Text2'];

  $scope.error = true;

  $scope.textTypedSoFar = function() {
    
    if ($scope.text!=undefined)  {
      
      var strTextTypedSoFar = $scope.texts[0].substring(0,$scope.text.length)
      toggleClassesBetweenErrorAndCorrectBasedOnTextEntered(strTextTypedSoFar)
      return strTextTypedSoFar ;

    } else {
      return $scope.texts[0];
    }
  }

  $scope.textLeftToType = function() {
    
    if ($scope.text!=undefined)  {
      return  $scope.texts[0].substring($scope.text.length) ;
    } else {
      return "";
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
}

