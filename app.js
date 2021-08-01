(function($){
    var app = $.sammy('#app', function() {
        this.use('Template');
        
        this.around(function(callback) {
            var context = this;
            this.load('data/articles.json')
            .then(function(items) {
              context.items = items;
            })
            .then(callback);
        });
    })

    this.get('#/about', function(context) {
        context.app.swap('');
        $.each(this.items, function(i, item) {
            context.render('templates/about.template', {id: i, item: item}).appendTo(context.$element());
        });
    });

    $(function() {
        app.run('#/about/');
        });
})(jQuery);