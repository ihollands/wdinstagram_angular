
  angular
    .module("wdinstagram", [
      "ui.router"
    ])
    .config([
      "$stateProvider",
      Router
    ])
    .controller("InstaIndexController", [
      InstaIndexControllerFunction
    ])

function Router($stateProvider){
  $stateProvider
    .state("instaIndex", {
      url: "/",
      templateUrl: "js/ng-views/index.html",
      controller: "InstaIndexController",
      controllerAs: "vm"
    })
}

function InstaIndexControllerFunction(){
  this.posts = [{title: "Hey Show Up"}]
}
