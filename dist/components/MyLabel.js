"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLabel = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./MyLabel.css");
const MyLabel = ({ label = 'No Label', size = 'normal', allCaps = true, color = 'primary', customFontColor = '' }) => {
    return ((0, jsx_runtime_1.jsx)("span", { style: { color: customFontColor }, className: `label ${size} ${!customFontColor ? 'text-' + color : ''} `, children: allCaps ? label.toUpperCase() : label }));
};
exports.MyLabel = MyLabel;
exports.default = exports.MyLabel;
