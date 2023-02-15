import React, { useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import CompanyItem from '../components/company-item';
import { tags } from '../constants/company-tags';
import images from '../constants/images';
import { COMPANIES_DATA } from '../translations/translation-keys';

import './company.scss';

const Company = ({
  aivixTitle,
  aivixSummary,
  aivixResponsibilities,
  aivixLink,
  n_ixTitle,
  n_ixSummary,
  n_ixResponsibilities,
  n_ixLink,
}) => {
  const { t } = useTranslation();
  const [activeBullets, setActiveBullets] = useState('');
  const aivixTitleI18n = t(aivixTitle);
  const aivixSummaryI18n = t(aivixSummary);
  const aivixResponsibilitiesI18n = t(...aivixResponsibilities);
  const aivixLinkI18n = t(aivixLink);

  const n_ixTitleI18n = t(n_ixTitle);
  const n_ixSummaryI18n = t(n_ixSummary);
  const n_ixResponsibilitiesI18n = t(...n_ixResponsibilities);
  const n_ixLinkI18n = t(n_ixLink);

  const unHighlightProjects = () => (setActiveBullets(''));

  const highlightProjects = (tag) => {
    const result = Object.entries(tags).map(([company, data]) => {
      const final = [];
      data.forEach((dataItem) => {
        if (dataItem.text === tag.text) {
          return final.push(company);
        }
        return null;
      });
      return final;
    }).flat();

    setActiveBullets(result.join(' '));
  };

  return (
    <section className="company">
      <AwesomeSlider
        animation="cubeAnimation"
        className={activeBullets}
      >
        <>
          <CompanyItem
            companyImage={images.COMPANY_AIVIX_EN}
            companyTitle={aivixTitleI18n}
            companyTags={tags.aivix}
            companySummary={aivixSummaryI18n}
            companyResponsibilities={aivixResponsibilitiesI18n}
            companyLink={aivixLinkI18n}
            highlightProjects={highlightProjects}
            unHighlightProjects={unHighlightProjects}
          />
        </>
        <>
          <CompanyItem
            companyImage={images.COMPANY_N_IX_EN}
            companyTitle={n_ixTitleI18n}
            companyTags={tags.n_ix}
            companySummary={n_ixSummaryI18n}
            companyResponsibilities={n_ixResponsibilitiesI18n}
            companyLink={n_ixLinkI18n}
            highlightProjects={highlightProjects}
            unHighlightProjects={unHighlightProjects}
          />
        </>
      </AwesomeSlider>
    </section>
  );
};

function mapStateToProps() {
  return {
    aivixTitle: COMPANIES_DATA.AIVIX_TITLE,
    aivixSummary: COMPANIES_DATA.AIVIX_SUMMARY,
    aivixResponsibilities: [COMPANIES_DATA.AIVIX_RESPONSIBILITIES, { returnObjects: true }],
    aivixLink: COMPANIES_DATA.AIVIX_LINK,

    n_ixTitle: COMPANIES_DATA.N_IX_TITLE,
    n_ixSummary: COMPANIES_DATA.N_IX_SUMMARY,
    n_ixResponsibilities: [COMPANIES_DATA.N_IX_RESPONSIBILITIES, { returnObjects: true }],
    n_ixLink: COMPANIES_DATA.N_IX_LINK,
  };
}

export default connect(
  mapStateToProps,
)(Company);
