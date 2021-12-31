import Navbar from '../components/Navbar';
import reusable from '../styles/reusable.module.css'
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
                <div className={`${reusable.section} ${reusable.spacedSection} ${reusable.lightBg}`}>
                    <div className={reusable.contentSection}>
                        <h1>{projectsData[i].title}</h1>
                        <div className={reusable.contentContainer}>
                            <div className={styles.firstCol}>
                                <p>{projectsData[i].text}</p>
                                <div className={styles.buttonContainer}>
                                    <button><a href={projectsData[i].liveURL}>Live</a></button>
                                    <button><a href={projectsData[i].repoURL}>Site Repo</a></button>
                                </div>
                            </div>
                            <div className={styles.secondCol}>
                                <div className={styles.imageContainer}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}  else {
                index++;
                mappedProjects.push(
                    <div className={`${reusable.section} ${reusable.spacedSection} ${reusable.lightBg}`}>
                        <div className={reusable.contentSection}>
                            <h1>{projectsData[i].title}</h1>
                            <div className={reusable.contentContainer}>
                                <div className={styles.firstCol}>
                                    <div className={styles.imageContainer}>
                                    </div>
                                </div>
                                <div className={styles.secondCol}>
                                    <p>{projectsData[i].text}</p>
                                    <div className={styles.buttonContainer} style={{right: '10%'}}>
                                        <button><a href={projectsData[i].liveURL}>Live</a></button>
                                        <button><a href={projectsData[i].repoURL}>Site Repo</a></button>
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