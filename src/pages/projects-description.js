import React from 'react';
import './projects-description.scss';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import ProjectsDescriptionDetails from '../components/projects-description-details';
import { projectsSelectors } from '../ducks/projects';
import { stagesSelectors } from '../ducks/stages';
import { PROJECTS_DATA } from '../constants/translation-keys';

const ProjectsDescription = ({
  currentProject,
  projectLanguage,
  projectsDescriptionLabels,
}) => {
  const { containerPosition, imagePosition, selectedItemDetails } = currentProject;
  const { t } = useTranslation();

  const projectsDescriptionLabelsI18n = t(...projectsDescriptionLabels);

  return (
    <div
      className="projects-description"
    >
      <ProjectsDescriptionDetails
        itemPosition={{
          containerPosition,
          imagePosition,
        }}
        selectedItemDetails={selectedItemDetails}
        projectLanguage={projectLanguage}
        projectLabels={projectsDescriptionLabelsI18n}
      />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currentProject: projectsSelectors.selectCurrentProject(state),
    projectLanguage: stagesSelectors.selectLanguage(state),
    projectsDescriptionLabels: [PROJECTS_DATA.PROJECTS_DESCRIPTION_LABELS, { returnObjects: true }],
  };
}

export default connect(
  mapStateToProps,
)(ProjectsDescription);
