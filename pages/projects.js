import Navbar from '../components/Navbar';
import reusable from '../styles/reusable.module.css';
import styles from '../styles/projects.module.css';
import projectsData from './api/projectsData.json'

const navCol = '#272727';
const mappedProjects = [];

const generateProjects = () => {
    let index = 0;
    for (var i in projectsData) {
        if (index % 2 === 0) {
            index++;
            mappedProjects.push(
                <div key={'div1 ' + i} className={`${reusable.section} ${reusable.spacedSection} ${reusable.lightBg}`}>
                    <div key={'div2 ' + i} className={reusable.contentSection}>
                        <h1 key={'project name ' + i}>{projectsData[i].title}</h1>
                        <div key={'div3 ' + i} className={styles.contentContainer}>
                            <div key={'div4 ' + i} className={styles.firstCol}>
                                <p key={'project paragraph ' + i}>{projectsData[i].text}</p>
                                <div key={'div7 ' + i} className={styles.buttonContainer} style={{right: '10%'}}>
                                    <button><a key={'project link ' + i} href={projectsData[i].liveURL}>Live</a></button>
                                    <button><a key={'project repo ' + i} href={projectsData[i].repoURL}>Site Repo</a></button>
                                </div>
                            </div>
                            <div key={'div6 ' + i} className={styles.secondCol}>
                                <div key={'div5 ' + i} className={styles.imageContainer}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}  else {
                index++;
                mappedProjects.push(
                    <div key={'div1 ' + i} className={`${reusable.section} ${reusable.spacedSection} ${reusable.lightBg}`}>
                        <div key={'div2 ' + i} className={reusable.contentSection}>
                            <h1 key={'project name ' + i}>{projectsData[i].title}</h1>
                            <div key={'div3 ' + i} className={styles.contentContainer}>
                                <div key={'div4 ' + i} className={styles.firstCol}>
                                    <div key={'div5 ' + i} className={styles.imageContainer}>
                                    </div>
                                </div>
                                <div key={'div6 ' + i} className={styles.secondCol}>
                                    <p key={'project paragraph ' + i}>{projectsData[i].text}</p>
                                    <div key={'div7 ' + i} className={styles.buttonContainer} style={{right: '10%'}}>
                                        <button><a key={'project link ' + i} href={projectsData[i].liveURL}>Live</a></button>
                                        <button><a key={'project repo ' + i} href={projectsData[i].repoURL}>Site Repo</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }
    }

generateProjects()

export default function Projects() {
    return (
        <div className={reusable.globalContainer}>
            <Navbar col={navCol}/>
            {mappedProjects}
        </div>
    )
}