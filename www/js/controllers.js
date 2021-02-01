angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope, $stateParams) {
  $scope.yemekler = [
   { adi : "Börek" , kategori: "Hamur işi", logo:"https://i.nefisyemektarifleri.com/2019/07/05/patatesli-citir-borek-tarifi-11.jpg" ,tarif:"500 gr ıspanak 4 yufka 2 soğan 150 gr beyazpeynir 1 su bardağı süt Yarım su bardağı zeytinyağı 3 yumurta 1 çorba kaşığı çörek otu Tuz Karabiber", no:0},
    { adi : "Browni" , kategori: "Tatlı", logo:"https://i2.milimaj.com/i/milliyet/75/0x410/5c8d072e45d2a05010d2e6b4.jpg ",tarif:"300 gram bitter çikolata (iri parçalanmış)3 adetyumurta 150 gramtereyağı 1 su bardağıtoz şeker 1 paketvanilya", no:1},
    { adi : "Sarma" , kategori: "Zeytinyağlı",logo:"https://i4.hurimg.com/i/hurriyet/75/750x422/5b645cde66be5d25a0c1e13c.jpg" ,tarif:"Yaprak Sarması Tarifi İçin Malzemeler:500 gram tokat yaprağı (salamura) 1 adet limon Zeytinyağı İç harcı;2 orta boy kuru soğan 1,5 su bardağı pirinç Maydanoz 1 yemek kaşığı salça Karabiber Kırmızı pul biber Kimyon Nane Tuz 2 yemek kaşığı sıvı yağ", no:2},
    { adi : "Mercimek Çorbası" , kategori:"Çorba" ,logo:"https://cdn.yemek.com/mncrop/600/315/uploads/2014/06/mercimek-corbasi-yemekcom.jpg",tarif:"3 yemek kaşığıayçiçek yağı 1 adetkuru soğan(iri doğranmış) 1 yemek kaşığıun 1 adet havuç(iri doğranmış) 1 adet patates(büyük boy, iri doğranmış) 1 tatlı kaşığıtuz 1 çay kaşığıkarabiber 1,5 su bardağıkırmızı ya da sarı mercimek 6 su bardağısıcak su(1 adet et su tablet ile hazırlanmış)" , no:3},
    { adi : "Lahmacun" , kategori: "Hamur işi",  logo:"https://imgrosetta.mynet.com.tr/file/11942326/11942326-728xauto.jpg",tarif:"Hamuru İçin: 10 su bardağı un 3 su bardağı süt 2 yemek kaşığı kuru maya 2 yemek kaşığı toz şeker 1 çay bardağı sıvı yağ 1 yemek kaşığı tuz İç Harcı İçin: 300 gramdana kıyma 2 yemek kaşığı biber salçası 5 adet sivri biber 2 adet kapya biber 5 adet küçük boykuru soğan 3 yemek kaşığı sıvı yağ 1 demet maydanoz 1 çay kaşığıtuz 1 çay kaşığıkarabiber 1 çay kaşığıpul biber" , no:4},
    { adi : "Patates Salatası" , kategori: "Salata",  logo:"https://i.ytimg.com/vi/icPsYtEXZPY/maxresdefault.jpg",tarif:"1-2 litre su(haşlamak için) 10 adettaze patates(veya 5-6 adet büyük boy patates) 4 daltaze soğan 1/2 demetmaydanoz 2 çay kaşığıtuz 1 tatlı kaşığısumak 1 çay kaşığıkarabiber 1 adetlimon suyu 1/3 çay bardağızeytinyağı" , no:5},
    { adi : "Çİğköfte" , kategori: "Yemek",  logo:"https://im.haberturk.com/2020/11/09/ver1604930770/2864351_810x458.jpg",tarif:"2,5 su bardağı esmer bulgur 1,5 su bardağısıcak su 1 çay bardağı isot 1 çay bardağızeytinyağı 3 yemek kaşığıtatlı toz kırmızı biber 3 yemek kaşığı domates salçası 5 yemek kaşığınar ekşisi 1 çay kaşığıtuz 1 adet soğan 1 adet limon suyu" , no:6},
   
  ];

console.log("ID: " +  $stateParams.yemekId);

if ( $stateParams.yemekId) {
$scope.detay=$scope.yemekler[$stateParams.yemekId];
}
})
.controller('PlaylistCtrl', function($scope, $stateParams) {
});
