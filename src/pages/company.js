import React, { useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

import CompanyItem from '../components/company-item';
import { tags } from '../constants/company-tags';
import images from '../constants/images';
import { COMPANIES_DATA } from '../translations/translation-keys';

import './company.scss';

const detectSimilarTags = (tag) => Object.entries(tags).flatMap(([company, data]) => {
  const final = [];
  // eslint-disable-next-line unicorn/no-array-for-each
  data.forEach((dataItem) => {
    if (dataItem.text !== tag.text) return null;
    return final.push(company);
  });
  return final;
});

const Company = ({ companyTranslations }) => {
  const { t } = useTranslation();
  const { aivix, n_ix } = t(...companyTranslations);

  const [activeBullets, setActiveBullets] = useState('');

  const unHighlightProjects = () => setActiveBullets('');

  const highlightProjects = (tag) => {
    const result = detectSimilarTags(tag);
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
            companyTitle={aivix.title}
            companyTags={tags.aivix}
            companySummary={aivix.summary}
            companyResponsibilities={aivix.responsibilities}
            companyLink={aivix.companyLink}
            highlightProjects={highlightProjects}
            unHighlightProjects={unHighlightProjects}
          />
        </>
        <>
          <CompanyItem
            companyImage={images.COMPANY_N_IX_EN}
            companyTitle={n_ix.title}
            companyTags={tags.n_ix}
            companySummary={n_ix.summary}
            companyResponsibilities={n_ix.responsibilities}
            companyLink={n_ix.companyLink}
            highlightProjects={highlightProjects}
            unHighlightProjects={unHighlightProjects}
          />
        </>
      </AwesomeSlider>
    </section>
  );
};

function mapStateToProperties() {
  return {
    companyTranslations: [COMPANIES_DATA.COMPANY, { returnObjects: true }],
  };
}

export default connect(mapStateToProperties)(Company);
