'use strict';

/**
 * @ngdoc service
 * @name carsiteApp.recentService
 * @description
 * # recentService
 * Service in the carsiteApp.
 */
angular.module('carsiteApp')
  .service('recentService', function ($log) {
    var recentOrders = [
      {src: 'http://cdn.bmwblog.com/wp-content/uploads/BMW-M6-GT31-120x120.jpg'},
      {src: 'http://ak1.ostkcdn.com/images/products/5937812/Coverking-Coverguard-Universal-Car-Cover-T13637729.jpg'},
      {src: 'http://a2.r9cdn.net/res/images/cars/class/mini.jpg?v=a5b467af9f111da825f2b8375c3a5bad18fd9fee'},
      {src: 'http://pimg.tradeindia.com/01888521/s/1/Car-Wrapping-Vinyl.jpg'},
      {src: 'http://ak1.ostkcdn.com/images/products/5937812/Coverking-Coverguard-Universal-Car-Cover-T13637729.jpg'},
      {src: 'http://a2.tbn.bidorbuy.co.za/image/fetch/dpr_1.0,f_auto,t_btbnl/http://a2.img.bidorbuy.co.za/image/upload/user_images/307/2990307/2990307_150417073840_1158-toyota-presents-two-new-customizable-cars-for-kids-1.jpg'}
    ];

    this.getRecent6 = function() {
        return recentOrders;
    }
  });
