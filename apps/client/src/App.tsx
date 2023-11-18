import { HeaderSimple } from 'ui';
import { Landing } from 'ui'
import { Courses } from 'ui'
import { Routes, Route } from 'react-router-dom';
import { CourseDetails } from 'ui';
import { LearningPaths } from 'ui';
import { LearningPathDetails } from 'ui';


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
            <Route path='front-end' Component={LearningPathDetails} />
        </Routes>
    </div>
    
    )
    }

export default App