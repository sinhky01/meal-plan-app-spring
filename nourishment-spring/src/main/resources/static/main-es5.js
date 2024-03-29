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

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <h4 class=\"jumbotron col-12\">Account</h4>\r\n    </div>\r\n    <div class=\"row\">\r\n        <!--One row and card for the account information\r\n        and one row and maybe multiple cards for meal favorites-->\r\n        <div class=\"card col-6 border-dark mb-3\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">{{fname}}'s Account Information</h4>\r\n                <p class=\"card-text\">\r\n                </p>\r\n                <ul>\r\n                    <li><span class=\"font-weight-bold\">First Name: </span><span class=\"font-italic\">{{fname}}</span>\r\n                    </li>\r\n                    <li><span class=\"font-weight-bold\">Last Name: </span><span class=\"font-italic\">{{lname}}</span>\r\n                    </li>\r\n                    <li><span class=\"font-weight-bold\">User ID: </span><span class=\"font-italic\">{{u_id}}</span>\r\n                    </li>\r\n                    <li><span class=\"font-weight-bold\">Username: </span><span class=\"font-italic\">{{username}}</span>\r\n                    </li>\r\n                </ul>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"card col-6 border-dark mb-3\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Stored Meal Favorites</h4>\r\n                \r\n                <p class=\"card-text\">\r\n\r\n                </p>\r\n                <div *ngFor='let favorite of favorites'>\r\n                    <ul>\r\n                        <li><span class=\"font-weight-bold\">{{favorite}}</span></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"card col-6 border-dark mb-3\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Ingredient Preferences</h4>\r\n                <p class=\"card-text\">\r\n\r\n                </p>\r\n                <div *ngFor='let ingredient of ingredients'>\r\n                    <ul>\r\n                        <li><span class=\"font-weight-bold\">{{ingredient}}</span></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <a routerLink=\"/editaccount\" class=\"offset-2 btn btn-primary\">Edit Information</a>\r\n    </div>\r\n</div>"

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

module.exports = "<div class=\"row text-center\">\r\n  <div class=\"col-md-4\">\r\n    <div class=\"btn-group\">\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        mwlCalendarPreviousView\r\n        [view]=\"view\"\r\n        [(viewDate)]=\"viewDate\"\r\n        (viewDateChange)=\"closeOpenMonthViewDay()\"\r\n      >\r\n        Previous\r\n      </div>\r\n      <div\r\n        class=\"btn btn-outline-secondary\"\r\n        mwlCalendarToday\r\n        [(viewDate)]=\"viewDate\"\r\n      >\r\n        Today\r\n      </div>\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        mwlCalendarNextView\r\n        [view]=\"view\"\r\n        [(viewDate)]=\"viewDate\"\r\n        (viewDateChange)=\"closeOpenMonthViewDay()\"\r\n      >\r\n        Next\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\r\n  </div>\r\n  <div class=\"col-md-4\">\r\n    <div class=\"btn-group\">\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        (click)=\"setView(CalendarView.Month)\"\r\n        [class.active]=\"view === CalendarView.Month\"\r\n      >\r\n        Month\r\n      </div>\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        (click)=\"setView(CalendarView.Week)\"\r\n        [class.active]=\"view === CalendarView.Week\"\r\n      >\r\n        Week\r\n      </div>\r\n      <div\r\n        class=\"btn btn-primary\"\r\n        (click)=\"setView(CalendarView.Day)\"\r\n        [class.active]=\"view === CalendarView.Day\"\r\n      >\r\n        Day\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br />\r\n<div [ngSwitch]=\"view\">\r\n  <mwl-calendar-month-view\r\n    *ngSwitchCase=\"CalendarView.Month\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    [activeDayIsOpen]=\"activeDayIsOpen\"\r\n    (dayClicked)=\"dayClicked($event.day)\"\r\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n  >\r\n  </mwl-calendar-month-view>\r\n  <mwl-calendar-week-view\r\n    *ngSwitchCase=\"CalendarView.Week\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n  >\r\n  </mwl-calendar-week-view>\r\n  <mwl-calendar-day-view\r\n    *ngSwitchCase=\"CalendarView.Day\"\r\n    [viewDate]=\"viewDate\"\r\n    [events]=\"events\"\r\n    [refresh]=\"refresh\"\r\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n    (eventTimesChanged)=\"eventTimesChanged($event)\"\r\n  >\r\n  </mwl-calendar-day-view>\r\n</div>\r\n  <div class=\"row\">\r\n  <div class=\"col\">\r\n    <button class=\"btn btn-danger\" (click)=\"populateCalendar()\">Get Meals</button>\r\n  </div>\r\n  <div class=\"col\">\r\n    <button class=\"btn btn-danger\" (click)=\"postNew()\">Add Meal</button><br />\r\n    <input placeholder=\"Recipe Name\" type=\"text\" [(ngModel)]=\"mealName\"><br />\r\n    <input type=\"date\" [(ngModel)]=\"mealDate\"><br />\r\n    <label>Breakfast &nbsp;\r\n      <input type=\"radio\" name=\"mealType\" value=\"breakfast\" [(ngModel)]=\"mealType\" /> &nbsp;\r\n    </label>\r\n    <label>Lunch &nbsp;\r\n      <input type=\"radio\" name=\"mealType\" value=\"lunch\" [(ngModel)]=\"mealType\" /> &nbsp;\r\n    </label>\r\n    <label>Dinner &nbsp;\r\n      <input type=\"radio\" name=\"mealType\" value=\"dinner\" [(ngModel)]=\"mealType\" />\r\n    </label>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/change-pw/change-pw.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/change-pw/change-pw.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\r\n  <div class=\"form-group\">\r\n    <label for=\"username-input\">Enter User Name:\r\n    </label><br />\r\n      <input [(ngModel)]=\"userName\" id=\"username-input\" placeholder=\"User Name\" name=\"username-input\" /><br />\r\n    <label for=\"password-input\">Enter Password:\r\n    </label ><br />\r\n      <input [(ngModel)]=\"password1\" id=\"password-input\" placeholder=\"Password\" name=\"password-input\" /><br />\r\n    <label for=\"password2-input\">Enter Password Again:\r\n    </label><br />\r\n      <input [(ngModel)]=\"password2\" id=\"password2-input\" placeholder=\"Password\" name=\"password2-input\" /><br />\r\n    <h2>Test divs</h2>\r\n    <div>User Name: {{userName}}</div>\r\n    <div>Password: {{password1}}</div>\r\n    <div>Password2: {{password2}}</div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h2 class=\"jumbotron\">Nutrition</h2> -->\r\n<div class=\"container\">\r\n    \r\n    <div class=\"row\">\r\n        <div class=\"card col-12\">\r\n            <div class=\"card-body text-center\">\r\n                <h4 class=\"card-title\">Recipes</h4>\r\n                <h6 class=\"card-subtitle mb-2 text-muted\">Look for that perfect meal to spice up your day!</h6>\r\n                <p class=\"card-text\">\r\n                    <a routerLink=\"/recipe\" class=\"btn btn-primary\" id=\"recipePage\"> Checkout Recipes</a><br />\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <!--set size so that it doesnt expand-->\r\n\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"card col-12\">\r\n            <div class=\"card-body   \" id=\"test\">\r\n                <!-- <img class=\"d-block\" src=\"assets/images/other.jpg\" alt=\"First slide\"> -->\r\n                <div id=\"recipeCarousel\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"5000\">\r\n                    <div class=\"carousel-inner col-12\">\r\n                        <div class=\"carousel-item active\">\r\n                            <img class=\"d-block\" src=\"assets/images/burger.png\" alt=\"First slide\">\r\n                        </div>\r\n                        <div class=\"carousel-item\">\r\n                            <img class=\"d-block\" src=\"assets/images/sliced-food.jpg\" alt=\"Second slide\">\r\n                        </div>\r\n                        <div class=\"carousel-item\">\r\n                            <img class=\"d-block\" src=\"assets/images/greenplate.jpeg\" alt=\"Third slide\">\r\n                        </div>\r\n                        <!--<div class=\"carousel-item\">\r\n                                    <img class=\"d-block w-100\" src=\"assets/images/potatoes.jpg\" alt=\"Second slide\">\r\n                                </div>-->\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"card col-5\" id=\"calendarCard\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\"></h4>\r\n                <h6 class=\"card-subtitle mb-2 text-muted\"></h6>\r\n                <p class=\"card-text\">\r\n                    <img class=\"d-block\" src=\"assets/images/calendar.png\" alt=\"First slide\">\r\n                </p>\r\n            </div>\r\n        </div>\r\n        <div class=\"card col-7\">\r\n            <div class=\"card-body text-center\">\r\n                <h4 class=\"card-title\">Calendar</h4>\r\n                <h6 class=\"card-subtitle mb-2 text-muted\">See what savory dishes you have to look forward to!</h6>\r\n                <p class=\"card-text\">\r\n                    <br/>\r\n                    <br/>\r\n                    <br/>\r\n                    <br/>\r\n                    <a routerLink=\"/calendar\" class=\"justify-content-center btn btn-primary\" id=\"calendarPage\"> Checkout\r\n                        Calendars</a><br />\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

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

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <h4 class=\"jumbotron col-12\">Edit Account Information</h4>\r\n    </div>\r\n    <div class=\"row\">\r\n        <!--One row and card for the account information\r\n        and one row and maybe multiple cards for meal favorites-->\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">{{fname}}'s Account Information</h4>\r\n                <h6 class=\"card-subtitle mb-2 text-muted\">A brief description</h6>\r\n                <p class=\"card-text\">\r\n                </p>\r\n                <ul>\r\n                    <li><span class=\"font-weight-bold\">First Name: </span><span class=\"font-italic\">{{fname}}</span>\r\n                    </li>\r\n                    <li><span class=\"font-weight-bold\">Last Name: </span><span class=\"font-italic\">{{lname}}</span>\r\n                    </li>\r\n                    <li><span class=\"font-weight-bold\">User ID: </span><span class=\"font-italic\">{{u_id}}</span>\r\n                    </li>\r\n                </ul>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"card\">\r\n            <div class=\"card-body\">\r\n                <h4 class=\"card-title\">Edit Information</h4>\r\n                <h6 class=\"card-subtitle mb-2 text-muted\"></h6>\r\n                <form>\r\n                    <span class=\"font-weight-bold\">First Name: </span><input type=\"text\" id=\"fname\" name=\"fname\" /><br/>\r\n                    <span class=\"font-weight-bold\">Last Name: </span><input type=\"text\" id=\"lname\" name=\"lname\" /><br/>\r\n                    <input type=\"submit\" id=\"submitbtn\" name=\"submitbtn\" value=\"submit\" />\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

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

module.exports = "<div class=\"container\">\r\n    <div class=\"row\" id='ingRow'>\r\n        \r\n    </div>\r\n</div>\r\n\r\n                    "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <h1 class=\"jumbotron\">Login</h1>\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\r\n            <div class=\"card card-signin my-5\">\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-title text-center\">Sign In</h5>\r\n                    <form class=\"form-signin\" (ngSubmit)=\"onSubmit()\" ><!-- [formGroup]=\"loginForm\" -->\r\n                    \r\n                        <div class=\"form-label-group\">\r\n                            <span>Username:</span><br>\r\n                            <input type=\"text\" id=\"username\" name=\"username\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"this.username\" required autofocus>\r\n                        </div>\r\n\r\n                        <div class=\"form-label-group\">\r\n                            <span>Password:</span><br>\r\n                            <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\"\r\n                                placeholder=\"Password\" [(ngModel)]=\"this.password\" required>\r\n                        </div>\r\n\r\n                        <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\"\r\n                            >Sign in</button>\r\n                        <hr class=\"my-4\">\r\n                        <button class=\"btn btn-md btn-primary btn-block text-uppercase\"\r\n                            id=\"registerBtn\" routerLink=\"/register\">Register</button>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nav/nav.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nav/nav.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!--Navbar-->\r\n<head>\r\n    <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\">\r\n    <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js\"></script>\r\n    <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js\"></script>\r\n</head>\r\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" id=\"nutrition\" href=\"#\">Nutrition</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"dashboard\">Home <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/calendar\">Calendar</a>\r\n      </li>\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          Recipes\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" routerLink=\"/randomRecipe\">Random Recipe</a>\r\n          <a class=\"dropdown-item\" routerLink=\"/search\">Search for Recipe</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" routerLink=\"/editrecipe\">Create New Recipe</a>\r\n        </div>\r\n      </li>\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          My Profile\r\n        </a>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" routerLink=\"/account\">Account Info</a>\r\n          <a class=\"dropdown-item\" routerLink=\"/information\">My Preferences</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" routerLink=\"/login\" (click)=\"logout()\">Logout</a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n    <!--<form class=\"form-inline my-2 my-lg-0\">\r\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\" routerLink=\"/search\">Search</button>\r\n    </form>\r\n  -->\r\n  </div>\r\n</nav>"

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

module.exports = "<div class=\"container\">\r\n    <h2 id=\"recipeTitleElement\"></h2>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n                <app-ingredient-list [recipeId]=[recipeId]></app-ingredient-list>\r\n                \r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-10\">\r\n            <span id=\"directionElement\"></span>\r\n        </div>\r\n    </div>\r\n    \r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/register/register.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <h1 class=\"jumbotron\">Register</h1>\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\r\n                <div class=\"card card-signin my-5\">\r\n                    <div class=\"card-body\">\r\n                        <h5 class=\"card-title text-center\">Register</h5>\r\n                        <form class=\"form-register\" (ngSubmit)=\"onSubmit()\">\r\n                            <div class=\"form-label-group\">\r\n                                <span>Username:</span><br>\r\n                                <input type=\"text\" id=\"username\" name=\"username\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"this.username\"\r\n                                    required autofocus>\r\n                                <!-- <label for=\"inputEmail\">Email address</label> -->\r\n                            </div>\r\n                            <div class=\"form-label-group\">\r\n                                    <span>First name:</span><br>\r\n                                    <input type=\"text\" id=\"fname\" name=\"fname\" class=\"form-control\" placeholder=\"First Name\" [(ngModel)]=\"this.fname\"\r\n                                        required autofocus>\r\n                                    <!-- <label for=\"inputEmail\">Email address</label> -->\r\n                            </div>\r\n                            <div class=\"form-label-group\">\r\n                                    <span>Last name:</span><br>\r\n                                    <input type=\"text\" id=\"lname\" name=\"lname\" class=\"form-control\" placeholder=\"Last Name\" [(ngModel)]=\"this.lname\"\r\n                                        required autofocus>\r\n                                    <!-- <label for=\"inputEmail\">Email address</label> -->\r\n                            </div>\r\n                            <div class=\"form-label-group\">\r\n                                <span>Password:</span><br>\r\n                                <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"this.password\"\r\n                                    required>\r\n                                <!-- <label for=\"inputPassword\">Password</label> -->\r\n                            </div>\r\n                            <div class=\"form-label-group\">\r\n                                    <span>Confirm Password:</span><br>\r\n                                    <input type=\"password\" id=\"passwordCon\" name=\"passwordCon\" class=\"form-control\" placeholder=\"Password Confirm\" [(ngModel)]=\"this.passwordConfirm\" required>\r\n                                    <!-- <label for=\"inputPassword\">Password</label> -->\r\n                            </div>\r\n                            <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\">Register</button>\r\n                            <hr class=\"my-4\">\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

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

module.exports = "<div class='container'>\r\n  <form>\r\n    <div class='form-group row'>\r\n          <label class=\"col-md-1 col-form-label\" for='Search'>Search</label>\r\n          <div class='col-md-2'>\r\n              <input type=\"text\" id=\"Search\" class='form-control'>\r\n          </div>\r\n    </div>\r\n    <div class='form-group row'>\r\n        <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n    </div>\r\n  </form>\r\n  \r\n  <div>\r\n    <a routerLink='/recipe'>\r\n      <table class='table' id='resultSet'>\r\n    \r\n    </table>\r\n    </a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/searchbar/searchbar.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/searchbar/searchbar.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label for=\"{{id | lowercase}}\">{{id}}</label>\r\n<input type=\"text\" id=\"{{id}}\" />\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/suggested-recipe/suggested-recipe.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/suggested-recipe/suggested-recipe.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <h4>{{recipe.meals[0].strMeal}}</h4>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-6\">\r\n            <ul>\r\n                <li><span>{{recipe.meals[0].strIngredient1}} -- {{recipe.meals[0].strMeasure1}}</span></li>\r\n                <li><span>{{recipe.meals[0].strIngredient2}} -- {{recipe.meals[0].strMeasure2}}</span></li>\r\n                <li><span>{{recipe.meals[0].strIngredient3}} -- {{recipe.meals[0].strMeasure3}}</span></li>\r\n                <li><span>{{recipe.meals[0].strIngredient4}} -- {{recipe.meals[0].strMeasure4}}</span></li>\r\n                <li><span>{{recipe.meals[0].strIngredient5}} -- {{recipe.meals[0].strMeasure5}}</span></li>\r\n                <li><span>{{recipe.meals[0].strIngredient6}} -- {{recipe.meals[0].strMeasure6}}</span></li>\r\n                <li><span>{{recipe.meals[0].strIngredient7}} -- {{recipe.meals[0].strMeasure7}}</span></li>\r\n                <li><span>{{recipe.meals[0].strIngredient8}} -- {{recipe.meals[0].strMeasure8}}</span></li>\r\n                <li><span>{{recipe.meals[0].strIngredient9}} -- {{recipe.meals[0].strMeasure9}}</span></li>\r\n                <li><span>{{recipe.meals[0].strIngredient10}} -- {{recipe.meals[0].strMeasure10}}</span></li>\r\n                <li><span>{{recipe.meals[0].strIngredient11}} -- {{recipe.meals[0].strMeasure11}}</span></li>\r\n                <li><span>{{recipe.meals[0].strIngredient12}} -- {{recipe.meals[0].strMeasure12}}</span></li>\r\n                <li><span>{{recipe.meals[0].strIngredient13}} -- {{recipe.meals[0].strMeasure13}}</span></li>\r\n                <li><span>{{recipe.meals[0].strIngredient14}} -- {{recipe.meals[0].strMeasure14}}</span></li>\r\n                <li><span>{{recipe.meals[0].strIngredient15}} -- {{recipe.meals[0].strMeasure15}}</span></li>\r\n                <li><span>{{recipe.meals[0].strIngredient16}} -- {{recipe.meals[0].strMeasure16}}</span></li>\r\n                <li><span>{{recipe.meals[0].strIngredient17}} -- {{recipe.meals[0].strMeasure17}}</span></li>\r\n                <li><span>{{recipe.meals[0].strIngredient18}} -- {{recipe.meals[0].strMeasure18}}</span></li>\r\n                <li><span>{{recipe.meals[0].strIngredient19}} -- {{recipe.meals[0].strMeasure19}}</span></li>\r\n                <li><span>{{recipe.meals[0].strIngredient20}} -- {{recipe.meals[0].strMeasure20}}</span></li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"col-6\">\r\n            <img class = \"img-fluid\" src={{recipe.meals[0].strMealThumb}} />\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <p>{{recipe.meals[0].strInstructions}}</p>\r\n    </div>\r\n    <div class=\"row\">\r\n        <button class=\"btn btn-primary\" (click)=\"refresh()\">New Recipe</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/account/account.component.css":
/*!***********************************************!*\
  !*** ./src/app/account/account.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    margin: 10px;\r\n}\r\n\r\n.card-title{\r\n    margin: 2px;\r\n}\r\n\r\nh4 {\r\n    margin-bottom: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxle1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbn1cclxuXHJcbmg0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");



var AccountComponent = /** @class */ (function () {
    function AccountComponent(user) {
        this.user = user;
    }
    AccountComponent.prototype.ngOnInit = function () {
        this.fname = sessionStorage.getItem("fname");
        this.lname = sessionStorage.getItem("lname");
        this.u_id = parseInt(sessionStorage.getItem("userId"), 10);
        this.username = sessionStorage.getItem("username");
        this.getPreferences(parseInt(sessionStorage.getItem("userId"), 10));
        this.getHistory(parseInt(sessionStorage.getItem("userId"), 10));
    };
    AccountComponent.prototype.getPreferences = function (id) {
        var _this = this;
        this.user.getPreferences(id).subscribe(function (ingredients) { return _this.ingredients = ingredients; });
    };
    AccountComponent.prototype.getHistory = function (id) {
        var _this = this;
        this.user.getHistory(id).subscribe(function (favorites) { return _this.favorites = favorites; });
    };
    AccountComponent.ctorParameters = function () { return [
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
    ]; };
    AccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/index.js!./src/app/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.css */ "./src/app/account/account.component.css")]
        })
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: routing, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
/* harmony import */ var _suggested_recipe_suggested_recipe_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./suggested-recipe/suggested-recipe.component */ "./src/app/suggested-recipe/suggested-recipe.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");

















var routes = [
    //{ path: '', component: DashboardComponent, canActivate: [AuthGuard] },
    {
        path: 'main',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
    },
    {
        path: 'calendar',
        component: _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_4__["CalendarComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
    },
    {
        path: 'editrecipe',
        component: _recipe_editor_recipe_editor_component__WEBPACK_IMPORTED_MODULE_5__["RecipeEditorComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
    },
    {
        path: 'information',
        component: _information_information_component__WEBPACK_IMPORTED_MODULE_6__["InformationComponent"]
    },
    {
        path: 'account',
        component: _account_account_component__WEBPACK_IMPORTED_MODULE_7__["AccountComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
    },
    {
        path: 'editaccount',
        component: _edit_account_edit_account_component__WEBPACK_IMPORTED_MODULE_8__["EditAccountComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
    },
    {
        path: 'recipe',
        component: _recipe_view_recipe_view_component__WEBPACK_IMPORTED_MODULE_9__["RecipeViewComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
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
        component: _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_12__["SearchbarComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
    },
    {
        path: 'search',
        component: _search_search_component__WEBPACK_IMPORTED_MODULE_13__["SearchComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
    },
    {
        path: 'randomRecipe',
        component: _suggested_recipe_suggested_recipe_component__WEBPACK_IMPORTED_MODULE_15__["SuggestedRecipeComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
    },
    {
        path: 'changepassword',
        component: _change_pw_change_pw_component__WEBPACK_IMPORTED_MODULE_14__["ChangePwComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]]
    },
    { path: '**', redirectTo: '/main' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes);
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'nourishment-ang';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularx-flatpickr */ "./node_modules/angularx-flatpickr/fesm5/angularx-flatpickr.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _information_information_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./information/information.component */ "./src/app/information/information.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/calendar/calendar.component.ts");
/* harmony import */ var _recipe_view_recipe_view_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./recipe-view/recipe-view.component */ "./src/app/recipe-view/recipe-view.component.ts");
/* harmony import */ var _ingredient_list_ingredient_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ingredient-list/ingredient-list.component */ "./src/app/ingredient-list/ingredient-list.component.ts");
/* harmony import */ var _directions_directions_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./directions/directions.component */ "./src/app/directions/directions.component.ts");
/* harmony import */ var _recipe_editor_recipe_editor_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./recipe-editor/recipe-editor.component */ "./src/app/recipe-editor/recipe-editor.component.ts");
/* harmony import */ var _edit_ingredient_edit_ingredient_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./edit-ingredient/edit-ingredient.component */ "./src/app/edit-ingredient/edit-ingredient.component.ts");
/* harmony import */ var _edit_direction_edit_direction_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./edit-direction/edit-direction.component */ "./src/app/edit-direction/edit-direction.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _edit_account_edit_account_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./edit-account/edit-account.component */ "./src/app/edit-account/edit-account.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./results/results.component */ "./src/app/results/results.component.ts");
/* harmony import */ var _result_entry_result_entry_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./result-entry/result-entry.component */ "./src/app/result-entry/result-entry.component.ts");
/* harmony import */ var _print_view_print_view_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./print-view/print-view.component */ "./src/app/print-view/print-view.component.ts");
/* harmony import */ var _suggested_recipe_suggested_recipe_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./suggested-recipe/suggested-recipe.component */ "./src/app/suggested-recipe/suggested-recipe.component.ts");
/* harmony import */ var _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./searchbar/searchbar.component */ "./src/app/searchbar/searchbar.component.ts");
/* harmony import */ var _change_pw_change_pw_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./change-pw/change-pw.component */ "./src/app/change-pw/change-pw.component.ts");



































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_13__["NavComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_16__["RegisterComponent"],
                _information_information_component__WEBPACK_IMPORTED_MODULE_17__["InformationComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_18__["DashboardComponent"],
                _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_19__["CalendarComponent"],
                _recipe_view_recipe_view_component__WEBPACK_IMPORTED_MODULE_20__["RecipeViewComponent"],
                _ingredient_list_ingredient_list_component__WEBPACK_IMPORTED_MODULE_21__["IngredientListComponent"],
                _directions_directions_component__WEBPACK_IMPORTED_MODULE_22__["DirectionsComponent"],
                _recipe_editor_recipe_editor_component__WEBPACK_IMPORTED_MODULE_23__["RecipeEditorComponent"],
                _edit_ingredient_edit_ingredient_component__WEBPACK_IMPORTED_MODULE_24__["EditIngredientComponent"],
                _edit_direction_edit_direction_component__WEBPACK_IMPORTED_MODULE_25__["EditDirectionComponent"],
                _account_account_component__WEBPACK_IMPORTED_MODULE_26__["AccountComponent"],
                _edit_account_edit_account_component__WEBPACK_IMPORTED_MODULE_27__["EditAccountComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_28__["SearchComponent"],
                _results_results_component__WEBPACK_IMPORTED_MODULE_29__["ResultsComponent"],
                _result_entry_result_entry_component__WEBPACK_IMPORTED_MODULE_30__["ResultEntryComponent"],
                _print_view_print_view_component__WEBPACK_IMPORTED_MODULE_31__["PrintViewComponent"],
                _suggested_recipe_suggested_recipe_component__WEBPACK_IMPORTED_MODULE_32__["SuggestedRecipeComponent"],
                _searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_33__["SearchbarComponent"],
                _change_pw_change_pw_component__WEBPACK_IMPORTED_MODULE_34__["ChangePwComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModalModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                angularx_flatpickr__WEBPACK_IMPORTED_MODULE_11__["FlatpickrModule"].forRoot(),
                angular_calendar__WEBPACK_IMPORTED_MODULE_10__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_10__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_12__["adapterFactory"]
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (sessionStorage.getItem("username")) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/calendar.service.ts":
/*!*************************************!*\
  !*** ./src/app/calendar.service.ts ***!
  \*************************************/
/*! exports provided: CalendarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarService", function() { return CalendarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CalendarService = /** @class */ (function () {
    function CalendarService(http) {
        this.http = http;
        this.calendarUrl = 'api/v1/calendar/user/' + sessionStorage.getItem("userId");
        this.calendarUrlTemp = 'http://localhost:9595/api/v1/calendar/user/' + sessionStorage.getItem("userId");
    }
    // this function will retrieve an array of meal/dates
    // returned items will include 
    /* 1) date
       2) meal(breakfast, lunch, dinner)
       3) recipe
    */
    CalendarService.prototype.getMeals = function () {
        return this.http.get(this.calendarUrl);
    };
    CalendarService.prototype.addMeal = function (mealDate, userId, mealNum, recipeId, name, directions) {
        var getCalendarUrl = "api/v1/calendar/meal";
        var getCalendarUrlTemp = "http://3.130.255.174:9595/api/v1/calendar/meal";
        var uId = sessionStorage.getItem("userId");
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        var postObject = JSON.stringify({
            "id": {
                "dateTime": mealDate,
                "userId": userId //uId
            },
            "mealNum": mealNum,
            "user": userId,
            "recipe": {
                "recipeId": recipeId,
                "name": name,
                "directions": directions
            }
        });
        console.log("post part 2");
        console.log("Calendar Url: " + getCalendarUrl + "\n postObject: " + postObject + "\n Http options: " + JSON.stringify(httpOptions));
        return this.http.post(getCalendarUrl, postObject, httpOptions);
    };
    CalendarService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CalendarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CalendarService);
    return CalendarService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var _calendar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../calendar.service */ "./src/app/calendar.service.ts");
/* harmony import */ var _meal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../meal */ "./src/app/meal.ts");
/* harmony import */ var _mealid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../mealid */ "./src/app/mealid.ts");









var colors = {
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
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(modal, calendarService) {
        var _this = this;
        this.modal = modal;
        this.calendarService = calendarService;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarView"];
        this.viewDate = new Date();
        this.actions = [
            {
                label: '<i class="fa fa-fw fa-pencil"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.handleEvent('Edited', event);
                }
            },
            {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                    _this.handleEvent('Deleted', event);
                }
            }
        ];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.events = [];
        this.activeDayIsOpen = true;
    }
    CalendarComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
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
    };
    CalendarComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        this.events = this.events.map(function (iEvent) {
            if (iEvent === event) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, event, { start: newStart, end: newEnd });
            }
            return iEvent;
        });
        this.handleEvent('Dropped or resized', event);
    };
    CalendarComponent.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, action: action };
        this.modal.open(this.modalContent, { size: 'lg' });
    };
    CalendarComponent.prototype.addEvent = function (addedMeal) {
        this.events = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.events, [
            addedMeal
            // {
            //   title: 'New event',
            //   start: startOfDay(new Date()),
            //   end: endOfDay(new Date()),
            //   color: colors.red,
            //   draggable: true,
            //   resizable: {
            //     beforeStart: true,
            //     afterEnd: true
            //   }
            // }
        ]);
    };
    CalendarComponent.prototype.deleteEvent = function (eventToDelete) {
        this.events = this.events.filter(function (event) { return event !== eventToDelete; });
    };
    CalendarComponent.prototype.setView = function (view) {
        this.view = view;
    };
    CalendarComponent.prototype.closeOpenMonthViewDay = function () {
        this.activeDayIsOpen = false;
    };
    CalendarComponent.prototype.getMeals = function () {
        var _this = this;
        this.calendarService.getMeals()
            .subscribe(function (meals) {
            if (!_this.meals) {
                _this.meals = new Array();
            }
            for (var i = 0; i < meals.length; i++) {
                _this.meals.push(new _meal__WEBPACK_IMPORTED_MODULE_7__["Meal"](new _mealid__WEBPACK_IMPORTED_MODULE_8__["MealId"](meals[i].id.dateTime, meals[i].id.userId), meals[i].mealNum));
                console.log("meal" + meals[i]);
            }
            console.log(meals);
            // this.populateCalendar(); ??
        });
    };
    CalendarComponent.prototype.ngOnInit = function () {
        // load calendar events for user from db here
        sessionStorage.setItem("userId", "1");
        this.getMeals();
    };
    CalendarComponent.prototype.populateCalendar = function () {
        console.log(this.meals);
        for (var i = 0; i < this.meals.length; i++) {
            var mealDate = new Date(this.meals[i].id.dateTime);
            var hours = this.meals[i].mealNum === 1 ? 8 : this.meals[i].mealNum === 2 ? 12 : 18;
            mealDate.setHours(hours);
            var mealDateEnd = new Date(this.meals[i].id.dateTime);
            mealDateEnd.setHours(hours + 1);
            this.addEvent({
                title: 'Meal ' + (i + 1),
                start: mealDate,
                end: mealDateEnd,
                color: colors.red,
                draggable: true,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                }
            });
        }
    };
    CalendarComponent.prototype.postNew = function () {
        this.calendarService.addMeal(this.mealDate, parseInt(sessionStorage.getItem("userId")), (this.mealType === "breakfast" ? 1 : this.mealType === "lunch" ? 2 : 3), 1, this.mealName, "directions").subscribe(function (res) { return console.log("subscribe log: " + res); });
        console.log("post part 1");
    };
    CalendarComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"] },
        { type: _calendar_service__WEBPACK_IMPORTED_MODULE_6__["CalendarService"] }
    ]; };
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
    return CalendarComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChangePwComponent = /** @class */ (function () {
    function ChangePwComponent() {
    }
    ChangePwComponent.prototype.ngOnInit = function () {
    };
    ChangePwComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-pw',
            template: __webpack_require__(/*! raw-loader!./change-pw.component.html */ "./node_modules/raw-loader/index.js!./src/app/change-pw/change-pw.component.html"),
            styles: [__webpack_require__(/*! ./change-pw.component.css */ "./src/app/change-pw/change-pw.component.css")]
        })
    ], ChangePwComponent);
    return ChangePwComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n\r\n#calendarCard{\r\n    background-color: brown;\r\n}\r\n\r\nimg {\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBYTtJQUFiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxvQkFBaUI7T0FBakIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbiNjYWxlbmRhckNhcmR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DirectionsComponent = /** @class */ (function () {
    function DirectionsComponent() {
    }
    DirectionsComponent.prototype.ngOnInit = function () {
    };
    DirectionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-directions',
            template: __webpack_require__(/*! raw-loader!./directions.component.html */ "./node_modules/raw-loader/index.js!./src/app/directions/directions.component.html"),
            styles: [__webpack_require__(/*! ./directions.component.css */ "./src/app/directions/directions.component.css")]
        })
    ], DirectionsComponent);
    return DirectionsComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditAccountComponent = /** @class */ (function () {
    //ingredient: string = "Pepper";
    //favorite: string = "Chicken Bruschetta";
    function EditAccountComponent() {
    }
    EditAccountComponent.prototype.ngOnInit = function () {
        this.fname = sessionStorage.getItem("fname");
        this.lname = sessionStorage.getItem("lname");
        this.u_id = parseInt(sessionStorage.getItem("userId"), 10);
        this.username = sessionStorage.getItem("username");
    };
    EditAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-account',
            template: __webpack_require__(/*! raw-loader!./edit-account.component.html */ "./node_modules/raw-loader/index.js!./src/app/edit-account/edit-account.component.html"),
            styles: [__webpack_require__(/*! ./edit-account.component.css */ "./src/app/edit-account/edit-account.component.css")]
        })
    ], EditAccountComponent);
    return EditAccountComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditDirectionComponent = /** @class */ (function () {
    function EditDirectionComponent() {
    }
    EditDirectionComponent.prototype.ngOnInit = function () {
    };
    EditDirectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-direction',
            template: __webpack_require__(/*! raw-loader!./edit-direction.component.html */ "./node_modules/raw-loader/index.js!./src/app/edit-direction/edit-direction.component.html"),
            styles: [__webpack_require__(/*! ./edit-direction.component.css */ "./src/app/edit-direction/edit-direction.component.css")]
        })
    ], EditDirectionComponent);
    return EditDirectionComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditIngredientComponent = /** @class */ (function () {
    function EditIngredientComponent() {
    }
    EditIngredientComponent.prototype.ngOnInit = function () {
    };
    EditIngredientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-ingredient',
            template: __webpack_require__(/*! raw-loader!./edit-ingredient.component.html */ "./node_modules/raw-loader/index.js!./src/app/edit-ingredient/edit-ingredient.component.html"),
            styles: [__webpack_require__(/*! ./edit-ingredient.component.css */ "./src/app/edit-ingredient/edit-ingredient.component.css")]
        })
    ], EditIngredientComponent);
    return EditIngredientComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InformationComponent = /** @class */ (function () {
    function InformationComponent() {
    }
    InformationComponent.prototype.ngOnInit = function () {
    };
    InformationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-information',
            template: __webpack_require__(/*! raw-loader!./information.component.html */ "./node_modules/raw-loader/index.js!./src/app/information/information.component.html"),
            styles: [__webpack_require__(/*! ./information.component.css */ "./src/app/information/information.component.css")]
        })
    ], InformationComponent);
    return InformationComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/recipe.service */ "./src/app/services/recipe.service.ts");



var IngredientListComponent = /** @class */ (function () {
    function IngredientListComponent(recipeService) {
        this.recipeService = recipeService;
    }
    IngredientListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Recipe id is " + this.recipeId);
        this.recipeService.fetchIngredients(this.recipeId).subscribe(function (ingredients) { return _this.ingredients = ingredients; }, function (error) { return console.log("Error: " + error); }, function () { return _this.displayIngredients(); });
    };
    IngredientListComponent.prototype.displayIngredients = function () {
        var ingIter = 0;
        while (ingIter < this.ingredients.length) {
            var colIngArr = new Array();
            var colIter = 0;
            if (this.ingredients.length <= 16) {
                while (colIter < 4 && ingIter < this.ingredients.length) {
                    colIngArr.push(this.ingredients[ingIter]);
                    colIter++;
                    ingIter++;
                }
            }
            else {
                console.log("More than 16 ingredients");
                while (colIter < this.ingredients.length / 4 && ingIter < this.ingredients.length) {
                    colIngArr.push(this.ingredients[ingIter]);
                    colIter++;
                    ingIter++;
                }
            }
            document.getElementById('ingRow').appendChild(this.createCol(colIngArr));
        }
    };
    IngredientListComponent.prototype.createCol = function (colIng) {
        var rowDiv = document.createElement('div');
        rowDiv.setAttribute("class", "col-md-3 h-100");
        var entryList = document.createElement("ul");
        colIng.forEach(function (element) {
            var elementEntry = document.createElement("li");
            elementEntry.innerHTML = element.usedBy[0].quantity + " " + element.usedBy[0].units + " " + element.ingredient;
            entryList.appendChild(elementEntry);
        });
        rowDiv.appendChild(entryList);
        return rowDiv;
    };
    IngredientListComponent.ctorParameters = function () { return [
        { type: _services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], IngredientListComponent.prototype, "recipeId", void 0);
    IngredientListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ingredient-list',
            template: __webpack_require__(/*! raw-loader!./ingredient-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/ingredient-list/ingredient-list.component.html"),
            styles: [__webpack_require__(/*! ./ingredient-list.component.css */ "./src/app/ingredient-list/ingredient-list.component.css")]
        })
    ], IngredientListComponent);
    return IngredientListComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    background: #007bff;\r\n    background: -webkit-gradient(linear, left top, right top, from(#0062E6), to(#33AEFF));\r\n    background: linear-gradient(to right, #0062E6, #33AEFF);\r\n}\r\n\r\n.card-signin {\r\n  border: 0;\r\n  border-radius: 1rem;\r\n  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.card-signin .card-title {\r\n  margin-bottom: 2rem;\r\n  font-weight: 300;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.card-signin .card-body {\r\n  padding: 2rem;\r\n}\r\n\r\n.form-signin {\r\n  width: 100%;\r\n}\r\n\r\n.form-signin .btn {\r\n  font-size: 80%;\r\n  border-radius: 5rem;\r\n  letter-spacing: .1rem;\r\n  font-weight: bold;\r\n  padding: 1rem;\r\n  -webkit-transition: all 0.2s;\r\n  transition: all 0.2s;\r\n}\r\n\r\n.form-label-group {\r\n  position: relative;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.form-label-group input {\r\n  height: auto;\r\n  border-radius: 2rem;\r\n}\r\n\r\n.form-label-group>input,\r\n.form-label-group>label {\r\n  padding: var(--input-padding-y) var(--input-padding-x);\r\n}\r\n\r\n.form-label-group>label {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  display: block;\r\n  width: 100%;\r\n  margin-bottom: 0;\r\n  /* Override default `<label>` margin */\r\n  line-height: 1.5;\r\n  color: #495057;\r\n  border: 1px solid transparent;\r\n  border-radius: .25rem;\r\n  -webkit-transition: all .1s ease-in-out;\r\n  transition: all .1s ease-in-out;\r\n}\r\n  \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixxRkFBdUQ7SUFBdkQsdURBQXVEO0FBQzNEOztBQUVBO0VBQ0UsU0FBUztFQUNULG1CQUFtQjtFQUNuQiw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsNEJBQW9CO0VBQXBCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLHNEQUFzRDtBQUN4RDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHNDQUFzQztFQUN0QyxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsdUNBQStCO0VBQS9CLCtCQUErQjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDdiZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDYyRTYsICMzM0FFRkYpO1xyXG59XHJcblxyXG4uY2FyZC1zaWduaW4ge1xyXG4gIGJvcmRlcjogMDtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi5jYXJkLXNpZ25pbiAuY2FyZC10aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4uY2FyZC1zaWduaW4gLmNhcmQtYm9keSB7XHJcbiAgcGFkZGluZzogMnJlbTtcclxufVxyXG5cclxuLmZvcm0tc2lnbmluIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvcm0tc2lnbmluIC5idG4ge1xyXG4gIGZvbnQtc2l6ZTogODAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbn1cclxuXHJcbi5mb3JtLWxhYmVsLWdyb3VwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXAgaW5wdXQge1xyXG4gIGhlaWdodDogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAycmVtO1xyXG59XHJcblxyXG4uZm9ybS1sYWJlbC1ncm91cD5pbnB1dCxcclxuLmZvcm0tbGFiZWwtZ3JvdXA+bGFiZWwge1xyXG4gIHBhZGRpbmc6IHZhcigtLWlucHV0LXBhZGRpbmcteSkgdmFyKC0taW5wdXQtcGFkZGluZy14KTtcclxufVxyXG5cclxuLmZvcm0tbGFiZWwtZ3JvdXA+bGFiZWwge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIC8qIE92ZXJyaWRlIGRlZmF1bHQgYDxsYWJlbD5gIG1hcmdpbiAqL1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuICBcclxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(
    // private formBuilder: FormBuilder,
    // private route: ActivatedRoute,
    // private router: Router,
    // private authenticationService: AuthenticationService
    http, router) {
        this.http = http;
        this.router = router;
        // loginForm: FormGroup;
        //url: string = 'http://localhost:9595';
        this.url = 'http://3.130.255.174:9595';
        this.username = '';
        this.password = '';
    }
    ;
    //get f() { return this.loginForm.controls; }
    LoginComponent.prototype.ngOnInit = function () {
        // this.loginForm = new FormGroup({
        //   username: new FormControl("username"),
        //   password: new FormControl("password")
        // });
    };
    LoginComponent.prototype.onSubmit = function () {
        //this.http.post<User>("hi","hey");
        var _this = this;
        // this.username = (<HTMLInputElement>document.getElementById("username")).value;
        // this.password = (<HTMLInputElement>document.getElementById("password")).value;
        this.http.post("api/v1/user/login?user=" + this.username, {}).subscribe(function (user) { return _this.user = user; });
        console.log('before the first check on the user object');
        console.log(this.user);
        if (this.user) {
            console.log("passed the truthy User check");
            if (this.password === this.user.password) {
                var id = this.user.userId.toString();
                sessionStorage.setItem("username", this.user.username);
                sessionStorage.setItem("userId", id);
                sessionStorage.setItem("fname", this.user.fname);
                sessionStorage.setItem("lname", this.user.lname);
                this.router.navigate(["/main"]);
            }
        }
    };
    LoginComponent.prototype.storeUser = function () {
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/meal.ts":
/*!*************************!*\
  !*** ./src/app/meal.ts ***!
  \*************************/
/*! exports provided: Meal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meal", function() { return Meal; });
/* harmony import */ var _mealid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mealid */ "./src/app/mealid.ts");

// The purpose of this class is to be used with calendar service component, at least temporarily
var Meal = /** @class */ (function () {
    function Meal(id, mealNum) {
        this.id = id;
        this.mealNum = mealNum;
    }
    Meal.ctorParameters = function () { return [
        { type: _mealid__WEBPACK_IMPORTED_MODULE_0__["MealId"] },
        { type: Number }
    ]; };
    return Meal;
}());



/***/ }),

/***/ "./src/app/mealid.ts":
/*!***************************!*\
  !*** ./src/app/mealid.ts ***!
  \***************************/
/*! exports provided: MealId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealId", function() { return MealId; });
var MealId = /** @class */ (function () {
    function MealId(dateTime, userId) {
        this.dateTime = dateTime;
        this.userId = userId;
    }
    MealId.ctorParameters = function () { return [
        { type: Date },
        { type: Number }
    ]; };
    return MealId;
}());



/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    // userPref: UserPref[];
    // userHist: UserHistory[];
    // user_data: UserData[];
    function User() {
    }
    return User;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.logout = function () {
        sessionStorage.clear();
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/index.js!./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        })
    ], NavComponent);
    return NavComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrintViewComponent = /** @class */ (function () {
    function PrintViewComponent() {
    }
    PrintViewComponent.prototype.ngOnInit = function () {
    };
    PrintViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-print-view',
            template: __webpack_require__(/*! raw-loader!./print-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/print-view/print-view.component.html"),
            styles: [__webpack_require__(/*! ./print-view.component.css */ "./src/app/print-view/print-view.component.css")]
        })
    ], PrintViewComponent);
    return PrintViewComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecipeEditorComponent = /** @class */ (function () {
    function RecipeEditorComponent() {
    }
    RecipeEditorComponent.prototype.ngOnInit = function () {
    };
    RecipeEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-editor',
            template: __webpack_require__(/*! raw-loader!./recipe-editor.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipe-editor/recipe-editor.component.html"),
            styles: [__webpack_require__(/*! ./recipe-editor.component.css */ "./src/app/recipe-editor/recipe-editor.component.css")]
        })
    ], RecipeEditorComponent);
    return RecipeEditorComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/recipe.service */ "./src/app/services/recipe.service.ts");



var RecipeViewComponent = /** @class */ (function () {
    function RecipeViewComponent(recipeService) {
        this.recipeService = recipeService;
        this.recipeId = 1;
    }
    RecipeViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        try {
            var tmpInt = parseInt(localStorage.getItem('selectedRecipe'));
            this.recipeId = tmpInt;
            console.log("read recipe as " + tmpInt);
        }
        catch (error) {
            console.log('Failed to get current recipe');
        }
        this.recipeService.fetchRecipe(this.recipeId).subscribe(function (recipe) { return _this.recipe = recipe; }, function (error) { return console.log("Error: " + error); }, function () { return _this.displayRecipe(); });
    };
    RecipeViewComponent.prototype.displayRecipe = function () {
        document.getElementById('directionElement').innerHTML = this.recipe.directions;
        document.getElementById('recipeTitleElement').innerHTML = this.recipe.name;
    };
    RecipeViewComponent.ctorParameters = function () { return [
        { type: _services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"] }
    ]; };
    RecipeViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-view',
            template: __webpack_require__(/*! raw-loader!./recipe-view.component.html */ "./node_modules/raw-loader/index.js!./src/app/recipe-view/recipe-view.component.html"),
            styles: [__webpack_require__(/*! ./recipe-view.component.css */ "./src/app/recipe-view/recipe-view.component.css")]
        })
    ], RecipeViewComponent);
    return RecipeViewComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "td{\r\n    text-align: center;\r\n    padding: 10px;\r\n    border: 2px solid black;\r\n}\r\n.btn {\r\n    margin-top: 10px;\r\n}\r\nspan {\r\n    font-family: 'Cinzel Decorative', cursive;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHlDQUF5QztBQUM3QyIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ZHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxufVxyXG4uYnRuIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuc3BhbiB7XHJcbiAgICBmb250LWZhbWlseTogJ0NpbnplbCBEZWNvcmF0aXZlJywgY3Vyc2l2ZTtcclxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(http, router) {
        this.http = http;
        this.router = router;
        this.username = '';
        this.fname = '';
        this.lname = '';
        this.password = '';
        this.passwordConfirm = '';
        //url: string = 'http://localhost:9595';
        this.url = 'http://3.130.255.174:9595';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("hit method");
        if (this.password === this.passwordConfirm) {
            console.log("passed if");
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
            this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_3__["User"]();
            //this.user.userId=11111111;
            this.user.username = this.username;
            this.user.fname = this.fname;
            this.user.lname = this.lname;
            this.user.password = this.password;
            this.http.post("api/v1/user/user", JSON.stringify(this.user), httpOptions).subscribe(function (user) { return _this.user = user; });
            this.router.navigate(["/login"]);
        }
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        })
    ], RegisterComponent);
    return RegisterComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResultEntryComponent = /** @class */ (function () {
    function ResultEntryComponent() {
    }
    ResultEntryComponent.prototype.ngOnInit = function () {
    };
    ResultEntryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-result-entry',
            template: __webpack_require__(/*! raw-loader!./result-entry.component.html */ "./node_modules/raw-loader/index.js!./src/app/result-entry/result-entry.component.html"),
            styles: [__webpack_require__(/*! ./result-entry.component.css */ "./src/app/result-entry/result-entry.component.css")]
        })
    ], ResultEntryComponent);
    return ResultEntryComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResultsComponent = /** @class */ (function () {
    function ResultsComponent() {
    }
    ResultsComponent.prototype.ngOnInit = function () {
    };
    ResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-results',
            template: __webpack_require__(/*! raw-loader!./results.component.html */ "./node_modules/raw-loader/index.js!./src/app/results/results.component.html"),
            styles: [__webpack_require__(/*! ./results.component.css */ "./src/app/results/results.component.css")]
        })
    ], ResultsComponent);
    return ResultsComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/recipe.service */ "./src/app/services/recipe.service.ts");



var SearchComponent = /** @class */ (function () {
    function SearchComponent(recipeService) {
        this.recipeService = recipeService;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Hi");
        this.recipeService.fetchAllRecipes().subscribe(function (recipes) { return _this.resultRecipes = recipes; }, function (error) { return console.log("Error: " + error); }, function () { return _this.displayRecipeResults(); });
        console.log("hey");
    };
    SearchComponent.prototype.displayRecipeResults = function () {
        var _this = this;
        this.resultRecipes.forEach(function (recipe) {
            console.log("hello");
            //Create elements
            var recipeRow = document.createElement('tr');
            var rowAnchor = document.createElement('a');
            var recipeName = document.createElement('td');
            //Add routerLink to anchor
            rowAnchor.setAttribute('routerLink', 'recipe');
            //Populate and format of td
            //rowAnchor.innerHTML = recipe.name;
            recipeName.innerHTML = recipe.name;
            //Add td to row with routerLink anchor
            //recipeName.appendChild(rowAnchor);
            recipeRow.appendChild(recipeName);
            //rowAnchor.appendChild(recipeName);
            //recipeRow.appendChild(rowAnchor);
            //Add onclick to set recipe
            recipeRow.onclick = function () { _this.setRecipeInStorage(recipe); };
            //Add recipeRow to table
            document.getElementById('resultSet').appendChild(recipeRow);
        });
    };
    SearchComponent.prototype.setRecipeInStorage = function (recipe) {
        localStorage.setItem('selectedRecipe', recipe.recipeId.toString());
    };
    SearchComponent.ctorParameters = function () { return [
        { type: _services_recipe_service__WEBPACK_IMPORTED_MODULE_2__["RecipeService"] }
    ]; };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        })
    ], SearchComponent);
    return SearchComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchbarComponent = /** @class */ (function () {
    function SearchbarComponent() {
        this.ids = ["Search", "Filter"];
    }
    SearchbarComponent.prototype.ngOnInit = function () {
    };
    SearchbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-searchbar',
            template: __webpack_require__(/*! raw-loader!./searchbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/searchbar/searchbar.component.html"),
            styles: [__webpack_require__(/*! ./searchbar.component.css */ "./src/app/searchbar/searchbar.component.css")]
        })
    ], SearchbarComponent);
    return SearchbarComponent;
}());



/***/ }),

/***/ "./src/app/services/api-recipe.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/api-recipe.service.ts ***!
  \************************************************/
/*! exports provided: ApiRecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiRecipeService", function() { return ApiRecipeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ApiRecipeService = /** @class */ (function () {
    function ApiRecipeService(http) {
        this.http = http;
    }
    ApiRecipeService.prototype.fetchMeal = function () {
        return this.http.get('https://www.themealdb.com/api/json/v1/1/random.php').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ApiRecipeService.prototype.handleError = function (error) {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.statusText);
    };
    ApiRecipeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    ApiRecipeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ApiRecipeService);
    return ApiRecipeService;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (username, password) {
    };
    AuthenticationService.prototype.logout = function () {
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/recipe.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/recipe.service.ts ***!
  \********************************************/
/*! exports provided: RecipeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeService", function() { return RecipeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var RecipeService = /** @class */ (function () {
    function RecipeService(http) {
        this.http = http;
        this.uriBase = "api/v1/";
    }
    //TODO set get path based on id passed
    RecipeService.prototype.fetchRecipe = function (id) {
        return this.http.get(this.uriBase + 'recipe/view/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    RecipeService.prototype.fetchAllRecipes = function () {
        return this.http.get(this.uriBase + 'recipe/view/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    //TODO set path based on recipeId passed. Server should return as array of ingredients
    RecipeService.prototype.fetchIngredients = function (recipeId) {
        return this.http.get(this.uriBase + 'ingredients/meal/' + recipeId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    RecipeService.prototype.handleError = function (error) {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.statusText);
    };
    RecipeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    RecipeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], RecipeService);
    return RecipeService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        //url: string = 'http://localhost:4200';
        //url: string = 'http://localhost:9595';
        this.url = 'http://3.130.255.174:9595';
    }
    UserService.prototype.fetchUser = function (id) {
        return this.http.get("api/v1/user/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    // public checkLogin(username: string, password: string): Observable<User>{
    //     return this.http.post<User>(`${this.url}/api/v1/user/login`,JSON.stringify(new User(username,password))).pipe(catchError(this.handleError));
    // }
    UserService.prototype.getPreferences = function (id) {
        return this.http.get("api/v1/preferences/preferences/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    UserService.prototype.getHistory = function (id) {
        return this.http.get("api/v1/history/user/" + id + "/favorited").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    UserService.prototype.handleError = function (error) {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error.statusText);
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/suggested-recipe/suggested-recipe.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/suggested-recipe/suggested-recipe.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\r\n    margin: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VnZ2VzdGVkLXJlY2lwZS9zdWdnZXN0ZWQtcmVjaXBlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc3VnZ2VzdGVkLXJlY2lwZS9zdWdnZXN0ZWQtcmVjaXBlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93IHtcclxuICAgIG1hcmdpbjogMTVweDtcclxufSJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_api_recipe_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api-recipe.service */ "./src/app/services/api-recipe.service.ts");



var SuggestedRecipeComponent = /** @class */ (function () {
    function SuggestedRecipeComponent(apiRecipe) {
        this.apiRecipe = apiRecipe;
    }
    SuggestedRecipeComponent.prototype.ngOnInit = function () {
        this.getApiRecipeInfo();
    };
    SuggestedRecipeComponent.prototype.getApiRecipeInfo = function () {
        var _this = this;
        this.apiRecipe.fetchMeal().subscribe(function (recipe) { return _this.recipe = recipe; }, function (error) { return console.log("Error: " + error); });
        console.log(this.recipe);
    };
    SuggestedRecipeComponent.prototype.refresh = function () {
        this.getApiRecipeInfo();
    };
    SuggestedRecipeComponent.ctorParameters = function () { return [
        { type: _services_api_recipe_service__WEBPACK_IMPORTED_MODULE_2__["ApiRecipeService"] }
    ]; };
    SuggestedRecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-suggested-recipe',
            template: __webpack_require__(/*! raw-loader!./suggested-recipe.component.html */ "./node_modules/raw-loader/index.js!./src/app/suggested-recipe/suggested-recipe.component.html"),
            styles: [__webpack_require__(/*! ./suggested-recipe.component.css */ "./src/app/suggested-recipe/suggested-recipe.component.css")]
        })
    ], SuggestedRecipeComponent);
    return SuggestedRecipeComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kyles\Documents\meal-plan-app\nourishment-ang\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map