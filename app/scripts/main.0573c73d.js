(this["webpackChunkreact_webpack_dev"] = this["webpackChunkreact_webpack_dev"] || []).push([["main"],{

/***/ 48187:
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 324);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var _components_Content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Content.js */ 20235);




var App = function App(_ref) {
  var apolloClient = _ref.apolloClient;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      appClient = _useState6[0],
      setClient = _useState6[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var script = document.createElement('script');
    script.src = 'https://static.freshdev.io/fdk/2.0/assets/fresh_client.js';
    script.addEventListener('load', function () {
      return setLoading(true);
    });
    script.defer = true;
    document.head.appendChild(script);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (loading) {
      app.initialized().then(function (client) {
        window.client = client;
        client.events.on('app.activated', setClient(client));
      })["catch"](function (err) {
        setError('App initialize error: ' + err);
      });
    }

    ;
  }, [loading]);
  return error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    style: {
      textAlign: 'center',
      padding: 10
    }
  }, error) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_Content_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    appClient: appClient,
    apolloClient: apolloClient,
    loading: loading,
    error: error,
    setLoading: setLoading,
    setError: setError
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ 20235:
/*!***********************************!*\
  !*** ./src/components/Content.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 861);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 942);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 324);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ 757);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var _queries_medicine_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../queries/medicine.js */ 46687);
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/variables */ 15793);
/* harmony import */ var _ContentList_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ContentList.js */ 935);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Loader */ 71863);
/* harmony import */ var _NoOrder_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./NoOrder.js */ 27665);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var Content = function Content(_ref) {
  var appClient = _ref.appClient,
      apolloClient = _ref.apolloClient,
      loading = _ref.loading,
      error = _ref.error,
      setLoading = _ref.setLoading,
      setError = _ref.setError;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(_utils_variables__WEBPACK_IMPORTED_MODULE_6__.initialState),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      order = _useState2[0],
      setOrder = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    if (appClient) {
      fetchTicketInfo(appClient);
    }
  }, [appClient]);

  function init(medicalOrderData) {
    var orderData = medicalOrderData.getMedicineOrderOMSDetailsWithAddress.medicineOrderDetails;
    var medicineOrderPayments = orderData.medicineOrderPayments,
        medicineOrderLineItems = orderData.medicineOrderLineItems;
    setOrder(function (prevState) {
      var _medicineOrderPayment, _medicineOrderPayment2, _medicineOrderPayment3;

      return _objectSpread(_objectSpread({}, prevState), {}, {
        id: orderData === null || orderData === void 0 ? void 0 : orderData.id,
        orderAutoId: orderData === null || orderData === void 0 ? void 0 : orderData.orderAutoId,
        billNumber: orderData === null || orderData === void 0 ? void 0 : orderData.billNumber,
        devliveryCharges: orderData === null || orderData === void 0 ? void 0 : orderData.devliveryCharges,
        orderType: orderData === null || orderData === void 0 ? void 0 : orderData.orderType,
        deliveryType: orderData === null || orderData === void 0 ? void 0 : orderData.deliveryType,
        currentStatus: orderData === null || orderData === void 0 ? void 0 : orderData.currentStatus,
        patientAddressId: orderData === null || orderData === void 0 ? void 0 : orderData.patientAddressId,
        medicineOrderAddress: orderData === null || orderData === void 0 ? void 0 : orderData.medicineOrderAddress,
        // patient: orderData?.patient,
        medicineOrderPayments: {
          paymentDateTime: medicineOrderPayments === null || medicineOrderPayments === void 0 ? void 0 : (_medicineOrderPayment = medicineOrderPayments[0]) === null || _medicineOrderPayment === void 0 ? void 0 : _medicineOrderPayment.paymentDateTime,
          paymentMode: medicineOrderPayments === null || medicineOrderPayments === void 0 ? void 0 : (_medicineOrderPayment2 = medicineOrderPayments[0]) === null || _medicineOrderPayment2 === void 0 ? void 0 : _medicineOrderPayment2.paymentMode,
          paymentType: medicineOrderPayments === null || medicineOrderPayments === void 0 ? void 0 : (_medicineOrderPayment3 = medicineOrderPayments[0]) === null || _medicineOrderPayment3 === void 0 ? void 0 : _medicineOrderPayment3.paymentType
        },
        medicineOrderLineItems: {
          medicineName: medicineOrderLineItems === null || medicineOrderLineItems === void 0 ? void 0 : medicineOrderLineItems[0].medicineName,
          medicineSKU: medicineOrderLineItems === null || medicineOrderLineItems === void 0 ? void 0 : medicineOrderLineItems[0].medicineSKU,
          mrp: medicineOrderLineItems === null || medicineOrderLineItems === void 0 ? void 0 : medicineOrderLineItems[0].mrp,
          price: medicineOrderLineItems === null || medicineOrderLineItems === void 0 ? void 0 : medicineOrderLineItems[0].price,
          quantity: medicineOrderLineItems === null || medicineOrderLineItems === void 0 ? void 0 : medicineOrderLineItems[0].quantity
        }
      });
    });
  }

  ;

  function fetchMedicineOrder(_x) {
    return _fetchMedicineOrder.apply(this, arguments);
  }

  function _fetchMedicineOrder() {
    _fetchMedicineOrder = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(orderAutoId) {
      var _yield$apolloClient$q, medicineOrderData, loaded;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return apolloClient.query({
                query: _queries_medicine_js__WEBPACK_IMPORTED_MODULE_5__.GET_MEDICINE_ORDER_OMS_DETAILS_WITH_ADDRESS,
                variables: {
                  orderAutoId: orderAutoId
                }
              });

            case 3:
              _yield$apolloClient$q = _context.sent;
              medicineOrderData = _yield$apolloClient$q.data;
              loaded = _yield$apolloClient$q.loading;
              setLoading(loaded);
              init(medicineOrderData);
              _context.next = 14;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              setError('Fetch medical order error: ' + _context.t0.message);
              setLoading(false);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));
    return _fetchMedicineOrder.apply(this, arguments);
  }

  function fetchTicketInfo(_x2) {
    return _fetchTicketInfo.apply(this, arguments);
  }

  function _fetchTicketInfo() {
    _fetchTicketInfo = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee2(client) {
      var _ticket$custom_fields, _yield$client$data$ge, _yield$client$data$ge2, ticket, customData, orderAutoId;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return client === null || client === void 0 ? void 0 : client.data.get("ticket");

            case 3:
              _yield$client$data$ge = _context2.sent;
              _yield$client$data$ge2 = _yield$client$data$ge.ticket;
              ticket = _yield$client$data$ge2 === void 0 ? null : _yield$client$data$ge2;
              customData = ticket === null || ticket === void 0 ? void 0 : ticket.custom_fields;

              if (customData) {
                setOrder(function (prevState) {
                  return _objectSpread(_objectSpread({}, prevState), {}, {
                    patient: _objectSpread(_objectSpread({}, prevState.patient), {}, {
                      fullName: customData === null || customData === void 0 ? void 0 : customData.cf_customer_full_name,
                      mobileNumber: customData === null || customData === void 0 ? void 0 : customData.cf_customer_phone_number,
                      email: customData === null || customData === void 0 ? void 0 : customData.cf_customer_email_address,
                      pincode: customData === null || customData === void 0 ? void 0 : customData.cf_customer_pin_code
                    })
                  });
                });
              }

              orderAutoId = ticket === null || ticket === void 0 ? void 0 : (_ticket$custom_fields = ticket.custom_fields) === null || _ticket$custom_fields === void 0 ? void 0 : _ticket$custom_fields.cf_orderidappointmentid;
              console.log({
                orderAutoId: orderAutoId
              });
              orderAutoId ? fetchMedicineOrder(orderAutoId) : setLoading(false);
              _context2.next = 17;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](0);
              setError('Load ticket error: ' + _context2.t0);
              setLoading(false);

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 13]]);
    }));
    return _fetchTicketInfo.apply(this, arguments);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_Loader__WEBPACK_IMPORTED_MODULE_8__["default"], {
    loading: loading,
    orderId: order === null || order === void 0 ? void 0 : order.id,
    reloadPage: function reloadPage() {
      var _window, _window$location;

      return (_window = window) === null || _window === void 0 ? void 0 : (_window$location = _window.location) === null || _window$location === void 0 ? void 0 : _window$location.reload();
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_ContentList_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
    loading: loading,
    error: error,
    order: order
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(_NoOrder_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    loading: loading,
    error: error,
    orderId: order === null || order === void 0 ? void 0 : order.id
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Content);

/***/ }),

/***/ 20101:
/*!***************************************!*\
  !*** ./src/components/ContentItem.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);


function ContentItem(_ref) {
  var key = _ref.index,
      order = _ref.order,
      item = _ref.item;
  var labelKey = item.labelKey,
      labelValue = item.labelValue,
      isHeader = item.isHeader;

  function getValue() {
    var splitItem = labelKey === null || labelKey === void 0 ? void 0 : labelKey.split('_');
    var dItem = null;
    splitItem === null || splitItem === void 0 ? void 0 : splitItem.forEach(function (dto, k) {
      var _dItem;

      dItem = !k ? order === null || order === void 0 ? void 0 : order[dto] : (_dItem = dItem) === null || _dItem === void 0 ? void 0 : _dItem[dto];
    });
    return dItem;
  }

  ;
  var itemValue = !(labelKey !== null && labelKey !== void 0 && labelKey.includes('_')) ? order === null || order === void 0 ? void 0 : order[labelKey] : getValue();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !!key && isHeader && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      paddingBlock: 5
    }
  }), labelValue && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      marginLeft: !isHeader ? 5 : 0
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      color: isHeader ? '#2c5cc5' : 'darkslategrey',
      fontSize: 12,
      fontWeight: !labelKey ? 'bold' : 600
    }
  }, labelValue), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), labelKey && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    style: {
      marginLeft: 5,
      fontSize: 11,
      color: 'grey',
      paddingBlock: 3
    }
  }, itemValue || '--')));
}

;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentItem);

/***/ }),

/***/ 935:
/*!***************************************!*\
  !*** ./src/components/ContentList.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var _utils_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/variables */ 15793);
/* harmony import */ var _ContentItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContentItem */ 20101);




var ContentList = function ContentList(_ref) {
  var loading = _ref.loading,
      error = _ref.error,
      order = _ref.order;
  return !loading && !error && order !== null && order !== void 0 && order.id ? _utils_variables__WEBPACK_IMPORTED_MODULE_1__.contentHeadingList.map(function (el, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ContentItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: i,
      index: i,
      order: order,
      item: el
    });
  }) : null;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentList);

/***/ }),

/***/ 71863:
/*!**********************************!*\
  !*** ./src/components/Loader.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/CircularProgress */ 66489);



var Loader = function Loader(_ref) {
  var loading = _ref.loading,
      orderId = _ref.orderId,
      reloadPage = _ref.reloadPage;

  if (loading && !orderId) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_1__["default"], {
      color: "inherit",
      size: 30
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      style: {
        marginTop: 10
      }
    }, "Page loading for long time ?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      "data-testid": "a-tag",
      hre: "#",
      onClick: function onClick() {
        return reloadPage(true);
      },
      style: {
        cursor: 'pointer'
      }
    }, "Reload"));
  }

  return null;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Loader);

/***/ }),

/***/ 27665:
/*!***********************************!*\
  !*** ./src/components/NoOrder.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);


var NoOrder = function NoOrder(_ref) {
  var loading = _ref.loading,
      error = _ref.error,
      orderId = _ref.orderId;
  return !loading && !error && !orderId ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      textAlign: 'center',
      color: 'orange'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Order Id is not exist."), "Please check and try again.") : null;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoOrder);

/***/ }),

/***/ 55579:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 67294);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ 73935);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ 98548);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ 48187);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/react-hooks */ 36689);
/* harmony import */ var _utils_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/client */ 73377);






react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_5__.ApolloProvider, {
  client: _utils_client__WEBPACK_IMPORTED_MODULE_4__.client
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  apolloClient: _utils_client__WEBPACK_IMPORTED_MODULE_4__.client
}))), document.getElementById('root'));

/***/ }),

/***/ 46687:
/*!*********************************!*\
  !*** ./src/queries/medicine.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GET_MEDICINE_ORDER_OMS_DETAILS_WITH_ADDRESS": () => (/* binding */ GET_MEDICINE_ORDER_OMS_DETAILS_WITH_ADDRESS)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ 168);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ 31230);


var _templateObject;


var GET_MEDICINE_ORDER_OMS_DETAILS_WITH_ADDRESS = (0,graphql_tag__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query getMedicineOrderOMSDetailsWithAddress(\n    $patientId: String\n    $orderAutoId: Int\n    $billNumber: String\n  ) {\n    getMedicineOrderOMSDetailsWithAddress(\n      patientId: $patientId\n      orderAutoId: $orderAutoId\n      billNumber: $billNumber\n    ) {\n      medicineOrderDetails {\n        id\n        totalCashBack\n        createdDate\n        orderAutoId\n        billNumber\n        coupon\n        devliveryCharges\n        prismPrescriptionFileId\n        couponDiscount\n        productDiscount\n        redeemedAmount\n        estimatedAmount\n        prescriptionImageUrl\n        orderTat\n        orderType\n        shopAddress\n        packagingCharges\n        deliveryType\n        currentStatus\n        patientAddressId\n        alertStore\n        medicineOrderLineItems {\n          medicineSKU\n          medicineName\n          price\n          mrp\n          quantity\n          isMedicine\n          mou\n          isPrescriptionNeeded\n        }\n        medicineOrderPayments {\n          id\n          paymentType\n          amountPaid\n          paymentRefId\n          paymentStatus\n          paymentDateTime\n          responseCode\n          responseMessage\n          bankTxnId\n          healthCreditsRedeemed\n          healthCreditsRedemptionRequest {\n            Success\n            Message\n            RequestNumber\n            AvailablePoints\n            BalancePoints\n            RedeemedPoints\n            PointsValue\n          }\n          paymentMode\n          refundAmount\n        }\n        medicineOrderRefunds {\n          refundAmount\n          refundStatus\n          refundId\n          orderId\n          createdDate\n        }\n        medicineOrdersStatus {\n          id\n          orderStatus\n          statusDate\n          hideStatus\n          statusMessage\n          customReason\n        }\n        medicineOrderShipments {\n          id\n          siteId\n          siteName\n          apOrderNo\n          updatedDate\n          currentStatus\n          itemDetails\n          medicineOrdersStatus {\n            id\n            orderStatus\n            statusDate\n            hideStatus\n          }\n          medicineOrderInvoice {\n            id\n            siteId\n            remarks\n            requestType\n            vendorName\n            billDetails\n            itemDetails\n          }\n        }\n        patient {\n          mobileNumber\n          id\n          firstName\n          lastName\n          addressList {\n            id\n            addressLine1\n            addressLine2\n            city\n            state\n            zipcode\n          }\n        }\n        medicineOrderAddress {\n          addressLine1\n          addressLine2\n          city\n          state\n          zipcode\n          name\n          mobileNumber\n        }\n      }\n    }\n  }\n"])));

/***/ }),

/***/ 73377:
/*!*****************************!*\
  !*** ./src/utils/client.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "client": () => (/* binding */ client)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 942);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ 72974);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ 46061);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ 57571);
/* harmony import */ var _apollo_link_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/link-context */ 81431);
/* harmony import */ var _apollo_link_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/link-error */ 63381);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ 75221);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var apolloClient;

var getClient = function getClient() {
  var errorLink = (0,_apollo_link_error__WEBPACK_IMPORTED_MODULE_2__.onError)(function (error) {
    var graphQLErrors = error.graphQLErrors,
        operation = error.operation,
        forward = error.forward;

    if (graphQLErrors) {
      var unauthenticatedError = graphQLErrors.some(function (gqlError) {
        return gqlError.extensions && gqlError.extensions.code === "UNAUTHENTICATED";
      });

      if (unauthenticatedError) {
        console.log('unauthenticatedError', unauthenticatedError);
      }
    }

    return forward(operation);
  });
  var authLink = (0,_apollo_link_context__WEBPACK_IMPORTED_MODULE_3__.setContext)(function (_, _ref) {
    var headers = _ref.headers;
    return {
      headers: _objectSpread(_objectSpread({}, headers), {}, {
        Authorization: _config__WEBPACK_IMPORTED_MODULE_1__.APOLLO_247_AUTH_TOKEN
      })
    };
  });
  var httpLink = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.createHttpLink)({
    uri: _config__WEBPACK_IMPORTED_MODULE_1__.APOLLO_247_ENDPOINT
  });
  var link = errorLink.concat(authLink).concat(httpLink);
  var cache = apolloClient ? apolloClient.cache : new _apollo_client__WEBPACK_IMPORTED_MODULE_5__.InMemoryCache();
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_6__.ApolloClient({
    link: link,
    cache: cache
  });
};

var client = getClient();

/***/ }),

/***/ 75221:
/*!*****************************!*\
  !*** ./src/utils/config.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APOLLO_247_ENDPOINT": () => (/* binding */ APOLLO_247_ENDPOINT),
/* harmony export */   "APOLLO_247_AUTH_TOKEN": () => (/* binding */ APOLLO_247_AUTH_TOKEN)
/* harmony export */ });
var APOLLO_247_ENDPOINT = 'https://qa4api.apollo247.com';
var APOLLO_247_AUTH_TOKEN = 'Bearer 3d1833da7020e0602165529446587434';

/***/ }),

/***/ 15793:
/*!********************************!*\
  !*** ./src/utils/variables.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "contentHeadingList": () => (/* binding */ contentHeadingList)
/* harmony export */ });
var initialState = {
  id: '',
  orderAutoId: null,
  billNumber: '',
  devliveryCharges: 0,
  orderType: '',
  deliveryType: '',
  currentStatus: '',
  patientAddressId: '',
  medicineOrderAddress: {
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    zipcode: '',
    name: '',
    mobileNumber: ''
  },
  patient: {
    id: '',
    firstName: '',
    lastName: '',
    fullName: '',
    mobileNumber: '',
    email: '',
    pincode: ''
  },
  medicineOrderPayments: {
    paymentDateTime: '',
    paymentMode: '',
    paymentType: ''
  },
  medicineOrderLineItems: {
    medicineName: '',
    medicineSKU: '',
    mrp: '',
    price: '',
    quantity: ''
  }
};
var contentHeadingList = [{
  labelKey: '',
  labelValue: 'Medicine Order',
  isHeader: true
}, {
  labelKey: 'orderAutoId',
  labelValue: 'Order Id'
}, // { labelKey: 'billNumber', labelValue: 'Bill number' },
{
  labelKey: 'orderType',
  labelValue: 'Order type'
}, {
  labelKey: 'currentStatus',
  labelValue: 'Order status'
}, {
  labelKey: 'deliveryType',
  labelValue: 'Delivery type'
}, // Payment
{
  labelKey: '',
  labelValue: 'Payment',
  isHeader: true
}, {
  labelKey: 'medicineOrderPayments_paymentType',
  labelValue: 'Type'
}, {
  labelKey: 'medicineOrderPayments_paymentDateTime',
  labelValue: 'Date'
}, {
  labelKey: 'medicineOrderPayments_paymentMode',
  labelValue: 'Mode'
}, // Medicine
{
  labelKey: '',
  labelValue: 'Medicine',
  isHeader: true
}, {
  labelKey: 'medicineOrderLineItems_medicineName',
  labelValue: 'Medicine name'
}, {
  labelKey: 'medicineOrderLineItems_medicineSKU',
  labelValue: 'Medicine SKU'
}, {
  labelKey: 'medicineOrderLineItems_mrp',
  labelValue: 'MRP'
}, {
  labelKey: 'medicineOrderLineItems_price',
  labelValue: 'Price'
}, {
  labelKey: 'medicineOrderLineItems_quantity',
  labelValue: 'Quantity'
}, // Patient
{
  labelKey: '',
  labelValue: 'Patient',
  isHeader: true
}, {
  labelKey: 'patient_fullName',
  labelValue: 'Full name'
}, // { labelKey: 'patient_firstName', labelValue: 'First name' },
// { labelKey: 'patient_lastName', labelValue: 'Last name' },
{
  labelKey: 'patient_email',
  labelValue: 'Email'
}, {
  labelKey: 'patient_mobileNumber',
  labelValue: 'Mobile'
}, {
  labelKey: 'patient_pincode',
  labelValue: 'Pincode'
}, // Medicine Address
{
  labelKey: '',
  labelValue: 'Address',
  isHeader: true
}, {
  labelKey: 'medicineOrderAddress_name',
  labelValue: 'Name'
}, {
  labelKey: 'medicineOrderAddress_mobileNumber',
  labelValue: 'Mobile'
}, {
  labelKey: 'medicineOrderAddress_addressLine1',
  labelValue: 'Address line 1'
}, {
  labelKey: 'medicineOrderAddress_addressLine2',
  labelValue: 'Address line 2'
}, {
  labelKey: 'medicineOrderAddress_city',
  labelValue: 'City'
}, {
  labelKey: 'medicineOrderAddress_state',
  labelValue: 'State'
}, {
  labelKey: 'medicineOrderAddress_zipcode',
  labelValue: 'Zipcode'
}];

/***/ }),

/***/ 51424:
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ 23645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n\tmargin: 0;\n\tfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n\t\t\"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n\t\tsans-serif;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\tfont-size: smaller;\n}\n\ncode {\n\tfont-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n\t\tmonospace;\n}\n\na {\n\tcolor: blue;\n}\n", "",{"version":3,"sources":["webpack://src/index.css"],"names":[],"mappings":"AAAA;CACC,SAAS;CACT;;YAEW;CACX,mCAAmC;CACnC,kCAAkC;CAClC,kBAAkB;AACnB;;AAEA;CACC;WACU;AACX;;AAEA;CACC,WAAW;AACZ","sourcesContent":["body {\n\tmargin: 0;\n\tfont-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n\t\t\"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n\t\tsans-serif;\n\t-webkit-font-smoothing: antialiased;\n\t-moz-osx-font-smoothing: grayscale;\n\tfont-size: smaller;\n}\n\ncode {\n\tfont-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n\t\tmonospace;\n}\n\na {\n\tcolor: blue;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 98548:
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ 93379);
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ 51424);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__(26981), __webpack_exec__(55579)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.0573c73d.js.map