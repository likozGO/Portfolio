import React, { memo } from 'react';

import ScreenImageWrapper from './screen-image-wrapper';

function CompanyItem({
  companyImage,
  companyTitle,
  companyTags,
  companySummary,
  companyResponsibilities,
  companyLink,
  highlightProjects,
  unHighlightProjects,
}) {
  return (
    <div className="company-container">
      <ScreenImageWrapper
        image={companyImage}
        imageClassName="company-interactive"
      />
      <div className="company-details">
        <h2 className="company-title">{companyTitle}</h2>
        <div className="company-tags">
          {companyTags.map((tag) => (
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
        <span className="company-summary">{companySummary}</span>
        <ul className="company-responsibilities">
          {companyResponsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
        <div>
          <a
            href={companyLink}
            className="company-link"
            target="_blank"
            rel="noreferrer"
          >
            Link
          </a>
        </div>
      </div>
    </div>
  );
}

export default memo(CompanyItem);
