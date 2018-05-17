import controller from './film-list.controller'
export const FilmListComponent = {

    bindings:{
      filmsList: '<'
    },
    controller,
    template:`
    <h1>Film List</h1>
    <div class="container-fluid">
        <div class="row">
            <film-item class="col-sm-4" ng-repeat="film in $ctrl.filmsList" data="film"> </film-item>
        </div>
    </div>     
    `

}