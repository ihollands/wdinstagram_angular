
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
    .state("index", {
      template: "hi",
      url: "/",
      controller: "InstaIndexController",
      controllerAs: "vm"
    })
}

function InstaIndexControllerFunction(){
  console.log("stuff");
  this.posts = [{title: "Hey Show Up"}]
}
