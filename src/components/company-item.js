import React from 'react';
import ScreenImageWrapper from './screen-image-wrapper';

const CompanyItem = ({
  companyImage,
  companyTitle,
  companyTags,
  companySummary,
  companyResponsibilities,
  companyLink,
  highlightProjects,
  unHighlightProjects,
}) => (
  <div className="company-container">
    <ScreenImageWrapper
      image={companyImage}
      imageClassName="company-interactive"
    />
    <div className="company-details">
      <h2 className="company-title">
        {companyTitle}
      </h2>
      <div className="company-tags">
        {companyTags.map((tag) => (
          // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
          <button
            type="button"
            key={tag.color}
            onMouseEnter={() => highlightProjects(tag)}
            onMouseLeave={() => unHighlightProjects(tag)}
            style={{ backgroundColor: tag.color }}
          >
            {tag?.icon ? tag.icon() : null}
            <span>{tag.text}</span>
          </button>
        ))}
      </div>
      <span className="company-summary">
        {companySummary}
      </span>
      <ul className="company-responsibilities">
        {/* eslint-disable-next-line react/no-array-index-key */}
        {companyResponsibilities.map((responsibility, i) => <li key={i}>{responsibility}</li>)}
      </ul>
      <div>
        <a href={companyLink} className="company-link" target="_blank" rel="noreferrer">
          Link
        </a>
      </div>
    </div>
  </div>
);

export default CompanyItem;
