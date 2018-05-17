import angular from 'angular'
import FilmsService from './films.service'
import { FilmListComponent} from "./films-list/films-list.component";
import { FilmsItemComponent} from "./films-item/films-item.component";

const films = angular
.module('films',[])
.service('FilmsService',FilmsService)
    .component('filmList',FilmListComponent)
    .component('filmItem',FilmsItemComponent)
    .config(($stateProvider, $urlRouterProvider)=>{
        $stateProvider
            .state('films',{
                url:'/',
                component: 'FilmListComponent'
            })
        $urlRouterProvider.otherwise('/')
        })
.name

export default films