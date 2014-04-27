function init_jarallax(jarallax) {
  
  jarallax.setDefault('h2, #p1, #p2, #p3, #next', {opacity:'0'});
  jarallax.setDefault('#p1, #p2, #p3', {marginLeft:'-1000px'});
  
  jarallax.addAnimation('#head1',[{progress: "0%", left:"-800px"}, {progress: "10%", left: "100px"}]);
  jarallax.addAnimation('#head1',[{progress: "10%", left:"100px"}, {progress: "40%", left: "150px"}]);
  jarallax.addAnimation('#head1',[{progress: "0%", opacity:"1"}, {progress: "30%", opacity:"1"}]);
  jarallax.addAnimation('#head1',[{progress: "30%", opacity:"1"}, {progress: "40%", opacity:"0"}]);

  jarallax.addAnimation('#p1',[{progress: "15%", opacity:"0"}, {progress: "20%", opacity:"1"}]);
  jarallax.addAnimation('#p1',[{progress: "20%", opacity:"1"}, {progress: "30%"}]);
  jarallax.addAnimation('#p1',[{progress: "30%", opacity:"1"}, {progress: "40%", opacity:"0"}]);
  jarallax.addAnimation('#p1',[{progress: "15%", marginLeft:"0"}, {progress: "40%"}]);

  jarallax.addAnimation('#next',[{progress: "20%", opacity:"0"}, {progress: "30%", opacity:"1"}]);
  jarallax.addAnimation('#next',[{progress: "20%", top:"300px"}, {progress: "30%", top:"400px"}]);
  jarallax.addAnimation('#next',[{progress: "30%", opacity:"1"}, {progress: "40%", opacity:"0"}]);
  
  jarallax.addAnimation('#head2',[{progress: "30%", left:"-800px"}, {progress: "40%", left: "100px"}]);
  jarallax.addAnimation('#head2',[{progress: "40%", left:"100px"}, {progress: "70%", left: "150px"}]);
  jarallax.addAnimation('#head2',[{progress: "30%", opacity:"1"}, {progress: "60%", opacity:"1"}]);
  jarallax.addAnimation('#head2',[{progress: "60%", opacity:"1"}, {progress: "70%", opacity:"0"}]);

  jarallax.addAnimation('#p2',[{progress: "45%", opacity:"0"}, {progress: "50%", opacity:"1"}]);
  jarallax.addAnimation('#p2',[{progress: "50%", opacity:"1"}, {progress: "60%"}]);
  jarallax.addAnimation('#p2',[{progress: "60%", opacity:"1"}, {progress: "70%", opacity:"0"}]);     
  jarallax.addAnimation('#p2',[{progress: "45%", marginLeft:"0"}, {progress: "70%"}]);
  
  jarallax.addAnimation('#head3',[{progress: "60%", left:"-800px"}, {progress: "70%", left: "100px"}]);
  jarallax.addAnimation('#head3',[{progress: "70%", left:"100px"}, {progress: "100%", left: "150px"}]);
  jarallax.addAnimation('#head3',[{progress: "60%", opacity:"1"}, {progress: "100%", opacity:"1"}]);
  
  jarallax.addAnimation('#p3',[{progress: "75%", opacity:"0"}, {progress: "80%", opacity:"1"}]);
  jarallax.addAnimation('#p3',[{progress: "80%", opacity:"1"}, {progress: "100%"}]);
  jarallax.addAnimation('#p3',[{progress: "75%", marginLeft:"0"}, {progress: "100%"}]);
}

function init_image_cloud(jarallax) {
  var options = {
    gridSize: 4,
    beforeImageLoad: function ($img, r, R) {
      $img.css('opacity', 0);
    },
    query: 'select * from flickr.photos.search(0,50) where user_id="51987472@N04" ' +
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
    onDone: function() {
      jarallax.jumpToProgress(0.3, 2000, 24);
    },
    shuffle: false
  };

  $('#photos').imageCloud(options);
}

jQuery(function ($) {
  var jarallax = new Jarallax();
  init_image_cloud(jarallax);
  init_jarallax(jarallax);
});
