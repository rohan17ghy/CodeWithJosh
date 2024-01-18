"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_1 = require("ui");
var ui_2 = require("ui");
var ui_3 = require("ui");
var react_router_dom_1 = require("react-router-dom");
var ui_4 = require("ui");
var ui_5 = require("ui");
var ui_6 = require("ui");
function App() {
    var links = [
        { link: '#', label: 'Subscribe' },
        { link: 'courses', label: 'Courses' },
        { link: 'learningPaths', label: 'Learning Paths' },
        { link: '#', label: 'Forum' },
        { link: '#', label: 'Contact' },
    ];
    return (
    // <AppShell
    //     fixed={false}
    //     padding="sm"
    //     header={<HeaderSimple links={links}></HeaderSimple>}     
    // >
    //     <Landing />
    // </AppShell>
    <div className=' min-h-screen'>
        <ui_1.HeaderSimple links={links}></ui_1.HeaderSimple>
        <react_router_dom_1.Routes>
            <react_router_dom_1.Route path='/' Component={ui_2.Landing}/>
            <react_router_dom_1.Route path='courses' Component={ui_3.Courses}/>
            <react_router_dom_1.Route path='courseDetails' Component={ui_4.CourseDetails}/>
            <react_router_dom_1.Route path='learningPaths' Component={ui_5.LearningPaths}/>
            <react_router_dom_1.Route path='front-end' Component={ui_6.LearningPathDetails}/>
        </react_router_dom_1.Routes>
    </div>);
}
exports.default = App;
