/*!
 * jquery.confirm
 *
 * @version 2.3.1
 *
 * @author My C-Labs
 * @author Matthieu Napoli <matthieu@mnapoli.fr>
 * @author Russel Vela
 * @author Marcus Schwarz <msspamfang@gmx.de>
 *
 * @license MIT
 * @url https://myclabs.github.io/jquery.confirm/
 */
(function(a) {
    a.fn.confirm = function(b) {
        if (typeof b === "undefined") { b = {} }
        this.click(function(c) {
            c.preventDefault();
            var d = a.extend({ button: a(this) }, b);
            a.confirm(d, c)
        });
        return this
    };
    a.confirm = function(k, g) {
        if (typeof k == "undefined") { console.error("No options given."); return }
        if (a(".confirmation-modal").length > 0) { return }
        var j = {};
        if (k.button) {
            var c = { title: "title", text: "text", "confirm-button": "confirmButton", "submit-form": "submitForm", "cancel-button": "cancelButton", "confirm-button-class": "confirmButtonClass", "cancel-button-class": "cancelButtonClass", "dialog-class": "dialogClass", "modal-options-backdrop": "modalOptionsBackdrop", "modal-options-keyboard": "modalOptionsKeyboard" };
            a.each(c, function(e, l) { var m = k.button.data(e); if (typeof m != "undefined") { j[l] = m } })
        }
        var d = a.extend({}, a.confirm.options, {
            confirm: function() {
                if (j.submitForm || (typeof j.submitForm == "undefined" && k.submitForm) || (typeof j.submitForm == "undefined" && typeof k.submitForm == "undefined" && a.confirm.options.submitForm)) { g.target.closest("form").submit() } else {
                    var e = g && (("string" === typeof g && g) || (g.currentTarget && g.currentTarget.attributes.href.value));
                    if (e) {
                        if (k.post) {
                            var l = a('<form method="post" class="hide" action="' + e + '"></form>');
                            a("body").append(l);
                            l.submit()
                        } else { window.location = e }
                    }
                }
            },
            cancel: function(e) {},
            button: null
        }, k, j);
        var b = "";
        if (d.title !== "") { b = '<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title">' + d.title + "</h4></div>" }
        var h = "";
        if (d.cancelButton) { h = '<button class="cancel btn ' + d.cancelButtonClass + '" type="button" data-dismiss="modal">' + d.cancelButton + "</button>" }
        var f = '<div class="confirmation-modal modal fade" tabindex="-1" role="dialog"><div class="' + d.dialogClass + '"><div class="modal-content">' + b + '<div class="modal-body">' + d.text + '</div><div class="modal-footer"><button class="confirm btn ' + d.confirmButtonClass + '" type="button" data-dismiss="modal">' + d.confirmButton + "</button>" + h + "</div></div></div></div>";
        var i = a(f);
        if (typeof d.modalOptionsBackdrop != "undefined" || typeof d.modalOptionsKeyboard != "undefined") { i.modal({ backdrop: d.modalOptionsBackdrop, keyboard: d.modalOptionsKeyboard }) }
        i.on("shown.bs.modal", function() { i.find(".btn-primary:first").focus() });
        i.on("hidden.bs.modal", function() { i.remove() });
        i.find(".confirm").click(function() { d.confirm(d.button) });
        i.find(".cancel").click(function() { d.cancel(d.button) });
        a("body").append(i);
        i.modal("show")
    };
    a.confirm.options = { text: "Are you sure?", title: "", confirmButton: "Yes", cancelButton: "Cancel", post: false, submitForm: false, confirmButtonClass: "btn-primary", cancelButtonClass: "btn-default", dialogClass: "modal-dialog", modalOptionsBackdrop: true, modalOptionsKeyboard: true }
})(jQuery);