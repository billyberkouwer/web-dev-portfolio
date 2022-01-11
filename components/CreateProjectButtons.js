import styles from '../styles/project-buttons.module.css';

const CreateProjectButtons = (props) => {
    const buttonData = props.buttondata;
    const buttons = [];

    for (let i = 0; i < buttonData.length; i++) {
        buttons.push(<button className={styles.projectButtons} key={buttonData[i][1]}><a href={buttonData[i][1]} rel="noopener noreferrer" target="_blank">{buttonData[i][0]}</a></button>)
    };

    return (
        <>
            {buttons}
        </>
    )
};

export default CreateProjectButtons;