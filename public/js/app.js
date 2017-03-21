angular
  .module("MemeSite", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    Router
  ])
  .factory("Meme", [
    "$resource",
    Meme
  ])
  .controller("indexCtrl", [
    "Meme",
    indexController
  ])


function Router($stateProvider){
  $stateProvider
  .state("welcome", {
    url: "/",
    templateUrl: "/assets/js/ng-views/welcome.html"
  })
  .state("index", {
    url: '/memes',
    templateUrl: "/assets/js/ng-views/index.html",
    controller: "indexCtrl",
    controllerAs: "vm"
  })
}

function Meme($resource){
  return $resource("/api/memes/:name", {}, {
    update: {method: "PUT"}
  })
}

function indexController(Meme){
  this.memes = Meme.query()
}
