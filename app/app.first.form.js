(function(app) {
    app.HeroFormComponent = ng.core
        .Component({
            selector: 'hero-form',
            templateUrl: 'app/data-submit-form.html'
        })
        .Class({
            constructor: [function() {
                this.model = new app.Hero();
                this.submitted = false;
            }],
            onSubmit: function() {
                this.submitted = true;
                console.log(this.model);
            },
        });
})(window.app || (window.app = {}));