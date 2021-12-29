<div className={`${reusable.section} ${reusable.spacedSection} ${reusable.lightBg}`}>
                <div className={styles.projectSection}>
                    <h1>{project.title}</h1>
                    <div className={styles.contentContainer}>
                        <div className={styles.firstCol}>
                            <p>{project.text}</p>
                            <div className={styles.buttonContainer}>
                                <button><a href={project.liveURL}>Live</a></button>
                                <button><a href={project.repoURL}>Site Repo</a></button>
                            </div>
                        </div>
                        <div className={styles.secondCol}>
                            <div className={styles.imageContainer}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>