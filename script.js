$(document).ready(function() {
    var envelope = $("#envelope");
    var btn_open = $("#open");
    var btn_reset = $("#reset");

    // Click events for opening and closing the envelope
    envelope.click(function() {
        toggleEnvelope();
    });

    btn_open.click(function() {
        openEnvelope();
    });

    btn_reset.click(function() {
        closeEnvelope();
    });

    function openEnvelope() {
        envelope.addClass("open").removeClass("close");

        // Show hearts animation after opening
        $(".heart").each(function(index) {
            $(this).css("opacity", "1")
                .delay(index * 500)
                .animate({ top: "-600px" }, 4000);
        });
    }

    function closeEnvelope() {
        envelope.addClass("close").removeClass("open");

        // Reset heart animations when closing
        $(".heart").css({ opacity: "0", top: "0" });
    }

    function toggleEnvelope() {
        if (envelope.hasClass("open")) {
            closeEnvelope();
        } else {
            openEnvelope();
        }
    }
});
