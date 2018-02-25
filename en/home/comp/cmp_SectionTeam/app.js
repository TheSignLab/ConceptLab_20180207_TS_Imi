
ListFullSrc = ["comp/cmp_SectionTeam/thesigners.jpg"];
$("#SectionTeam .image img.full").each(function (k) {

    var thisThumb = $("#SectionTeam .image img.thumb")[k];
    var thisFull = $("#SectionTeam .image img.full")[k];

    thisFull.onload = function () {
        $(thisThumb).remove();

        $(thisFull).fadeIn();

    }

    thisFull.src = ListFullSrc[k];

});
