(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/account/account.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/account/account.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <h4 class=\"jumbotron\">Account</h4>\r\n    </div>\r\n    <div class=\"row\">\r\n        <!--One row and card for the account information\r\n        and one row and maybe multiple cards for meal favorites-->\r\n        <div class=\"card col-6\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">{{fname}}'s Account Information</h4>\r\n                <h6 class=\"card-subtitle mb-2 text-muted\">A brief description</h6>\r\n                <p class=\"card-text\">\r\n                </p>\r\n                <ul>\r\n                    <li><span class=\"font-weight-bold\">First Name: </span><span class=\"font-italic\">{{fname}}</span>\r\n                    </li>\r\n                    <li><span class=\"font-weight-bold\">Last Name: </span><span class=\"font-italic\">{{lname}}</span>\r\n                    </li>\r\n                    <li><span class=\"font-weight-bold\">User ID: </span><span class=\"font-italic\">{{u_id}}</span>\r\n                    </li>\r\n                </ul>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"card col-6\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Stored Meal Favorites</h4>\r\n                <h6 class=\"card-subtitle mb-2 text-muted\">A brief description</h6>\r\n                <p class=\"card-text\">\r\n\r\n                </p>\r\n                <div *ngFor='let favorite of favorites'>\r\n                    <ul>\r\n                        <li><span class=\"font-weight-bold\">{{favorite}}</span></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"card col-6\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Ingredient Preferences</h4>\r\n                <h6 class=\"card-subtitle mb-2 text-muted\">A brief description</h6>\r\n                <p class=\"card-text\">\r\n\r\n                </p>\r\n                <div *ngFor='let ingredient of ingredients'>\r\n                    <ul>\r\n                        <li><span class=\"font-weight-bold\">{{ingredient}}</span></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/calendar/calendar.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/calendar/calendar.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center\">\r\n  <div class=\"col-md-4\">\r\n    <div class=\"btn-group\">\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        mwlCalendarPreviousView\r\n        [view]=\"view\"\r\n        [(viewDate)]=\"viewDate\"\r\n        (viewDateChange)=\"closeOpenMonthViewDay()\"\r\n      >\r\n        Previous\r\n      </div>\r\n      <div\r\n        class=\"btn btn-outline-secondary\"\r\n        mwlCalendarToday\r\n        [(viewDate)]=\"viewDate\"\r\n      >\r\n        Today\r\n      </div>\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        mwlCalendarNextView\r\n        [view]=\"view\"\r\n        [(viewDate)]=\"viewDate\"\r\n        (viewDateChange)=\"closeOpenMonthViewDay()\"\r\n      >\r\n        Next\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <div class=\"btn-group\">\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        (click)=\"setView(CalendarView.Month)\"\r\n        [class.active]=\"view === CalendarView.Month\"\r\n      >\r\n        Month\r\n      </div>\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        (click)=\"setView(CalendarView.Week)\"\r\n        [class.active]=\"view === CalendarView.Week\"\r\n      >\r\n        Week\r\n      </div>\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        (click)=\"setView(CalendarView.Day)\"\r\n        [class.active]=\"view === CalendarView.Day\"\r\n      >\r\n        Day\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br />\r\n<div [ngSwitch]=\"view\">\r\n  <mwl-calendar-month-view\r\n    *ngSwitchCase=\"CalendarView.Month\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    [activeDayIsOpen]=\"activeDayIsOpen\"\r\n    (dayClicked)=\"dayClicked($event.day)\"\r\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n  >\r\n  </mwl-calendar-month-view>\r\n  <mwl-calendar-week-view\r\n    *ngSwitchCase=\"CalendarView.Week\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n  >\r\n  </mwl-calendar-week-view>\r\n  <mwl-calendar-day-view\r\n    *ngSwitchCase=\"CalendarView.Day\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n  >\r\n  </mwl-calendar-day-view>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/change-pw/change-pw.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/change-pw/change-pw.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <div class=\"form-group\">\n    <label for=\"username-input\">Enter User Name:\n    </label><br />\n      <input [(ngModel)]=\"userName\" id=\"username-input\" placeholder=\"User Name\" name=\"username-input\" /><br />\n    <label for=\"password-input\">Enter Password:\n    </label ><br />\n      <input [(ngModel)]=\"password1\" id=\"password-input\" placeholder=\"Password\" name=\"password-input\" /><br />\n    <label for=\"password2-input\">Enter Password Again:\n    </label><br />\n      <input [(ngModel)]=\"password2\" id=\"password2-input\" placeholder=\"Password\" name=\"password2-input\" /><br />\n    <h2>Test divs</h2>\n    <div>User Name: {{userName}}</div>\n    <div>Password: {{password1}}</div>\n    <div>Password2: {{password2}}</div>\n  </div>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h2 class=\"jumbotron\">Nutrition</h2> -->\r\n<div class=\"container\">\r\n    \r\n    <div class=\"row\">\r\n        <div class=\"card col-12\">\r\n            <div class=\"card-body text-center\">\r\n                <h4 class=\"card-title\">Recipes</h4>\r\n                <h6 class=\"card-subtitle mb-2 text-muted\">Look for that perfect meal to spice up your day!</h6>\r\n                <p class=\"card-text\">\r\n                    <button class=\"btn btn-primary\" id=\"recipePage\"> Checkout Recipes</button><br />\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <!--set size so that it doesnt expand-->\r\n\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"card col-12\">\r\n            <div class=\"card-body   \" id=\"test\">\r\n                <!-- <img class=\"d-block\" src=\"assets/images/other.jpg\" alt=\"First slide\"> -->\r\n                <div id=\"recipeCarousel\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"5000\">\r\n                    <div class=\"carousel-inner col-12\">\r\n                        <div class=\"carousel-item active\">\r\n                            <img class=\"d-block\" src=\"assets/images/other.jpg\" alt=\"First slide\">\r\n                        </div>\r\n                        <div class=\"carousel-item\">\r\n                            <img class=\"d-block\" src=\"assets/images/potatoes.jpg\" alt=\"Second slide\">\r\n                        </div>\r\n                        <!--<div class=\"carousel-item\">\r\n                                    <img class=\"d-block w-100\" src=\"assets/images/potatoes.jpg\" alt=\"Second slide\">\r\n                                </div>-->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"card col-5\" id=\"calendarCard\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\"></h4>\r\n                <h6 class=\"card-subtitle mb-2 text-muted\"></h6>\r\n                <p class=\"card-text\">\r\n                    <img class=\"d-block\" src=\"assets/images/calendar.png\" alt=\"First slide\">\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"card col-7\">\r\n            <div class=\"card-body text-center\">\r\n                <h4 class=\"card-title\">Calendar</h4>\r\n                <h6 class=\"card-subtitle mb-2 text-muted\">See what savory dishes you have to look forward to!</h6>\r\n                <p class=\"card-text\">\r\n                    <br/>\r\n                    <br/>\r\n                    <br/>\r\n                    <br/>\r\n                    <button class=\"justify-content-center btn btn-primary\" id=\"calendarPage\"> Checkout\r\n                        Calendars</button><br />\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/directions/directions.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/directions/directions.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>directions works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/edit-account/edit-account.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit-account/edit-account.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <h4 class=\"jumbotron\">Edit Account Information</h4>\r\n    </div>\r\n    <div class=\"row\">\r\n        <!--One row and card for the account information\r\n        and one row and maybe multiple cards for meal favorites-->\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">{{fname}}'s Account Information</h4>\r\n                <h6 class=\"card-subtitle mb-2 text-muted\">A brief description</h6>\r\n                <p class=\"card-text\">\r\n                </p>\r\n                <ul>\r\n                    <li><span class=\"font-weight-bold\">First Name: </span><span class=\"font-italic\">{{fname}}</span>\r\n                    </li>\r\n                    <li><span class=\"font-weight-bold\">Last Name: </span><span class=\"font-italic\">{{lname}}</span>\r\n                    </li>\r\n                    <li><span class=\"font-weight-bold\">User ID: </span><span class=\"font-italic\">{{u_id}}</span>\r\n                    </li>\r\n                </ul>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Edit Information</h4>\r\n                <h6 class=\"card-subtitle mb-2 text-muted\">A brief description</h6>\r\n                <form>\r\n                    <span class=\"font-weight-bold\">First Name: </span><input type=\"text\" id=\"fname\" name=\"fname\" /><br/>\r\n                    <span class=\"font-weight-bold\">Last Name: </span><input type=\"text\" id=\"lname\" name=\"lname\" /><br/>\r\n                    <input type=\"submit\" id=\"submitbtn\" name=\"submitbtn\" value=\"submit\" />\r\n\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/edit-direction/edit-direction.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit-direction/edit-direction.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>edit-direction works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/edit-ingredient/edit-ingredient.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/edit-ingredient/edit-ingredient.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>edit-ingredient works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\r\n<footer class=\"page-footer font-small blue pt-4\">\r\n\r\n  <!-- Footer Links -->\r\n  <div class=\"container-fluid text-center text-md-left\">\r\n\r\n    <!-- Grid row -->\r\n    <div class=\"row\">\r\n\r\n      <!-- Grid column -->\r\n      <div class=\"col-md-6 mt-md-0 mt-3\">\r\n\r\n        <!-- Content -->\r\n        <h5 class=\"text-uppercase\">NUTRITION</h5>\r\n        <p>Helping people one meal plan at a time</p>\r\n\r\n      </div>\r\n      <!-- Grid column -->\r\n\r\n      <hr class=\"clearfix w-100 d-md-none pb-3\">\r\n\r\n      <!-- Grid column -->\r\n      <div class=\"col-md-3 mb-md-0 mb-3\">\r\n\r\n        <!-- Links -->\r\n        <h5 class=\"text-uppercase\">Support</h5>\r\n\r\n        <ul class=\"list-unstyled\">\r\n          <li>\r\n            <a href=\"#!\">Contact Us</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#!\">FAQs</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#!\">Careers</a>\r\n          </li>\r\n        </ul>\r\n\r\n      </div>\r\n      <!-- Grid column -->\r\n\r\n      <!-- Grid column -->\r\n      <div class=\"col-md-3 mb-md-0 mb-3\">\r\n\r\n        <!-- Links -->\r\n        <h5 class=\"text-uppercase\">Additional Information</h5>\r\n\r\n        <ul class=\"list-unstyled\">\r\n          <li>\r\n            <a routerLink=\"/information\">About Us</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#!\">Reviews</a>\r\n          </li>\r\n          <li>\r\n            <a href=\"#!\">Staff</a>\r\n          </li>\r\n        </ul>\r\n\r\n      </div>\r\n      <!-- Grid column -->\r\n\r\n    </div>\r\n    <!-- Grid row -->\r\n\r\n  </div>\r\n  <!-- Footer Links -->\r\n\r\n  <!-- Copyright -->\r\n  <div class=\"footer-copyright text-center py-3\">© 2018 Copyright:\r\n    <a href=\"https://mdbootstrap.com/education/angular/\"> MDBootstrap.com</a>\r\n  </div>\r\n  <!-- Copyright -->\r\n\r\n</footer>\r\n<!-- Footer -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/information/information.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/information/information.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>information works!</p>\r\n<div class=\"card\">\r\n  <div class=\"card-body\">\r\n    <h4 class=\"card-title\">Our app</h4>\r\n    <h6 class=\"card-subtitle mb-2 text-muted\">A brief description</h6>\r\n    <p class=\"card-text\">The meal planning app, working title Nourishment, is our product idea for Project 2. The current goals of the product can be divided into two categories, the calendar and the meal sections of the app. The calendar will function as the general view for the user to see long term details about what food is scheduled for what days on either a monthly, weekly, or daily timescale. This brings in the elements of our meal planning aspects and the filtering that we have in mind for the product. The goal of the app is not specifically for dieting but rather a system of randomly suggesting desired food for the user. These recipes will come from both an internal system as well as user submitted recipes that the user can specify for themselves. The minimum viable product that we have in mind combines the utility of a very simple calendar function as well as offering a user-friendly UI to both view and submit randomly picked recipes. Possible stretch goals for this project include, further calorie sorting for the recipes, as well as detailed search menus to quickly include or green light recipes to be included for the user. </p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ingredient-list/ingredient-list.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ingredient-list/ingredient-list.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>ingredient-list works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <h1 class=\"jumbotron\">Login</h1>\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\r\n            <div class=\"card card-signin my-5\">\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title text-center\">Sign In</h5>\r\n                    <form class=\"form-signin\">\r\n                        <div class=\"form-label-group\">\r\n                            <span>Username:</span><br>\r\n                            <input type=\"text\" id=\"username\" name=\"username\" class=\"form-control\" placeholder=\"Username\"\r\n                                required autofocus>\r\n                            <!-- <label for=\"inputEmail\">Email address</label> -->\r\n                        </div>\r\n\r\n                        <div class=\"form-label-group\">\r\n                            <span>Password:</span><br>\r\n                            <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\"\r\n                                required>\r\n                            <!-- <label for=\"inputPassword\">Password</label> -->\r\n                        </div>\r\n\r\n                        <div class=\"custom-control custom-checkbox mb-3\">\r\n                            <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\r\n                            <label class=\"custom-control-label\" for=\"customCheck1\">Remember password</label>\r\n                        </div>\r\n                        <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\">Sign in</button>\r\n                        <hr class=\"my-4\">\r\n                        <button class=\"btn btn-md btn-primary btn-block text-uppercase\" id=\"registerBtn\" >Register</button>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav/nav.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav/nav.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!--Navbar-->\r\n<head>\r\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\">\r\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"></script>\r\n</head>\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" id=\"nutrition\" href=\"#\">Nutrition</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"dashboard\">Home <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/calendar\">Calendar</a>\r\n      </li>\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          Recipes\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" routerLink=\"/recipe\">Random Recipe</a>\r\n          <a class=\"dropdown-item\" routerLink=\"/search\">Search for Recipe</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" routerLink=\"/editrecipe\">Create New Recipe</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          My Profile\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" routerLink=\"/account\">Account Info</a>\r\n          <a class=\"dropdown-item\" routerLInk=\"/information\">My Preferences</a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n    <!--<form class=\"form-inline my-2 my-lg-0\">\r\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\" routerLink=\"/search\">Search</button>\r\n    </form>\r\n  -->\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/print-view/print-view.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/print-view/print-view.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>print-view works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recipe-editor/recipe-editor.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipe-editor/recipe-editor.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>recipe-editor works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recipe-view/recipe-view.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recipe-view/recipe-view.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>recipe-view works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <h1 class=\"jumbotron\">Register</h1>\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\r\n                <div class=\"card card-signin my-5\">\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title text-center\">Register</h5>\r\n                        <form class=\"form-register\">\r\n                            <div class=\"form-label-group\">\r\n                                <span>Username:</span><br>\r\n                                <input type=\"text\" id=\"username\" name=\"username\" class=\"form-control\" placeholder=\"Username\"\r\n                                    required autofocus>\r\n                                <!-- <label for=\"inputEmail\">Email address</label> -->\r\n                            </div>\r\n                            <div class=\"form-label-group\">\r\n                                    <span>First name:</span><br>\r\n                                    <input type=\"text\" id=\"fname\" name=\"fname\" class=\"form-control\" placeholder=\"First\"\r\n                                        required autofocus>\r\n                                    <!-- <label for=\"inputEmail\">Email address</label> -->\r\n                            </div>\r\n                            <div class=\"form-label-group\">\r\n                                    <span>Last name:</span><br>\r\n                                    <input type=\"text\" id=\"lname\" name=\"lname\" class=\"form-control\" placeholder=\"Last\"\r\n                                        required autofocus>\r\n                                    <!-- <label for=\"inputEmail\">Email address</label> -->\r\n                            </div>\r\n                            <div class=\"form-label-group\">\r\n                                <span>Password:</span><br>\r\n                                <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\"\r\n                                    required>\r\n                                <!-- <label for=\"inputPassword\">Password</label> -->\r\n                            </div>\r\n                            <div class=\"form-label-group\">\r\n                                    <span>Confirm Password:</span><br>\r\n                                    <input type=\"password\" id=\"passwordCon\" name=\"passwordCon\" class=\"form-control\" placeholder=\"Password Confirm\"\r\n                                        required>\r\n                                    <!-- <label for=\"inputPassword\">Password</label> -->\r\n                            </div>\r\n                            <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\">Register</button>\r\n                            <hr class=\"my-4\">\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/result-entry/result-entry.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/result-entry/result-entry.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>result-entry works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/results/results.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/results/results.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>results works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/search/search.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/search/search.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n  <div *ngFor=\"let id of ids\" class=\"form-group\">\r\n    <!-- <app-searchbar></app-searchbar> -->\r\n    <label for=\"{{id | lowercase}}\">{{id}}</label><br />\r\n    <input type=\"text\" id=\"{{id}}\" />\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/searchbar/searchbar.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/searchbar/searchbar.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label for=\"{{id | lowercase}}\">{{id}}</label>\n<input type=\"text\" id=\"{{id}}\" />\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/suggested-recipe/suggested-recipe.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/suggested-recipe/suggested-recipe.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>suggested-recipe works!</p>\r\n"

/***/ }),

/***/ "./src/app/account/account.component.css":
/*!***********************************************!*\
  !*** ./src/app/account/account.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    margin: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/account/account.component.ts":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AccountComponent = class AccountComponent {
    constructor() {
        this.fname = "Ricky";
        this.lname = "Richardson";
        this.u_id = 178456;
        this.ingredients = ["Pepper", 'Chicken', 'Cinnamon'];
        this.favorites = ["Chicken Bruschetta", 'Beef Noodle Stew', 'Pork Stir Fry'];
    }
    ngOnInit() {
    }
};
AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: __webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/index.js!./src/app/account/account.component.html"),
        styles: [__webpack_require__(/*! ./account.component.css */ "./src/app/account/account.component.css")]
    })
], AccountComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/calendar/calendar.component.ts");
/* harmony import */ var _recipe_editor_recipe_editor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recipe-editor/recipe-editor.component */ "./src/app/recipe-editor/recipe-editor.component.ts");
/* harmony import */ var _information_information_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./information/information.component */ "./src/app/information/information.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _edit_account_edit_account_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-account/edit-account.component */ "./src/app/edit-account/edit-account.component.ts");
/* harmony import */ var _recipe_view_recipe_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recipe-view/recipe-view.component */ "./src/app/recipe-view/recipe-view.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./searchbar/searchbar.component */ "./src/app/searchbar/searchbar.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _change_pw_change_pw_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./change-pw/change-pw.component */ "./src/app/change-pw/change-pw.component.ts");















const routes = [
    {
        path: ' ',
        redirectTo: '/main',
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    },
    {
        path: 'calendar',
        component: _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__["CalendarComponent"]
    },
    {
        path: 'editrecipe',
        component: _recipe_editor_recipe_editor_component__WEBPACK_IMPORTED_MODULE_5__["RecipeEditorComponent"]
    },
    {
        path: 'information',
        component: _information_information_component__WEBPACK_IMPORTED_MODULE_6__["InformationComponent"]
    },
    {
        path: 'account',
        component: _account_account_component__WEBPACK_IMPORTED_MODULE_7__["AccountComponent"]
    },
    {
        path: 'editaccount',
        component: _edit_account_edit_account_component__WEBPACK_IMPORTED_MODULE_8__["EditAccountComponent"]
    },
    {
        path: 'recipe',
        component: _recipe_view_recipe_view_component__WEBPACK_IMPORTED_MODULE_9__["RecipeViewComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"]
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"]
    },
    {
        path: 'searchbar',
        component: _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_12__["SearchbarComponent"]
    },
    {
        path: 'search',
        component: _search_search_component__WEBPACK_IMPORTED_MODULE_13__["SearchComponent"]
    },
    {
        path: 'changepassword',
        component: _change_pw_change_pw_component__WEBPACK_IMPORTED_MODULE_14__["ChangePwComponent"]
    },
    { path: '**', redirectTo: '/main' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'nourishment-ang';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm2015/angular-calendar.js");
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angularx-flatpickr */ "./node_modules/angularx-flatpickr/fesm2015/angularx-flatpickr.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _information_information_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./information/information.component */ "./src/app/information/information.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/calendar/calendar.component.ts");
/* harmony import */ var _recipe_view_recipe_view_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./recipe-view/recipe-view.component */ "./src/app/recipe-view/recipe-view.component.ts");
/* harmony import */ var _ingredient_list_ingredient_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ingredient-list/ingredient-list.component */ "./src/app/ingredient-list/ingredient-list.component.ts");
/* harmony import */ var _directions_directions_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./directions/directions.component */ "./src/app/directions/directions.component.ts");
/* harmony import */ var _recipe_editor_recipe_editor_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./recipe-editor/recipe-editor.component */ "./src/app/recipe-editor/recipe-editor.component.ts");
/* harmony import */ var _edit_ingredient_edit_ingredient_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./edit-ingredient/edit-ingredient.component */ "./src/app/edit-ingredient/edit-ingredient.component.ts");
/* harmony import */ var _edit_direction_edit_direction_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./edit-direction/edit-direction.component */ "./src/app/edit-direction/edit-direction.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _edit_account_edit_account_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./edit-account/edit-account.component */ "./src/app/edit-account/edit-account.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./results/results.component */ "./src/app/results/results.component.ts");
/* harmony import */ var _result_entry_result_entry_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./result-entry/result-entry.component */ "./src/app/result-entry/result-entry.component.ts");
/* harmony import */ var _print_view_print_view_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./print-view/print-view.component */ "./src/app/print-view/print-view.component.ts");
/* harmony import */ var _suggested_recipe_suggested_recipe_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./suggested-recipe/suggested-recipe.component */ "./src/app/suggested-recipe/suggested-recipe.component.ts");
/* harmony import */ var _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./searchbar/searchbar.component */ "./src/app/searchbar/searchbar.component.ts");
/* harmony import */ var _change_pw_change_pw_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./change-pw/change-pw.component */ "./src/app/change-pw/change-pw.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _nav_nav_component__WEBPACK_IMPORTED_MODULE_12__["NavComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
            _information_information_component__WEBPACK_IMPORTED_MODULE_16__["InformationComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"],
            _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_18__["CalendarComponent"],
            _recipe_view_recipe_view_component__WEBPACK_IMPORTED_MODULE_19__["RecipeViewComponent"],
            _ingredient_list_ingredient_list_component__WEBPACK_IMPORTED_MODULE_20__["IngredientListComponent"],
            _directions_directions_component__WEBPACK_IMPORTED_MODULE_21__["DirectionsComponent"],
            _recipe_editor_recipe_editor_component__WEBPACK_IMPORTED_MODULE_22__["RecipeEditorComponent"],
            _edit_ingredient_edit_ingredient_component__WEBPACK_IMPORTED_MODULE_23__["EditIngredientComponent"],
            _edit_direction_edit_direction_component__WEBPACK_IMPORTED_MODULE_24__["EditDirectionComponent"],
            _account_account_component__WEBPACK_IMPORTED_MODULE_25__["AccountComponent"],
            _edit_account_edit_account_component__WEBPACK_IMPORTED_MODULE_26__["EditAccountComponent"],
            _search_search_component__WEBPACK_IMPORTED_MODULE_27__["SearchComponent"],
            _results_results_component__WEBPACK_IMPORTED_MODULE_28__["ResultsComponent"],
            _result_entry_result_entry_component__WEBPACK_IMPORTED_MODULE_29__["ResultEntryComponent"],
            _print_view_print_view_component__WEBPACK_IMPORTED_MODULE_30__["PrintViewComponent"],
            _suggested_recipe_suggested_recipe_component__WEBPACK_IMPORTED_MODULE_31__["SuggestedRecipeComponent"],
            _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_32__["SearchbarComponent"],
            _change_pw_change_pw_component__WEBPACK_IMPORTED_MODULE_33__["ChangePwComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_34__["HttpClientModule"],
            angularx_flatpickr__WEBPACK_IMPORTED_MODULE_10__["FlatpickrModule"].forRoot(),
            angular_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarModule"].forRoot({
                provide: angular_calendar__WEBPACK_IMPORTED_MODULE_9__["DateAdapter"],
                useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_11__["adapterFactory"]
            })
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/calendar/calendar.component.css":
/*!*************************************************!*\
  !*** ./src/app/calendar/calendar.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\r\n  margin: 0 0 10px;\r\n}\r\n\r\npre {\r\n  background-color: #f5f5f5;\r\n  padding: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMge1xyXG4gIG1hcmdpbjogMCAwIDEwcHg7XHJcbn1cclxuXHJcbnByZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/calendar/calendar.component.ts":
/*!************************************************!*\
  !*** ./src/app/calendar/calendar.component.ts ***!
  \************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm2015/angular-calendar.js");






const colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
let CalendarComponent = class CalendarComponent {
    constructor(modal) {
        this.modal = modal;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarView"];
        this.viewDate = new Date();
        this.actions = [
            {
                label: '<i class="fa fa-fw fa-pencil"></i>',
                onClick: ({ event }) => {
                    this.handleEvent('Edited', event);
                }
            },
            {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: ({ event }) => {
                    this.events = this.events.filter(iEvent => iEvent !== event);
                    this.handleEvent('Deleted', event);
                }
            }
        ];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.events = [];
        this.activeDayIsOpen = true;
    }
    dayClicked({ date, events }) {
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
            this.viewDate = date;
        }
    }
    eventTimesChanged({ event, newStart, newEnd }) {
        this.events = this.events.map(iEvent => {
            if (iEvent === event) {
                return Object.assign({}, event, { start: newStart, end: newEnd });
            }
            return iEvent;
        });
        this.handleEvent('Dropped or resized', event);
    }
    handleEvent(action, event) {
        this.modalData = { event, action };
        this.modal.open(this.modalContent, { size: 'lg' });
    }
    addEvent() {
        this.events = [
            ...this.events,
            {
                title: 'New event',
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date()),
                color: colors.red,
                draggable: true,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                }
            }
        ];
    }
    deleteEvent(eventToDelete) {
        this.events = this.events.filter(event => event !== eventToDelete);
    }
    setView(view) {
        this.view = view;
    }
    closeOpenMonthViewDay() {
        this.activeDayIsOpen = false;
    }
    ngOnInit() {
        // load calendar events for user from db here
    }
};
CalendarComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent', { static: true })
], CalendarComponent.prototype, "modalContent", void 0);
CalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calendar',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: __webpack_require__(/*! raw-loader!./calendar.component.html */ "./node_modules/raw-loader/index.js!./src/app/calendar/calendar.component.html"),
        styles: [__webpack_require__(/*! ./calendar.component.css */ "./src/app/calendar/calendar.component.css")]
    })
], CalendarComponent);



/***/ }),

/***/ "./src/app/change-pw/change-pw.component.css":
/*!***************************************************!*\
  !*** ./src/app/change-pw/change-pw.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZS1wdy9jaGFuZ2UtcHcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/change-pw/change-pw.component.ts":
/*!**************************************************!*\
  !*** ./src/app/change-pw/change-pw.component.ts ***!
  \**************************************************/
/*! exports provided: ChangePwComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePwComponent", function() { return ChangePwComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChangePwComponent = class ChangePwComponent {
    constructor() { }
    ngOnInit() {
    }
};
ChangePwComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-pw',
        template: __webpack_require__(/*! raw-loader!./change-pw.component.html */ "./node_modules/raw-loader/index.js!./src/app/change-pw/change-pw.component.html"),
        styles: [__webpack_require__(/*! ./change-pw.component.css */ "./src/app/change-pw/change-pw.component.css")]
    })
], ChangePwComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n\r\n#calendarCard{\r\n    background-color: brown;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBYTtJQUFiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuI2NhbGVuZGFyQ2FyZHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/directions/directions.component.css":
/*!*****************************************************!*\
  !*** ./src/app/directions/directions.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpcmVjdGlvbnMvZGlyZWN0aW9ucy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/directions/directions.component.ts":
/*!****************************************************!*\
  !*** ./src/app/directions/directions.component.ts ***!
  \****************************************************/
/*! exports provided: DirectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionsComponent", function() { return DirectionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DirectionsComponent = class DirectionsComponent {
    constructor() { }
    ngOnInit() {
    }
};
DirectionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-directions',
        template: __webpack_require__(/*! raw-loader!./directions.component.html */ "./node_modules/raw-loader/index.js!./src/app/directions/directions.component.html"),
        styles: [__webpack_require__(/*! ./directions.component.css */ "./src/app/directions/directions.component.css")]
    })
], DirectionsComponent);



/***/ }),

/***/ "./src/app/edit-account/edit-account.component.css":
/*!*********************************************************!*\
  !*** ./src/app/edit-account/edit-account.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtYWNjb3VudC9lZGl0LWFjY291bnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/edit-account/edit-account.component.ts":
/*!********************************************************!*\
  !*** ./src/app/edit-account/edit-account.component.ts ***!
  \********************************************************/
/*! exports provided: EditAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAccountComponent", function() { return EditAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EditAccountComponent = class EditAccountComponent {
    //ingredient: string = "Pepper";
    //favorite: string = "Chicken Bruschetta";
    constructor() {
        this.fname = "Ricky";
        this.lname = "Richardson";
        this.u_id = 178456;
    }
    ngOnInit() {
    }
};
EditAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-account',
        template: __webpack_require__(/*! raw-loader!./edit-account.component.html */ "./node_modules/raw-loader/index.js!./src/app/edit-account/edit-account.component.html"),
        styles: [__webpack_require__(/*! ./edit-account.component.css */ "./src/app/edit-account/edit-account.component.css")]
    })
], EditAccountComponent);



/***/ }),

/***/ "./src/app/edit-direction/edit-direction.component.css":
/*!*************************************************************!*\
  !*** ./src/app/edit-direction/edit-direction.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtZGlyZWN0aW9uL2VkaXQtZGlyZWN0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/edit-direction/edit-direction.component.ts":
/*!************************************************************!*\
  !*** ./src/app/edit-direction/edit-direction.component.ts ***!
  \************************************************************/
/*! exports provided: EditDirectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDirectionComponent", function() { return EditDirectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EditDirectionComponent = class EditDirectionComponent {
    constructor() { }
    ngOnInit() {
    }
};
EditDirectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-direction',
        template: __webpack_require__(/*! raw-loader!./edit-direction.component.html */ "./node_modules/raw-loader/index.js!./src/app/edit-direction/edit-direction.component.html"),
        styles: [__webpack_require__(/*! ./edit-direction.component.css */ "./src/app/edit-direction/edit-direction.component.css")]
    })
], EditDirectionComponent);



/***/ }),

/***/ "./src/app/edit-ingredient/edit-ingredient.component.css":
/*!***************************************************************!*\
  !*** ./src/app/edit-ingredient/edit-ingredient.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtaW5ncmVkaWVudC9lZGl0LWluZ3JlZGllbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/edit-ingredient/edit-ingredient.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/edit-ingredient/edit-ingredient.component.ts ***!
  \**************************************************************/
/*! exports provided: EditIngredientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditIngredientComponent", function() { return EditIngredientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EditIngredientComponent = class EditIngredientComponent {
    constructor() { }
    ngOnInit() {
    }
};
EditIngredientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-ingredient',
        template: __webpack_require__(/*! raw-loader!./edit-ingredient.component.html */ "./node_modules/raw-loader/index.js!./src/app/edit-ingredient/edit-ingredient.component.html"),
        styles: [__webpack_require__(/*! ./edit-ingredient.component.css */ "./src/app/edit-ingredient/edit-ingredient.component.css")]
    })
], EditIngredientComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/information/information.component.css":
/*!*******************************************************!*\
  !*** ./src/app/information/information.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZm9ybWF0aW9uL2luZm9ybWF0aW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/information/information.component.ts":
/*!******************************************************!*\
  !*** ./src/app/information/information.component.ts ***!
  \******************************************************/
/*! exports provided: InformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformationComponent", function() { return InformationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InformationComponent = class InformationComponent {
    constructor() { }
    ngOnInit() {
    }
};
InformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-information',
        template: __webpack_require__(/*! raw-loader!./information.component.html */ "./node_modules/raw-loader/index.js!./src/app/information/information.component.html"),
        styles: [__webpack_require__(/*! ./information.component.css */ "./src/app/information/information.component.css")]
    })
], InformationComponent);



/***/ }),

/***/ "./src/app/ingredient-list/ingredient-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/ingredient-list/ingredient-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZ3JlZGllbnQtbGlzdC9pbmdyZWRpZW50LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/ingredient-list/ingredient-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/ingredient-list/ingredient-list.component.ts ***!
  \**************************************************************/
/*! exports provided: IngredientListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientListComponent", function() { return IngredientListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IngredientListComponent = class IngredientListComponent {
    constructor() { }
    ngOnInit() {
    }
};
IngredientListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ingredient-list',
        template: __webpack_require__(/*! raw-loader!./ingredient-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/ingredient-list/ingredient-list.component.html"),
        styles: [__webpack_require__(/*! ./ingredient-list.component.css */ "./src/app/ingredient-list/ingredient-list.component.css")]
    })
], IngredientListComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    background: #007bff;\r\n    background: -webkit-gradient(linear, left top, right top, from(#0062E6), to(#33AEFF));\r\n    background: linear-gradient(to right, #0062E6, #33AEFF);\r\n  }\r\n  \r\n  .card-signin {\r\n    border: 0;\r\n    border-radius: 1rem;\r\n    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\r\n  }\r\n  \r\n  .card-signin .card-title {\r\n    margin-bottom: 2rem;\r\n    font-weight: 300;\r\n    font-size: 1.5rem;\r\n  }\r\n  \r\n  .card-signin .card-body {\r\n    padding: 2rem;\r\n  }\r\n  \r\n  .form-signin {\r\n    width: 100%;\r\n  }\r\n  \r\n  .form-signin .btn {\r\n    font-size: 80%;\r\n    border-radius: 5rem;\r\n    letter-spacing: .1rem;\r\n    font-weight: bold;\r\n    padding: 1rem;\r\n    -webkit-transition: all 0.2s;\r\n    transition: all 0.2s;\r\n  }\r\n  \r\n  .form-label-group {\r\n    position: relative;\r\n    margin-bottom: 1rem;\r\n  }\r\n  \r\n  .form-label-group input {\r\n    height: auto;\r\n    border-radius: 2rem;\r\n  }\r\n  \r\n  .form-label-group>input,\r\n  .form-label-group>label {\r\n    padding: var(--input-padding-y) var(--input-padding-x);\r\n  }\r\n  \r\n  .form-label-group>label {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 0;\r\n    /* Override default `<label>` margin */\r\n    line-height: 1.5;\r\n    color: #495057;\r\n    border: 1px solid transparent;\r\n    border-radius: .25rem;\r\n    -webkit-transition: all .1s ease-in-out;\r\n    transition: all .1s ease-in-out;\r\n  }\r\n  \r\n  .form-label-group input::-webkit-input-placeholder {\r\n    color: transparent;\r\n  }\r\n  \r\n  .form-label-group input::-ms-input-placeholder {\r\n    color: transparent;\r\n  }\r\n  \r\n  .form-label-group input::-moz-placeholder {\r\n    color: transparent;\r\n  }\r\n  \r\n  .form-label-group input::placeholder {\r\n    color: transparent;\r\n  }\r\n  \r\n  .form-label-group input:not(:placeholder-shown) {\r\n    padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));\r\n    padding-bottom: calc(var(--input-padding-y) / 3);\r\n  }\r\n  \r\n  .form-label-group input:not(:placeholder-shown)~label {\r\n    padding-top: calc(var(--input-padding-y) / 3);\r\n    padding-bottom: calc(var(--input-padding-y) / 3);\r\n    font-size: 12px;\r\n    color: #777;\r\n  }\r\n  \r\n  .btn-google {\r\n    color: white;\r\n    background-color: #ea4335;\r\n  }\r\n  \r\n  .btn-facebook {\r\n    color: white;\r\n    background-color: #3b5998;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixxRkFBdUQ7SUFBdkQsdURBQXVEO0VBQ3pEOztFQUVBO0lBQ0UsU0FBUztJQUNULG1CQUFtQjtJQUNuQiw4Q0FBOEM7RUFDaEQ7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsNEJBQW9CO0lBQXBCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCOztFQUVBOztJQUVFLHNEQUFzRDtFQUN4RDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLGNBQWM7SUFDZCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHNDQUFzQztJQUN0QyxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsdUNBQStCO0lBQS9CLCtCQUErQjtFQUNqQzs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFNQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLDRFQUE0RTtJQUM1RSxnREFBZ0Q7RUFDbEQ7O0VBRUE7SUFDRSw2Q0FBNkM7SUFDN0MsZ0RBQWdEO0lBQ2hELGVBQWU7SUFDZixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxZQUFZO0lBQ1oseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLHlCQUF5QjtFQUMzQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDdiZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDYyRTYsICMzM0FFRkYpO1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1zaWduaW4ge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLXNpZ25pbiAuY2FyZC10aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1zaWduaW4gLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1zaWduaW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLXNpZ25pbiAuYnRuIHtcclxuICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dCB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cD5pbnB1dCxcclxuICAuZm9ybS1sYWJlbC1ncm91cD5sYWJlbCB7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIHZhcigtLWlucHV0LXBhZGRpbmcteCk7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwPmxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIC8qIE92ZXJyaWRlIGRlZmF1bHQgYDxsYWJlbD5gIG1hcmdpbiAqL1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1sYWJlbC1ncm91cCBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIHtcclxuICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgKyB2YXIoLS1pbnB1dC1wYWRkaW5nLXkpICogKDIgLyAzKSk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1pbnB1dC1wYWRkaW5nLXkpIC8gMyk7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWxhYmVsLWdyb3VwIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pfmxhYmVsIHtcclxuICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgLyAzKTtcclxuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLWlucHV0LXBhZGRpbmcteSkgLyAzKTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjNzc3O1xyXG4gIH1cclxuICBcclxuICAuYnRuLWdvb2dsZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWE0MzM1O1xyXG4gIH1cclxuICBcclxuICAuYnRuLWZhY2Vib29rIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginComponent = class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#nutrition{\r\n    font-size: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNudXRyaXRpb257XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavComponent = class NavComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: __webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav/nav.component.html"),
        styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/print-view/print-view.component.css":
/*!*****************************************************!*\
  !*** ./src/app/print-view/print-view.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaW50LXZpZXcvcHJpbnQtdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/print-view/print-view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/print-view/print-view.component.ts ***!
  \****************************************************/
/*! exports provided: PrintViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintViewComponent", function() { return PrintViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PrintViewComponent = class PrintViewComponent {
    constructor() { }
    ngOnInit() {
    }
};
PrintViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-print-view',
        template: __webpack_require__(/*! raw-loader!./print-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/print-view/print-view.component.html"),
        styles: [__webpack_require__(/*! ./print-view.component.css */ "./src/app/print-view/print-view.component.css")]
    })
], PrintViewComponent);



/***/ }),

/***/ "./src/app/recipe-editor/recipe-editor.component.css":
/*!***********************************************************!*\
  !*** ./src/app/recipe-editor/recipe-editor.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZS1lZGl0b3IvcmVjaXBlLWVkaXRvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/recipe-editor/recipe-editor.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/recipe-editor/recipe-editor.component.ts ***!
  \**********************************************************/
/*! exports provided: RecipeEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeEditorComponent", function() { return RecipeEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RecipeEditorComponent = class RecipeEditorComponent {
    constructor() { }
    ngOnInit() {
    }
};
RecipeEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipe-editor',
        template: __webpack_require__(/*! raw-loader!./recipe-editor.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipe-editor/recipe-editor.component.html"),
        styles: [__webpack_require__(/*! ./recipe-editor.component.css */ "./src/app/recipe-editor/recipe-editor.component.css")]
    })
], RecipeEditorComponent);



/***/ }),

/***/ "./src/app/recipe-view/recipe-view.component.css":
/*!*******************************************************!*\
  !*** ./src/app/recipe-view/recipe-view.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZS12aWV3L3JlY2lwZS12aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/recipe-view/recipe-view.component.ts":
/*!******************************************************!*\
  !*** ./src/app/recipe-view/recipe-view.component.ts ***!
  \******************************************************/
/*! exports provided: RecipeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeViewComponent", function() { return RecipeViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RecipeViewComponent = class RecipeViewComponent {
    constructor() { }
    ngOnInit() {
    }
};
RecipeViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipe-view',
        template: __webpack_require__(/*! raw-loader!./recipe-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipe-view/recipe-view.component.html"),
        styles: [__webpack_require__(/*! ./recipe-view.component.css */ "./src/app/recipe-view/recipe-view.component.css")]
    })
], RecipeViewComponent);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td{\r\n    text-align: center;\r\n    padding: 10px;\r\n    border: 2px solid black;\r\n}\r\n.btn {\r\n    margin-top: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuLmJ0biB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RegisterComponent = class RegisterComponent {
    constructor() { }
    ngOnInit() {
    }
};
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/result-entry/result-entry.component.css":
/*!*********************************************************!*\
  !*** ./src/app/result-entry/result-entry.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdC1lbnRyeS9yZXN1bHQtZW50cnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/result-entry/result-entry.component.ts":
/*!********************************************************!*\
  !*** ./src/app/result-entry/result-entry.component.ts ***!
  \********************************************************/
/*! exports provided: ResultEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultEntryComponent", function() { return ResultEntryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ResultEntryComponent = class ResultEntryComponent {
    constructor() { }
    ngOnInit() {
    }
};
ResultEntryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-result-entry',
        template: __webpack_require__(/*! raw-loader!./result-entry.component.html */ "./node_modules/raw-loader/index.js!./src/app/result-entry/result-entry.component.html"),
        styles: [__webpack_require__(/*! ./result-entry.component.css */ "./src/app/result-entry/result-entry.component.css")]
    })
], ResultEntryComponent);



/***/ }),

/***/ "./src/app/results/results.component.css":
/*!***********************************************!*\
  !*** ./src/app/results/results.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdHMvcmVzdWx0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/results/results.component.ts":
/*!**********************************************!*\
  !*** ./src/app/results/results.component.ts ***!
  \**********************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ResultsComponent = class ResultsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-results',
        template: __webpack_require__(/*! raw-loader!./results.component.html */ "./node_modules/raw-loader/index.js!./src/app/results/results.component.html"),
        styles: [__webpack_require__(/*! ./results.component.css */ "./src/app/results/results.component.css")]
    })
], ResultsComponent);



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchComponent = class SearchComponent {
    constructor() {
        this.ids = ["Search", "Filter"];
    }
    ngOnInit() {
    }
};
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/search/search.component.html"),
        styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/searchbar/searchbar.component.css":
/*!***************************************************!*\
  !*** ./src/app/searchbar/searchbar.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaGJhci9zZWFyY2hiYXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/searchbar/searchbar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/searchbar/searchbar.component.ts ***!
  \**************************************************/
/*! exports provided: SearchbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarComponent", function() { return SearchbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchbarComponent = class SearchbarComponent {
    constructor() {
        this.ids = ["Search", "Filter"];
    }
    ngOnInit() {
    }
};
SearchbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-searchbar',
        template: __webpack_require__(/*! raw-loader!./searchbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/searchbar/searchbar.component.html"),
        styles: [__webpack_require__(/*! ./searchbar.component.css */ "./src/app/searchbar/searchbar.component.css")]
    })
], SearchbarComponent);



/***/ }),

/***/ "./src/app/suggested-recipe/suggested-recipe.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/suggested-recipe/suggested-recipe.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1Z2dlc3RlZC1yZWNpcGUvc3VnZ2VzdGVkLXJlY2lwZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/suggested-recipe/suggested-recipe.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/suggested-recipe/suggested-recipe.component.ts ***!
  \****************************************************************/
/*! exports provided: SuggestedRecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestedRecipeComponent", function() { return SuggestedRecipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SuggestedRecipeComponent = class SuggestedRecipeComponent {
    constructor() { }
    ngOnInit() {
    }
};
SuggestedRecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-suggested-recipe',
        template: __webpack_require__(/*! raw-loader!./suggested-recipe.component.html */ "./node_modules/raw-loader/index.js!./src/app/suggested-recipe/suggested-recipe.component.html"),
        styles: [__webpack_require__(/*! ./suggested-recipe.component.css */ "./src/app/suggested-recipe/suggested-recipe.component.css")]
    })
], SuggestedRecipeComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jmaci\Desktop\Revature\project-2\meal-plan-app\nourishment-ang\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map