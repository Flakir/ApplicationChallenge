angular.module('starter.controllers', ['ionic', 'ionic-modal-select'])

.controller('DashCtrl', function($scope) {  

  $scope.sports = [

    { id: 1, title: 'Football Masculin', icon: 'ion-ios-football' , poule:'poulefootm'},

    { id: 2, title: 'Football Féminin', icon: 'ion-ios-football',poule:'poulefootf'},

    { id: 3, title: 'Rugby Masculin', icon:'ion-ios-americanfootball-outline',poule:'poulerugbym'},

    { id: 4, title: 'Rugby Féminin', icon:'ion-ios-americanfootball-outline',poule:'poulerugbyf'},

    { id: 5, title: 'Tennis Masculin', icon:'ion-ios-tennisball',poule:'pouletennism'},

    { id: 6, title: 'Tennis Féminin', icon:'ion-ios-tennisball',poule:'pouletennisf'},

    { id: 7, title: 'Basketball Masculin', icon:'ion-ios-basketball',poule:'poulebasketm'},

    { id: 8, title: 'Basketball Féminin',icon:'ion-ios-basketball',poule:'poulebasketf'},

    { id: 9, title: 'Handball Masculin', icon: 'ion-ios-football-outline',poule:'poulehandm'},

    { id: 10, title: 'Handball Féminin', icon: 'ion-ios-football-outline',poule:'poulehandf'},

    { id: 11, title: 'Volley Masculin'},

    { id: 12, title: 'Volley Féminin'},

    { id: 13, title: 'Tennis de table Masculin'},

    { id: 14, title: 'Tennis de table Féminin'},

    { id: 15, title: 'Ski Masculin'},

    { id: 16, title: 'Ski Féminin'},

    { id: 17, title: 'Judo Masculin'},

    { id: 18, title: 'Judo Féminin'},

    { id: 19, title: 'Badminton Masculin'},

    { id: 20, title: 'Badminton Féminin'},

    { id: 21, title: 'Ski Masculin'},

    { id: 22, title: 'Judo Masculin'},

    { id: 23, title: 'Escrime Masculin'},

    { id: 24, title: 'Escrime Féminin'},

    { id: 25, title: 'Athlétisme Masculin', icon:'ion-android-walk'},

    { id: 26, title: 'Athlétisme Féminin', icon:'ion-android-walk'},

    { id: 27, title: 'Golf'},

    { id: 28, title: 'Raid', icon: 'ion-android-bicycle'},

    { id: 29, title: 'Escalade Masculin'},

    { id: 30, title: 'Escalade Féminin'},

    { id: 31, title: 'Water-Polo Masculin'},

    { id: 32, title: 'Water-Polo Féminin'},

    { id: 33, title: 'Ultimate Masculin'},

    { id: 34, title: 'Utimate Féminin'},


  ];

})


.controller('pouleCtrl', function($scope){
    $scope.poulesfootm = [

      { id: 1, title: 'poule A', icon: 'ion-ios-football', match:'pouleAfootm'},

      { id: 2, title: 'poule B', icon: 'ion-ios-football',match:'pouleBfootm'},

      { id: 3, title: 'poule C', icon:'ion-ios-football',match:'pouleBfootm'},

      { id: 4, title: 'Phases finales', icon:'ion-ios-football-outline',match:'phasesfinalesfootm'},

    
  ];

    $scope.poulesfootf = [

      { id: 1, title: 'poule féminine A', icon: 'ion-ios-football'},

      { id: 2, title: 'poule féminine B', icon: 'ion-ios-football'},

      { id: 3, title: 'poule féminine C', icon:'ion-ios-football'},

      { id: 4, title: 'Phases finales', icon:'ion-ios-football-outline'},


    ];
})
.controller('AccueilCtrl',['$scope','$ionicSlideBoxDelegate','$http','$localstorage','$timeout','Home', function($scope,$ionicSlideBoxDelegate,$http,$localstorage,$timeout,Home) {

    /* la fonction associée au slider de la page d'accueil*/

     $scope.navSlide = function(index) {
        $ionicSlideBoxDelegate.slide(index, 500);
    }

    /*--------------------------------*/
    // le service qui renvoit au tab-accueil.html les  images
    
Home.Lien().then(function (resp) {
           // Here will be the data after the request finished
           $scope.liens = resp.data;
          //$localstorage.setObject('news',infos);

   }, function (err) {
          // Here will be if there was an error
          console.error('ERR', err);
   });
  //$timeout($scope.news = $localstorage.getObject('news'),1);

    /*----------------------------------*/
    /* Le service qui affiche les news*/
    
Home.News().then(function (resp) {
           // Here will be the data after the request finished
           var infos = resp.data;
           $scope.news=infos;
          //$localstorage.setObject('news',infos);

   }, function (err) {
          // Here will be if there was an error
          console.error('ERR', err);
   });
  //$timeout($scope.news = $localstorage.getObject('news'),1);


  
}])


.controller('EcolesCtrl',['$scope','$http','$localstorage','$timeout','Ecole', function ($scope,$http,$localstorage,$timeout,Ecole) {
  //Classement des ecoles
  Ecole.Classement().then(function (resp) {
           // Here will be the data after the request finished
           var donnees = resp.data;
           $scope.classement=donnees;
          //$localstorage.setObject('classement',donnees);

   }, function (err) {
          // Here will be if there was an error
          console.error('ERR', err);
   });


 // $timeout($scope.classement = $localstorage.getObject('classement'),1);

//Listes des Ecoles
  Ecole.Ecoles().then(function (resp) {
           // Here will be the data after the request finished
           var donnees = resp.data;
           $scope.ecoles=donnees;
          //$localstorage.setObject('ecoles',donnees);

   }, function (err) {
          // Here will be if there was an error
          console.error('ERR', err);
   });
//$timeout($scope.ecoles = $localstorage.getObject('ecoles'),1);

  $scope.getInfoEcole= function(Infoecole){
   Ecole.Matchs(Infoecole).then(function (resp) {
      $scope.matchs_ecole = resp.data;
   }, function (err) {
          // Here will be if there was an error
          console.error('ERR', err);
   })
  }
 

}])

.controller('ClassementCtrl',['$scope','$http', function ($scope,$http) {
  //Classement des ecoles
  $http.get('http://challenge-2016.eclair.ec-lyon.fr/api/ecoles/classement').then(function(resp) {
    $scope.classement = resp.data.data;
    // For JSON responses, resp.data contains the result

  }, function(err) {
    console.error('ERR', err);
    // err.status will contain the status code
  });
}])

.controller('MatchsCtrl',['$scope','$http','$state','Matchs', function ($scope,$http,$state,Matchs) {
  
  $scope.recherche = function(matchs){
      var sport=matchs.sport;
      var genre=matchs.sexe;
      //Resultat de la recherche
  Matchs.Matchs(sport,genre).then(function (resp) {
           // Here will be the data after the request finished
           var res = resp.data;
           if(res.sport==="Football" || res.sport==="Basketball" || res.sport==="Handball" || res.sport==="Rugby" || res.sport==="Volley"){
              //$localstorage.setObject('classement',donnees);
              $state.go("tab.resultatMatch", { resultat: res});
            }
            else{
              $state.go("tab.resultatMatchSpeciaux", { resultat: res});
            }

   }, function (err) {
          // Here will be if there was an error
          console.error('ERR', err);
   });

    }  
   $scope.sexe=[
  {text:'Homme', value:'Homme',logo:'img/homme.png'},
  {text:'Femme', value:'Femme',logo:'img/femme.png'},
  {text:'Mixte', value:'Mixte',logo:'img/mixte.png'}
  ];


  $scope.matchs = {
    sexe: 'Homme',
  };

  $scope.sports=[
  {text:"Basketball", valeur:'Basketball', logo:'/img/Logos_sport/basket.png'},
  {text:"Football", valeur:'Football', logo:'/img/Logos_sport/foot2.png'},
  {text:"Handball", valeur:'Handball', logo:'/img/Logos_sport/handball.png'},
  {text:"Rugby", valeur:'Rugby', logo:'/img/Logos_sport/rugby.png'},
  {text:"Volley", valeur:'Volley', logo:'/img/Logos_sport/volley.png'},
  {text:"Athlétisme", valeur:'Athletisme', logo:'/img/Logos_sport/athle.png'},
  {text:"Badminton", valeur:'Badminton', logo:'/img/Logos_sport/badminton.png'},
  {text:"Escalade", valeur:'Escalade', logo:'/img/Logos_sport/escalade.png'},
  {text:"Escrime", valeur:'Escrime', logo:'/img/Logos_sport/escrime.png'},
  {text:"Golf", valeur:'Golf', logo:'/img/Logos_sport/golf.png'},
  {text:"Judo", valeur:'Judo', logo:'/img/Logos_sport/judo.png'},
  {text:"Natation", valeur:'Natation', logo:'/img/Logos_sport/natation.png'},
  {text:"Raid", valeur:'Raid', logo:'/img/Logos_sport/raid.png'},
  {text:"Ski", valeur:'Ski', logo:'/img/Logos_sport/ski.png'},
  {text:"Tennis", valeur:'Tennis', logo:'/img/Logos_sport/tennis.png'},
  {text:"Tennis de table", valeur:'Tennis_table', logo:'/img/Logos_sport/tennistable.png'},
  {text:"Ultimate", valeur:'Ultimate', logo:'/img/Logos_sport/ultimate.png'},
  {text:"Waterpolo", valeur:'Waterpolo', logo:'/img/Logos_sport/waterpolo.png'},
  ];

}])

.controller('InformationsCtrl', function($scope) {})

.controller('HealthCtrl', function($scope) {})

.controller('GalleryCtrl', function ($scope,$http,$localstorage,$timeout,Home,$cordovaCamera) {

  $scope.takePicture = function() {
    var options = {
      quality: 75, // Qualité de l'image sauvée, valeur entre 0 et 100
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG, // Format d'encodage : JPEG ou PNG
      targetWidth: 300, // Largeur de l'image en pixel
      targetHeight: 300, // Hauteur de l'image en pixel
      saveToPhotoAlbum: false // Enregistrer l'image dans l'album photo du device
    };

    $cordovaCamera.getPicture(options).then(function(imageData) {
      $scope.imgURI = "data:image/jpeg;base64," + imageData;
    }, function(err) {
      console.log(err);
    });
  };
  
  Home.Gallery().then(function (resp) {
           // Here will be the data after the request finished
           var galerie = resp.data;
           $scope.photos=galerie;
           //$localstorage.setObject('photos',galerie);
   }, function (err) {
          // Here will be if there was an error
          console.error('ERR', err);
   });
//$timeout($scope.photos = $localstorage.getObject('photos'),1);
  
  
})

.controller('CompteCtrl',['$scope','$rootScope','$state','$stateParams','Compte','$ionicPopup', function($scope, $rootScope, $state, $stateParams,Compte,$ionicPopup) {
  $scope.connexion = function(user){
      var login = user.login;
      var mdp = user.mdp;
      Compte.Compte(login,mdp).then(function (resp) {
        var compteAdmin= resp.data;
          if(compteAdmin!=null){
            $rootScope.connected=true;
            $scope.utilisateur=compteAdmin;
           }
        else{
            $scope.alertPopup = $ionicPopup.alert({
                title: 'Echec d\'autentifiaction !',
                template: 'Vérifiez vos paramètres de connexion !'
              });
            $state.go('tab.compte')
            }
           
   }, function (err) {
          // Here will be if there was an error
          console.error('ERR', err);
   });
      
   }
  $scope.deconnexion = function(){
      $rootScope.connected=null;
   }

}])

.controller('DetailMatchCtrl', function($scope, $stateParams,$state){
    // on récupère les paramètres dans l'url 
    $scope.user = $stateParams.user;
   // $scope.mdp = $stateParams.mdp;
   
    
  })


.controller('ResultatMatchCtrl',['$scope', '$stateParams','$state','$http','$state','Update','$ionicPopup',function($scope, $stateParams,$state,$http,$state,Update,$ionicPopup){
    // on récupère les paramètres dans l'url 
    $scope.resultat1 = $stateParams.resultat;
var resultat = $stateParams.resultat.matchs;
    var tableau1=[];
    var tableau2=[];
    var tableau3=[];
    var tableau4=[];
    var tableau5=[];
    var tableau6=[];
    for(var i=0;i<resultat.length;i++){
                    if(resultat[i].phase_match==="Finale"){
                    tableau1[i]=resultat[i];
                  }
                  if(resultat[i].phase_match==="Demie_finale"){
                    tableau2[i]=resultat[i];
                  }
                  if(resultat[i].phase_match==="Quart_finale"){
                    tableau3[i]=resultat[i];
                  }
                  if(resultat[i].phase_match==="Huitieme_finale"){
                    tableau4[i]=resultat[i];
                  }
                  if(resultat[i].phase_match==="Barrage"){
                    tableau5[i]=resultat[i];
                  }
                  if(resultat[i].phase_match==="Poule"){
                    tableau6[i]=resultat[i];
                  }
                }
    $scope.finales=tableau1;
    $scope.demie_finales=tableau2;
    $scope.quart_finales=tableau3;
    $scope.huitieme_finales=tableau4;
    $scope.barrages=tableau5;
    $scope.poules=tableau6;
    $scope.modifier=function(match){
      Update.Poule(match.id_match,match.score1,match.score2).then(function (resp) {
           var response = resp.data;
           if(response==="ok"){
              //alert("Résultat modifié!");
              $scope.alertPopup = $ionicPopup.alert({
                title: 'Modification',
                template: 'Le score a été modifié avec sucès!'
              });
            }
            else{
              $scope.alertPopup = $ionicPopup.alert({
                title: 'Echec Modification',
                template: 'Echec de la Modification du score!'
              });
            }
        }, function (err) {
           console.error('ERR', err);
       });
    //console.log(match);
   }
    
    $scope.modifier_tout=function(match){
      var id_match=match.id_match;
      var equipe1=match.equipe1;
      var equipe2=match.equipe2;
      var score1=match.score1;
      var score2=match.score2;
      $http.post('http://challenge-2016.eclair.ec-lyon.fr/api/matchs/'+id_match+'-'+equipe1+'-'+equipe2+'-'+score1+'-'+score2+'').then(function(resp) {
        var result = resp.data.data;
        if (result==="ok"){
              //alert("Résultat modifié!");
              $scope.alertPopup = $ionicPopup.alert({
                title: 'Modification',
                template: 'Le score a été modifié avec sucès!'
              });
            }
            else{
              $scope.alertPopup = $ionicPopup.alert({
                title: 'Echec Modification',
                template: 'Echec de la Modification du score!'
              });
            }
        }, function(err) {
         console.error('ERR', err);
        // err.status will contain the status code
       });
     }
   
  }])

.controller('ResultatMatchSpeciauxCtrl',['$scope', '$stateParams','$state','$http','$state','Update','$ionicPopup',function($scope, $stateParams,$state,$http,$state,Update,$ionicPopup){
    // on récupère les paramètres dans l'url 
    
    $scope.resultat = $stateParams.resultat;
    $scope.modifier_classement=function(matchSpecial){
    Update.Special(matchSpecial.id_match_special,matchSpecial.classement_equipe).then(function (resp) {
           var response = resp.data;
           if(response==="ok"){
              $scope.alertPopup = $ionicPopup.alert({
                title: 'Modification',
                template: 'Le score a été modifié avec sucès!'
              });
            }
            else{
              $scope.alertPopup = $ionicPopup.alert({
                title: 'Echec Modification',
                template: 'Echec de la Modification du score!'
              });
            }
        }, function (err) {
           console.error('ERR', err);
       });
   }
    
   
  }])

.controller('DeveloppementdurableCtrl', function($scope) {
})


.controller('CalendrierCtrl',['$scope','$state','$stateParams','Informations', function($scope,$state, $stateParams,Informations) {
 
Informations.Calandar().then(function (resp) {
           // Here will be the data after the request finished
           $scope.calendrier = resp.data;
          //$localstorage.setObject('news',infos);

   }, function (err) {
          // Here will be if there was an error
          console.error('ERR', err);
   });

}])

.controller('NumeroUrgenceCtrl',['$scope','$state','$stateParams','Informations', function($scope,$state, $stateParams,Informations) {
 
Informations.Urgence().then(function (resp) {
           // Here will be the data after the request finished
           $scope.urgences = resp.data;
          //$localstorage.setObject('news',infos);

   }, function (err) {
          // Here will be if there was an error
          console.error('ERR', err);
   });

}])
 
.controller('CampusCtrl',['$scope','$state','$stateParams','Informations', function($scope,$state, $stateParams,Informations) {
 
Informations.Plan().then(function (resp) {
           // Here will be the data after the request finished
           $scope.plans = resp.data;
          //$localstorage.setObject('news',infos);

   }, function (err) {
          // Here will be if there was an error
          console.error('ERR', err);
   });

}])

.controller('FaqCtrl',['$scope','$state','$stateParams','Informations', function($scope,$state, $stateParams,Informations) {
 
Informations.FAQ().then(function (resp) {
           // Here will be the data after the request finished
           $scope.faqs = resp.data;
          //$localstorage.setObject('news',infos);

   }, function (err) {
          // Here will be if there was an error
          console.error('ERR', err);
   });

}])
 
// Fin Code de Thomas: 09/12

.controller('ConsignesCtrl', function($scope) {
})

.controller('AutactionsCtrl', function($scope) {
})

.controller('CarteCtrl', function($scope) {
})

.controller('CharteCtrl', function($scope) {
})

.controller('EnplusCtrl', function($scope) {
})

.controller('StandsCtrl', function($scope) {
})

.controller('EspacePersoCtrl',function($scope) {
});