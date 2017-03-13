(function () {

    var galleryListComponent = {
        bindings:{
            album:'<',
            photos:'<'
        },
        templateUrl: 'app/gallery/gallery-list/gallery-list.component.html'
    };

    angular.module('galleryList')
        .component('galleryList', galleryListComponent);

})();