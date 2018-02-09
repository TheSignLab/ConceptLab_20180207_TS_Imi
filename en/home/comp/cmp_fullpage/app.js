var userColor;

function init() {

    init_fp();


}

function init_fp() {


    $('main').fullpage({
        sectionSelector: 'section',
        onLeave: function (index, nextIndex, direction) {

            if (nextIndex == 1) {
                // handler video on scope
            }
            if (nextIndex == 2) {
                // handler branch menu on scope
                console.log("Getting into Section[Number == 2]")
            }
        }
    });
}
