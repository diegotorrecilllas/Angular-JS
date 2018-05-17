import angular from 'angular'

import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";

const common = angular
 .module('App.common',[])
 .component('acHeader', HeaderComponent)
 .component('acFooter', FooterComponent)
 .name

export default common