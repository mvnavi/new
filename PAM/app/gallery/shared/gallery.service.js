(function () {

    angular.module('gallery')
        .factory('galleryService', galleryService);
    galleryService.$inject=['dataService'];

    function galleryService(dataService) {
        var albums = [];
        var photos = [];

        var service = {
            getAlbums: getAlbums,
            getPhotos:getPhotos
        };

        return service;
        
//albums
        function getAlbums() {
            return dataService.get("albums").then(function(data){
                if(data.data && data.data.length){
                    for(var dataIndex=0; dataIndex<data.data.length; dataIndex++){
                        var album ={
                            albumId:data.data[dataIndex].id,
                            title:data.data[dataIndex].title
                        }
                        albums.push(album);
                    }
                    return albums;
                }
            });
            //return albums;
        }

//photos
    function getPhotos() {
            return dataService.get("photos").then(function(data){
                if(data.data && data.data.length){
                    for(var dataIndex=0; dataIndex<data.data.length; dataIndex++){
                        var photo ={
                            albumId:data.data[dataIndex].albumId,
                            photoTitle: data.data[dataIndex].title,
                            photoUrl: data.data[dataIndex].url,
                            thumbnailUrl:data.data[dataIndex].thumbnailUrl
                        }
                        photos.push(photo);
                    }
                    return photos;
                }
            });
            //return photos;
        }



    }

})();