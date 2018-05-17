import FilmsService from "../films.service";
class FilmListController{


    constructor(FilmsService){
        this.FilmsService = FilmsService
        this.getFilms();
    }

    getFilms()
    {

           this.FilmsService.getFilms()
            .then(resultado=>{
                this.filmsList = resultado.results
            })
    }
}

export default FilmListController