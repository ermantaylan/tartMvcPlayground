// Copyright 2011 Tart. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
goog.require('tns.controllers.IndexController');
goog.require('tns.views.layouts.common');
goog.require('tart.mvc');
goog.provide('tns.Application');



/**
 * @constructor
 * @extends {tart.mvc.Application}
 */
tns.Application = function() {
    tns.app = this;
    this.defaultRoute = new tart.mvc.uri.Route({
        name: 'default',
        format: '',
        controller: tns.controllers.IndexController,
        action: tns.controllers.IndexController.indexAction
    });
    goog.base(this);
};
goog.inherits(tns.Application, tart.mvc.Application);


/**
 * @inheritDoc
 */
tns.Application.prototype.basePath = '/';


/**
 * @inheritDoc
 */
tns.Application.prototype.defaultLayout = tns.views.layouts.common;


/**
 * @inheritDoc
 */
tns.Application.prototype.initRouting = function() {
    var router = this.getRouter();
    tns.router = router;

    router.addRoute(new tart.mvc.uri.Route({
        name: 'home anything',
        format: 'home/index',
        controller: tns.controllers.IndexController,
        action: tns.controllers.IndexController.indexAction
    }));

    router.addRoute(new tart.mvc.uri.Route({
        name: 'home anything',
        format: 'home/list/:p1/:p2',
        controller: tns.controllers.IndexController,
        action: tns.controllers.IndexController.listAction
    }));

    router.addRoute(new tart.mvc.uri.Route({
        name: 'home anything',
        format: 'home/show/:p1',
        controller: tns.controllers.IndexController,
        action: tns.controllers.IndexController.showAction
    }));
};
