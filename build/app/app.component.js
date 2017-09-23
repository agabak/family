System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n     <!-- Navigation -->\n    <nav class=\"navbar navbar-custom navbar-fixed-top\" role=\"navigation\">\n        <div class=\"container\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-main-collapse\">\n                    Menu <i class=\"fa fa-bars\"></i>\n                </button>\n                <a class=\"navbar-brand page-scroll\" href=\"#page-top\">\n                    <i class=\"fa fa-play-circle\"></i> <span class=\"light\">Start</span> Mtomawe\n                </a>\n            </div>\n\n            <!-- Collect the nav links, forms, and other content for toggling -->\n            <div class=\"collapse navbar-collapse navbar-right navbar-main-collapse\">\n                <ul class=\"nav navbar-nav\">\n                    <!-- Hidden li included to remove active class from about link when scrolled up past about section -->\n                    <li class=\"hidden\">\n                        <a href=\"#page-top\"></a>\n                    </li>\n                    <li>\n                        <a class=\"page-scroll\" href=\"#about\">About Testing it</a>\n                    </li>\n                    <li>\n                        <a class=\"page-scroll\" href=\"#contact\">Contact</a>\n                    </li>\n                     <li>\n                        <a class=\"page-scroll\" href=\"#contact\">Start your journey with us</a>\n                    </li>\n                </ul>\n            </div>\n            <!-- /.navbar-collapse -->\n        </div>\n        <!-- /.container -->\n    </nav>\n\n    <!-- Intro Header -->\n    <header class=\"intro\">\n        <div class=\"intro-body\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 col-md-offset-2\">\n                        <h1 class=\"brand-heading\">Mtomawe</h1>\n                        <p class=\"intro-text\">Welcome to MtoMawe where Adventure, \n                            <br>Fun, and Tranquility Await!.</p>\n                        <a href=\"#about\" class=\"btn btn-circle page-scroll\">\n                            <i class=\"fa fa-angle-double-down animated\"></i>\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </header>\n    <!-- Footer -->\n    <footer>\n        <div class=\"container text-center\">\n            <p>Copyright &copy; mtomawe.com</p>\n             <main-page></main-page>\n        </div>\n    </footer>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map