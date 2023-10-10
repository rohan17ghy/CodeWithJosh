import { HeaderSimple } from './components/Header';
import Landing from './components/Landing'
import Courses from './components/Courses'
import { Routes, Route } from 'react-router-dom';
import CourseDetails from './components/CourseDetails';
import LearningPaths from './components/LearningPaths';


function App() {
    const links = [
        {link: '#', label: 'Subscribe'},
        {link: 'courses', label: 'Courses'},
        {link: 'learningPaths', label: 'Learning Paths'},
        {link: '#', label: 'Forum'},
        {link: '#', label: 'Contact'},
    ]
    return (
    // <AppShell
    //     fixed={false}
    //     padding="sm"
    //     header={<HeaderSimple links={links}></HeaderSimple>}     
    // >
    //     <Landing />
    // </AppShell>
    <div className=' min-h-screen'>
        <HeaderSimple links={links}></HeaderSimple>
        <Routes>
            <Route path='/' Component={Landing} />
            <Route path='courses' Component={Courses} />
            <Route path='courseDetails' Component={CourseDetails}/>
            <Route path='learningPaths' Component={LearningPaths}/>
        </Routes>
    </div>
    
    )
    }

export default App