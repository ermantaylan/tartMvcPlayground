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
goog.provide('tns.controllers.IndexController');
goog.require('tns.views.scripts.index.index');
goog.require('tns.views.scripts.index.list');
goog.require('tns.views.scripts.index.show');
goog.require('tart.mvc.Controller');



/**
 * @constructor
 * @extends {tart.mvc.Controller}
 */
tns.controllers.IndexController = function() {
    goog.base(this);
};
goog.inherits(tns.controllers.IndexController, tart.mvc.Controller);


/**
 * @this {tart.mvc.Action}
 */
tns.controllers.IndexController.indexAction = function() {
    this.setViewScript(tns.views.scripts.index.index);
};

/**
 * @this {tart.mvc.Action}
 */
tns.controllers.IndexController.listAction = function() {
    this.setViewScript(tns.views.scripts.index.list);
};

/**
 * @this {tart.mvc.Action}
 */
tns.controllers.IndexController.showAction = function() {
    this.view.id = 3;
    this.setViewScript(tns.views.scripts.index.show);
};