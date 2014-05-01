function init_image_cloud() {
  var options = {
    gridSize: 4,
    beforeImageLoad: function ($img, r, R) {
      $img.css('opacity', 0);
    },
    query: 'select * from flickr.photos.search(0,100) where user_id="51987472@N04" ' +
      'and sort="interestingness-desc" ' +
      'and api_key = "64a8192d359871faf7686f8c2cbecf05"',
    imageLoad: function ($img, r, R) {
      $img.css('opacity', Math.pow(r/R, 2));
    },
    weight: function (i, listLength, canvasSize) {
      var w = 5*canvasSize/43200/150*Math.pow((150 - i)/150, 2);
      return (w > 0.1)?w:0;
    },
    photoListType: 'flickr',
    shuffle: false
  };

  $('#photos').imageCloud(options);
}

jQuery(function ($) {
  if (navigator.userAgent.match(/(Android|iPhone|iPod|iPad|IEMobile|B2G)/)) {
    $(document.body).addClass('fallback');
    return; // No $.imageCloud
  }
  init_image_cloud();
});
