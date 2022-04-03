"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFontColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const MyLabel_1 = __importDefault(require("../../components/MyLabel"));
exports.default = {
    title: 'UI/MyLabel',
    component: MyLabel_1.default,
    argTypes: {
        color: {
            control: {
                type: 'select'
            }
        },
    }
};
const Template = (args) => (0, jsx_runtime_1.jsx)(MyLabel_1.default, { ...args });
exports.Basic = Template.bind({});
exports.Basic.args = {
    label: 'Hello World',
    size: 'normal',
    allCaps: false,
    color: 'primary',
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    label: 'Hello World',
    size: 'normal',
    allCaps: true,
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    label: 'Hello World',
    size: 'normal',
    allCaps: false,
    color: 'secondary',
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    label: 'Hello World',
    size: 'normal',
    allCaps: false,
    color: 'tertiary',
};
exports.CustomFontColor = Template.bind({});
exports.CustomFontColor.args = {
    label: 'Hello World',
    size: 'h1',
    allCaps: false,
    customFontColor: '#ff00c8'
};
