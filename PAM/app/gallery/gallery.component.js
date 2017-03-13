(function () {
    galleryComponentController.$inject = ['galleryService'];

    function galleryComponentController(galleryService){
         var ctrl = this;

        ctrl.$onInit = function () {
            
            // ctrl.albums = galleryService.getAlbums();
            // ctrl.photos = galleryService.getPhotos();
            ctrl.albums = galleryService.getAlbums().then(function (albums) { ctrl.albums = albums; });
            ctrl.photos = galleryService.getPhotos().then(function (photos) { ctrl.photos = photos; });
        }
    }
    
    var galleryComponent = {
        controller:galleryComponentController,
        templateUrl: 'app/gallery/gallery.component.html'
    };

    angular.module('gallery')
        .component('gallery', galleryComponent);

})();