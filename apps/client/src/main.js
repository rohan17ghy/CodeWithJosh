"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("react-dom/client");
var App_tsx_1 = require("./App.tsx");
require("./global.css");
var react_router_dom_1 = require("react-router-dom");
client_1.default.createRoot(document.getElementById('root')).render(<react_router_dom_1.BrowserRouter>
    <App_tsx_1.default />
  </react_router_dom_1.BrowserRouter>);
