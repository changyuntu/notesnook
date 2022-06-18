var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Box, Flex, Image } from "rebass";
import { Resizable } from "re-resizable";
import { ToolButton } from "../../toolbar/components/tool-button";
import { useEffect, useRef, useState } from "react";
import { ResponsivePresenter } from "../../components/responsive";
import { ImageProperties } from "../../toolbar/popups/image-properties";
import { Popup } from "../../toolbar/components/popup";
import { Icon } from "../../toolbar/components/icon";
import { Icons } from "../../toolbar/icons";
export function ImageComponent(props) {
    var _this = this;
    var editor = props.editor, updateAttributes = props.updateAttributes, node = props.node, selected = props.selected;
    var _a = node.attrs, src = _a.src, alt = _a.alt, title = _a.title, width = _a.width, height = _a.height, align = _a.align, float = _a.float;
    var imageRef = useRef();
    useEffect(function () {
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!imageRef.current)
                            return [2 /*return*/];
                        _a = imageRef.current;
                        return [4 /*yield*/, dataUriToBlobURL(src)];
                    case 1:
                        _a.src = _b.sent();
                        return [2 /*return*/];
                }
            });
        }); })();
    }, [src, imageRef]);
    return (_jsx(_Fragment, { children: _jsxs(Box, __assign({ sx: {
                position: "relative",
                display: float ? "block" : "flex",
                justifyContent: float
                    ? "stretch"
                    : align === "center"
                        ? "center"
                        : align === "left"
                            ? "start"
                            : "end",
                ":hover .drag-handle, :active .drag-handle": {
                    opacity: 1,
                },
            }, draggable: false }, { children: [_jsx(Icon, { className: "drag-handle", "data-drag-handle": true, draggable: true, path: Icons.dragHandle, sx: {
                        cursor: "grab",
                        position: "absolute",
                        top: 2,
                        left: 2,
                        zIndex: 999,
                        opacity: 0,
                    } }), _jsxs(Resizable, __assign({ style: {
                        float: float ? (align === "left" ? "left" : "right") : "none",
                    }, size: {
                        height: height || "auto",
                        width: width || "auto",
                    }, maxWidth: "100%", onResizeStop: function (e, direction, ref, d) {
                        updateAttributes({
                            width: ref.clientWidth,
                            height: ref.clientHeight,
                        });
                    }, lockAspectRatio: true }, { children: [selected && (_jsx(Flex, __assign({ sx: { position: "relative", justifyContent: "end" } }, { children: _jsx(ImageToolbar, { editor: editor, float: float, align: align, height: height || 0, width: width || 0 }) }))), _jsx(Image, __assign({ "data-drag-image": true, ref: imageRef, alt: alt, title: title, width: "100%", height: "100%", sx: {
                                border: selected
                                    ? "2px solid var(--primary)"
                                    : "2px solid transparent",
                                borderRadius: "default",
                            } }, props))] }))] })) }));
}
function ImageToolbar(props) {
    var editor = props.editor, float = props.float, height = props.height, width = props.width;
    var _a = __read(useState(false), 2), isOpen = _a[0], setIsOpen = _a[1];
    var ref = useRef();
    return (_jsxs(Flex, __assign({ ref: ref, sx: {
            flexDirection: "column",
            position: "absolute",
            top: -40,
            mb: 2,
            zIndex: 9999,
            alignItems: "end",
        } }, { children: [_jsxs(Flex, __assign({ sx: {
                    bg: "background",
                    boxShadow: "menu",
                    flexWrap: "nowrap",
                    borderRadius: "default",
                    mb: 2,
                } }, { children: [_jsxs(Flex, __assign({ className: "toolbar-group", sx: {
                            pr: 1,
                            mr: 1,
                            borderRight: "1px solid var(--border)",
                            ":last-of-type": { mr: 0, pr: 0, borderRight: "none" },
                        } }, { children: [_jsx(ToolButton, { toggled: false, title: "Align left", id: "alignLeft", icon: "alignLeft", onClick: function () {
                                    return editor.chain().focus().setImageAlignment({ align: "left" }).run();
                                } }), float ? null : (_jsx(ToolButton, { toggled: false, title: "Align center", id: "alignCenter", icon: "alignCenter", onClick: function () {
                                    return editor
                                        .chain()
                                        .focus()
                                        .setImageAlignment({ align: "center" })
                                        .run();
                                } })), _jsx(ToolButton, { toggled: false, title: "Align right", id: "alignRight", icon: "alignRight", onClick: function () {
                                    return editor.chain().focus().setImageAlignment({ align: "right" }).run();
                                } })] })), _jsx(Flex, __assign({ className: "toolbar-group", sx: {
                            pr: 1,
                            mr: 1,
                            borderRight: "1px solid var(--border)",
                            ":last-of-type": { mr: 0, pr: 0, borderRight: "none" },
                        } }, { children: _jsx(ToolButton, { toggled: isOpen, title: "Image properties", id: "imageProperties", icon: "more", onClick: function () { return setIsOpen(function (s) { return !s; }); } }) }))] })), _jsx(ResponsivePresenter, __assign({ isOpen: isOpen, desktop: "menu", mobile: "sheet", onClose: function () { return setIsOpen(false); }, blocking: true, focusOnRender: false, position: {
                    target: ref.current || "mouse",
                    align: "start",
                    location: "below",
                    yOffset: 10,
                    isTargetAbsolute: true,
                } }, { children: _jsx(Popup, __assign({ title: "Image properties", onClose: function () {
                        setIsOpen(false);
                    } }, { children: _jsx(ImageProperties, __assign({}, props)) })) }))] })));
}
function dataUriToBlobURL(dataurl) {
    return __awaiter(this, void 0, void 0, function () {
        var response, blob;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!dataurl.startsWith("data:image"))
                        return [2 /*return*/, dataurl];
                    return [4 /*yield*/, fetch(dataurl)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.blob()];
                case 2:
                    blob = _a.sent();
                    return [2 /*return*/, URL.createObjectURL(blob)];
            }
        });
    });
}
