$(document).ready(function() {
    var $teaserText = $('#page-home .teaser-box .text');
    var teaserBoxHeight = 0;
    $teaserText.each(function(index, text) {
        if ($(text).height() > teaserBoxHeight) {
            teaserBoxHeight = $(text).height() + 10;
        }
    });
    $teaserText.height(teaserBoxHeight);
    
    var $teaserHeader = $('.pid-74 .teaser-box .header');
    $teaserHeader.each(function(index, header) {
        var mod = index % 2;
        if (!mod && $teaserHeader.eq(index + 1).length) {
            var $header = $(header);
            var groupItem = $teaserHeader.eq(index + 1);
            
            if ($header.height() > groupItem.height()) {
                groupItem.height($header.height());
            } else if ($header.height() < groupItem.height()) {
                $header.height(groupItem.height());
            }
        }
        
    });
    
//    var $headerContainer = $('#header-container');
//    var $footerContainer = $('#footer-container');
//    adjustContainerWidth($headerContainer);
//    adjustContainerWidth($footerContainer);
//    $(window).resize(function() {
//        adjustContainerWidth($headerContainer);
//        adjustContainerWidth($footerContainer);
//    });
});

//function adjustContainerWidth($container) {
//    var containerWidth = $container.width();
//    var docWidth = $(document).width();
//    if (containerWidth < docWidth) {
//        $container.width(docWidth);
//    }
//}