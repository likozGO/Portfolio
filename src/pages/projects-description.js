import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import ProjectsDescriptionDetails from '../components/projects-description-details';
import Section from '../components/section';
import { projectsSelectors } from '../ducks/projects';
import { stagesSelectors } from '../ducks/stages';
import { PROJECTS_DATA } from '../translations/translation-keys';

import './projects-description.scss';

function ProjectsDescription({
  currentProject,
  projectLanguage,
  projectsDescriptionLabels,
}) {
  const { containerPosition, imagePosition, selectedItemDetails } = currentProject;
  const { t } = useTranslation();

  const projectsDescriptionLabelsI18n = t(...projectsDescriptionLabels);

  return (
    <Section classNames="projects-description">
      <ProjectsDescriptionDetails
        itemPosition={{
          containerPosition,
          imagePosition,
        }}
        selectedItemDetails={selectedItemDetails}
        projectLanguage={projectLanguage}
        projectLabels={projectsDescriptionLabelsI18n}
      />
    </Section>
  );
}

function mapStateToProperties(state) {
  return {
    currentProject: projectsSelectors.selectCurrentProject(state),
    projectLanguage: stagesSelectors.selectLanguage(state),
    projectsDescriptionLabels: [
      PROJECTS_DATA.PROJECTS_DESCRIPTION_LABELS,
      { returnObjects: true },
    ],
  };
}

export default connect(mapStateToProperties)(ProjectsDescription);
