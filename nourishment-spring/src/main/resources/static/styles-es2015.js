(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\r\n/*@/* angular-cli file: src/styles.css */\r\n.cal-month-view .cal-header {\n  text-align: center;\n  font-weight: bolder; }\r\n.cal-month-view .cal-header .cal-cell {\n  padding: 5px 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  white-space: nowrap; }\r\n.cal-month-view .cal-days {\n  border: 1px solid;\n  border-bottom: 0; }\r\n.cal-month-view .cal-cell-top {\n  min-height: 78px;\n  -webkit-box-flex: 1;\n          flex: 1; }\r\n.cal-month-view .cal-cell-row {\n  display: -webkit-box;\n  -js-display: flex;\n  display: flex; }\r\n.cal-month-view .cal-cell {\n  float: left;\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  -js-display: flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: stretch;\n          align-items: stretch; }\r\n.cal-month-view .cal-day-cell {\n  min-height: 100px; }\r\n@media all and (-ms-high-contrast: none) {\n    .cal-month-view .cal-day-cell {\n      display: block; } }\r\n.cal-month-view .cal-day-cell:not(:last-child) {\n  border-right: 1px solid; }\r\n.cal-month-view .cal-days .cal-cell-row {\n  border-bottom: 1px solid; }\r\n.cal-month-view .cal-day-badge {\n  margin-top: 18px;\n  margin-left: 10px;\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  border-radius: 10px; }\r\n.cal-month-view .cal-day-number {\n  font-size: 1.2em;\n  font-weight: 400;\n  opacity: 0.5;\n  margin-top: 15px;\n  margin-right: 15px;\n  float: right;\n  margin-bottom: 10px; }\r\n.cal-month-view .cal-events {\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  margin: 3px;\n  line-height: 10px;\n  display: -webkit-box;\n  -js-display: flex;\n  display: flex;\n  flex-wrap: wrap; }\r\n.cal-month-view .cal-event {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 2px; }\r\n.cal-month-view .cal-day-cell.cal-in-month.cal-has-events {\n  cursor: pointer; }\r\n.cal-month-view .cal-day-cell.cal-out-month .cal-day-number {\n  opacity: 0.1;\n  cursor: default; }\r\n.cal-month-view .cal-day-cell.cal-today .cal-day-number {\n  font-size: 1.9em; }\r\n.cal-month-view .cal-open-day-events {\n  padding: 15px; }\r\n.cal-month-view .cal-open-day-events .cal-event {\n  position: relative;\n  top: 2px; }\r\n.cal-month-view .cal-out-month .cal-day-badge,\n.cal-month-view .cal-out-month .cal-event {\n  opacity: 0.3; }\r\n.cal-month-view .cal-draggable {\n  cursor: move; }\r\n.cal-month-view .cal-drag-active * {\n  pointer-events: none; }\r\n.cal-month-view .cal-event-title {\n  cursor: pointer; }\r\n.cal-month-view .cal-event-title:hover {\n    text-decoration: underline; }\r\n.cal-month-view {\n  background-color: #fff; }\r\n.cal-month-view .cal-cell-row:hover {\n    background-color: #fafafa; }\r\n.cal-month-view .cal-cell-row .cal-cell:hover,\n  .cal-month-view .cal-cell.cal-has-events.cal-open {\n    background-color: #ededed; }\r\n.cal-month-view .cal-days {\n    border-color: #e1e1e1; }\r\n.cal-month-view .cal-day-cell:not(:last-child) {\n    border-right-color: #e1e1e1; }\r\n.cal-month-view .cal-days .cal-cell-row {\n    border-bottom-color: #e1e1e1; }\r\n.cal-month-view .cal-day-badge {\n    background-color: #b94a48;\n    color: #fff; }\r\n.cal-month-view .cal-event {\n    background-color: #1e90ff;\n    border-color: #d1e8ff;\n    color: #fff; }\r\n.cal-month-view .cal-day-cell.cal-weekend .cal-day-number {\n    color: #8b0000; }\r\n.cal-month-view .cal-day-cell.cal-today {\n    background-color: #e8fde7; }\r\n.cal-month-view .cal-day-cell.cal-drag-over {\n    background-color: #e0e0e0 !important; }\r\n.cal-month-view .cal-open-day-events {\n    color: #fff;\n    background-color: #555;\n    box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.5); }\r\n.cal-week-view {\n  /* stylelint-disable-next-line selector-type-no-unknown */ }\r\n.cal-week-view * {\n    box-sizing: border-box; }\r\n.cal-week-view .cal-day-headers {\n    display: -webkit-box;\n    -js-display: flex;\n    display: flex;\n    padding-left: 70px;\n    border: 1px solid; }\r\n.cal-week-view .cal-day-headers .cal-header {\n    -webkit-box-flex: 1;\n            flex: 1;\n    text-align: center;\n    padding: 5px; }\r\n.cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n      border-right: 1px solid; }\r\n.cal-week-view .cal-day-headers .cal-header:first-child {\n      border-left: 1px solid; }\r\n.cal-week-view .cal-day-headers span {\n    font-weight: 400;\n    opacity: 0.5; }\r\n.cal-week-view .cal-day-column {\n    -webkit-box-flex: 1;\n            flex-grow: 1;\n    border-left: solid 1px; }\r\n.cal-week-view .cal-event {\n    font-size: 12px;\n    border: 1px solid; }\r\n.cal-week-view .cal-time-label-column {\n    width: 70px;\n    height: 100%; }\r\n.cal-week-view .cal-all-day-events {\n    border: solid 1px;\n    border-top: 0;\n    border-bottom-width: 3px;\n    padding-top: 3px;\n    position: relative; }\r\n.cal-week-view .cal-all-day-events .cal-day-columns {\n      height: 100%;\n      width: 100%;\n      display: -webkit-box;\n      -js-display: flex;\n      display: flex;\n      position: absolute;\n      top: 0;\n      z-index: 0; }\r\n.cal-week-view .cal-all-day-events .cal-events-row {\n      position: relative;\n      height: 31px;\n      margin-left: 70px; }\r\n.cal-week-view .cal-all-day-events .cal-event-container {\n      display: inline-block;\n      position: absolute; }\r\n.cal-week-view .cal-all-day-events .cal-event-container.resize-active {\n        z-index: 1;\n        pointer-events: none; }\r\n.cal-week-view .cal-all-day-events .cal-event {\n      padding: 0 5px;\n      margin-left: 2px;\n      margin-right: 2px;\n      height: 28px;\n      line-height: 28px; }\r\n.cal-week-view .cal-all-day-events .cal-starts-within-week .cal-event {\n      border-top-left-radius: 5px;\n      border-bottom-left-radius: 5px; }\r\n.cal-week-view .cal-all-day-events .cal-ends-within-week .cal-event {\n      border-top-right-radius: 5px;\n      border-bottom-right-radius: 5px; }\r\n.cal-week-view .cal-all-day-events .cal-time-label-column {\n      display: -webkit-box;\n      -js-display: flex;\n      display: flex;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n              justify-content: center;\n      font-size: 14px; }\r\n.cal-week-view .cal-all-day-events .cal-resize-handle {\n      width: 6px;\n      height: 100%;\n      cursor: col-resize;\n      position: absolute;\n      top: 0; }\r\n.cal-week-view .cal-all-day-events .cal-resize-handle.cal-resize-handle-after-end {\n        right: 0; }\r\n.cal-week-view .cal-event,\n  .cal-week-view .cal-header {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\r\n.cal-week-view .cal-drag-active {\n    pointer-events: none;\n    z-index: 1; }\r\n.cal-week-view .cal-drag-active * {\n      pointer-events: none; }\r\n.cal-week-view .cal-time-events {\n    position: relative;\n    border: solid 1px;\n    border-top: 0;\n    display: -webkit-box;\n    -js-display: flex;\n    display: flex; }\r\n.cal-week-view .cal-time-events .cal-day-columns {\n      display: -webkit-box;\n      -js-display: flex;\n      display: flex;\n      -webkit-box-flex: 1;\n              flex-grow: 1; }\r\n.cal-week-view .cal-time-events .cal-day-column {\n      position: relative; }\r\n.cal-week-view .cal-time-events .cal-event-container {\n      position: absolute;\n      z-index: 1; }\r\n.cal-week-view .cal-time-events .cal-event {\n      width: calc(100% - 2px);\n      height: calc(100% - 2px);\n      margin: 1px;\n      padding: 0 5px;\n      line-height: 25px; }\r\n.cal-week-view .cal-time-events .cal-resize-handle {\n      width: 100%;\n      height: 4px;\n      cursor: row-resize;\n      position: absolute; }\r\n.cal-week-view .cal-time-events .cal-resize-handle.cal-resize-handle-after-end {\n        bottom: 0; }\r\n.cal-week-view .cal-hour-segment {\n    position: relative; }\r\n.cal-week-view .cal-hour-segment::after {\n      content: '\\00a0'; }\r\n.cal-week-view .cal-event-container:not(.cal-draggable) {\n    cursor: pointer; }\r\n.cal-week-view .cal-draggable {\n    cursor: move; }\r\n.cal-week-view mwl-calendar-week-view-hour-segment,\n  .cal-week-view .cal-hour-segment {\n    display: block; }\r\n.cal-week-view .cal-hour:not(:last-child) .cal-hour-segment,\n  .cal-week-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n    border-bottom: thin dashed; }\r\n.cal-week-view .cal-time {\n    font-weight: bold;\n    padding-top: 5px;\n    width: 70px;\n    text-align: center; }\r\n.cal-week-view .cal-hour-segment.cal-after-hour-start .cal-time {\n    display: none; }\r\n.cal-week-view .cal-starts-within-day .cal-event {\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px; }\r\n.cal-week-view .cal-ends-within-day .cal-event {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px; }\r\n.cal-week-view {\n  background-color: #fff; }\r\n.cal-week-view .cal-day-headers {\n    border-color: #e1e1e1; }\r\n.cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n    border-right-color: #e1e1e1; }\r\n.cal-week-view .cal-day-headers .cal-header:first-child {\n    border-left-color: #e1e1e1; }\r\n.cal-week-view .cal-day-headers .cal-header:hover,\n  .cal-week-view .cal-day-headers .cal-drag-over {\n    background-color: #ededed; }\r\n.cal-week-view .cal-day-column {\n    border-left-color: #e1e1e1; }\r\n.cal-week-view .cal-event {\n    background-color: #d1e8ff;\n    border-color: #1e90ff;\n    color: #1e90ff; }\r\n.cal-week-view .cal-all-day-events {\n    border-color: #e1e1e1; }\r\n.cal-week-view .cal-header.cal-today {\n    background-color: #e8fde7; }\r\n.cal-week-view .cal-header.cal-weekend span {\n    color: #8b0000; }\r\n.cal-week-view .cal-time-events {\n    border-color: #e1e1e1; }\r\n.cal-week-view .cal-time-events .cal-day-columns:not(.cal-resize-active) .cal-hour-segment:hover {\n      background-color: #ededed; }\r\n.cal-week-view .cal-hour-odd {\n    background-color: #fafafa; }\r\n.cal-week-view .cal-drag-over .cal-hour-segment {\n    background-color: #ededed; }\r\n.cal-week-view .cal-hour:not(:last-child) .cal-hour-segment,\n  .cal-week-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n    border-bottom-color: #e1e1e1; }\r\n.cal-day-view {\n  /* stylelint-disable-next-line selector-type-no-unknown */ }\r\n.cal-day-view * {\n    box-sizing: border-box; }\r\n.cal-day-view .cal-hour-rows {\n    width: 100%;\n    border: solid 1px;\n    overflow-x: auto;\n    position: relative; }\r\n.cal-day-view mwl-calendar-day-view-hour-segment,\n  .cal-day-view .cal-hour-segment {\n    display: block; }\r\n.cal-day-view .cal-hour-segment::after {\n    content: '\\00a0'; }\r\n.cal-day-view .cal-hour:not(:last-child) .cal-hour-segment,\n  .cal-day-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n    border-bottom: thin dashed; }\r\n.cal-day-view .cal-time {\n    font-weight: bold;\n    width: 70px;\n    height: 100%;\n    display: -webkit-box;\n    -js-display: flex;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center; }\r\n.cal-day-view .cal-hour-segment.cal-after-hour-start .cal-time {\n    display: none; }\r\n.cal-day-view .cal-drag-active .cal-hour-segment {\n    pointer-events: none; }\r\n.cal-day-view .cal-event-container {\n    position: absolute;\n    cursor: pointer; }\r\n.cal-day-view .cal-event-container.resize-active {\n      z-index: 1;\n      pointer-events: none; }\r\n.cal-day-view .cal-event {\n    padding: 5px;\n    font-size: 12px;\n    border: 1px solid;\n    box-sizing: border-box;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    height: 100%; }\r\n.cal-day-view .cal-all-day-events > * {\n    cursor: pointer; }\r\n.cal-day-view .cal-draggable {\n    cursor: move; }\r\n.cal-day-view .cal-starts-within-day .cal-event {\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px; }\r\n.cal-day-view .cal-ends-within-day .cal-event {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px; }\r\n.cal-day-view .cal-drag-active {\n    z-index: 1; }\r\n.cal-day-view .cal-drag-active * {\n      pointer-events: none; }\r\n.cal-day-view .cal-resize-handle {\n    width: 100%;\n    height: 4px;\n    cursor: row-resize;\n    position: absolute; }\r\n.cal-day-view .cal-resize-handle.cal-resize-handle-after-end {\n      bottom: 0; }\r\n.cal-day-view {\n  background-color: #fff; }\r\n.cal-day-view .cal-hour-rows {\n    border-color: #e1e1e1; }\r\n.cal-day-view .cal-hour:nth-child(odd) {\n    background-color: #fafafa; }\r\n.cal-day-view .cal-hour:not(:last-child) .cal-hour-segment,\n  .cal-day-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n    border-bottom-color: #e1e1e1; }\r\n.cal-day-view .cal-hour-segment:hover,\n  .cal-day-view .cal-drag-over .cal-hour-segment {\n    background-color: #ededed; }\r\n.cal-day-view .cal-event {\n    background-color: #d1e8ff;\n    border-color: #1e90ff;\n    color: #1e90ff; }\r\n.cal-tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  font-size: 11px;\n  word-wrap: break-word;\n  opacity: 0.9; }\r\n.cal-tooltip.cal-tooltip-top {\n  padding: 5px 0;\n  margin-top: -3px; }\r\n.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0; }\r\n.cal-tooltip.cal-tooltip-right {\n  padding: 0 5px;\n  margin-left: 3px; }\r\n.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0; }\r\n.cal-tooltip.cal-tooltip-bottom {\n  padding: 5px 0;\n  margin-top: 3px; }\r\n.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px; }\r\n.cal-tooltip.cal-tooltip-left {\n  padding: 0 5px;\n  margin-left: -3px; }\r\n.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px; }\r\n.cal-tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  text-align: center;\n  border-radius: 0.25rem; }\r\n.cal-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\r\n.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow {\n  border-top-color: #000; }\r\n.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow {\n  border-right-color: #000; }\r\n.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow {\n  border-bottom-color: #000; }\r\n.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow {\n  border-left-color: #000; }\r\n.cal-tooltip-inner {\n  color: #fff;\n  background-color: #000; }\r\nh1, h2, h3, h4, h5, h6 {\r\n  font-family: 'Cinzel Decorative', cursive;\r\n}\r\n#nutrition{\r\n  font-family: 'Cinzel Decorative', cursive;\r\n  font-size: 30px;\r\n}\r\nbody {\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIiwibm9kZV9tb2R1bGVzL2FuZ3VsYXItY2FsZW5kYXIvY3NzL2FuZ3VsYXItY2FsZW5kYXIuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQUM5RSx3Q0FBd0M7QUNEeEM7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUU7QUFFdkI7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBRWIsdUJBQXVCO0VBQzFCLGNBQWM7RUFDZCxtQkFBbUIsRUFBRTtBQUV2QjtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0IsRUFBRTtBQUVwQjtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7VUFFWCxPQUFPLEVBQUU7QUFFbkI7RUFDRSxvQkFBb0I7RUFFcEIsaUJBQWlCO0VBQ2pCLGFBQWEsRUFBRTtBQUVqQjtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7VUFFWCxPQUFPO0VBQ2Ysb0JBQW9CO0VBRXBCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLDZCQUE2QjtVQUVyQixzQkFBc0I7RUFDOUIsMEJBQTBCO1VBRWxCLG9CQUFvQixFQUFFO0FBRWhDO0VBQ0UsaUJBQWlCLEVBQUU7QUFDbkI7SUFDRTtNQUNFLGNBQWMsRUFBRSxFQUFFO0FBRXhCO0VBQ0UsdUJBQXVCLEVBQUU7QUFFM0I7RUFDRSx3QkFBd0IsRUFBRTtBQUU1QjtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsbUJBQW1CLEVBQUU7QUFFdkI7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixtQkFBbUIsRUFBRTtBQUV2QjtFQUNFLG1CQUFtQjtVQUVYLE9B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O0VBQ0Usd0JBQXdCLEVBQUU7QUFFNUI7RUFDRSx5QkFBeUIsRUFBRTtBQUU3QjtFQUNFLHVCQUF1QixFQUFFO0FBRTNCO0VBQ0UsV0FBVztFQUNYLHNCQUFzQixFQUFFO0FEaGlCMUI7RUFDRSx5Q0FBeUM7QUFDM0M7QUFDQTtFQUNFLHlDQUF5QztFQUN6QyxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxpQ0FBaUM7QUFDbkMiLCJmaWxlIjoic3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcbi8qQC8qIGFuZ3VsYXItY2xpIGZpbGU6IHNyYy9zdHlsZXMuY3NzICovXHJcbkBpbXBvcnQgXCIuLi9ub2RlX21vZHVsZXMvYW5ndWxhci1jYWxlbmRhci9jc3MvYW5ndWxhci1jYWxlbmRhci5jc3NcIjtcclxuXHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xyXG4gIGZvbnQtZmFtaWx5OiAnQ2luemVsIERlY29yYXRpdmUnLCBjdXJzaXZlO1xyXG59XHJcbiNudXRyaXRpb257XHJcbiAgZm9udC1mYW1pbHk6ICdDaW56ZWwgRGVjb3JhdGl2ZScsIGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufSIsIi5jYWwtbW9udGgtdmlldyAuY2FsLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1oZWFkZXIgLmNhbC1jZWxsIHtcbiAgcGFkZGluZzogNXB4IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC1vLXRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5cyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItYm90dG9tOiAwOyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWNlbGwtdG9wIHtcbiAgbWluLWhlaWdodDogNzhweDtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAgIC1tcy1mbGV4OiAxO1xuICAgICAgICAgIGZsZXg6IDE7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtY2VsbC1yb3cge1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIC1qcy1kaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiBmbGV4OyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWNlbGwge1xuICBmbG9hdDogbGVmdDtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAgIC1tcy1mbGV4OiAxO1xuICAgICAgICAgIGZsZXg6IDE7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgLWpzLWRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IHN0cmV0Y2g7XG4gICAgICAtbXMtZmxleC1hbGlnbjogc3RyZXRjaDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHB4OyB9XG4gIEBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSkge1xuICAgIC5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1jZWxsIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrOyB9IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGw6bm90KDpsYXN0LWNoaWxkKSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkOyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheXMgLmNhbC1jZWxsLXJvdyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZDsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktYmFkZ2Uge1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtaW4td2lkdGg6IDEwcHg7XG4gIHBhZGRpbmc6IDNweCA3cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktbnVtYmVyIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgb3BhY2l0eTogMC41O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1ldmVudHMge1xuICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAgICAgLW1zLWZsZXg6IDE7XG4gICAgICAgICAgZmxleDogMTtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGVuZDtcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBlbmQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBtYXJnaW46IDNweDtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgLWpzLWRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZXZlbnQge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAycHg7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGwuY2FsLWluLW1vbnRoLmNhbC1oYXMtZXZlbnRzIHtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1jZWxsLmNhbC1vdXQtbW9udGggLmNhbC1kYXktbnVtYmVyIHtcbiAgb3BhY2l0eTogMC4xO1xuICBjdXJzb3I6IGRlZmF1bHQ7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWNlbGwuY2FsLXRvZGF5IC5jYWwtZGF5LW51bWJlciB7XG4gIGZvbnQtc2l6ZTogMS45ZW07IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtb3Blbi1kYXktZXZlbnRzIHtcbiAgcGFkZGluZzogMTVweDsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1vcGVuLWRheS1ldmVudHMgLmNhbC1ldmVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAycHg7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtb3V0LW1vbnRoIC5jYWwtZGF5LWJhZGdlLFxuLmNhbC1tb250aC12aWV3IC5jYWwtb3V0LW1vbnRoIC5jYWwtZXZlbnQge1xuICBvcGFjaXR5OiAwLjM7IH1cblxuLmNhbC1tb250aC12aWV3IC5jYWwtZHJhZ2dhYmxlIHtcbiAgY3Vyc29yOiBtb3ZlOyB9XG5cbi5jYWwtbW9udGgtdmlldyAuY2FsLWRyYWctYWN0aXZlICoge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuXG4uY2FsLW1vbnRoLXZpZXcgLmNhbC1ldmVudC10aXRsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1ldmVudC10aXRsZTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IH1cblxuLmNhbC1tb250aC12aWV3IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxuICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1jZWxsLXJvdzpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTsgfVxuICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1jZWxsLXJvdyAuY2FsLWNlbGw6aG92ZXIsXG4gIC5jYWwtbW9udGgtdmlldyAuY2FsLWNlbGwuY2FsLWhhcy1ldmVudHMuY2FsLW9wZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7IH1cbiAgLmNhbC1tb250aC12aWV3IC5jYWwtZGF5cyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZTFlMWUxOyB9XG4gIC5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1jZWxsOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogI2UxZTFlMTsgfVxuICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXlzIC5jYWwtY2VsbC1yb3cge1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNlMWUxZTE7IH1cbiAgLmNhbC1tb250aC12aWV3IC5jYWwtZGF5LWJhZGdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjk0YTQ4O1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gIC5jYWwtbW9udGgtdmlldyAuY2FsLWV2ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU5MGZmO1xuICAgIGJvcmRlci1jb2xvcjogI2QxZThmZjtcbiAgICBjb2xvcjogI2ZmZjsgfVxuICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbC5jYWwtd2Vla2VuZCAuY2FsLWRheS1udW1iZXIge1xuICAgIGNvbG9yOiAjOGIwMDAwOyB9XG4gIC5jYWwtbW9udGgtdmlldyAuY2FsLWRheS1jZWxsLmNhbC10b2RheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZmRlNzsgfVxuICAuY2FsLW1vbnRoLXZpZXcgLmNhbC1kYXktY2VsbC5jYWwtZHJhZy1vdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwICFpbXBvcnRhbnQ7IH1cbiAgLmNhbC1tb250aC12aWV3IC5jYWwtb3Blbi1kYXktZXZlbnRzIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMTVweCAwIHJnYmEoMCwgMCwgMCwgMC41KTsgfVxuXG4uY2FsLXdlZWstdmlldyB7XG4gIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBzZWxlY3Rvci10eXBlLW5vLXVua25vd24gKi8gfVxuICAuY2FsLXdlZWstdmlldyAqIHtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWhlYWRlcnMge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIC1qcy1kaXNwbGF5OiBmbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZy1sZWZ0OiA3MHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWhlYWRlcnMgLmNhbC1oZWFkZXIge1xuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgICAgIC1tcy1mbGV4OiAxO1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNXB4OyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktaGVhZGVycyAuY2FsLWhlYWRlcjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkOyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktaGVhZGVycyAuY2FsLWhlYWRlcjpmaXJzdC1jaGlsZCB7XG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWhlYWRlcnMgc3BhbiB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBvcGFjaXR5OiAwLjU7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1kYXktY29sdW1uIHtcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xuICAgICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICBib3JkZXItbGVmdDogc29saWQgMXB4OyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtZXZlbnQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLXRpbWUtbGFiZWwtY29sdW1uIHtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDEwMCU7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHg7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAzcHg7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAuY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIC5jYWwtZGF5LWNvbHVtbnMge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgLWpzLWRpc3BsYXk6IGZsZXg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgei1pbmRleDogMDsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMgLmNhbC1ldmVudHMtcm93IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGhlaWdodDogMzFweDtcbiAgICAgIG1hcmdpbi1sZWZ0OiA3MHB4OyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyAuY2FsLWV2ZW50LWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cbiAgICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMgLmNhbC1ldmVudC1jb250YWluZXIucmVzaXplLWFjdGl2ZSB7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyAuY2FsLWV2ZW50IHtcbiAgICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xuICAgICAgaGVpZ2h0OiAyOHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7IH1cbiAgICAuY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIC5jYWwtc3RhcnRzLXdpdGhpbi13ZWVrIC5jYWwtZXZlbnQge1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4OyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyAuY2FsLWVuZHMtd2l0aGluLXdlZWsgLmNhbC1ldmVudCB7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtYWxsLWRheS1ldmVudHMgLmNhbC10aW1lLWxhYmVsLWNvbHVtbiB7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgLWpzLWRpc3BsYXk6IGZsZXg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDE0cHg7IH1cbiAgICAuY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIC5jYWwtcmVzaXplLWhhbmRsZSB7XG4gICAgICB3aWR0aDogNnB4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgY3Vyc29yOiBjb2wtcmVzaXplO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwOyB9XG4gICAgICAuY2FsLXdlZWstdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzIC5jYWwtcmVzaXplLWhhbmRsZS5jYWwtcmVzaXplLWhhbmRsZS1hZnRlci1lbmQge1xuICAgICAgICByaWdodDogMDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWV2ZW50LFxuICAuY2FsLXdlZWstdmlldyAuY2FsLWhlYWRlciB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAtby10ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtZHJhZy1hY3RpdmUge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHotaW5kZXg6IDE7IH1cbiAgICAuY2FsLXdlZWstdmlldyAuY2FsLWRyYWctYWN0aXZlICoge1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWV2ZW50cyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlcjogc29saWQgMXB4O1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgLWpzLWRpc3BsYXk6IGZsZXg7XG4gICAgZGlzcGxheTogZmxleDsgfVxuICAgIC5jYWwtd2Vlay12aWV3IC5jYWwtdGltZS1ldmVudHMgLmNhbC1kYXktY29sdW1ucyB7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgLWpzLWRpc3BsYXk6IGZsZXg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgICAgICAgICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgICAgICAgICAgICAgZmxleC1ncm93OiAxOyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWV2ZW50cyAuY2FsLWRheS1jb2x1bW4ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWV2ZW50cyAuY2FsLWV2ZW50LWNvbnRhaW5lciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAxOyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWV2ZW50cyAuY2FsLWV2ZW50IHtcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycHgpO1xuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAycHgpO1xuICAgICAgbWFyZ2luOiAxcHg7XG4gICAgICBwYWRkaW5nOiAwIDVweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4OyB9XG4gICAgLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWV2ZW50cyAuY2FsLXJlc2l6ZS1oYW5kbGUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDRweDtcbiAgICAgIGN1cnNvcjogcm93LXJlc2l6ZTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuICAgICAgLmNhbC13ZWVrLXZpZXcgLmNhbC10aW1lLWV2ZW50cyAuY2FsLXJlc2l6ZS1oYW5kbGUuY2FsLXJlc2l6ZS1oYW5kbGUtYWZ0ZXItZW5kIHtcbiAgICAgICAgYm90dG9tOiAwOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtaG91ci1zZWdtZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgICAuY2FsLXdlZWstdmlldyAuY2FsLWhvdXItc2VnbWVudDo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJ1xcMDBhMCc7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1ldmVudC1jb250YWluZXI6bm90KC5jYWwtZHJhZ2dhYmxlKSB7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtZHJhZ2dhYmxlIHtcbiAgICBjdXJzb3I6IG1vdmU7IH1cbiAgLmNhbC13ZWVrLXZpZXcgbXdsLWNhbGVuZGFyLXdlZWstdmlldy1ob3VyLXNlZ21lbnQsXG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtaG91ci1zZWdtZW50IHtcbiAgICBkaXNwbGF5OiBibG9jazsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWhvdXI6bm90KDpsYXN0LWNoaWxkKSAuY2FsLWhvdXItc2VnbWVudCxcbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1ob3VyOmxhc3QtY2hpbGQgOm5vdCg6bGFzdC1jaGlsZCkgLmNhbC1ob3VyLXNlZ21lbnQge1xuICAgIGJvcmRlci1ib3R0b206IHRoaW4gZGFzaGVkOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtdGltZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgcGFkZGluZy10b3A6IDVweDtcbiAgICB3aWR0aDogNzBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1ob3VyLXNlZ21lbnQuY2FsLWFmdGVyLWhvdXItc3RhcnQgLmNhbC10aW1lIHtcbiAgICBkaXNwbGF5OiBub25lOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtc3RhcnRzLXdpdGhpbi1kYXkgLmNhbC1ldmVudCB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1lbmRzLXdpdGhpbi1kYXkgLmNhbC1ldmVudCB7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7IH1cblxuLmNhbC13ZWVrLXZpZXcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWhlYWRlcnMge1xuICAgIGJvcmRlci1jb2xvcjogI2UxZTFlMTsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIC5jYWwtaGVhZGVyOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIGJvcmRlci1yaWdodC1jb2xvcjogI2UxZTFlMTsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIC5jYWwtaGVhZGVyOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogI2UxZTFlMTsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIC5jYWwtaGVhZGVyOmhvdmVyLFxuICAuY2FsLXdlZWstdmlldyAuY2FsLWRheS1oZWFkZXJzIC5jYWwtZHJhZy1vdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtZGF5LWNvbHVtbiB7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICNlMWUxZTE7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1ldmVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QxZThmZjtcbiAgICBib3JkZXItY29sb3I6ICMxZTkwZmY7XG4gICAgY29sb3I6ICMxZTkwZmY7IH1cbiAgLmNhbC13ZWVrLXZpZXcgLmNhbC1hbGwtZGF5LWV2ZW50cyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZTFlMWUxOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtaGVhZGVyLmNhbC10b2RheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZmRlNzsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWhlYWRlci5jYWwtd2Vla2VuZCBzcGFuIHtcbiAgICBjb2xvcjogIzhiMDAwMDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLXRpbWUtZXZlbnRzIHtcbiAgICBib3JkZXItY29sb3I6ICNlMWUxZTE7IH1cbiAgICAuY2FsLXdlZWstdmlldyAuY2FsLXRpbWUtZXZlbnRzIC5jYWwtZGF5LWNvbHVtbnM6bm90KC5jYWwtcmVzaXplLWFjdGl2ZSkgLmNhbC1ob3VyLXNlZ21lbnQ6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDsgfVxuICAuY2FsLXdlZWstdmlldyAuY2FsLWhvdXItb2RkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtZHJhZy1vdmVyIC5jYWwtaG91ci1zZWdtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkOyB9XG4gIC5jYWwtd2Vlay12aWV3IC5jYWwtaG91cjpub3QoOmxhc3QtY2hpbGQpIC5jYWwtaG91ci1zZWdtZW50LFxuICAuY2FsLXdlZWstdmlldyAuY2FsLWhvdXI6bGFzdC1jaGlsZCA6bm90KDpsYXN0LWNoaWxkKSAuY2FsLWhvdXItc2VnbWVudCB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2UxZTFlMTsgfVxuXG4uY2FsLWRheS12aWV3IHtcbiAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIHNlbGVjdG9yLXR5cGUtbm8tdW5rbm93biAqLyB9XG4gIC5jYWwtZGF5LXZpZXcgKiB7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAuY2FsLWRheS12aWV3IC5jYWwtaG91ci1yb3dzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IHNvbGlkIDFweDtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAuY2FsLWRheS12aWV3IG13bC1jYWxlbmRhci1kYXktdmlldy1ob3VyLXNlZ21lbnQsXG4gIC5jYWwtZGF5LXZpZXcgLmNhbC1ob3VyLXNlZ21lbnQge1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gIC5jYWwtZGF5LXZpZXcgLmNhbC1ob3VyLXNlZ21lbnQ6OmFmdGVyIHtcbiAgICBjb250ZW50OiAnXFwwMGEwJzsgfVxuICAuY2FsLWRheS12aWV3IC5jYWwtaG91cjpub3QoOmxhc3QtY2hpbGQpIC5jYWwtaG91ci1zZWdtZW50LFxuICAuY2FsLWRheS12aWV3IC5jYWwtaG91cjpsYXN0LWNoaWxkIDpub3QoOmxhc3QtY2hpbGQpIC5jYWwtaG91ci1zZWdtZW50IHtcbiAgICBib3JkZXItYm90dG9tOiB0aGluIGRhc2hlZDsgfVxuICAuY2FsLWRheS12aWV3IC5jYWwtdGltZSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIC1qcy1kaXNwbGF5OiBmbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAuY2FsLWRheS12aWV3IC5jYWwtaG91ci1zZWdtZW50LmNhbC1hZnRlci1ob3VyLXN0YXJ0IC5jYWwtdGltZSB7XG4gICAgZGlzcGxheTogbm9uZTsgfVxuICAuY2FsLWRheS12aWV3IC5jYWwtZHJhZy1hY3RpdmUgLmNhbC1ob3VyLXNlZ21lbnQge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG4gIC5jYWwtZGF5LXZpZXcgLmNhbC1ldmVudC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAuY2FsLWRheS12aWV3IC5jYWwtZXZlbnQtY29udGFpbmVyLnJlc2l6ZS1hY3RpdmUge1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG4gIC5jYWwtZGF5LXZpZXcgLmNhbC1ldmVudCB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLW8tdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBoZWlnaHQ6IDEwMCU7IH1cbiAgLmNhbC1kYXktdmlldyAuY2FsLWFsbC1kYXktZXZlbnRzID4gKiB7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gIC5jYWwtZGF5LXZpZXcgLmNhbC1kcmFnZ2FibGUge1xuICAgIGN1cnNvcjogbW92ZTsgfVxuICAuY2FsLWRheS12aWV3IC5jYWwtc3RhcnRzLXdpdGhpbi1kYXkgLmNhbC1ldmVudCB7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7IH1cbiAgLmNhbC1kYXktdmlldyAuY2FsLWVuZHMtd2l0aGluLWRheSAuY2FsLWV2ZW50IHtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDsgfVxuICAuY2FsLWRheS12aWV3IC5jYWwtZHJhZy1hY3RpdmUge1xuICAgIHotaW5kZXg6IDE7IH1cbiAgICAuY2FsLWRheS12aWV3IC5jYWwtZHJhZy1hY3RpdmUgKiB7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuICAuY2FsLWRheS12aWV3IC5jYWwtcmVzaXplLWhhbmRsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgY3Vyc29yOiByb3ctcmVzaXplO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuICAgIC5jYWwtZGF5LXZpZXcgLmNhbC1yZXNpemUtaGFuZGxlLmNhbC1yZXNpemUtaGFuZGxlLWFmdGVyLWVuZCB7XG4gICAgICBib3R0b206IDA7IH1cblxuLmNhbC1kYXktdmlldyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cbiAgLmNhbC1kYXktdmlldyAuY2FsLWhvdXItcm93cyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZTFlMWUxOyB9XG4gIC5jYWwtZGF5LXZpZXcgLmNhbC1ob3VyOm50aC1jaGlsZChvZGQpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhOyB9XG4gIC5jYWwtZGF5LXZpZXcgLmNhbC1ob3VyOm5vdCg6bGFzdC1jaGlsZCkgLmNhbC1ob3VyLXNlZ21lbnQsXG4gIC5jYWwtZGF5LXZpZXcgLmNhbC1ob3VyOmxhc3QtY2hpbGQgOm5vdCg6bGFzdC1jaGlsZCkgLmNhbC1ob3VyLXNlZ21lbnQge1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNlMWUxZTE7IH1cbiAgLmNhbC1kYXktdmlldyAuY2FsLWhvdXItc2VnbWVudDpob3ZlcixcbiAgLmNhbC1kYXktdmlldyAuY2FsLWRyYWctb3ZlciAuY2FsLWhvdXItc2VnbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDsgfVxuICAuY2FsLWRheS12aWV3IC5jYWwtZXZlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWU4ZmY7XG4gICAgYm9yZGVyLWNvbG9yOiAjMWU5MGZmO1xuICAgIGNvbG9yOiAjMWU5MGZmOyB9XG5cbi5jYWwtdG9vbHRpcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTA3MDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgbGluZS1icmVhazogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICB3b3JkLWJyZWFrOiBub3JtYWw7XG4gIHdvcmQtc3BhY2luZzogbm9ybWFsO1xuICBmb250LXNpemU6IDExcHg7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgb3BhY2l0eTogMC45OyB9XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC10b3Age1xuICBwYWRkaW5nOiA1cHggMDtcbiAgbWFyZ2luLXRvcDogLTNweDsgfVxuXG4uY2FsLXRvb2x0aXAuY2FsLXRvb2x0aXAtdG9wIC5jYWwtdG9vbHRpcC1hcnJvdyB7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgYm9yZGVyLXdpZHRoOiA1cHggNXB4IDA7IH1cblxuLmNhbC10b29sdGlwLmNhbC10b29sdGlwLXJpZ2h0IHtcbiAgcGFkZGluZzogMCA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAzcHg7IH1cblxuLmNhbC10b29sdGlwLmNhbC10b29sdGlwLXJpZ2h0IC5jYWwtdG9vbHRpcC1hcnJvdyB7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwO1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBib3JkZXItd2lkdGg6IDVweCA1cHggNXB4IDA7IH1cblxuLmNhbC10b29sdGlwLmNhbC10b29sdGlwLWJvdHRvbSB7XG4gIHBhZGRpbmc6IDVweCAwO1xuICBtYXJnaW4tdG9wOiAzcHg7IH1cblxuLmNhbC10b29sdGlwLmNhbC10b29sdGlwLWJvdHRvbSAuY2FsLXRvb2x0aXAtYXJyb3cge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIGJvcmRlci13aWR0aDogMCA1cHggNXB4OyB9XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC1sZWZ0IHtcbiAgcGFkZGluZzogMCA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAtM3B4OyB9XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC1sZWZ0IC5jYWwtdG9vbHRpcC1hcnJvdyB7XG4gIHRvcDogNTAlO1xuICByaWdodDogMDtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgYm9yZGVyLXdpZHRoOiA1cHggMCA1cHggNXB4OyB9XG5cbi5jYWwtdG9vbHRpcC1pbm5lciB7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIHBhZGRpbmc6IDNweCA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTsgfVxuXG4uY2FsLXRvb2x0aXAtYXJyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7IH1cblxuLmNhbC10b29sdGlwLmNhbC10b29sdGlwLXRvcCAuY2FsLXRvb2x0aXAtYXJyb3cge1xuICBib3JkZXItdG9wLWNvbG9yOiAjMDAwOyB9XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC1yaWdodCAuY2FsLXRvb2x0aXAtYXJyb3cge1xuICBib3JkZXItcmlnaHQtY29sb3I6ICMwMDA7IH1cblxuLmNhbC10b29sdGlwLmNhbC10b29sdGlwLWJvdHRvbSAuY2FsLXRvb2x0aXAtYXJyb3cge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMDAwOyB9XG5cbi5jYWwtdG9vbHRpcC5jYWwtdG9vbHRpcC1sZWZ0IC5jYWwtdG9vbHRpcC1hcnJvdyB7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMDAwOyB9XG5cbi5jYWwtdG9vbHRpcC1pbm5lciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOyB9XG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../postcss-loader/src??embedded!./bootstrap.min.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/bootstrap/dist/css/bootstrap.min.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/bootstrap/dist/css/bootstrap.min.css ./src/styles.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\jmaci\Desktop\Revature\project-2\meal-plan-app\nourishment-ang\node_modules\bootstrap\dist\css\bootstrap.min.css */"./node_modules/bootstrap/dist/css/bootstrap.min.css");
module.exports = __webpack_require__(/*! C:\Users\jmaci\Desktop\Revature\project-2\meal-plan-app\nourishment-ang\src\styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map