// Code goes here
var iApp = angular.module("App", []);
iApp.controller('TestController', function($scope)
{  
    //$scope.pricerange = 7500;
    //$scope.min = 1000;
    //$scope.max = 10000;  

    $scope.prices = [{ price: 2100, on: false }, { price: 3100, on: false}, { price: 4100, on: false}, { price: 5100, on: false}, { price: 8100, on: false}];
    $scope.brandName = [{ brand: 'Samsung', on: false }, { brand: 'Motorola', on: false, }, { brand: 'Lenovo', on: false }, { brand: 'Apple', on: false }, { brand: 'Redmi', on: false }];
    $scope.rams = [{ ram: '1 GB', on: false }, { ram: '2 GB', on: false, }, { ram: '3 GB', on: false }, { ram: '4 GB', on: false }, { ram: '5 GB', on: false }];              
    $scope.intstrages = [{ intstrage: '4 GB', on: false }, { intstrage: '8 GB', on: false, }, { intstrage: '16 GB', on: false }, { intstrage: '32 GB', on: false }];
    $scope.extstrages = [{ extstrage: '32 GB', on: false }, { extstrage: '64 GB', on: false, }, { extstrage: '124 GB', on: false }];
    $scope.screensizes = [{ screensize: '3 inch', on: false }, { screensize: '4 inch', on: false, }, { screensize: '5 inch', on: false }, { screensize: '6 inch', on: false }];
    $scope.batterys = [{ battery: '2000 mAh', on: false }, { battery: '3000 mAh', on: false, }, { battery: '4000 mAh', on: false }, { battery: '5000 mAh', on: false }];
    $scope.primarycams = [{ primarycam: '8 MP', on: false }, { primarycam: '12 MP', on: false, }, { primarycam: '13 MP', on: false }, { primarycam: '14 MP', on: false }];
    $scope.secondarycams = [{ secondarycam: '2 MP', on: false }, { secondarycam: '3 MP', on: false, }, { secondarycam: '4 MP', on: false }, { secondarycam: '5 MP', on: false }];
    $scope.sims = [{ sim: 'Dual Sim', on: false }, { sim: 'Single Sim', on: false, }];
    
    $scope.order = '-added';
    $scope.search=[];
    $scope.mobiles = [
		{ price: 20100, brand: 'Samsung', name: 'Samsung Galaxy J7 Max', link: 'samsung-Galaxy-J7-max', img:'s1', ram: '1 GB', oppsys: 'Android', intstrage: '4 GB', extstrage: '32 GB', screensize: '3 inch', nettype: '4G', battery: '2000 mAh', primarycam: '8 MP', secondarycam: '5 MP', sim: 'Dual Sim' },
		{ price: 25100, brand: 'Apple', name: 'Apple iPhone 6', link: 'Apple-iPhone-6', img:'a1', ram: '2 GB', oppsys: 'Android', intstrage: '16 GB', extstrage: '64 GB', screensize: '5 inch', nettype: '4G', battery: '3000 mAh', primarycam: '12 MP', secondarycam: '2 MP', sim: 'Single Sim' },
		{ price: 7100, brand: 'Motorola', name: 'Motorola Moto E4', link: 'Motorola-Moto-E4', img:'m1', ram: '4 GB', oppsys: 'Android', intstrage: '8 GB', extstrage: '124 GB', screensize: '4 inch', nettype: '4G', battery: '5000 mAh', primarycam: '13 MP', secondarycam: '4 MP', sim: 'Dual Sim' },
		{ price: 5500, brand: 'Lenovo', name: 'Lenovo K8 Note', link: 'Lenovo-K8-Note', img:'l1', ram: '5 GB', oppsys: 'Android', intstrage: '32 GB', extstrage: '124 GB', screensize: '6 inch', nettype: '4G', battery: '3000 mAh', primarycam: '14 MP', secondarycam: '3 MP', sim: 'Dual Sim' },
		{ price: 9500, brand: 'Redmi', name: 'Xiaomi Redmi 4A', link: 'Xiaomi-Redmi-4A', img:'r1', ram: '3 GB', oppsys: 'Android', intstrage: '32 GB', extstrage: '32 GB', screensize: '6 inch', nettype: '4G', battery: '2000 mAh', primarycam: '14 MP', secondarycam: '2 MP', sim: 'Single Sim' },
		{ price: 9100, brand: 'Samsung', name: 'Samsung Galaxy J7 Pro', link: 'samsung-Galaxy-J7-pro', img:'s2', ram: '2 GB', oppsys: 'Android', intstrage: '8 GB', extstrage: '64 GB', screensize: '5 inch', nettype: '4G', battery: '3000 mAh', primarycam: '8 MP', secondarycam: '5 MP', sim: 'Dual Sim' },
		{ price: 20100, brand: 'Apple', name: 'Apple iPhone 7', link: 'Apple-iPhone-7', img:'a2', ram: '3 GB', oppsys: 'Android', intstrage: '16 GB', extstrage: '124 GB', screensize: '4 inch', nettype: '4G', battery: '4000 mAh', primarycam: '14 MP', secondarycam: '4 MP', sim: 'Dual Sim' },
		{ price: 10100, brand: 'Motorola', name: 'Motorola Moto C', link: 'Motorola-Moto-C', img:'m2', ram: '2 GB', oppsys: 'Android', intstrage: '4 GB', extstrage: '32 GB', screensize: '6 inch', nettype: '4G', battery: '2000 mAh', primarycam: '13 MP', secondarycam: '3 MP', sim: 'Dual Sim' },
		{ price: 10500, brand: 'Lenovo', name: 'Lenovo Vibe K5 Note', link: 'Lenovo-Vibe-K5-Note', img:'l2', ram: '3 GB', oppsys: 'Android', intstrage: '16 GB', extstrage: '64 GB', screensize: '4 inch', nettype: '4G', battery: '4000 mAh', primarycam: '12 MP', secondarycam: '5 MP', sim: 'Single Sim' },
		{ price: 12000, brand: 'Redmi', name: 'Xiaomi Redmi 4', link: 'Xiaomi-Redmi-4', img:'r2', ram: '1 GB', oppsys: 'Android', intstrage: '8 GB', extstrage: '32 GB', screensize: '5 inch', nettype: '4G', battery: '3000 mAh', primarycam: '13 MP', secondarycam: '2 MP', sim: 'Single Sim' },
		{ price: 15100, brand: 'Samsung', name: 'Samsung Galaxy S8', link: 'Samsung-Galaxy-S8', img:'s3', ram: '4 GB', oppsys: 'Android', intstrage: '4 GB', extstrage: '124 GB', screensize: '4 inch', nettype: '4G', battery: '5000 mAh', primarycam: '14 MP', secondarycam: '3 MP', sim: 'Dual Sim' },
		{ price: 10100, brand: 'Apple', name: 'Apple iPhone 6S', link: 'Apple-iPhone-6S', img:'a3', ram: '2 GB', oppsys: 'Android', intstrage: '32 GB', extstrage: '64 GB', screensize: '3 inch', nettype: '4G', battery: '4000 mAh', primarycam: '8 MP', secondarycam: '4 MP', sim: 'Dual Sim' },
		{ price: 12100, brand: 'Motorola', name: 'Motorola Moto G5', link: 'Motorola-Moto-G5', img:'m3', ram: '3 GB', oppsys: 'Android', intstrage: '8 GB', extstrage: '124 GB', screensize: '4 inch', nettype: '4G', battery: '3000 mAh', primarycam: '14 MP', secondarycam: '5 MP', sim: 'Single Sim' },
		{ price: 12000, brand: 'Lenovo', name: 'Lenovo K8 Plus', link: 'Lenovo-K8-Plus', img:'l3', ram: '1 GB', oppsys: 'Android', intstrage: '16 GB', extstrage: '64 GB', screensize: '5 inch', nettype: '4G', battery: '2000 mAh', primarycam: '12 MP', secondarycam: '2 MP', sim: 'Dual Sim' },
		{ price: 10500, brand: 'Redmi', name: 'Xiaomi Redmi Note 4', link: 'Xiaomi-Redmi-Note-4', img:'r3', ram: '2 GB', oppsys: 'Android', intstrage: '32 GB', extstrage: '32 GB', screensize: '3 inch', nettype: '4G', battery: '3000 mAh', primarycam: '13 MP', secondarycam: '3 MP', sim: 'Dual Sim' },
		{ price: 8100, brand: 'Samsung', name: 'Samsung Galaxy On Nxt', link: 'Samsung-Galaxy-On-Nxt', img:'s1', ram: '1 GB', oppsys: 'Android', intstrage: '4 GB', extstrage: '32 GB', screensize: '3 inch', nettype: '4G', battery: '2000 mAh', primarycam: '8 MP', secondarycam: '5 MP', sim: 'Dual Sim' },
		{ price: 15100, brand: 'Apple', name: 'Apple iPhone 5S', link: 'Apple-iPhone-5s', img:'a1', ram: '2 GB', oppsys: 'Android', intstrage: '16 GB', extstrage: '64 GB', screensize: '5 inch', nettype: '4G', battery: '3000 mAh', primarycam: '12 MP', secondarycam: '2 MP', sim: 'Single Sim' },
		{ price: 6100, brand: 'Motorola', name: 'Motorola Moto G4', link: 'Motorola-Moto-G4', img:'m1', ram: '4 GB', oppsys: 'Android', intstrage: '8 GB', extstrage: '124 GB', screensize: '4 inch', nettype: '4G', battery: '5000 mAh', primarycam: '13 MP', secondarycam: '4 MP', sim: 'Dual Sim' },
		{ price: 8500, brand: 'Lenovo', name: 'Lenovo Z2 Plus', link: 'Lenovo-Z2-Plus', img:'l1', ram: '5 GB', oppsys: 'Android', intstrage: '32 GB', extstrage: '124 GB', screensize: '6 inch', nettype: '4G', battery: '3000 mAh', primarycam: '14 MP', secondarycam: '3 MP', sim: 'Dual Sim' },
		{ price: 15000, brand: 'Redmi', name: 'Xiaomi Redmi A1', link: 'Xiaomi-Redmi-A1', img:'r1', ram: '3 GB', oppsys: 'Android', intstrage: '32 GB', extstrage: '32 GB', screensize: '6 inch', nettype: '4G', battery: '2000 mAh', primarycam: '14 MP', secondarycam: '2 MP', sim: 'Single Sim' },
		{ price: 15100, brand: 'Samsung', name: 'Samsung Galaxy S8', link: 'Samsung-Galaxy-S8', img:'s3', ram: '2 GB', oppsys: 'Android', intstrage: '8 GB', extstrage: '64 GB', screensize: '5 inch', nettype: '4G', battery: '3000 mAh', primarycam: '8 MP', secondarycam: '5 MP', sim: 'Dual Sim' },
		{ price: 10100, brand: 'Apple', name: 'Apple iPhone 6S', link: 'Apple-iPhone-6S', img:'a3', ram: '3 GB', oppsys: 'Android', intstrage: '16 GB', extstrage: '124 GB', screensize: '4 inch', nettype: '4G', battery: '4000 mAh', primarycam: '14 MP', secondarycam: '4 MP', sim: 'Dual Sim' },
		{ price: 12100, brand: 'Motorola', name: 'Motorola Moto G5', link: 'Motorola-Moto-G5', img:'m3', ram: '2 GB', oppsys: 'Android', intstrage: '4 GB', extstrage: '32 GB', screensize: '6 inch', nettype: '4G', battery: '2000 mAh', primarycam: '13 MP', secondarycam: '3 MP', sim: 'Dual Sim' },
		{ price: 12000, brand: 'Lenovo', name: 'Lenovo K8 Plus', link: 'Lenovo-K8-Plus', img:'l3', ram: '3 GB', oppsys: 'Android', intstrage: '16 GB', extstrage: '64 GB', screensize: '4 inch', nettype: '4G', battery: '4000 mAh', primarycam: '12 MP', secondarycam: '5 MP', sim: 'Single Sim' },
		{ price: 10500, brand: 'Redmi', name: 'Xiaomi Redmi Note 4', link: 'Xiaomi-Redmi-Note-4', img:'r3', ram: '1 GB', oppsys: 'Android', intstrage: '8 GB', extstrage: '32 GB', screensize: '5 inch', nettype: '4G', battery: '3000 mAh', primarycam: '13 MP', secondarycam: '2 MP', sim: 'Single Sim' },
		{ price: 8100, brand: 'Samsung', name: 'Samsung Galaxy On Nxt', link: 'Samsung-Galaxy-On-Nxt', img:'s1', ram: '4 GB', oppsys: 'Android', intstrage: '4 GB', extstrage: '124 GB', screensize: '4 inch', nettype: '4G', battery: '5000 mAh', primarycam: '14 MP', secondarycam: '3 MP', sim: 'Dual Sim' },
		{ price: 15100, brand: 'Apple', name: 'Apple iPhone 5S', link: 'Apple-iPhone-5s', img:'a1', ram: '2 GB', oppsys: 'Android', intstrage: '32 GB', extstrage: '64 GB', screensize: '3 inch', nettype: '4G', battery: '4000 mAh', primarycam: '8 MP', secondarycam: '4 MP', sim: 'Dual Sim' },
		{ price: 6100, brand: 'Motorola', name: 'Motorola Moto G4', link: 'Motorola-Moto-G4', img:'m1', ram: '3 GB', oppsys: 'Android', intstrage: '8 GB', extstrage: '124 GB', screensize: '4 inch', nettype: '4G', battery: '3000 mAh', primarycam: '14 MP', secondarycam: '5 MP', sim: 'Single Sim' },
		{ price: 8500, brand: 'Lenovo', name: 'Lenovo Z2 Plus', link: 'Lenovo-Z2-Plus', img:'l1', ram: '1 GB', oppsys: 'Android', intstrage: '16 GB', extstrage: '64 GB', screensize: '5 inch', nettype: '4G', battery: '2000 mAh', primarycam: '12 MP', secondarycam: '2 MP', sim: 'Dual Sim' },
		{ price: 15000, brand: 'Redmi', name: 'Xiaomi Redmi A1', link: 'Xiaomi-Redmi-A1', img:'r1', ram: '2 GB', oppsys: 'Android', intstrage: '32 GB', extstrage: '32 GB', screensize: '3 inch', nettype: '4G', battery: '3000 mAh', primarycam: '13 MP', secondarycam: '3 MP', sim: 'Dual Sim' }

	];
})
.filter('customFilter', function() {
    return function(input, techs) { 
      if(!techs || techs.length === 0) return input; 
      var out = [];       
      angular.forEach(input, function(item) {
        angular.forEach(techs, function(tech) {
          if (item.brand === tech.brand) {
            out.push(item);
          }
        });
      });       
      angular.forEach(input, function(item) {
        angular.forEach(techs, function(tech) {
          if (item.ram === tech.ram) {
            out.push(item);
          }
        });
      });
      angular.forEach(input, function(item) {
        angular.forEach(techs, function(tech) {
          if (item.intstrage === tech.intstrage) {
            out.push(item);
          }
        });
      });
      angular.forEach(input, function(item) {
        angular.forEach(techs, function(tech) {
          if (item.extstrage === tech.extstrage) {
            out.push(item);
          }
        });
      });
      angular.forEach(input, function(item) {
        angular.forEach(techs, function(tech) {
          if (item.screensize === tech.screensize) {
            out.push(item);
          }
        });
      });
       angular.forEach(input, function(item) {
        angular.forEach(techs, function(tech) {
          if (item.battery === tech.battery) {
            out.push(item);
          }
        });
      });
       angular.forEach(input, function(item) {
        angular.forEach(techs, function(tech) {
          if (item.primarycam === tech.primarycam) {
            out.push(item);
          }
        });
      });
       angular.forEach(input, function(item) {
        angular.forEach(techs, function(tech) {
          if (item.secondarycam === tech.secondarycam) {
            out.push(item);
          }
        });
      });
       angular.forEach(input, function(item) {
        angular.forEach(techs, function(tech) {
          if (item.sim === tech.sim) {
            out.push(item);
          }
        });
      });
      return out;
    } 
})
