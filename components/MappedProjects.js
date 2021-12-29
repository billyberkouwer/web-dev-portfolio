import projectsData from '../pages/api/projects.json';

export const MappedProjects = () => {
    for (var i in projectsData) {
        return (
        <div className={`${reusable.section} ${reusable.spacedSection} ${reusable.lightBg}`}>
            <div className={styles.projectSection}>
                <h1>{projectsData[i].title}</h1>
                <div className={styles.contentContainer}>
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
        )
    }
}